const skillsJSON = {
    "title": "SKILLS",
    "list": [
        "HTML",
        "CSS",
        "TypeScript",
        "Angular",
        "NodeJS",
        "React",
        "Design Thinking",
        "Agile Methodologies"
    ],
}

const skillsList = document.getElementById('list3');
title3.innerHTML = [skillsJSON.title]
list3.innerHTML = [
    skillsJSON.list[0]
    + "<p/>" +
    skillsJSON.list[1]
    + "<p/>" +
    skillsJSON.list[2]
    + "<p/>" +
    skillsJSON.list[3]
    + "<p/>" +
    skillsJSON.list[4]
    + "<p/>" +
    skillsJSON.list[5]
    + "<p/>" +
    skillsJSON.list[6]
    + "<p/>" +
    skillsJSON.list[7]
];
