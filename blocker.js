// import * as env from './.env.js'

// background.js
console.log("Persistent background script is running.");

chrome.runtime.onInstalled.addListener(function() {
	console.log("Extension installed.");
});

// Add your webRequest logic or other functionality here


let blocked = [
	/facebook.com/,
	// 'youtube.com',
	//'discord.com',
	/reddit.com/,
	/^x.com/,
]

chrome.webRequest.onBeforeRequest.addListener(
	function( details ){
  		for( const regex of blocked ){
  			// const regex = new RegExp( domain, 'i')
	    	if( details.url.match( regex ) ){
	    		console.log('------------- ', regex )
		    	return { 
		    		cancel: true 
		    	};
		    }  		
  		}
  	},
	{ urls: ["<all_urls>"] },
	["blocking"]
);

