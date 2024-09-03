//Task 1: Create a Constructor Function for the Account Object

function Account(accountNumber, owner, balance = 0) {
    this.accountNumber = accountNumber;
    this.owner = owner;
    this.balance = balance;
}

//Task 2: Implement Methods to Deposit and Withdraw Funds

Account.prototype.deposit = function(amount) {
    if (amount > 0) {
        this.balance += amount;
        console.log(`Deposited: $${amount}. New balance: $${this.balance}.`);
    } else {
        console.log('Deposit amount must be positive.');
    }
};

Account.prototype.withdraw = function(amount) {
    if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrew: $${amount}. New balance: $${this.balance}.`);
    } else {
        console.log('Insufficient funds or invalid amount.');
    }
};

//Task 3: Create a Method to Calculate Compound Interest

Account.prototype.calculateCompoundInterest = function(rate, years) {
    const compoundInterest = this.balance * Math.pow((1 + rate / 100), years);
    console.log(`Compound interest after ${years} years at ${rate}%: $${compoundInterest.toFixed(2)}`);
    return compoundInterest;
};


Account.prototype.calculateCompoundInterest = function(rate, years) {
    const compoundInterest = this.balance * Math.pow((1 + rate / 100), years);
    console.log(`Compound interest after ${years} years at ${rate}%: $${compoundInterest.toFixed(2)}`);
    return compoundInterest;
};


//Usage

let account1 = new Account('123456', 'Alice');

account1.deposit(500);
account1.withdraw(200);
account1.calculateCompoundInterest(5, 2);

// Output:
// Deposited: $500. New balance: $500.
// Withdrew: $200. New balance: $300.
// Compound interest after 2 years at 5%: $330.75
