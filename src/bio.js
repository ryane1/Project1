function processData(response) {
  const space = "&nbsp;";
  const wrapList = document.createElement("li");
  let listArray = document.getElementById("bio");
  for (let i = 0; i < response.length; i++) {
    listArray.appendChild(wrapList).innerHTML +=
      response[i].bio.join("") + response[i].bio2.join("");
  }
}

getData("bio.json", processData);
