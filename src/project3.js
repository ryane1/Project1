
   function processData(response) {
        const project = response.project;
        let output = "";

        document.getElementById("pageTitle").innerHTML = "PROJECTS";
        document.getElementById("title3").innerHTML = "Innovation Hackathon";
        for (let i = 0; i < project.length; i++) {
            output += project[i].info[0] + "<p>";
            output += project[i].info[1] + "<p>";
            output += project[i].info[2] + "<p>";
        }
        document.getElementById("projects3").innerHTML = output;
    }

getData("project3.json", processData);
