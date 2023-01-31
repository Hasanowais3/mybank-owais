"use strict";
exports.__esModule = true;
exports.BankAccount = void 0;
var BankAccount = /** @class */ (function () {
    function BankAccount() {
        this.accountNumber = Math.floor(Math.random() * (9 * (Math.pow(10, 10)))) + (Math.pow(10, 10));
        this.transactionHistory = [];
        this.accountBalance = 100;
    }
    BankAccount.prototype.Debit = function (amount) {
        var index = String(new Date()).lastIndexOf(':') + 3;
        var date = String(new Date()).slice(0, index);
        this.accountBalance -= amount;
        this.transactionHistory.push({ type: 'Debit', amount: amount, date: date, fee: 0 });
    };
    BankAccount.prototype.Credit = function (amount) {
        var index = String(new Date()).lastIndexOf(':') + 3;
        var date = String(new Date()).slice(0, index);
        if (amount > 100) {
            this.accountBalance += amount - 1;
            this.transactionHistory.push({ type: 'Credit', amount: amount, date: date, fee: 1 });
        }
        else {
            this.accountBalance += amount;
            this.transactionHistory.push({ type: 'Credit', amount: amount, date: date, fee: 0 });
        }
    };
    return BankAccount;
}());
exports.BankAccount = BankAccount;
