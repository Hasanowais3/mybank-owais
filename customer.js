"use strict";
exports.__esModule = true;
exports.Customer = void 0;
var account_js_1 = require("./account.js");
var Customer = /** @class */ (function () {
    function Customer(name, age, contactNumber, pin, userId) {
        this.name = name;
        this.age = age;
        this.contactNumber = contactNumber;
        this.pin = pin;
        this.userId = userId;
        this.bankAccount = new account_js_1.BankAccount();
    }
    return Customer;
}());
exports.Customer = Customer;
