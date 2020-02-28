const projectsJSON3 =
{
    "title": "Innovation Hackathon",
    "info": [
        "Detroit Digital Delivery Center",
        "Developed a way to drive innovation within the hub and promote design thinking."
    ]
}

const projects3 = document.getElementById('projects3');
title3.innerHTML = [projectsJSON3.title]
projects3.innerHTML = [
    projectsJSON3.info[0]
    + "<p/>" +
    projectsJSON3.info[1]
];