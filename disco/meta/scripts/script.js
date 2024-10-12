//adds continue block
$(document).click(function(e) {
	if($("span.continueblock").length) {
		$("span.continueblock").first().removeClass('continueblock');
	}
	e.stopPropagation();
	return false;
});

function scrolldown() {
  const scrollingElement = (document.scrollingElement || document.body);
  scrollingElement.scrollTop = scrollingElement.scrollHeight;
}

$(document).on("keyup", function (e) {
  //pressing space key clicks continue button

  if ((e.keyCode == 32) && ($("#ContinueBtn"))) {
    $("#ContinueBtn").click();
    scrolldown();
  }

  //pressing esc key
  if ((e.keyCode == 27)) {
    const dia = document.getElementById("ui-dialog");
    var diastyle = window.getComputedStyle(dia).display;
    console.log(diastyle);

    // closes any open dialogs
    if (document.getElementById("ui-dialog-close")) {
      const diaclose = document.getElementById("ui-dialog-close");
      diaclose.click();
    }
  }
});

// gets rid of the history/undo ability
// Config.history.controls = false;