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
		sheetPDF.addImage($(this)[0], 'PNG', 0, 0, 8.5, 11); // Format image for letter paper
		sheetPDF.addPage("letter");
	});
	
	sheetPDF.deletePage(sheetPDF.internal.getNumberOfPages()); // Remove the last empty page

	var title = $('.rdHmC').text();
	var author = $('._3qfU_._3ysVT._1Us9e._3HJAX._3hjK9._15kzJ').children( $('._3R0py')).text();

	if (author !== "" && title !== "") {
		sheetPDF.save(title + " - " + author + ".pdf");
	} else if (title !== "") {
		sheetPDF.save(title + ".pdf");
	} else {
		sheetPDF.save("sheetmusic.pdf");
	}

	sheetPDF.output('dataurlnewwindow');
};
