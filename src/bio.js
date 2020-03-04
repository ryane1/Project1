var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    const response = JSON.parse(xhttp.responseText);
    var bio = response.bio;
    var bio2 = response.bio2;
    var output = "";
    for(var i = 0; i < bio.length; i++){
      output += bio[i];
    }
    for(var j = 0;j < bio2.length; j++){
      output += bio2[j];
    }
     document.getElementById("bio").innerHTML = output;
  }
};

xhttp.open("GET", "bio.json", true);
xhttp.send();

