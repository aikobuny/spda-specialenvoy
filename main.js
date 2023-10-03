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
  var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
    document.getElementById("totalhit").innerHTML = `Visitors: ${xhr.responseText}`;
	}
	xhr.open('GET', 'https://spda-api.aikobuny.repl.co/add', true);
	xhr.send(null);
}

function winLoad(callback) {
  if (document.readyState === 'complete') {
    callback();
  } else {
    window.addEventListener("load", callback);
  }
}

winLoad(function() {
  flash();
  totalhit();
});

visitor();