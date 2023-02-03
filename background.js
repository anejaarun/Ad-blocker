const defaultFilters = [
	"*://*.doubleclick.net/*",
	"*://partner.googleadservices.com/*",
	"*://*.googlesyndication.com/*",
	"*://*.google-analytics.com/*",
	"*://creative.ak.fbcdn.net/*",
	"*://*.adbrite.com/*",
	"*://*.exponential.com/*",
	"*://*.quantserve.com/*",
	"*://*.scorecardresearch.com/*",
	"*://*.tracepresence.in/*",
	"*://*.mphasis.com/*",
	"*://*.barracuda.digital/*",
	"*://*.factor1.comfactor1.com/*",
	"*://*.marketinghy.com/*",
	"*://*.simply-adds.com/*"    
]

chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return { cancel: true }},
    { urls: defaultFilters },
    ["blocking"]
)
