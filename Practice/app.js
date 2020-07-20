const userAccount = {
    name : 'mohsen',
    income : [],
    outgo : [],
}
let sumIncome = 0
let sumOutgo = 0


const addIncome = function(title, price) {
    userAccount.income.push(title,price)
}

const addOutgo = function(title, price) {
    userAccount.outgo.push(title,price)
}

const accountSummary = function(account) {
    for ( i=1 ; i < account.income.length ; i= i+2 ) {
        sumIncome = sumIncome + account.income[i]
        } 
    for (i=1 ; i < account.outgo.length ; i= i+2) {
        sumOutgo = sumOutgo + account.outgo[i]
    }
}

addIncome('project' , 50)
addIncome('sallary' , 100)
addIncome('father' , 200)
addOutgo('book' , 30)
addOutgo('pizaa' , 50)

//console.log(userAccount.outgo)
accountSummary(userAccount)
console.log(` Your total income is ${sumIncome} and total outgo is ${sumOutgo} and finaly your balance is ${sumIncome-sumOutgo}`)