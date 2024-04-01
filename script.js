// script.js

// Get DOM elements
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
const stepsElement = document.getElementById('steps');
const caloriesElement = document.getElementById('calories');
const distanceElement = document.getElementById('distance');

// Initialize activity variables
let steps = 0;
let calories = 0;
let distance = 0;

// Function to update activity data
function updateActivity() {
    stepsElement.textContent = steps;
    caloriesElement.textContent = calories;
    distanceElement.textContent = `${distance} km`;
}

// Function to start tracking activity
function startTracking() {
    // Start tracking activity (e.g., using sensors or timers)
    // For demo purposes, just increment the activity data periodically
    activityInterval = setInterval(() => {
        steps += Math.floor(Math.random() * 100); // Simulate random steps
        calories += Math.floor(Math.random() * 50); // Simulate random calories burned
        distance += Math.random().toFixed(2); // Simulate random distance in kilometers
        updateActivity(); // Update the UI with new activity data
    }, 1000);
}

// Function to stop tracking activity
function stopTracking() {
    clearInterval(activityInterval); // Stop the activity tracking interval
}

// Function to reset activity data
function resetActivity() {
    steps = 0;
    calories = 0;
    distance = 0;
    updateActivity(); // Update the UI to reset activity data
}

// Event listeners for buttons
startButton.addEventListener('click', startTracking);
stopButton.addEventListener('click', stopTracking);
resetButton.addEventListener('click', resetActivity);

// Initialize activity data in UI
updateActivity();
