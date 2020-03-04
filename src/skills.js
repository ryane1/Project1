var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    const response = JSON.parse(this.response);
    const skills = response.skills;
    var output = "";

    document.getElementById("title3").innerHTML = "SKILLS";
    for (var i = 0; i < skills.length; i++) {
      output += skills[i] + "<p>";
    }
    document.getElementById("list3").innerHTML = output;
  }
};

xhttp.open("GET", "skills.json", true);
xhttp.send();
