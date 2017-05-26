const reducer = require('./reducer');
const helper = require('./helper')

function struct(data) {
    const finalData = {responseData: {results: []}};

    const percentFemale = reducer.percentageFemale(data);
    finalData.responseData.results[0] = {
        title: 'Percentage Female vs Male',
        data: {
            value1: helper.percent(percentFemale.female, percentFemale.male) + '%',
            value2: helper.percent(percentFemale.male, percentFemale.female) + '%',
            femaleCount: percentFemale.female,
            maleCount: percentFemale.male
        }
    };

    const percentFirst = reducer.percentageName(data, 'first');
    finalData.responseData.results[1] = {
        title: 'Percentage First Names Starting with A-M vs N-Z',
        data: {
            value1: helper.percent(percentFirst.AM, percentFirst.NZ)  + '%',
            value2: helper.percent(percentFirst.NZ, percentFirst.AM)  + '%',
            amCount: percentFirst.AM,
            nzCount: percentFirst.NZ    
        }
    };

    const percentLast = reducer.percentageName(data, 'last');
    finalData.responseData.results[2] = {
        title: 'Percentage Last Names Starting with A-M vs N-Z',
        data: {
            value1: helper.percent(percentLast.AM, percentLast.NZ)  + '%',
            value2: helper.percent(percentLast.NZ, percentLast.AM)  + '%',
            amCount: percentLast.AM,
            nzCount: percentLast.NZ
        }
    };

    const percentStates = reducer.percentageStates(data);
    finalData.responseData.results[3] = {
        title: 'Percentage Female vs Male in Ten Most Populous States',
        data: {
            state: helper.getTenMostPopulous(percentStates.total).map((stateName) => {
                return {
                    name: helper.capitalize(stateName),
                    value1: helper.percent(percentStates.female[stateName], percentStates.male[stateName])  + '%',
                    value2: helper.percent(percentStates.male[stateName], percentStates.female[stateName])  + '%',
                    femaleCount: percentStates.female[stateName],
                    maleCount: percentStates.male[stateName],
                }
            })
        }
    };

    const percentAge = reducer.percentageAge(data);
    finalData.responseData.results[4] = { 
        title: 'Percentage People In Each Age Range',
        data: {
            entry: Object.keys(percentAge).map(key => {
                return {
                    range: key,
                    value: helper.percent(percentAge[key], percentAge) + '%',
                    count: percentAge[key]
                }
            })
        }
    }
    return finalData;
}

module.exports = struct;