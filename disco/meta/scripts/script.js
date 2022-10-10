//adds continue block
$(document).click(function(e) {
	if($("span.continueblock").length) {
		$("span.continueblock").first().removeClass('continueblock');
	}
	e.stopPropagation();
	return false;
});

$(document).on("keyup", function (e) {
  //pressing space key clicks continue button

  if ((e.keyCode == 32) && ($("#ContinueBtn"))) {
    $("#ContinueBtn").click();
  }

  //pressing number keys selects options
  if ((e.keyCode >= 49 && e.keyCode <= 57) && (document.getElementById("OptionList"))) {
    const list = document.getElementById("OptionList");
    const childIndex = e.keyCode - 49; // 0 for '1', 1 for '2', etc
    if (list.children[childIndex]) {
      list.children[childIndex].getElementsByClassName("link-internal")[0].click();
    }
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

    //opens the overview if nothing is selected
    if (diastyle == 'none') {
      const menu = document.getElementById("menu-story");
      console.log("test")
      menu.children[0].getElementsByClassName("link-internal")[0].click();
    }
  }
});