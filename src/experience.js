function processData(response) {
  document.getElementById("exp-title").innerHTML = "EXPERIENCE";
  for (let i = 0; i < response.length; i++) {
    const wrapList = document.createElement("li");
    let listArray = document.getElementById("exp-list");
    listArray.appendChild(wrapList).innerHTML +=
      response[i].title +
      "<br>" +
      response[i].company +
      "<br>" +
      response[i].date +
      "<br> <br>";
  }
}

getData("experience.json", processData);
