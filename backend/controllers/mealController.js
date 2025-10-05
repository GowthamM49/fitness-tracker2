const Meal = require('../models/Meal');

// Get all meals
const getAllMeals = async (req, res) => {
  try {
    const meals = await Meal.find().populate('userId', 'name email');
    res.json(meals);
  } catch (error) {
    console.error('Get meals error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get meal by ID
const getMealById = async (req, res) => {
  try {
    const meal = await Meal.findById(req.params.id).populate('userId', 'name email');
    if (!meal) {
      return res.status(404).json({ message: 'Meal not found' });
    }
    res.json(meal);
  } catch (error) {
    console.error('Get meal error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Create meal
const createMeal = async (req, res) => {
  try {
    const { name, foodItems, totalCalories, totalProtein, totalCarbs, totalFat, mealType, notes } = req.body;
    
    const meal = new Meal({
      userId: req.user.userId,
      name,
      foodItems,
      totalCalories,
      totalProtein,
      totalCarbs,
      totalFat,
      mealType,
      notes
    });

    await meal.save();
    res.status(201).json(meal);
  } catch (error) {
    console.error('Create meal error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update meal
const updateMeal = async (req, res) => {
  try {
    const { name, foodItems, totalCalories, totalProtein, totalCarbs, totalFat, mealType, notes } = req.body;
    
    const meal = await Meal.findByIdAndUpdate(
      req.params.id,
      { name, foodItems, totalCalories, totalProtein, totalCarbs, totalFat, mealType, notes },
      { new: true }
    );

    if (!meal) {
      return res.status(404).json({ message: 'Meal not found' });
    }

    res.json(meal);
  } catch (error) {
    console.error('Update meal error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete meal
const deleteMeal = async (req, res) => {
  try {
    const meal = await Meal.findByIdAndDelete(req.params.id);
    if (!meal) {
      return res.status(404).json({ message: 'Meal not found' });
    }
    res.json({ message: 'Meal deleted successfully' });
  } catch (error) {
    console.error('Delete meal error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getAllMeals,
  getMealById,
  createMeal,
  updateMeal,
  deleteMeal
};
