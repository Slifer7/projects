var CHECKOUT_URL = "checkout.shopify.com";

function browserAction_Click(tab){
  if (tab.url.indexOf(CHECKOUT_URL) > -1){
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

function webNavigation_Complete(tab){
  console.log(tab.tabId + " " + tab.url);

  if (tab.url.indexOf(CHECKOUT_URL) > -1){
    chrome.tabs.executeScript(tab.id, {
        file: "jquery.js"
    });
    chrome.tabs.executeScript(tab.id, {
        file: "main.js"
    });
  }
}

chrome.browserAction.onClicked.addListener(browserAction_Click);
chrome.webNavigation.onCompleted.addListener(webNavigation_Complete);
