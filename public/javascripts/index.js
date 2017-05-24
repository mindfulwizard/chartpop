function fetchRandomData(num) {
    return fetch('https://randomuser.me/api/?results=' + num + '&nat=us')
    .then(res => res.json())
}

function run(dataArray) {
    document.getElementById('initial').style.display = 'none';
    chart1(dataArray);
    chart2(dataArray);
    chart3(dataArray);
    chart4(dataArray);
    chart5(dataArray);
}

function runPasted() {
    const pastedData = JSON.parse(document.getElementById('pastedData').value);
    run(pastedData.results);
}

function runRandom() {
    let inputNum = document.getElementById('inputNum').value;
    if(inputNum < 10 || inputNum > 5000) {
        inputNum = 100;
    }
    fetchRandomData(inputNum)
    .then(data => {
        run(data.results);
    });
}

function displayButton(e) {
    document.getElementById('uploadButton').className = 'shown';
}

function runUpload() {
    const file = document.getElementById('uploadData').files[0];
    const fr = new FileReader();
    fr.onload = function(e) {
        const uploadData = JSON.parse(fr.result);
        run(uploadData.results);
    };
    fr.readAsText(file);
}

function runTest() {
    fetchRandomData(500)
    .then((data) => {
        $.post({
            //type: 'POST',
            url: '/api',
            data: JSON.stringify(data),
            success: function(data) {console.log(data)},
            dataType: 'json',
            headers: {
                "content-type": "application/json",
            },
        });
    })
}

$(document).ready(() => {
    google.charts.load('current', {packages: ['corechart']});
    document.getElementById('pastedButton').addEventListener('click', runPasted);
    //document.getElementById('randomButton').addEventListener('click', runRandom);
    document.getElementById('randomButton').addEventListener('click', runTest);
    document.getElementById('uploadData').addEventListener('change', displayButton);
    document.getElementById('uploadButton').addEventListener('click', runUpload);
 });