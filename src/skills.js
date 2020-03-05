function processData(response) {
    const skills = response.skills;
    let output = "";
    document.getElementById("title3").innerHTML = "SKILLS";
    for (let i = 0; i < skills.length; i++) {
      output += skills[i] + "<p>";
    }
    document.getElementById("list3").innerHTML = output;
  }

getData("skills.json", processData);

