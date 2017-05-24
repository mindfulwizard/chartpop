function chart1(dataArray) {
    const userInfo = percentageFemale(dataArray);
    const data = new google.visualization.DataTable();
    data.addColumn('string', 'Gender');
    data.addColumn('number', 'Users');
    data.addRows([
        ['Female', userInfo.female],
        ['Male', userInfo.male]
    ]);
    const options = {'title':'Percentage female versus male',
                       'width':400,
                       'height':300};
    const chart = new google.visualization.PieChart(document.getElementById('chart1'));
    chart.draw(data, options);
}

function chart2(dataArray) {
    const userInfo = percentageFirstNames(dataArray);
    const data = new google.visualization.DataTable();
    data.addColumn('string', 'First Name Begins With');
    data.addColumn('number', 'Users');
    data.addRows([
        ['A-M', userInfo.AM],
        ['N-Z', userInfo.NZ]
    ]);
    const options = {'title':'Percentage of first names that start with A-M versus N-Z',
                       'width':400,
                       'height':300};
    const chart = new google.visualization.PieChart(document.getElementById('chart2'));
    chart.draw(data, options);
}

function chart3(dataArray) {
    const userInfo = percentageLastNames(dataArray);
    const data = new google.visualization.DataTable();
    data.addColumn('string', 'Last Name Begins With');
    data.addColumn('number', 'Users');
    data.addRows([
        ['A-M', userInfo.AM],
        ['N-Z', userInfo.NZ]
    ]);
    const options = {'title':'Percentage of last names that start with A-M versus N-Z',
                       'width':400,
                       'height':300};
    const chart = new google.visualization.PieChart(document.getElementById('chart3'));
    chart.draw(data, options);
}

function chart4(dataArray) {
    const statesInfo = percentageStatesByGender(dataArray);
    const data = new google.visualization.DataTable();
    data.addColumn('string', 'State');
    data.addColumn('number', 'Percentage Female');
    data.addColumn('number', 'Percentage Male');
    const infoArr = [];
    getTenMostPopulous(statesInfo.total).forEach((state) => {
        const percentFemale = (statesInfo.female[state]/statesInfo.total[state]) * 100;
        const percentMale = (statesInfo.male[state]/statesInfo.total[state]) * 100;
        infoArr.push([state, percentFemale, percentMale]);
    })

    data.addRows(infoArr);
    const options = {'title':'Percentage Male/Female in 10 Most Populous States',
                       'width':400,
                       'height':300};
    const chart = new google.visualization.BarChart(document.getElementById('chart4'));
    chart.draw(data, options);
}

function chart5(dataArray) {
    const ageRange = percentageByAge(dataArray);
    const data = new google.visualization.DataTable();
    data.addColumn('string', 'Population');
    data.addColumn('number', 'Percentage Population');
    const infoArr = [];
    for(let range in ageRange) {
        infoArr.push([range, ageRange[range]]);
    }
    data.addRows(infoArr);
    const options = {'title':'Percentage people by Age Range',
                       'width':400,
                       'height':300};
    const chart = new google.visualization.PieChart(document.getElementById('chart5'));
    chart.draw(data, options);
}