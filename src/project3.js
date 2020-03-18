function processData(response) {
  const project = response.project;

  document.getElementById("pageTitle").innerHTML = "PROJECTS";
  document.getElementById("project3-title").innerHTML = "Innovation Hackathon";
  for (let i = 0; i < project.length; i++) {
    const myList = document.createElement("p");
    let listArray = document.getElementById("project3-info");
    listArray.appendChild(myList).insertAdjacentHTML(
      "afterbegin",
      `${project[i].info[0]} <p>
            ${project[i].info[1]} <p>
            ${project[i].info[2]}`
    );
  }
}
getData("project3.json", processData);
