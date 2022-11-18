function openPage(pageName, elmnt, color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

function checkPriceMode() {
  console.log(event.target.value);
  let value = $(".select-price-mode").val();
  $(".payment-frequency").fadeOut();
  if (value === "Price By Recyclables") $(".payment-frequency").fadeIn();
  $(document).ready(function () {
    var url = "hotels.json";

    $.getJSON(url, function (data) {
      $.each(data, function (index, value) {
        console.log(data);
        $("#select2").append(
          '<option value="' + value.name + '">' + value.name + "</option>"
        );
      });
    });
  });
}
