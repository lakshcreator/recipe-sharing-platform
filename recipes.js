const express = require('express');
const Recipe = require('../models/Recipe');

const router = express.Router();

// Add a new recipe
router.post('/add', async (req, res) => {
  const { title, ingredients, instructions, category, tags, userId } = req.body;

  const newRecipe = new Recipe({ title, ingredients, instructions, category, tags, createdBy: userId });
  await newRecipe.save();

  res.status(201).json({ message: 'Recipe added successfully' });
});

// Get all recipes
router.get('/', async (req, res) => {
  const recipes = await Recipe.find().populate('createdBy', 'name');
  res.json(recipes);
});

module.exports = router;