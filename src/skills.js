//ul tag
let listTag = document.createElement("ul");
listTag.id = "skills-list";
listTag.className = "skills-list";

//append ul tag to div
let div = document.getElementById("skills-section");
div.appendChild(listTag).innerHTML;

//li tag
let wrapList = document.createElement("li");
wrapList.id = "skills-item";
listTag.appendChild(wrapList);

function processData(response) {
  document.getElementById("skills-title").innerHTML = "SKILLS";
  let listArray = document.getElementById("skills-item");

  for (let i = 0; i < response.length; i++) {
    listArray.innerHTML += response[i].skills.join('</li> <li>');
  }
}

getData("skills.json", processData);
