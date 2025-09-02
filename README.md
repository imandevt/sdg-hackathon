# sdg-hackathon
AI PROMPT
You are an expert full-stack developer. Help me build a Balanced Diet Tracker web app step by step. Use html, CSS and javascript (frontend), Node.js + Express (backend), and Firebase (Auth + Firestore for storage).

Follow these steps one after another
 Step 1: Project Setup

 Initialize React frontend with TailwindCSS.
 Initialize Node.js + Express backend with a simple test API route (`/api/health`).
 Set up Firebase configuration for Authentication + Firestore.

 Step 2: Authentication

 Implement signup, login, and logout with Firebase Auth (email + password).
 Create protected routes so only logged-in users can access the dashboard.

 Step 3: Meal Logging
 Create a form where users enter: food name, portion size, meal type (breakfast, lunch, dinner, snack).
 Save meal entries to Firestore with user ID and timestamp.


 Step 4: Display Entries
 Fetch saved meals from Firestore.
 Display them in a table on the dashboard (with columns: Food, Portion, Meal Type, Date).

 Step 5: Suggestions & Tips
 Implement a simple rule-based meal suggestion system based on previous entries:

   If last meals are high in carbs → suggest protein-rich foods. If vegetables are missing → suggest a vegetable option.
 Add a Health Tip of the Day section that displays one tip randomly from a predefined list.

 Step 6: Progress Tracking

 Use Recharts to show:

   A daily calories chart (bar chart).
   A weekly macronutrient breakdown (line/pie chart).
 Fetch meal data from Firestore and compute totals.

 Step 7: UI/UX Polishing

 Add a sidebar with navigation: Dashboard | Log Meal | Profile | Progress | Tips.
 Make the app mobile-responsive with TailwindCSS.
 Add some dummy data for demo purposes if API keys are missing.

 Instructions:
 Generate production-ready, copy-paste runnable code.
 Provide project structure and file contents clearly.
 Use dummy data if external API integration (like Nutritionix/Edamam) is not possible without keys.
 Keep everything minimal but hackathon-presentable.



