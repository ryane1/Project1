function processData(response) {
    const experience = response.experience;
    let output = "";
    document.getElementById("title2").innerHTML = "EXPERIENCE";
    for (let i = 0; i < experience.length; i++) {
      output += experience[i].title + "<br>";
      output += experience[i].company + "<br>";
      output += experience[i].date + "<p>";
    }
    document.getElementById("list2").innerHTML = output;
  }
  
  getData("experience.json", processData);
