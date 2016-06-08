function browserAction_Click(tab){
  if (tab.url.indexOf("checkout.shopify.com") > -1){
    chrome.tabs.executeScript(tab.id, {
        file: "jquery.js"
    });
    chrome.tabs.executeScript(tab.id, {
        file: "main.js"
    });
  }
  else{
    alert("This function is not available for this type of url!");
  }
}

function webNavigation_Complete(details){
  console.log(details.tabId + " " + details.url);
}

chrome.browserAction.onClicked.addListener(browserAction_Click);
chrome.webNavigation.onCompleted.addListener(webNavigation_Complete);
