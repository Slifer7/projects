chrome.storage.sync.get({
  cardnumber: "",
  nameoncard: "",
  date: "",
  cvv: ""
}, function(item){
  $("#checkout_credit_card_number").val(item.cardnumber);
  $("#checkout_credit_card_name").val(item.nameoncard);
  $("#checkout_credit_card_expiry").val(item.date);

  var parts = item.date.split("/");

  $("#checkout_credit_card_month").val(parts[0]);
  $("#checkout_credit_card_year").val(parts[1]);
  $("#checkout_credit_card_verification_value").val(item.cvv);

  $(".step__footer__continue-btn")[0].click();
  }
);
