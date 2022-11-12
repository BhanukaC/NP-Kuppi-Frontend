function getData() {




    fetch('http://localhost:5000', {
        method: 'GET',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .then(res => {
            document.getElementById("arrPrint").innerHTML = res;
            console.log(res)
        });

}
