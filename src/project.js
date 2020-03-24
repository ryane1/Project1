//h6 tag
let projectTag = document.createElement("h6");
projectTag.id = "project1-info";
projectTag.className = "project1-info";

let project2Tag = document.createElement("h6");
project2Tag.id = "project2-info";
project2Tag.className = "project2-info";

let project3Tag = document.createElement("h6");
project3Tag.id = "project3-info";
project3Tag.className = "project3-info";

//append h6 tag to div
let projectDiv = document.getElementById("project1");
projectDiv.appendChild(projectTag).innerHTML;

let project2Div = document.getElementById("project2");
project2Div.appendChild(project2Tag).innerHTML;

let project3Div = document.getElementById("project3");
project3Div.appendChild(project3Tag).innerHTML;

//
// function displayProjectInfo(response) {
//   return response[i] === response[0]
//     ? (document.getElementById("project1-info"))
//     : response[i] === response[1]
//     ? (document.getElementById("project2-info"))
//     : (document.getElementById("project3-info").innerHTML)
// }
// console.log(display());

function processData(response) {
  document.getElementById("pageTitle").innerHTML = "PROJECTS";
  document.getElementById("project1-title").innerHTML = "Analytics Platform";
  document.getElementById("project2-title").innerHTML = "Connected Dashboard";
  document.getElementById("project3-title").innerHTML = "Innovation Hackathon";

  for (let i = 0; i < response.length; i++) {
    // displayProjectInfo(response[i].location + response[i].title + response[i].description);

    // check to see if the response is pointing to the the correct index(project)
    if (response[i] === response[0]) {
      document.getElementById("project1-info").innerHTML +=
        response[i].location +
        " <br>" +
        response[i].title +
        "</br>" +
        response[i].description;
    } else if (response[i] === response[1]) {
      document.getElementById("project2-info").innerHTML +=
        response[i].location +
        " <br>" +
        response[i].title +
        "</br>" +
        response[i].description;
    } else {
      document.getElementById("project3-info").innerHTML +=
        response[i].location +
        " <br>" +
        response[i].title +
        "</br>" +
        response[i].description;
    }
  }
}

getData("project.json", processData);
