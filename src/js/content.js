import $ from 'jquery';
import jsPDF from 'jspdf';

chrome.runtime.onMessage.addListener(
	function (request, sender, sendResponse) {
		if (request.message === "user_clicked") {
			sendUrls('._3DXeP');
		}
	}
);

function sendUrls(className) {
	$( className ).each(function() {
		chrome.runtime.sendMessage({
			"message": "download_sheet",
			"options": {"url": $(this).attr('src')}
		})
	});
};
