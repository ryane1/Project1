//ul tag
let expTag = document.createElement("ul");
expTag.id = "exp-list";
expTag.className = "exp-list";

//append ul tag to div
let expDiv = document.getElementById("exp-section");
expDiv.appendChild(expTag).innerHTML;

//li tag
let expList = document.createElement("li");
expList.id = "edu-items";
expTag.appendChild(expList);



function processData(response) {
  let listArray = document.getElementById("exp-list");
  document.getElementById("exp-title").innerHTML = "EXPERIENCE";
  for (let i = 0; i < response.length; i++) {
    listArray.appendChild(expList).innerHTML +=
      response[i].title +
      "<br>" +
      response[i].company +
      "<br>" +
      response[i].date +
      "<br> <br>";
  }
}

getData("experience.json", processData);

// <ul id="exp-list" class="exp-list"></ul>
// const wrapList = document.createElement("li");