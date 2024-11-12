let tweetsData = [];

// Fetch the tweets dataset
fetch('tweets.json')
    .then(response => response.json())
    .then(data => {
        tweetsData = data;
        // No random tweet display here, so the input starts empty
    })
    .catch(error => console.error('Error loading tweets:', error));

// Function to detect sarcasm based on the dataset
function detectSarcasm() {
    const inputText = document.getElementById("inputText").value.trim();
    const result = document.getElementById("result");

    if (!inputText) {
        result.innerText = "Please enter some text.";
        return;
    }

    // Find the tweet in the dataset
    const tweet = tweetsData.find(t => t.text === inputText);
    
    if (tweet) {
        result.innerText = tweet.sarcastic ? "Sarcasm Detected!" : "No Sarcasm Detected.";
    } else {
        result.innerText = "Tweet not found in dataset.";
    }
}
