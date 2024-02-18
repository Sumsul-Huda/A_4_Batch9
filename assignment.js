                // problem_1

function calculateMoney(inputQuantity) {
    const titcketTotalPrice = inputQuantity * 120;
    //    total  cost calculae
    const gardCost = 500;
    const stapCost = 8 * 50;

    const totalCost = gardCost + stapCost;
    const AvailableMony = titcketTotalPrice - totalCost;
    if (inputQuantity <= 0) {
        return 'Invalid Number'
    }
    else if (isNaN(inputQuantity)) {
        return "'string value is not allow:',please give  number"
    } else {

        return AvailableMony;
    }
}
// const ticketIs = calculateMoney(10);
// console.log(ticketIs);



                        // problem_2

function checkName(nameIs) {
    if (typeof nameIs !== 'string') {
        return 'invalid';
    }
    const LastLetterOfName = nameIs[nameIs.length - 1].toLowerCase();
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    for (const vowel of vowels) {
        if (vowel.includes(LastLetterOfName)) {
            return 'Good Name';
        } else {
            return 'Bad Name';
        }
    }
}
// const adf=checkName('rohim')
// console.log(adf);

                        // problem-3

function deleteInvalids(inputs) {
    const arryNUmber = [];
    if (!Array.isArray(inputs)) {
        return 'Invalid Array.';
    } else {
        for (const input of inputs) {
            if (typeof input === 'number') {
                arryNUmber.push(input)
            }
        } return arryNUmber;
    }
}
// const arguments=deleteInvalids([33,'rana', 20, 55,'60', 'jon'])
// console.log(arguments);

                    // problem-4

function password(object) {
    
    if (!('name' in object && 'birthYear' in object && 'siteName' in object)) {
        return 'Error! Please provie ectual property.';
    }
    else if(object.birthYear.toString().length!==4){
        return 'invalid';
    }
    else {
        return object.siteName + '#' + object.name + '@'+object.birthYear.toString();
    }
}
// const arguments = password({ name: "toky", birthYearq: 3200, siteName: "Facebook" });
// console.log(arguments);

               // problem-5
function monthlySavings(earn, livingCost) {
    if(isNaN(earn)){
        for(const money of earn){
            console.log(money);
        }
    }else{
        return 'error'
    }
}
const arguments=monthlySavings(['50'])
console.log(arguments);