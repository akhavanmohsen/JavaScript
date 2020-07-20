const userAccount = {
    name : 'mohsen',
    income : [],
    outgo : [],
    addIncome : function (description,amount) {
        this.income.push({
            item : description,
            price : amount
        })
    },
    addOutgo : function (description, amount) {
        this.outgo.push({
            item : description,
            price : amount
        })

    },
    getSummaryAccount : function() {
        let totalIncome = 0
        let totalOutgo = 0
        let totalBalance = 0
        this.income.forEach(function(item) {
            totalIncome = totalIncome + item.amount
        })
        this.income.forEach(function(item){
            totalOutgo = totalOutgo + item.amount
        })
        totalBalance = totalIncome - totalOutgo
        return (
           `${this.name} your balance is: ${totalBalance} and total of income is : ${totalIncome} and total of outgo is : ${totalOutgo}` 
        )
    }
    
}


addIncome('project' , 50)
addIncome('sallary' , 100)
addIncome('father' , 200)
addOutgo('book' , 30)
addOutgo('pizaa' , 50)

console.log(getSummaryAccount)