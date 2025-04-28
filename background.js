chrome.runtime.onInstalled.addListener(() => {
    const blockedDomains = [
      "*://*.facebook.com/*",
      "*://*.twitter.com/*",
      "*://*.reddit.com/*",
      "*://*.x.com/*",
      "*://x.com/*",
    ];

    console.log("URL Filter:", blockedDomains.join("|")); // Confirm the URL filter

    chrome.declarativeNetRequest.updateDynamicRules({
        removeRuleIds: [1],
        addRules: [{
            id: 1,
            priority: 1,
            action: { type: "block" },
            condition: {
                urlFilter: blockedDomains.join("|"),
                resourceTypes: ["main_frame", "sub_frame", "stylesheet", "script", "image", "font", "object", "xmlhttprequest", "ping", "csp_report", "media", "websocket", "other"]
            }
        }]
    });
});