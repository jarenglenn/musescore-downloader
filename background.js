function checkForValidUrl(tabId, changeInfo, tab) {
	if (tab.url.indexOf("https://musescore.com") == 0) {
		chrome.pageAction.show(tabId);
	}
};

chrome.tabs.onUpdated.addListener(checkForValidUrl);

// Create Context Menu
chrome.contextMenus.create({
	"title": "Download Music Sheets",
	"onclick": contextMenuClicked,
	"documentUrlPatterns": ["https://musescore.com/*/scores/*"]
});


// User clicks Page Action
chrome.pageAction.onClicked.addListener(userClicked);

// User clicks Context Menu
function contextMenuClicked() { userClicked() };

function userClicked() {
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		var activeTab = tabs[0];
		chrome.tabs.sendMessage(activeTab.id, { "message": "user_clicked" });
	})
}