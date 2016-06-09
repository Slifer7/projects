chrome.storage.sync.get({
  email: "",
  firstname: "",
  lastname: "",
  company: "",
  address: "",
  aptsuite: "",
  city: "",
  country: "",
  state: "",
  zipcode: "",
  phone: "",
}, function(items){
    $("#checkout_email").val(items.email);
    $("#checkout_shipping_address_first_name").val(items.firstname);
    $("#checkout_shipping_address_last_name").val(items.lastname);
    $("#checkout_shipping_address_company").val(items.company);
    $("#checkout_shipping_address_address1").val(items.address);
    $("#checkout_shipping_address_address2").val(items.aptsuite);
    $("#checkout_shipping_address_city").val(items.city);
    $("#checkout_shipping_address_country").val(items.country);
    $("#checkout_shipping_address_province").val(items.state);
    $("#checkout_shipping_address_zip").val(items.zipcode);
    $("#checkout_shipping_address_phone").val(items.phone);

    $(".step__footer__continue-btn")[0].click(); // Auto click to go to next page
  }
);
