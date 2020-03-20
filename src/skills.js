function processData(response) {
  document.getElementById("skills-title").innerHTML = "SKILLS";
  for (let i = 0; i < response.length; i++) {
    // const wrapList = document.createElement("li");
    let listArray = document.getElementById("skills-list");
    listArray.innerHTML += response[i].skills.join("");
  }
}

getData("skills.json", processData);
