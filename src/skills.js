function processData(response) {
    const skills = response.skills;
    document.getElementById("skills-title").innerHTML = "SKILLS";
    for (let i = 0; i < skills.length; i++) {
      const myList = document.createElement('li');
      let listArray = document.getElementById('skills-list');
      listArray.appendChild(myList).insertAdjacentHTML(
        'afterbegin',
        `${skills[i]}`
      );
    }
  }

getData("skills.json", processData);

