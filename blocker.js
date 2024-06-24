// background.js
console.log("Persistent background script is running.");

chrome.runtime.onInstalled.addListener(function() {
  console.log("Extension installed.");
});

// Add your webRequest logic or other functionality here

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    if (details.url.includes("emu.oko.nyc")) {
      return { cancel: true };
    }
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
);