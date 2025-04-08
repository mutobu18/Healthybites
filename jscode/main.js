
function displayText(id, text, interval) {
  const element = document.getElementById(id);
  let words = text.split(' ');
  let i = 0;
  element.innerHTML = ''; // Clear the existing content

  const intervalId = setInterval(() => {
    element.innerHTML += words[i] + ' '; // Add the next word
    i++;

    if (i >= words.length) {
      clearInterval(intervalId); // Stop when all words have been displayed
    }
  }, interval); // The interval (in milliseconds) between each word
}

// Calling the function for each text block
window.onload = () => {
  displayText('welcome-text', 'Welcome to HealthyBites!', 300); // Display title
  setTimeout(() => {
    displayText('description-text', 'Your smart kitchen buddy. Learn to cook, eat better, and plan your meals easily!', 300); // Display description after title
  }, 2000); // Wait 2 seconds before starting the description text
};
