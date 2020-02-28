const projectsJSON2 =
{
    "title": "Connected Dashboard",
    "info": [
        "Detroit Digital Delivery Center / Health Care POC",
        "Front-End Development. Contributed to the develoment of a dashboard to connect health related smart devices such as a Fitbit and Nokia Scale."
    ]
}

const projects2 = document.getElementById('projects2');
title2.innerHTML = [projectsJSON2.title]
projects2.innerHTML = [
    projectsJSON2.info[0]
    + "<p/>" +
    projectsJSON2.info[1]
];