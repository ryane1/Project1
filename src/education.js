function processData(response) {
  document.getElementById("edu-title").innerHTML = "EDUCATION";
  for (let i = 0; i < response.length; i++) {
    const wrapList = document.createElement("li");
    let listArray = document.getElementById("edu-list");
    listArray.appendChild(wrapList).innerHTML +=
      response[i].degree +
      "<br>" +
      response[i].school +
      "<br>" +
      response[i].date +
      "<br> <br>";
  }
}

getData("education.json", processData);
