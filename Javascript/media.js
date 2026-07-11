// Auto-Clicker for YouTube Confirmations and Ads
const keepAwakeInterval = setInterval(() => {
    // Selectors for the "Continue watching" button and "Skip Ad" buttons
    const confirmButton = document.querySelector('#confirm-button');
    const skipAdButton = document.querySelector('.ytp-ad-skip-button, .ytp-ad-skip-button-modern');

    if (confirmButton && confirmButton.offsetParent !== null) {
        confirmButton.click();
        console.log("Auto-clicked 'Continue watching'.");
    }
    
    if (skipAdButton && skipAdButton.offsetParent !== null) {
        skipAdButton.click();
        console.log("Auto-skipped advertisement.");
    }
}, 5000); // Checks every 5 seconds

console.log("YouTube Keep-Awake script is now running...");
