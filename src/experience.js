function processData(response) {
    const experience = response.experience;
    document.getElementById("exp-title").innerHTML = "EXPERIENCE";
    for (let i = 0; i < experience.length; i++) {
      const myList = document.createElement('li');
      let listArray = document.getElementById('exp-list');
      listArray.appendChild(myList).insertAdjacentHTML(
        'afterbegin',
        `${experience[i].title} <br>
        ${experience[i].company} <br>
        ${experience[i].date} <p>`
      );
    }
  }
  
  getData("experience.json", processData);
