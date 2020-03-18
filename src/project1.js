function processData(response) {
  const project = response.project;

  document.getElementById("pageTitle").innerHTML = "PROJECTS";
  document.getElementById("project1-title").innerHTML = "Analytics Platform";
  for (let i = 0; i < project.length; i++) {
    const myList = document.createElement("p");
    let listArray = document.getElementById("project1-info");
    listArray.appendChild(myList).insertAdjacentHTML(
      "afterbegin",
      `${project[i].info[0]} <p>
            ${project[i].info[1]} <p>
            ${project[i].info[2]}`
    );
  }
}

getData("project1.json", processData);
