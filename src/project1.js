function processData(response) {
    const project = response.project;
    let output = "";

    document.getElementById("pageTitle").innerHTML = "PROJECTS";
    document.getElementById("title").innerHTML = "Analytics Platform";
        for (let i = 0; i < project.length; i++) {
            output += project[i].info[0] + "<p>";
            output += project[i].info[1] + "<p>";
            output += project[i].info[2];
        }
        document.getElementById("projects").innerHTML = output;
    }

getData("project1.json", processData);
