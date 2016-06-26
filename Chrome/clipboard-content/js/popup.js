// getClipboardText - return any text that is currently on the clipboard
function getClipboardText() {
    // create div element for pasting into
    var pasteDiv = document.createElement("div");

    // place div outside the visible area
    pasteDiv.style.position = "absolute";
    pasteDiv.style.left = "-10000px";
    pasteDiv.style.top = "-10000px";

    // set contentEditable mode
    pasteDiv.contentEditable = true;

    // find a good place to add the div to the document
    var insertionElement = document.activeElement; // start with the currently active element
    var nodeName = insertionElement.nodeName.toLowerCase(); // get the element type
    while (nodeName !== "body" && nodeName !== "div" && nodeName !== "li" && nodeName !== "th" && nodeName !== "td") { // if have not reached an element that it is valid to insert a div into (stopping eventually with 'body' if no others are found first)
        insertionElement = insertionElement.parentNode; // go up the hierarchy
        nodeName = insertionElement.nodeName.toLowerCase(); // get the element type
    }

    // add element to document
    insertionElement.appendChild(pasteDiv);

    // paste the current clipboard text into the element
    pasteDiv.focus();
    document.execCommand('paste');

    // get the pasted text from the div
    var clipboardText = pasteDiv.innerText;

    // remove the temporary element
    insertionElement.removeChild(pasteDiv);

    // return the text
    return clipboardText;
}

function Load()
{
  chrome.storage.sync.get({
    username: "",
    password: "",
    site: ""
  }, function(item){
      gUsername = item.username;
      gPassword = item.password;
      gSite = item.site;
    }
  );
}

var gUsername;
var gPassword;
var gSite;
var URL = "/savenote.php";

$(document).ready(function(){
  Load();
  $("#btnSend").click(function(){
    $.ajax({
      "url": gSite + URL,
			"type" : "POST",
			"data" : {
				username: gUsername,
				password: gPassword,
				text    : $("#comment").val()
			},
			"success" : function(data){
        var result = JSON.parse(data);
        $("#txtMessage").html(result.ErrorMessage);
        //"#txtMessage").html(data);
        $("#divInfo").toggleClass("hidden");
      }
    });
  });
  $("#comment").val(getClipboardText());
});
