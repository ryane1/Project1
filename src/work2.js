const expJSON = {
    "title": "EXPERIENCE",
    "list": [
        "Front End Developer",
        "Accenture / Detroit",
        "9/2019 - Present"
    ],
    "list2": [
        "Web Instructor",
        "CODE313 / Detroit",
        "7/2019 - 8/2019",
    ],
    "list3": [
        "Communication and Development Specialist",
        " Wayne Metro Community / Detroit",
        "12/2018 - 4/2019"
    ],
}

const expList = document.getElementById('list2');
title2.innerHTML = [expJSON.title]
list2.innerHTML = [
    expJSON.list[0]
    + "<br/>" +
    expJSON.list[1]
    + "<br/>" +
    expJSON.list[2]
    + "<p/>" +
    expJSON.list2[0]
    + "<br/>" +
    expJSON.list2[1]
    + "<br/>" +
    expJSON.list2[2]
    + "<p/>" +
    expJSON.list3[0]
    + "<br/>" +
    expJSON.list3[1]
    + "<br/>" +
    expJSON.list3[2]
];

