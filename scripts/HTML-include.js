function includeHTML() {
  var all_elem
  var elmnt
  var i
  var html_elem
  var xhttp
  all_elem = document.getElementsByTagName("*");
  for (i = 0; i < all_elem.length; i++) {
    elmnt = all_elem[i];
    html_elem = elmnt.getAttribute("include-html");
    if (html_elem) {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          elmnt.removeAttribute("include-html");
          includeHTML();
        }
      }      
      xhttp.open("GET", html_elem, true);
      xhttp.send();
      return;
    }
  }
};