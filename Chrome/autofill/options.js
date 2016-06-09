function Save(){
  var email = $("#email").val();
  var firstname = $("#firstname").val();
  var lastname = $("#lastname").val();
  var company = $("#company").val();
  var address = $("#address").val();
  var aptsuite = $("#aptsuite").val();
  var city = $("#city").val();
  var country = $("#country").val();
  var state = $("#state").val();
  var zipcode = $("#zipcode").val();
  var phone = $("#phone").val();

  var cardnumber = $("#cardnumber").val();
  var nameoncard = $("#nameoncard").val();
  var date = $("#date").val();
  var cvv = $("#cvv").val();

  chrome.storage.sync.set({
     email: email,
     firstname: firstname,
     lastname: lastname,
     company: company,
     address: address,
     aptsuite: aptsuite,
     city: city,
     country: country,
     state: state,
     zipcode: zipcode,
     phone: phone,

     cardnumber: cardnumber,
     nameoncard: nameoncard,
     date: date,
     cvv: cvv
   }, function() {
     // Update status to let user know options were saved.
     $("#divInfo").toggleClass("hidden");
   });
}

$(document).ready(function(){
  $("#btnSubmit").click(Save);

  // Load information from chrome storage
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

    cardnumber: "",
    nameoncard: "",
    date: "",
    cvv: ""
  }, function(items){
      $("#email").val(items.email);
      $("#firstname").val(items.firstname);
      $("#lastname").val(items.lastname);
      $("#company").val(items.company);
      $("#address").val(items.address);
      $("#aptsuite").val(items.aptsuite);
      $("#city").val(items.city);
      $("#country").val(items.country);
      $("#state").val(items.state);
      $("#zipcode").val(items.zipcode);
      $("#phone").val(items.phone);

      $("#cardnumber").val(items.cardnumber);
      $("#nameoncard").val(items.nameoncard);
      $("#date").val(items.date);
      $("#cvv").val(items.cvv);
    }
  );
});
