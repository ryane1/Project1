function processData(response) {
  // const project = response.project1;
  // const project2 = response.project2;
  // const project3 = response.project3;

  document.getElementById("pageTitle").innerHTML = "PROJECTS";
  document.getElementById("project1-title").innerHTML = "Analytics Platform";
  document.getElementById("project2-title").innerHTML = "Connected Dashboard";
  document.getElementById("project3-title").innerHTML = "Innovation Hackathon";
  for (let i = 0; i < response.length; i++) {
    const wrapText = document.createElement("p");
    let listArray = document.getElementById("project1-info");
    let listArray2 = document.getElementById("project2-info");
    listArray.appendChild(wrapText).innerHTML +=
      response[i].location + response[i].title + response[i].description
 
  
  //listArray2.appendChild(wrapText).innerHTML +=  response[i].location
      // "<br> " +
      // project[i].title +
      // "<br> " +
      // project[i].description;
  }
  // for (let j = 0; j < project.length; j++) {
  //   const wrapText = document.createElement("p");
  //   let listArray2 = document.getElementById("project2-info");
  //   listArray2.appendChild(wrapText).innerHTML +=
  //     project2[j].location +
  //     "<br> " +
  //     project2[j].title +
  //     "<br> " +
  //     project2[j].description;
  // }
  // for (let k = 0; k < project.length; k++) {
  //   const wrapText = document.createElement("p");
  //   let listArray3 = document.getElementById("project3-info");
  //   listArray3.appendChild(wrapText).innerHTML +=
  //     project3[k].location +
  //     "<br> " +
  //     project3[k].title +
  //     "<br> " +
  //     project3[k].description;
  // }
}

getData("project.json", processData);
