chrome.storage.sync.get({
  cardnumber: "",
  nameoncard: "",
  date: "",
  cvv: ""
}, function(item){
  $("#checkout_credit_card_number").val(item.cardnumber);
  $("#checkout_credit_card_name").val(item.nameoncard);
  $("#checkout_credit_card_expiry").val(item.date);
  $("#checkout_credit_card_verification_value").val(item.cvv);
  }
);
