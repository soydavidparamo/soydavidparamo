
$('#grafico').click(function (e) {

    $('#ProyectosGraficos').css('display', 'block');
    $('#ProyectoAV').css('display', 'none');
    $('#ProyectosUXUI').css('display', 'none');
    $('ProyectosWebDesign').css('display', 'none');


});

$('#av').click(function (e) {

    // Resetear, por si acaso has estado jugando con la otra propiedad
    $('#ProyectoAV').css('display', 'block');
    $('#ProyectosUXUI').css('display', 'none');
    $('#ProyectosGraficos').css('display', 'none');
    $('ProyectosWebDesign').css('display', 'none');


});

$('#uxui').click(function (e) {

    // Resetear, por si acaso has estado jugando con la otra propiedad
    $('#ProyectoAV').css('display', 'none');
    $('#ProyectosUXUI').css('display', 'block');
    $('#ProyectosGraficos').css('display', 'none');
    $('ProyectosWebDesign').css('display', 'none');

});

$('#webd').click(function (e) {

  // Resetear, por si acaso has estado jugando con la otra propiedad
  $('#ProyectoAV').css('display', 'none');
  $('#ProyectosUXUI').css('display', 'none');
  $('#ProyectosGraficos').css('display', 'none');
  $('ProyectosWebDesign').css('display', 'block');

});

jQuery(document).ready(function() { 
  var cookie = false;
  var cookieContent = $('.cookie-disclaimer');

  checkCookie();

  if (cookie === true) {
    cookieContent.hide();
  }

  function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
  }

  function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i].trim();
      if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
    }
    return "";
  }

  function checkCookie() {
    var user = getCookie("username");
    if (user !== "") {
      cookie = true;
    } else {
      if (user !== "" && user !== null) {
        setCookie("cvalue", "cvalue", 365);
      }
    }
  }

  function deleteCookie() {
    setCookie('cname', '', -1);
  }
     
  //set cookie on click
  $('.accept-cookie').click(function () {
    setCookie("cname", "cvalue", 365);
    alert("La barra de informacion sobre cookies no volverá a aparecer mientras sigas usando cookies. En la política de cookies, se explica como revocar la aceptación de cookies en esta web.");
    cookieContent.hide();
  });
  //delete cookie on click
  $('.decline-cookie').click(function () {
      alert("cookie declined!");
      deleteCookie();
  });
});

window.onscroll = function() {scrollFunction()};

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}