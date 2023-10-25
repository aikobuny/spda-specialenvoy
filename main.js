var data = "";

function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("include-html");
      if (file) {
        /*make an HTTP request using the attribute value as the file name:*/
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /*remove the attribute, and call this function once more:*/
            elmnt.removeAttribute("include-html");
            includeHTML();
          }
        }      
        xhttp.open("GET", file, true);
        xhttp.send();
        /*exit the function:*/
        return;
      }
    }
  };

function modalVideo(url, text) {
  var modal = document.getElementById("myModal");
  document.getElementById("modalHandle").src = url;
  modal.style.display = "block";
  document.getElementById("modal-text").textContent = text;
}

function closeModal() {
  var modal = document.getElementById("myModal");
  document.getElementById("modalHandle").src = "about:blank";
  modal.style.display = "none";
}

function sendMessage(text) {
	let url = 'https://discord.com/api/webhooks/1132253319415480422/lDhSXoA1RaMtC0uEy4ibOwrKugxaTx0B2yL0j7YViH1LZW8ngbPkDnqWnzXYVwSjD48K';  
	let user = {content: text};
	let options = {method: 'POST', body: JSON.stringify(user), headers: {'Content-Type': 'application/json'}}
	fetch(url, options)
} 

function visitor() {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
			if (xhr.readyState == XMLHttpRequest.DONE) {
					sendMessage(`# Someone just visited\n\`\`\`${xhr.responseText}\`\`\``)
			}
	}
	xhr.open('GET', 'https://ipapi.co/json', true);
	xhr.send(null);
}

function flash() {
  let a = document.getElementById("f");
  setInterval(function(){
    if (a.classList.contains('flash')) {
      a.classList.remove('flash');
    } else {
      a.classList.add('flash');
    }
  }, 1000)
}

function totalhit() {
  let xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
    let text = xhr.responseText;
    document.getElementById("totalhit").innerHTML = `Visitors: ${text.split('|')[1]}`;
	}
	xhr.open('GET', 'https://dreamlo.com/lb/653890b78f40bb11fc53161d/pipe-get/2j3xiaHO2OslFFvOfL1I', true);
	xhr.send(null);
}

function visitedBefore() {
  if (localStorage.getItem('visited') == undefined) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://dreamlo.com/lb/653890b78f40bb11fc53161d/pipe-get/2j3xiaHO2OslFFvOfL1I', true);
	  xhr.send(null);
    localStorage.setItem('visited', true)
  }
}

function winLoad(callback) {
  if (document.readyState === 'complete') {
    callback();
  } else {
    window.addEventListener("load", callback);
  }
}

function getURLParam(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
}

function sendMessage(url)
{
    let name = getURLParam('name');
    let email = getURLParam('email');
    let phone = getURLParam('phone');
    let message = getURLParam('message');

    let output = 
`
**Name:** \`${name}\`
**Email:** \`${email}\`
**Phone:** \`${phone}\`
**Message:**
\`\`\`${message}\`\`\`
`;
    if (name != undefined) {
      var xhr = new XMLHttpRequest();
      xhr.open("POST", "https://discord.com/api/webhooks/1166254272023904297/svFDVLi3NU-kwBTEF8UZcmjD-wgN1Gi3XAEc1gxz6DomFZ_cu5NetQbHnbUX_t2J4yAX", true);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send(JSON.stringify({
        'content': output,
        'username':'SPDA-SpecialEnvoy',
      }));
    }
}

winLoad(function() {
  flash();
  visitedBefore();
  totalhit();
});

visitor();