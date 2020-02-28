const projectsJSON =
{
    "pageTitle": "PROJECTS",
    "title": "Analytics Platform",
    "info": [
        "Detroit Digital Delivery Center / Sports POC",
        "Front-End Development. Contributed to the develoment of an analytics platform for a sports team.",
    ]
}

const projects = document.getElementById('projects');
pageTitle.innerHTML = [projectsJSON.pageTitle]
title.innerHTML = [projectsJSON.title]
projects.innerHTML = [
    projectsJSON.info[0]
    + "<p/>" +
    projectsJSON.info[1]
];