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
<<<<<<< HEAD:disco/meta/scripts/script.js
});

<<<<<<< HEAD:disco/script.js
<<<<<<< HEAD:disco/meta/scripts/script.js
=======
  if ((e.keyCode == 27) && (document.getElementById("menu-story"))) {
    var menu = document.getElementById("menu-story");
    menu.children[0].getElementsByClassName("link-internal")[0].click();
  }

  if ((e.keyCode == 27) && (document.getElementById("#ui-overlay"))) {
    var dia = document.getElementById("#ui-overlay");
    console.log(dia)
  }
});
>>>>>>> parent of 36c563b... got stat changes ui working:disco/scripts/js/script.js
=======
});
>>>>>>> parent of 2504024... added overview menu button:disco/scripts/script.js
=======
  if ((e.keyCode == 27) && (document.getElementById("menu-story"))) {
    var menu = document.getElementById("menu-story");
    menu.children[0].getElementsByClassName("link-internal")[0].click();
  }
  
  if ((e.keyCode == 27) && (document.getElementById("ui-dialog"))) {
    var dia = document.getElementById('ui-dialog');
    console.log(dia)
    //dia.close();
  }
});
>>>>>>> parent of d47d866... fixed esc key open and close, and added ANOTHER argument to passiveskill:disco/scripts/js/script.js
