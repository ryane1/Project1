//retrieve education object from the education json file as an response 
// transform the object into an array then loop throught the array
//display the array in the form of an ul 

function processData(response) {
  const education = response.education;
  document.getElementById("edu-title").innerHTML = "EDUCATION";
  for (let i = 0; i < education.length; i++) {
    const myList = document.createElement('li');
    let listArray = document.getElementById('edu-list');
    listArray.appendChild(myList).insertAdjacentHTML(
      'afterbegin',
      `${education[i].degree} <br>
      ${education[i].school} <br>
      ${education[i].date} <p>`
    );
  }
}

getData("education.json", processData);