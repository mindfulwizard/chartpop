const moment = require('moment');
const firstHalfAlphabet = new RegExp(/[A-M]/i);

function percentageFemale(dataArray) {
    return dataArray
        .reduce((acc, curr) => {
            curr['gender'] === 'female' ? acc.female++ : acc.male++;
            return acc;
        }, {male: 0, female: 0});
}

function percentageFirst(dataArray) {
    return dataArray
        .reduce((acc, curr) => {
            const letter = curr['name']['first'][0];
            firstHalfAlphabet.test(letter) ? acc.AM++ : acc.NZ++;
            return acc;
        }, {AM: 0, NZ: 0});
}

function percentageLast(dataArray) {
   return dataArray
        .reduce((acc, curr) => {
            const letter = curr['name']['last'][0];
            firstHalfAlphabet.test(letter) ? acc.AM++ : acc.NZ++;
            return acc;
        }, {AM: 0, NZ: 0});
}

function percentageStates(dataArray) {
    return dataArray
        .reduce((acc, curr) => {
            const state = curr['location']['state'].toLowerCase();
            const gender = curr['gender'];
            if(!acc.total[state]) {
                acc.total[state] = 0;
            }
            if(!acc[gender][state]) {
                acc[gender][state] = 0;
            }
            acc.total[state]++;
            acc[gender][state]++;
            return acc;
        }, {total: {}, female:{}, male:{}});
}

function percentageAge(dataArray) {
    return dataArray
        .reduce((acc, curr) => {
            const dob = curr['dob'].split(' ')[0];
            const age = parseInt(moment(dob, 'YYYY-MM-DD').fromNow(true).split(' ')[0]);
            switch(true) {
                case (age < 21): 
                    acc['0-20']++; 
                    break;
                case (age > 20 && age < 41): 
                    acc['21-40']++;
                    break;
                case (age > 40 && age < 61): 
                    acc['41-60']++;
                    break;
                case (age > 60 && age < 81): 
                    acc['61-80']++;
                    break;
                case (age > 80 && age < 101): 
                    acc['81-100']++;
                    break;
                case (age > 100): 
                    acc['100+']++;
                    break;
                default:
                    console.log('switching error');
                    break;
            }
            return acc;
        }, {'0-20': 0, '21-40': 0, '41-60': 0, '61-80': 0, '81-100': 0, '100+': 0});
}

module.exports = {percentageFemale, percentageFirst, percentageLast, percentageStates, percentageAge};