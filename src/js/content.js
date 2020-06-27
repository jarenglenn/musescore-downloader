import $ from 'jquery';
import jsPDF from 'jspdf';

chrome.runtime.onMessage.addListener(
	function (request, sender, sendResponse) {
		if (request.message === "user_clicked") {
			createPDF('._3DXeP');
		}
	}
);

function createPDF(sheetClassName) {
	var sheetPDF = new jsPDF({
		unit: "in",
		format: "letter"
	});

	$( sheetClassName ).each(function() {
		sheetPDF.addImage($(this)[0], 'PNG', 0, 0, 8.5, 11);
		sheetPDF.addPage("letter");
	});
	
	sheetPDF.deletePage(sheetPDF.internal.getNumberOfPages());
	sheetPDF.save('sheets.pdf');
};
