$(document).ready(function(){
  Load();
  $("#btnSave").click(Save);
});

function Load(){
  // Load information from chrome storage
    chrome.storage.sync.get({
      firstname: "Hypebeast",
      lastname: "McYeezus",

      address1: "2 Supreme St.",
      address2: "Suite 6",
      city: "New York",
      state: "New York",
      zipcode: "10013",

      phone: "",

      sizes: "9, 9.5, 10, 8.5, 8, 10.5, 11, 11.5, 12",

      billDifferent: true,
      Billingaddress1: "Billionaire Boys",
      Billingaddress2: "",
      Billingcity: "Fairfax",
      Billingstate: "California",
      Billingzipcode: "90036",

      cardnumber: "STEALMYIDENTITY101",
      nameoncard: "Hypebeast McYeezus",
      month: "",
      year: "",
      cvv: "404"
    }, function(items){
        $("#txtFirstName").val(items.firstname);
        $("#txtLastName").val(items.lastname);

        $("#txtAddress1").val(items.address1);
        $("#txtAddress2").val(items.address2);
        $("#txtCity").val(items.city);
        $("#txtState").val(items.state);
        $("#txtZipcode").val(items.zipcode);

        $("#txtPhone").val(items.phone);
        $("#sizes").val(items.sizes);

        $("#chkBillingDifferent").prop("checked", items.billDifferent);
        $("#txtBillingAddress1").val(items.Billingaddress1);
        $("#txtBillingAddress2").val(items.Billingaddress2);
        $("#txtBillingCity").val(items.Billingcity);
        $("#txtBillingState").val(items.Billingstate);
        $("#txtBillingZipcode").val(items.Billingzipcode);

        $("#cardnumber").val(items.cardnumber);
        $("#nameoncard").val(items.nameoncard);
        $("#month").val(items.month);
        $("#year").val(items.year);
        $("#cvv").val(items.cvv);
      }
    );
}

function Save(){
  var firstname = $("#txtFirstName").val();
  var lastname = $("#txtLastName").val();

  var address1 = $("#txtAddress1").val();
  var address2 = $("#txtAddress2").val();
  var city = $("#txtCity").val();
  var state = $("#txtState").val();
  var zipcode = $("#txtZipcode").val();

  var phone = $("#txtPhone").val();
  var sizes = $("#sizes").val();

  var billDifferent = $("#chkBillingDifferent").is(":checked");
  var Billingaddress1 = $("#txtBillingAddress1").val();
  var Billingaddress2 = $("#txtBillingAddress2").val();
  var Billingcity = $("#txtBillingCity").val();
  var Billingstate = $("#txtBillingState").val();
  var Billingzipcode = $("#txtBillingZipcode").val();

  var cardnumber = $("#cardnumber").val();
  var nameoncard = $("#nameoncard").val();
  var month = $("#month").val();
  var year = $("#year").val();
  var cvv = $("#cvv").val();

  chrome.storage.sync.set({
     firstname: firstname,
     lastname: lastname,

     address1: address1,
     address2: address2,
     city: city,
     state: state,
     zipcode: zipcode,

     phone: phone,
     sizes: sizes,

     billDifferent: billDifferent,
     Billingaddress1: Billingaddress1,
     Billingaddress2: Billingaddress2,
     Billingcity: Billingcity,
     Billingstate: Billingstate,
     Billingzipcode: Billingzipcode,

     cardnumber: cardnumber,
     nameoncard: nameoncard,
     month: month,
     year: year,
     cvv: cvv
   }, function() {
     // Update status to let user know options were saved.
     $("#divInfo").toggleClass("hidden");
   });
}
