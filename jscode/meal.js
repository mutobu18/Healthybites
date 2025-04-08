
const dietaryPlanSelect = document.getElementById('dietary-plan');
const mealPlanContent = document.getElementById('meal-plan-content');


function updateMealPlan(dietaryPlan) {
  let mealPlanHTML = '';

  // Define meal plans for different diets
  const mealPlans = {
    diabetic: {
      Monday: ['Breakfast: Oatmeal', 'Lunch: Grilled Chicken Salad', 'Dinner: Baked Salmon'],
      Tuesday: ['Breakfast: Avocado Toast', 'Lunch: Turkey Wrap', 'Dinner: Stir-Fried Tofu'],
      // Add more days as needed
    },
    vegan: {
      Monday: ['Breakfast: Smoothie Bowl', 'Lunch: Quinoa Salad', 'Dinner: Vegan Tacos'],
      Tuesday: ['Breakfast: Chia Pudding', 'Lunch: Veggie Wrap', 'Dinner: Stir-Fried Tempeh'],
      // Add more days as needed
    },
    keto: {
      Monday: ['Breakfast: Scrambled Eggs with Spinach', 'Lunch: Chicken Salad', 'Dinner: Grilled Steak with Avocado'],
      Tuesday: ['Breakfast: Keto Pancakes', 'Lunch: Salmon Salad', 'Dinner: Beef Stir-fry'],
      // Add more days as needed
    }
  };

  // Generate the meal plan HTML for the selected dietary plan
  const selectedMeals = mealPlans[dietaryPlan];
  for (const day in selectedMeals) {
    mealPlanHTML += `<div class="meal-day">
                       <h3>${day}</h3>
                       <ul>`;
    selectedMeals[day].forEach(meal => {
      mealPlanHTML += `<li>${meal}</li>`;
    });
    mealPlanHTML += `</ul>
                    </div>`;
  }

  // Update the content of the meal plan section
  mealPlanContent.innerHTML = mealPlanHTML;
}

// Event listener for when the user changes the dietary plan
dietaryPlanSelect.addEventListener('change', (event) => {
  updateMealPlan(event.target.value);
});

// Initialize meal plan with the default selected option (Diabetic)
updateMealPlan(dietaryPlanSelect.value);