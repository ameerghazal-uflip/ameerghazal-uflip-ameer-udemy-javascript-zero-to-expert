// Section 3 Coding Challenge 4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];


function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
        return (bill * 0.15); // this is the tip
    }

    return (bill * 0.2);
}

for (let index = 0; index < bills.length; ++index) {
    tips.push(calcTip(bills[index])); // adds tips to the array
    totals.push(tips[index] + bills[index]); // is applicable since tips at the index is defined
}

console.log(bills, tips, totals);

// Bonus

function calcAverage(arr) // has an array argument 
{
    let sum = 0;
    for (let index = 0; index < arr.length; ++index) {
        sum += arr[index];
    }

    const average = (sum / arr.length);
    return average;

}

console.log(calcAverage(totals));