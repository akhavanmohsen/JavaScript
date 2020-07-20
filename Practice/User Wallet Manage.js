let AccountOne = {
    UserID : 20,
    UserName : 'MohsenAkhavan',
    UserRole : 'Admin',
    Wallet : 0
}

// the income amount sum to wallet
let Revenue = function (User,Amount) {
    User.Wallet = User.Wallet + Amount
}

//The cost amount subtract from wallet
let Cost = function (User,Amount) {
    User.Wallet = User.Wallet - Amount
}

  
Revenue(AccountOne,1000)
Cost(AccountOne,500)
Revenue(AccountOne,6000)
Revenue(AccountOne,1000)
Cost(AccountOne,800)



console.log(`Dear ${AccountOne.UserName} your current wallet is : ${AccountOne.Wallet}`)