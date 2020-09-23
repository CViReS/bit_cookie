// V.0.2

window.onload = function() {

      //Analytics Tracking ID
      var analytics_tracking = "UA-XXXXXXX";

      //Link zum Datenschutz
      datenschutz = "LINK";

      //Link zum Datenschutz  Impressum
      impressum = "LINK";

      if (getCookie("cookiebar_akzeptiert") == null) {
        //Cookie Wall Erstellen, ID des Elementes eingeben
        cookieWall();
      }

      if (getCookie("cookiebar_analytics") != null) {

        var analytics_script = document.createElement('script');
        analytics_script.src = "https://www.googletagmanager.com/gtag/js?id="+analytics_tracking;
        document.head.appendChild(analytics_script);

        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', analytics_tracking);
      }




//Lades CSS Design Template
       var head = document.getElementsByTagName('HEAD')[0];
       // Create new link Element
       var link = document.createElement('link');
       // set the attributes for link element
       link.rel = 'stylesheet';
       link.type = 'text/css';
       link.href = 'wp-content/themes/ark/assets/css/bit-cookie.css';
       // Append link element to HTML head
       head.appendChild(link);
}




//Bei Button Click

function alle_akz() {
  var now = new Date();
   now.setMonth( now.getMonth() + 12 );
  console.log("Click" + now.toUTCString())
document.cookie = "cookiebar_akzeptiert=1; path=/; expires="+now.toUTCString();
document.cookie = "cookiebar_analytics=1; path=/; expires="+now.toUTCString();
location.reload();
}

function esse_akz() {
  var now = new Date();
   now.setMonth( now.getMonth() + 12 );
  console.log("Click" + now.toUTCString())
document.cookie = "cookiebar_akzeptiert=1; path=/; expires="+now.toUTCString();
location.reload();
}




//Cookie Wall erstellen

function cookieWall () {

  var bodytag = document.getElementsByTagName("BODY")[0];

  // erstelle ein neues div Element
var cookieWallDiv = document.createElement("div");
cookieWallDiv.setAttribute("class", "bit-cookiewall");

  // und gib ihm etwas Inhalt
  var cookieBox = document.createElement("div");
  cookieBox.setAttribute("class", "box");
  var newContent = document.createElement("p");
  newContent.innerHTML ="Wir verwenden Cookies, um die Zugriffe auf unsere Website anonymisiert zu analysieren und so die Benutzerfreundlichkeit zu verbessern und sicherzustellen. Nähere Informationen finden Sie in der <a target='_blank' href='"+datenschutz+"'>Datenschutzerklärung</a>.";

//Fußzeile
var fusszeile = document.createElement("p");
fusszeile.setAttribute("class", "fusszeile");
fusszeile.innerHTML ="<a target='_blank' href='"+datenschutz+"'>Datenschutzerklärung</a> | <a target='_blank' href='"+impressum+"'>Impressum</a>";

  //Cookie Checkbox Erstellen
  var cookie_div_ess = document.createElement("label");
  cookie_div_ess.setAttribute("class", "cookie_box");
  var cookie_ess = document.createElement("INPUT");
  cookie_ess.setAttribute("type", "checkbox");
  cookie_ess.setAttribute("disabled", true);
  cookie_ess.checked = true;
  var cookie_ess_text = document.createTextNode("Essenzielle");

//Analytics Konto
var cookie_div_analytics = document.createElement("label");
cookie_div_analytics.setAttribute("class", "cookie_box");
var cookie_analytics = document.createElement("INPUT");
cookie_analytics.setAttribute("type", "checkbox");
var cookie_analytics_text = document.createTextNode("Google Analytics");



//Alle akzeptieren Button
  var btn_alle = document.createElement("BUTTON");
  btn_alle.innerHTML = "Alle akzeptieren";
  btn_alle.setAttribute("class", "alle_akz");
  btn_alle.setAttribute("onclick", "alle_akz()");
//Nur Essenzielle Akzeptieren Button
  var btn_esse = document.createElement("BUTTON");
  btn_esse.innerHTML = "Nur Essenzielle";
  btn_esse.setAttribute("class", "alle_esse");
  btn_esse.setAttribute("onclick", "esse_akz()");


  //Add Elemente zur Cookie Wall
  cookieBox.appendChild(newContent); // füge den Textknoten zum neu erstellten div hinzu.

  cookieBox.append(cookie_div_ess);
  cookieBox.append(cookie_div_analytics);
  cookie_div_ess.appendChild(cookie_ess_text);
  cookie_div_ess.appendChild(cookie_ess);
  cookie_div_analytics.appendChild(cookie_analytics_text);
  cookie_div_analytics.appendChild(cookie_analytics);

  cookieBox.append(btn_alle);
  cookieBox.append(btn_esse);

  cookieBox.append(fusszeile);

  // füge das neu erstellte Element und seinen Inhalt ins DOM ein

  bodytag.insertBefore(cookieWallDiv, bodytag.firstChild );
  cookieWallDiv.appendChild(cookieBox);
}



// Cookie Function

function getCookie(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    }
    else
    {
        begin += 2;
        var end = document.cookie.indexOf(";", begin);
        if (end == -1) {
        end = dc.length;
        }
    }
    // because unescape has been deprecated, replaced with decodeURI
    //return unescape(dc.substring(begin + prefix.length, end));
    return decodeURI(dc.substring(begin + prefix.length, end));
}
