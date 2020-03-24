//p tag
let firstSection = document.createElement("p");
firstSection.id = "bio";
firstSection.className = "myBio";

//append p tag to div
let bioDiv = document.getElementById("bio-section");
bioDiv.appendChild(firstSection).innerHTML;

function processData(response) {
  let wrapList = document.createElement("li");
  let listArray = document.getElementById("bio");
  for (let i = 0; i < response.length; i++) {
    listArray.appendChild(wrapList).innerHTML +=
      response[i].bio.join(" ") + response[i].bio2.join(" ");
  }
}

getData("bio.json", processData);
