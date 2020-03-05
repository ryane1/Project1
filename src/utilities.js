function getData(jsonFileName,callBack){
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        const response = JSON.parse(this.response);
        callBack(response);
      }
    };
   
    xhttp.open("GET",jsonFileName, true);
    xhttp.send();
}


