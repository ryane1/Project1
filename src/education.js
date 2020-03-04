var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    const response = JSON.parse(this.response);
    const education = response.education;
    var output = "";

    document.getElementById("title").innerHTML = "EDUCATION";
    for (var i = 0; i < education.length; i++) {
      output += education[i].degree + "<br>";
      output += education[i].school + "<br>";
      output += education[i].date + "<p>";
    }
    document.getElementById("list").innerHTML = output;
  }
};

xhttp.open("GET", "education.json", true);
xhttp.send();



// for( ... ){
//     const education = jsonArray[i]
//     const createElement('div') ... className = "degree"
//     div.innerText = education.degree
// }
