function displayButton(e) {
    document.getElementById('uploadButton').className = 'shown';
}

function fetchRandomData(num) {
    return fetch('https://randomuser.me/api/?results=' + num + '&nat=us')
    .then(res => res.json())
}

function reload() {
    document.location.reload();
    history.replaceState({}, document.title, ".");
}

function runPasted() {
    const pastedData = JSON.parse(document.getElementById('pastedData').value);
    apiCall(pastedData);
}

function runUpload() {
    const file = document.getElementById('uploadData').files[0];
    const reader = new FileReader();
    reader.onload = function(event) {
        apiCall(JSON.parse(event.target.result));
    };
    reader.readAsText(file);
}

function runDownload() {
    let inputNum = document.getElementById('inputNum').value;
    if(inputNum < 10 || inputNum > 5000) {
        inputNum = 500;
    }
    fetchRandomData(inputNum)
    .then(data => apiCall(data))
    .catch(err => console.log(err))
}

function apiCall(data) {
    document.getElementById('initial').innerHTML = '<img src="images/loading.gif">';
     $.post({
            url: '/api',
            data: JSON.stringify(data),
            success: function(data) {
                console.log(data);
                createCharts(data.results);
                document.getElementById('reload').className = 'shown';
            },
            headers: {
                'content-type': 'application/json',
            },
            //expected response type
            dataType: 'json',
        });
}

function createCharts(dataArray) {
    document.getElementById('initial').style.display = 'none';
    document.location.hash = 'chartview';
    dataArray.forEach((el, ind) => {
        chartrunner[ind](el);
    });
}

$(document).ready(() => {
    google.charts.load('current', {packages: ['corechart']});
    document.getElementById('pastedButton').addEventListener('click', runPasted);
    document.getElementById('downloadButton').addEventListener('click', runDownload);
    document.getElementById('uploadData').addEventListener('change', displayButton);
    document.getElementById('uploadButton').addEventListener('click', runUpload);
    document.getElementById('reload').addEventListener('click', reload);
 });