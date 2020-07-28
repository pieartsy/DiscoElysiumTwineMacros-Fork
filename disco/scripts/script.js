$(document).click(function(e) {
	if($("span.continueblock").length) {
		$("span.continueblock").first().removeClass('continueblock');
	}
	e.stopPropagation();
	return false;
});

postdisplay['paragraph'] = function (taskName) {
	//$('.paragraph').hide().fadeIn(10000);
};

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

  if (e.keyCode == 27) {
    var dia = document.getElementById('ui-dialog');
    if (dia && (dia.className == "open")) {
      document.getElementById('ui-dialog-close').click();
    } else {
      var menu = document.getElementById("menu-story");
      if (menu) {
        menu.children[0].getElementsByClassName("link-internal")[0].click();
      }
    }
  }
});

UIBar.destroy()