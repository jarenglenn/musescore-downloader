chrome.runtime.onMessage.addListener(
	function (request, sender, sendResponse) {
		if (request.message === "user_clicked") {
			sendUrls('._3DXeP');
		}
	}
);

function sendUrls(className) {
	for (sheet of document.querySelectorAll(className)) {
		chrome.runtime.sendMessage({
				"message": "download_sheet",
				"options": {"url": sheet.getAttribute("src")}
		})
	}
};
