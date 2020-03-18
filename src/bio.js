function processData(response) {
  const bio = response.bio;
  const bio2 = response.bio2;

  let listArray = document.getElementById("bio");
  for (let i = 0; i < bio.length; i++) {
    listArray.innerHTML = `${bio[0]}${bio[1]}${bio[2]}`;
  }
  let listArray2 = document.getElementById("bio2");
  for (let j = 0; j < bio2.length; j++) {
    listArray2.innerHTML = `${bio2[0]}${bio2[1]}`;
  }
}

getData("bio.json", processData);
