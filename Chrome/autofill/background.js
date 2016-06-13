var CHECKOUT_URL = "checkout.shopify.com";

function browserAction_Click(tab){
  // if (tab.url.indexOf(CHECKOUT_URL) > -1){
  //   if (tab.url.indexOf("previous_step=contact_information") > -1) // Step 2
  //   {
  //     // Bấm nút kế tiếp
  //     chrome.tabs.executeScript(tab.id, {
  //         file: "js/jquery.js"
  //     });
  //     chrome.tabs.executeScript(tab.id, {
  //         file: "shippingmethod.js"
  //     });
  //   }
  //   else (tab.url.indexOf("previous_step=shipping_method") > -1) { // Step 3 - Điền thông tin tín dụng
  //     chrome.tabs.executeScript(tab.id, {
  //         file: "js/jquery.js"
  //     });
  //     chrome.tabs.executeScript(tab.id, {
  //         file: "payment.js"
  //     });
  //   }
  //   else { // Step 1 - Fill customer information
  //     console.log("Vao tab 1");
  //     chrome.tabs.executeScript(tab.id, {
  //         file: "js/jquery.js"
  //     });
  //     chrome.tabs.executeScript(tab.id, {
  //         file: "fillCustomerInfo.js"
  //     });
  //   }
  // }
  // else{
  //   alert("This function is not available for this type of url!");
  // }
}

function webNavigation_Complete(tab){
  if (tab.url.indexOf(CHECKOUT_URL) > -1){
    if (tab.url.indexOf("stock_problems") > -1) {
      chrome.tabs.executeScript(tab.id, {
          file: "js/jquery.js"
      });
      chrome.tabs.executeScript(tab.id, {
          file: "soldout.js"
      });
    }
    else if (tab.url.indexOf("previous_step=contact_information") > -1) // Step 2
    {
      // Bấm nút kế tiếp
      chrome.tabs.executeScript(tab.id, {
          file: "js/jquery.js"
      });
      chrome.tabs.executeScript(tab.id, {
          file: "shippingmethod.js"
      });
    }
    else if (tab.url.indexOf("previous_step=shipping_method") > -1) { // Step 3 - Điền thông tin tín dụng
      chrome.tabs.executeScript(tab.id, {
          file: "js/jquery.js"
      });
      chrome.tabs.executeScript(tab.id, {
          file: "payment.js"
      });
    }
    else { // Step 1 - Fill customer information
      console.log("Vao tab 1");
      chrome.tabs.executeScript(tab.id, {
          file: "js/jquery.js"
      });
      chrome.tabs.executeScript(tab.id, {
          file: "fillCustomerInfo.js"
      });
    }
  }
}

//Tự động chạy ngầm khi load xong
chrome.webNavigation.onCompleted.addListener(webNavigation_Complete);
