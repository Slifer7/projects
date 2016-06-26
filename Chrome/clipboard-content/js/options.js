function Load()
{
  chrome.storage.sync.get({
    username: "",
    password: "",
    site: ""
  }, function(item){
      $("#txtUsername").val(item.username);
      $("#txtPassword").val(item.password);
      $("#txtSite").val(item.site);
    }
  );
}

function Save()
{
    var username = $("#txtUsername").val();
    var password = $("#txtPassword").val();
    var site = $("#txtSite").val();

    chrome.storage.sync.set({
       username: username,
       password: password,
       site: site
     }, function() {
       // Update status to let user know options were saved.
       $("#divInfo").toggleClass("hidden");
     });

    return false;
}

$(document).ready(function(){
  $("#btnSave").click(Save);

  Load();
});
