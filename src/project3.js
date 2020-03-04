var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        const response = JSON.parse(this.response);
        const project = response.project;
        var output = "";


        document.getElementById("pageTitle").innerHTML = "PROJECTS";
        document.getElementById("title3").innerHTML = "Innovation Hackathon";
        for (var i = 0; i < project.length; i++) {
            output += project[i].info[0] + "<p>";
            output += project[i].info[1] + "<p>";
            output += project[i].info[2] + "<p>";
        }
        document.getElementById("projects3").innerHTML = output;
    }

};

xhttp.open("GET", "project3.json", true);
xhttp.send();
