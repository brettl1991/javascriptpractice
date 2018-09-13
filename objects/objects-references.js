let myAccount = {
    name: 'Agnes',
    expenses: 0,
    income: 0
}

let addExpens = function (account, amount) {
   account.expenses = account.expenses + amount
}

//addExpens(myAccount, 2.50)
//console.log(myAccount)

//challange area
//allowed us to add an income to account (addIncome: is going to take the account to manupalet which account we trying to add income for
//and going to take the amount of income we trying to add)
//resetAccount: it is going to reset the expenses and the income for an account to 0
//getAccountSummary: include the current accounts and total and expenses income
//Account for Andrew has $900. $1000 in income. £100 in expenses.
//so addIncome
//addExpens
//addExpens
//getAccountSummary
//resetAccount
//getAccountSummary

let addIncome = function (account, income) {
    account.income = account.income + income
}
 let resetAccount = function (account) {
     account.expenses = 0
     account.income = 0
 }

 let getAccountSummary = function (account) {
     let balance = account.income - account.expenses
     return `Account for ${account.name} has a $${balance}. $${account.income} in income. $${account.expenses} in expenses.`
 }

 addIncome(myAccount, 2000)
 addExpens(myAccount, 250)
 addExpens(myAccount, 160)
 console.log(getAccountSummary(myAccount))
 resetAccount(myAccount)
 console.log(getAccountSummary(myAccount))