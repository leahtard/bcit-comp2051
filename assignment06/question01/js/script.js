function ajaxRequest(url, cbFunc){
    if (document.getElementById) {

    	var ajaxObj = (window.ActiveXObject) ?
    		new ActiveXObject("Microsift.XMLHTTP") :
    		new XMLHttpRequest();
    }

    if (ajaxObj) {

    	ajaxObj.onreadystatechange = function() {
    		if (ajaxObj.readyState == 4 && ajaxObj.status == 200) {
    			chFunc(ajaxObj.responceText);

    		}
    	}

    }

    ajaxObj.open("GET", url, true);
    ajaxObj.send(null);

}



	ajaxFile = {

		readFile:function() {
			ajax.firstName = (document.getElementById("form-name").value) || "Visitor"
			ajaxRequest("text.txt", ajaxFile.chReadFile);
		},
		cbReadFile:function (theData) {
			var display = document.getElementById("display");
			display.innerHTML = "Hi " + ajaxFile.firstName + theData;
		}

	}

