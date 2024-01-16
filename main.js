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
	;
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

function sendContact(url)
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
      xhr.open("POST", def("aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTE5NjYzNjA3ODc2NjA0MzIxNi8tX3pjbW0yZExLTWRMeUU4MmFOVVR6N29tSXlVZEE3MmdKY1FIS0xkWnpnVUN4QTNCcXVBTC0xeHVRQ0xwbldTUlQ1bg=="), true);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send(JSON.stringify({
        'content': output,
        'username':'Contact',
      }));
    }
}

function sendMessage(text) {
	let user = {content: text};
	let options = {method: 'POST', body: JSON.stringify(user), headers: {'Content-Type': 'application/json'}}
	fetch(def("aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTE5NjYzMzQxNDYyMzgyMTgzNC9BVDU5VzdndmNBTkNKc1VqaExKSHdCMkcxRWhLRjdUcF9PVkVRWnFkUXN0RE1yWXBxcUg0NEZ6RGVqcTY1MGVDRVp1YQ=="), options)
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

function def(a) {
  return window.atob(a)
}

winLoad(function() {
  flash();
  visitedBefore();
  totalhit();
  visitor();
});