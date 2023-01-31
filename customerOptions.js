"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.TransactionHistory = exports.Debit = exports.Credit = exports.ShowAccountBalance = exports.DisplayInfo = void 0;
var chalk_1 = require("chalk");
var inquirer_1 = require("inquirer");
var nanospinner_1 = require("nanospinner");
var sleep = function () { return new Promise(function (r) { return setTimeout(r, 2000); }); };
function DisplayInfo(customer) {
    console.log(chalk_1["default"].whiteBright("--------------------------------------"));
    console.log(chalk_1["default"].whiteBright("".concat(chalk_1["default"].bgRgb(1, 59, 52)("Name            : "), " ").concat(customer.name)));
    console.log(chalk_1["default"].whiteBright("".concat(chalk_1["default"].bgRgb(1, 59, 52)("Age             : "), " ").concat(customer.age)));
    console.log(chalk_1["default"].whiteBright("".concat(chalk_1["default"].bgRgb(1, 59, 52)("Contact Number  : "), " ").concat(customer.contactNumber)));
    console.log(chalk_1["default"].whiteBright("".concat(chalk_1["default"].bgRgb(1, 59, 52)("UserID          : "), " ").concat(customer.userId)));
    console.log(chalk_1["default"].whiteBright("".concat(chalk_1["default"].bgRgb(1, 59, 52)("Account Balance : "), " RS: ").concat(customer.bankAccount.accountBalance)));
    console.log(chalk_1["default"].whiteBright("".concat(chalk_1["default"].bgRgb(1, 59, 52)("Account Number  : "), " ").concat(customer.bankAccount.accountNumber)));
    console.log(chalk_1["default"].whiteBright("--------------------------------------"));
}
exports.DisplayInfo = DisplayInfo;
function ShowAccountBalance(customer) {
    console.log(chalk_1["default"].whiteBright("--------------------------------------"));
    console.log(chalk_1["default"].whiteBright("".concat(chalk_1["default"].bgRgb(1, 59, 52)("Account Balance : "), " RS: ").concat(customer.bankAccount.accountBalance)));
    console.log(chalk_1["default"].whiteBright("--------------------------------------"));
}
exports.ShowAccountBalance = ShowAccountBalance;
function Credit(customer) {
    return __awaiter(this, void 0, void 0, function () {
        var amount, spinner;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!true) return [3 /*break*/, 3];
                    return [4 /*yield*/, inquirer_1["default"].prompt([{
                                name: 'amount',
                                message: 'Enter Amount : ',
                                type: 'number'
                            }])];
                case 1:
                    amount = (_a.sent()).amount;
                    spinner = (0, nanospinner_1.createSpinner)('Processing').start();
                    return [4 /*yield*/, sleep()];
                case 2:
                    _a.sent();
                    if (!amount) {
                        spinner.error({ text: chalk_1["default"].whiteBright.bgRedBright(" Enter Correct Amount") });
                        return [3 /*break*/, 0];
                    }
                    customer.bankAccount.Credit(amount);
                    spinner.success({ text: chalk_1["default"].whiteBright.bgRgb(0, 125, 17)("".concat(amount > 100 ? 'Transaction Sccessful' : 'Transaction Sccessful And RS:1 Minus', " ")) });
                    return [2 /*return*/];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.Credit = Credit;
function Debit(customer) {
    return __awaiter(this, void 0, void 0, function () {
        var amount, spinner;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!true) return [3 /*break*/, 3];
                    return [4 /*yield*/, inquirer_1["default"].prompt([{
                                name: 'amount',
                                message: 'Enter Amount : ',
                                type: 'number'
                            }])];
                case 1:
                    amount = (_a.sent()).amount;
                    spinner = (0, nanospinner_1.createSpinner)('Processing').start();
                    return [4 /*yield*/, sleep()];
                case 2:
                    _a.sent();
                    if (!amount) {
                        spinner.error({ text: chalk_1["default"].whiteBright.bgRedBright(" Enter Correct Amount") });
                        return [3 /*break*/, 0];
                    }
                    if (amount > customer.bankAccount.accountBalance) {
                        spinner.error({ text: chalk_1["default"].whiteBright.bgRedBright(" Amount is Greater than Your Balance") });
                        return [2 /*return*/];
                    }
                    customer.bankAccount.Debit(amount);
                    spinner.success({ text: chalk_1["default"].whiteBright.bgRgb(0, 125, 17)("Transaction Sccessful") });
                    return [2 /*return*/];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.Debit = Debit;
function TransactionHistory(customer) {
    if (!customer.bankAccount.transactionHistory.length) {
        console.log(" No Transaction Available");
        return;
    }
    console.table(customer.bankAccount.transactionHistory.map(function (val) { return __assign(__assign({}, val), { fee: "RS: ".concat(val.fee), amount: "RS: ".concat(val.amount) }); }));
}
exports.TransactionHistory = TransactionHistory;
