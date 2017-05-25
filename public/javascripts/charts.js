function toNum(str) {
    return parseInt(str.slice(0,-1));
}

function chart1(dataObj) {
    const data = new google.visualization.DataTable();
    data.addColumn('string', 'Gender');
    data.addColumn('number', 'Users');
    data.addRows([
        ['Female', dataObj.data.femaleCount],
        ['Male', dataObj.data.maleCount]
    ]);
    const options = {'title': dataObj.title,
                       'width':400,
                       'height':300};
    const chart = new google.visualization.PieChart(document.getElementById('chart1'));
    chart.draw(data, options);
}

function chart2(dataObj) {
    const data = new google.visualization.DataTable();
    data.addColumn('string', 'First Name Begins With');
    data.addColumn('number', 'Users');
    data.addRows([
        ['A-M', dataObj.data.amCount],
        ['N-Z', dataObj.data.nzCount]
    ]);
    const options = {'title': dataObj.title,
                       'width':400,
                       'height':300};
    const chart = new google.visualization.PieChart(document.getElementById('chart2'));
    chart.draw(data, options);
}

function chart3(dataObj) {
    const data = new google.visualization.DataTable();
    data.addColumn('string', 'Last Name Begins With');
    data.addColumn('number', 'Users');
    data.addRows([
        ['A-M', dataObj.data.amCount],
        ['N-Z', dataObj.data.nzCount]
    ]);
    const options = {'title': dataObj.title,
                       'width':400,
                       'height':300};
    const chart = new google.visualization.PieChart(document.getElementById('chart3'));
    chart.draw(data, options);
}

function chart4(dataObj) {
    const data = new google.visualization.DataTable();
    data.addColumn('string', 'State');
    data.addColumn('number', 'Percentage Female');
    data.addColumn('number', 'Percentage Male');

    const infoArr = dataObj.data.state
        .map(stateObj => [stateObj.name, toNum(stateObj.value1), toNum(stateObj.value2)]);
    data.addRows(infoArr);
    const options = {'title':'Percentage Male/Female in 10 Most Populous States in %',
                       'width':700,
                       'height':400};
    const chart = new google.visualization.BarChart(document.getElementById('chart4'));
    chart.draw(data, options);
}

function chart5(dataObj) {
    const data = new google.visualization.DataTable();
    data.addColumn('string', 'Population');
    data.addColumn('number', 'Percentage Population');
    const infoArr = dataObj.data.entry
        .map(rangeObj => [rangeObj.range, rangeObj.count]);
    data.addRows(infoArr);
    const options = {'title':'Percentage people by Age Range',
                       'width':400,
                       'height':300};
    const chart = new google.visualization.PieChart(document.getElementById('chart5'));
    chart.draw(data, options);
}