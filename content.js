chrome.runtime.onMessage.addListener(
	function (request, sender, sendResponse) {
		if (request.message === "user_clicked") {
			downloadMusic();
		}
	}
);

function downloadMusic() {
	$( '._3DXeP' ).each(function() {
		console.log($(this).attr('src'))
	});
};