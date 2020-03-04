var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    const response = JSON.parse(this.response);
    const experience = response.experience;
    var output = "";

    document.getElementById("title2").innerHTML = "EXPERIENCE";
    for (var i = 0; i < experience.length; i++) {
      output += experience[i].title + "<br>";
      output += experience[i].company + "<br>";
      output += experience[i].date + "<p>";
    }
    document.getElementById("list2").innerHTML = output;
  }
};

xhttp.open("GET", "experience.json", true);
xhttp.send();

