function processData(response) {
    const education = response.education;
    let output = "";
    document.getElementById("title").innerHTML = "EDUCATION";
    for (let i = 0; i < education.length; i++) {
      output += education[i].degree + "<br>";
      output += education[i].school + "<br>";
      output += education[i].date + "<p>";
    }
    document.getElementById("list").innerHTML = output;
  }

getData("education.json", processData);