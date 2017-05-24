const reducer = require('./reducer');

function getTenMostPopulous(obj) {
    return Object.keys(obj).sort((a, b) => obj[a] - obj[b]).slice(-10).reverse();
}

function percent(a, b) {
    //need to round
    if(typeof b === 'object') {
        const total = Object.keys(b).map((x) => b[x]).reduce((a,b) => a + b);
        return (a/total) * 100;
    }
    return (a/(a + b)) * 100;
}

function struct(data) {
    const finalData = {results: []};

    const percentFemale = reducer.percentageFemale(data);
    finalData.results[0] = {
        title: 'Percentage Female vs Male',
        data: {
            value: percent(percentFemale.female/percentFemale.male),
            femaleCount: percentFemale.female,
            maleCount: percentFemale.male
        }
    };

    const percentFirst = reducer.percentageFirst(data);
    finalData.results[1] = {
        title: 'Percentage First Names Starting with A-M vs N-Z',
        data: {
            value: percent(percentFirst.AM/percentFirst.NZ),
            amCount: percentFirst.AM,
            nzCount: percentFirst.NZ    
        }
    };

    const percentLast = reducer.percentageLast(data);
    finalData.results[2] = {
        title: 'Percentage Last Names Starting with A-M vs N-Z',
        data: {
            value: percent(percentLast.AM/percentLast.NZ),
            amCount: percentLast.AM,
            nzCount: percentLast.NZ
        }
    };

    const percentStates = reducer.percentageStates(data);
    finalData.results[3] = {
        title: 'Percentage Female vs Male in Ten Most Populous States',
        data: {
            states: getTenMostPopulous(percentStates.total).map((state) => {
                return {
                    name: state,
                    value: percent(percentStates.female[state], percentStates.male[state]),
                    femaleCount: percentStates.female[state],
                    maleCount: percentStates.male[state],
                }
            })
        }
    };

    const percentAge = reducer.percentageAge(data);
    const updatedRange = function(obj) {
        const newObj = {};
        for (const key in obj) {
            newObj[key] = {
                value: percent(obj[key], obj),
                count: obj[key]
            }
        }
        return newObj;
    }(percentAge);

    finalData.results[4] = { 
        title: 'Percentage People In Each Age Range',
        data: updatedRange
    }

    return finalData;
}

module.exports = struct;