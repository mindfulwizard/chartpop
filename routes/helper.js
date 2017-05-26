const roundTo = require('round-to');

function getTenMostPopulous(obj) {
    return Object.keys(obj).sort((a, b) => obj[a] - obj[b]).slice(-10).reverse();
}

function percent(a = 0, b = 0) {
    let total = a + b;
    if(typeof b === 'object') {
        total = Object.keys(b).map(x => b[x]).reduce((a,b) => a + b);
    }
    return roundTo(((a/total) * 100), 2);
}

function capitalize(str) {
    return str
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

function toPlainText(resultsArray) {
    return resultsArray.reduce((acc, curr) => {
        if(curr.data.value1) {
            acc += `${curr.title}: ${curr.data.value1} vs ${curr.data.value2}\n`;
        } 
        if(curr.data.state) {
            const arrayData = curr.data.state.reduce((nestedAcc, stateEntry) => {
                nestedAcc += `\t ${stateEntry.name}: ${stateEntry.value1} vs ${stateEntry.value2} \n`;
                return nestedAcc;
            }, 'Percentage Female vs Male in Ten Most Populous States: \n');
            acc += arrayData;
        }
        if(curr.data.entry) {
            const arrayData = curr.data.entry.reduce((nestedAcc, rangeEntry) => {
                nestedAcc += `\t ${rangeEntry.range}: ${rangeEntry.value} \n`;
                return nestedAcc;
            }, 'Percentage People In Each Age Range: \n');
            acc += arrayData;
        }
        return acc;
    }, '');
}

module.exports = {getTenMostPopulous, percent, capitalize, toPlainText};