import express from 'express';
import cors from 'cors';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database setup
let db;
async function initializeDB() {
  db = await open({
    filename: path.join(__dirname, 'portfolio.sqlite'),
    driver: sqlite3.Database
  });

  await db.exec(`
    CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      message TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS skills (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      category TEXT NOT NULL,
      name TEXT NOT NULL,
      level INTEGER
    );

    CREATE TABLE IF NOT EXISTS achievements (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      date TEXT
    );
  `);

  console.log('Connected to SQLite database.');
  
  // Seed sample data if empty
  const skillCount = await db.get('SELECT COUNT(*) as count FROM skills');
  if (skillCount.count === 0) {
    await db.run("INSERT INTO skills (category, name, level) VALUES ('Frontend', 'React.js', 90)");
    await db.run("INSERT INTO skills (category, name, level) VALUES ('Frontend', 'Tailwind CSS', 85)");
    await db.run("INSERT INTO skills (category, name, level) VALUES ('Backend', 'Node.js', 80)");
    await db.run("INSERT INTO skills (category, name, level) VALUES ('Backend', 'Express.js', 85)");
    await db.run("INSERT INTO skills (category, name, level) VALUES ('Database', 'SQLite', 75)");
    await db.run("INSERT INTO skills (category, name, level) VALUES ('Database', 'MongoDB', 80)");
    
    await db.run("INSERT INTO achievements (title, description, date) VALUES ('Full Stack Bootcamp', 'Completed an intensive full-stack web development bootcamp.', '2025')");
    await db.run("INSERT INTO achievements (title, description, date) VALUES ('Hackathon Winner', '1st place in university hackathon for building a smart contact system.', '2024')");
  }
}

initializeDB();

// API Routes
app.get('/api/skills', async (req, res) => {
  try {
    const skills = await db.all('SELECT * FROM skills ORDER BY category, name');
    res.json(skills);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/achievements', async (req, res) => {
  try {
    const achievements = await db.all('SELECT * FROM achievements ORDER BY id DESC');
    res.json(achievements);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const result = await db.run(
      'INSERT INTO messages (name, email, message) VALUES (?, ?, ?)',
      [name, email, message]
    );
    res.status(201).json({ id: result.lastID, message: 'Message sent successfully!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/messages', async (req, res) => {
  try {
    const messages = await db.all('SELECT * FROM messages ORDER BY created_at DESC');
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
