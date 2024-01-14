class BankAccount {
    constructor(accNum, balance) {
        this.accNum = accNum
        this.balance = balance
    }

    deposit(amount) {
        return this.balance += amount
    }

    withdraw(amount) {
        return this.balance -= amount
    }

    displayBalance() {
        return this.balance
    }
}

const account = new BankAccount('Sberbank123', 0)

account.deposit(1500)

account.withdraw(232)

console.log(account.displayBalance())

account.withdraw(100)

console.log(account.displayBalance())