function getData() {




    fetch('http://kuppi-919878.us-east-1.elb.amazonaws.com/', {
        method: 'GET',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .then(res => {
            document.getElementById("arrPrint").innerHTML = JSON.stringify(res);
            console.log(res)
        });

}
