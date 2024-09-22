function convert() {
  var degree = parseInt(document.getElementById("text_degree").value);
  var type = document.getElementById("select").value;
  var result = document.getElementById("result");

  if (type == "fahrenheit") {
    result.value = ((degree - 32) * 5) / 9 + "  ℃";
  } else if (type == "kelvin") {
    result.value = degree - 273.15 + "  ℃";
  } else {
    result.value = degree + "  ℃";
  }
}
function check() {
  var time = new Date();

  document.getElementById("tit").innerText =
    time.getHours() + ":" + time.getMinutes() + "pm";
}
