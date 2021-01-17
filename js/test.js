var div = document.getElementById("site-name");
div.innerHTML += '<span id="weather-v2-plugin-simple"></span>';
WIDGET = {
  CONFIG: {
    modules: "01234",
    background: 5,
    tmpColor: "ffffff",
    tmpSize: 16,
    cityColor: "ffffff",
    citySize: 16,
    aqiSize: 16,
    weatherIconSize: 24,
    alertIconSize: 18,
    padding: "10px 10px 10px 10px",
    shadow: "0",
    language: "zh",
    borderRadius: 5,
    fixed: "true",
    vertical: "middle",
    horizontal: "center",
    left: "110",
    top: 10,
    key: "zd91wWvXPZ",
  },
};
(function (d) {
  var c = d.createElement("link");
  c.rel = "stylesheet";
  c.href =
    "https://apip.weatherdt.com/simple/static/css/weather-simple.css?v=2.0";
  var s = d.createElement("script");
  s.src = "https://apip.weatherdt.com/simple/static/js/weather-simple.js?v=2.0";
  var sn = d.getElementsByTagName("script")[0];
  sn.parentNode.insertBefore(c, sn);
  sn.parentNode.insertBefore(s, sn);
})(document);
