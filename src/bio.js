function processData(response) {
    const bio = response.bio;
    const bio2 = response.bio2;
    let output = "";
    for(var i = 0; i < bio.length; i++){
      output += bio[i];
    } 
    for(let j = 0;j < bio2.length; j++){
      output += bio2[j];
    }
    document.getElementById("bio").innerHTML = output;
  }


getData("bio.json", processData);
