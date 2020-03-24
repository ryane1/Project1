//ul tag
let eduTag = document.createElement("ul");
eduTag.id = "edu-list";
eduTag.className = "edu-list";

//append ul tag to div
let eduDiv = document.getElementById("edu-section");
eduDiv.appendChild(eduTag).innerHTML;

//li tag
let eduList = document.createElement("li");
eduList.id = "edu-items";
eduTag.appendChild(eduList);

function processData(response) {
  let listArray = document.getElementById("edu-list");
  document.getElementById("edu-title").innerHTML = "EDUCATION";
  for (let i = 0; i < response.length; i++) {
    listArray.appendChild(eduList).innerHTML +=
      response[i].degree +
      "<br>" +
      response[i].school +
      "<br>" +
      response[i].date +
      "<br> <br>";
  }
}

getData("education.json", processData);
