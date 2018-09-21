//expense-->description (going to be a string: 2 box coffee), amount--> the number about how much we spent
//addExpense method going to takes 2 argument -->description for expense, amount, we need to add after a new object in the array
//so add object with the correct data 
//getAccountSummary is goint to total up all expenses and it's going to print a little message like the following:
//Agnes Brettl has $1250 expenses. 

const account = {
    name: 'Agnes Brettl',
    expenses: [],
    income: [],
    addExpense: function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    addIncome: function (description, amount) {
        this.income.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function () {
        let totalExpenses = 0
        let totalIncome = 0
        let accountBalance = 0

        this.expenses.forEach(function(expense) {
            totalExpenses = totalExpenses + expense.amount
        })

        this.income.forEach(function (income){
            totalIncome = totalIncome + income.amount
        })
        accountBalance = totalIncome - totalExpenses
        return `${this.name} has a balance $${accountBalance}. $${totalIncome} in income. $${totalExpenses} in expenses.`
    },
}


//challange 2
//1. add income array to account
//2. set up and add income method-->description, amount
//3. tweak getAccountSummary

//Agnes Brettl has a balance of $10. $100 in income. $90 in expenses.

account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addIncome('Job', 1000)
console.log(account.getAccountSummary())