const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize, Model, DataTypes } = require('sequelize');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors({
    origin: 'http://localhost:3000', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, 
}));

// Create Sequelize instance
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
});

// Define User model
class Child extends Model {}
Child.init({
  firstname: DataTypes.STRING,
  lastname: DataTypes.STRING,
  gender: DataTypes.STRING,
  immunizations: DataTypes.STRING,
  age: DataTypes.INTEGER
}, { sequelize, modelName: 'child' });

// Sync models with database
sequelize.sync();

// Middleware for parsing request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CRUD routes for User model
app.get('/children', async (req, res) => {
  const children = await Child.findAll();
  res.json(children);
});

app.get('/child/:id', async (req, res) => {
  const child = await Child.findByPk(req.params.id);
  res.json(child);
});

app.post('/children', async (req, res) => {
  const child = await Child.create(req.body);
  res.json(child);
});

app.put('/child/:id', async (req, res) => {
  const child = await Child.findByPk(req.params.id);
  if (child) {
    await Child.update(req.body);
    res.json(child);
  } else {
    res.status(404).json({ message: 'Child not found' });
  }
});

app.delete('/child/:id', async (req, res) => {
  const child = await Child.findByPk(req.params.id);
  if (child) {
    await Child.destroy();
    res.json({ message: 'Child deleted' });
  } else {
    res.status(404).json({ message: 'Child not found' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
