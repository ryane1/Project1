// document.write(
//   '<h2 id="skills-title" class="skills-title"></h2>' +
//   '<ul id="skills-list" class="skills-list">' +
//     '<li id="skills-list"></li>'+
//   '</ul>'
//   );
//function skillsMarkup() {
  //document.getElementById("skills-section").innerHTML = "Hello";

// titleDiv.className.add("skills-title");

// let listContainer = document.createElement("ul");
// listContainer.className = name;

let listTag = document.createElement("ul");
let titleContent = document.createTextNode("SKILLS");
titleTag.id = 'skills-title';
titleTag.className = 'skills-title';
titleTag.appendChild(titleContent);


// let titleContent = document.createTextNode("")
//}
let titleTag = document.createElement("h2");
let titleContent = document.createTextNode("SKILLS");
function processData(response) {
titleTag.id = 'skills-title';
titleTag.className = 'skills-title';
titleTag.appendChild(titleContent);


  // document.getElementById("skills-title").innerHTML = "SKILLS";
  for (let i = 0; i < response.length; i++) {
    // const wrapList = document.createElement("li");
    let listArray = document.getElementById("skills-list");
    listArray.innerHTML += response[i].skills.join("");
  }
}

getData("skills.json", processData);
