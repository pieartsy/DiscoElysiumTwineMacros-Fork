$(document).click(function(e) {
	if($("span.continueblock").length) {
		$("span.continueblock").first().removeClass('continueblock');
	}
	e.stopPropagation();
	return false;
});

$(document).on("keyup", function (e) {
  if ((e.keyCode == 32) && ($("#ContinueBtn"))) {
    $("#ContinueBtn").click();
  }

  if ((e.keyCode >= 49 && e.keyCode <= 57) && (document.getElementById("OptionList"))) {
    var list = document.getElementById("OptionList");
    var childIndex = e.keyCode - 49; // 0 for '1', 1 for '2', etc
    if (list.children[childIndex]) {
      list.children[childIndex].getElementsByClassName("link-internal")[0].click();
    }
  }

  if ((e.keyCode == 27) && (document.getElementById("menu-story"))) {
    var menu = document.getElementById("menu-story");
    menu.children[0].getElementsByClassName("link-internal")[0].click();
  }

  if ((e.keyCode == 27) && (document.getElementById("#ui-overlay"))) {
    var dia = document.getElementById("#ui-overlay");
    console.log(dia)
  }
});