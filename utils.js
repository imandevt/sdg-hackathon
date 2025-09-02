// Nutrition data
window.nutritionData = {
  'Chicken Breast': { calories: 165, carbs: 0, category: 'Protein' },
  'Rice': { calories: 130, carbs: 28, category: 'Carb' },
  'Broccoli': { calories: 35, carbs: 7, category: 'Vegetable' }
};

// Health tips
window.healthTips = [
  'Drink 8 glasses of water daily.',
  'Eat a variety of colorful vegetables.',
  'Exercise for 30 minutes most days.'
];

// Get suggestion based on recent meals
window.getSuggestion = function(meals) {
  const recentMeals = meals.slice(-3);
  const hasCarbs = recentMeals.some(meal => window.nutritionData[meal.food]?.category === 'Carb');
  const hasVeggies = recentMeals.some(meal => window.nutritionData[meal.food]?.category === 'Vegetable');
  if (hasCarbs && !hasVeggies) return 'Add a vegetable like Broccoli.';
  if (!hasVeggies) return 'Try including a vegetable like Broccoli.';
  return 'Your diet looks balanced!';
};