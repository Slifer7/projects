function browserAction_Click(tab){

}

function webNavigation_Complete(tab){
  if (tab.url.indexOf("google") > -1){
    chrome.tabs.executeScript(tab.id, {
        file: "js/jquery.js"
    });
    chrome.tabs.executeScript(tab.id, {
        file: "topicblock.js"
    });
  }
}

//Tự động chạy ngầm khi load xong
chrome.webNavigation.onCompleted.addListener(webNavigation_Complete);
