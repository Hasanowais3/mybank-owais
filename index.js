#! /usr/bin/env node
"use strict";
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
var inquirer_1 = require("inquirer");
var nanospinner_1 = require("nanospinner");
var chalk_1 = require("chalk");
var customer_js_1 = require("./customer.js");
var customerOptions_js_1 = require("./customerOptions.js");
var sleep = function () { return new Promise(function (r) { return setTimeout(r, 2000); }); };
console.log(chalk_1["default"].bold.rgb(204, 204, 204)("\n   <<<=================================>>>"));
console.log(chalk_1["default"].bold.rgb(204, 204, 204)("<<<===========>>>  ".concat(chalk_1["default"].redBright.bold('MY BANK'), "  <<<===========>>>")));
console.log(chalk_1["default"].bold.rgb(204, 204, 204)("   <<<=================================>>>\n"));
var customers = [];
function Choice() {
    return __awaiter(this, void 0, void 0, function () {
        var option;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, inquirer_1["default"].prompt([{
                            name: "option",
                            message: 'What Would You Like To Do ?',
                            type: 'list',
                            choices: [{ name: 'Create New Account', value: 'C' }, { name: 'Sign In', value: 'S' }]
                        }])];
                case 1:
                    option = (_a.sent()).option;
                    return [2 /*return*/, option];
            }
        });
    });
}
function CreateNewAccount() {
    return __awaiter(this, void 0, void 0, function () {
        function Inputs(name, type) {
            return __awaiter(this, void 0, void 0, function () {
                var _loop_1, state_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _loop_1 = function () {
                                var input, numRegex, customer_1;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0: return [4 /*yield*/, inquirer_1["default"].prompt([{
                                                    name: 'input',
                                                    message: "Enter Your ".concat(name, " : "),
                                                    type: type
                                                }])];
                                        case 1:
                                            input = (_b.sent()).input;
                                            if (!input) {
                                                return [2 /*return*/, "continue"];
                                            }
                                            if (name === Names.ContactNumber) {
                                                numRegex = /^(\+92|0|92)[0-9]{10}$/;
                                                if (!numRegex.test(input)) {
                                                    console.log(chalk_1["default"].redBright("  Use Pakistani Number"));
                                                    return [2 /*return*/, "continue"];
                                                }
                                            }
                                            if (name === Names.UserID) {
                                                customer_1 = customers.filter(function (val) { return val.userId === input; });
                                                if (customer_1.length) {
                                                    console.log(chalk_1["default"].redBright("  This UserID Is Already Taken Try Different"));
                                                    return [2 /*return*/, "continue"];
                                                }
                                            }
                                            return [2 /*return*/, { value: input }];
                                    }
                                });
                            };
                            _a.label = 1;
                        case 1:
                            if (!true) return [3 /*break*/, 3];
                            return [5 /*yield**/, _loop_1()];
                        case 2:
                            state_1 = _a.sent();
                            if (typeof state_1 === "object")
                                return [2 /*return*/, state_1.value];
                            return [3 /*break*/, 1];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        }
        var Names, name, age, contactNumber, pin, userId, customer, spinner;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    (function (Names) {
                        Names["Name"] = "Name";
                        Names["Age"] = "Age";
                        Names["ContactNumber"] = "Contact Number";
                        Names["Pin"] = "Pin";
                        Names["UserID"] = "UserID";
                    })(Names || (Names = {}));
                    return [4 /*yield*/, Inputs(Names.Name, 'string')];
                case 1:
                    name = _a.sent();
                    return [4 /*yield*/, Inputs(Names.Age, 'number')];
                case 2:
                    age = _a.sent();
                    return [4 /*yield*/, Inputs(Names.ContactNumber, 'string')];
                case 3:
                    contactNumber = _a.sent();
                    return [4 /*yield*/, Inputs(Names.Pin, 'number')];
                case 4:
                    pin = _a.sent();
                    return [4 /*yield*/, Inputs(Names.UserID, 'string')];
                case 5:
                    userId = _a.sent();
                    customer = new customer_js_1.Customer(name, age, contactNumber, pin, userId);
                    spinner = (0, nanospinner_1.createSpinner)('Creating Account').start();
                    return [4 /*yield*/, sleep()];
                case 6:
                    _a.sent();
                    customers.push(customer);
                    spinner.success({ text: chalk_1["default"].whiteBright.bgRgb(0, 125, 17)(' Account Created Successfully ') });
                    return [2 /*return*/];
            }
        });
    });
}
function SignIn() {
    return __awaiter(this, void 0, void 0, function () {
        var _a, userID, pin, customer, spinner, userChoice, _b, choice;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, inquirer_1["default"].prompt([
                        {
                            name: 'userID',
                            message: "Enter Your UserID : "
                        },
                        {
                            name: 'pin',
                            message: 'Enter Your Pin : ',
                            type: 'number'
                        }
                    ])];
                case 1:
                    _a = _c.sent(), userID = _a.userID, pin = _a.pin;
                    customer = customers.find(function (val) { return val.userId === userID; });
                    spinner = (0, nanospinner_1.createSpinner)('Signing In').start();
                    return [4 /*yield*/, sleep()];
                case 2:
                    _c.sent();
                    if (!!customer) return [3 /*break*/, 3];
                    spinner.error({ text: chalk_1["default"].whiteBright.bgRed(" No Customer With This UserID") });
                    return [2 /*return*/];
                case 3:
                    if (customer.pin !== pin) {
                        spinner.error({ text: chalk_1["default"].whiteBright.bgRed(" Incorrect PIN") });
                        return [2 /*return*/];
                    }
                    spinner.success({ text: chalk_1["default"].whiteBright.bgRgb(0, 125, 17)('Signed In Successfully') });
                    console.log(chalk_1["default"].whiteBright("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n"));
                    _c.label = 4;
                case 4:
                    if (!true) return [3 /*break*/, 16];
                    return [4 /*yield*/, inquirer_1["default"].prompt([{
                                name: 'userChoice',
                                message: 'Make Your Choice',
                                type: 'rawlist',
                                choices: ['Show Profile', 'Debit', 'Credit', 'Account Balance', 'Transaction History']
                            }])];
                case 5:
                    userChoice = (_c.sent()).userChoice;
                    _b = userChoice;
                    switch (_b) {
                        case 'Show Profile': return [3 /*break*/, 6];
                        case 'Account Balance': return [3 /*break*/, 7];
                        case 'Credit': return [3 /*break*/, 8];
                        case 'Debit': return [3 /*break*/, 10];
                        case 'Transaction History': return [3 /*break*/, 12];
                    }
                    return [3 /*break*/, 13];
                case 6:
                    (0, customerOptions_js_1.DisplayInfo)(customer);
                    return [3 /*break*/, 14];
                case 7:
                    (0, customerOptions_js_1.ShowAccountBalance)(customer);
                    return [3 /*break*/, 14];
                case 8: return [4 /*yield*/, (0, customerOptions_js_1.Credit)(customer)];
                case 9:
                    _c.sent();
                    return [3 /*break*/, 14];
                case 10: return [4 /*yield*/, (0, customerOptions_js_1.Debit)(customer)];
                case 11:
                    _c.sent();
                    return [3 /*break*/, 14];
                case 12:
                    (0, customerOptions_js_1.TransactionHistory)(customer);
                    return [3 /*break*/, 14];
                case 13: return [3 /*break*/, 14];
                case 14: return [4 /*yield*/, inquirer_1["default"].prompt([
                        {
                            name: 'choice',
                            message: 'Select One: ',
                            type: "list",
                            choices: ['Perform Another Task', 'Sign Out']
                        }
                    ])];
                case 15:
                    choice = (_c.sent()).choice;
                    if (choice === 'Sign Out') {
                        console.log(chalk_1["default"].whiteBright("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n"));
                        return [3 /*break*/, 16];
                    }
                    else {
                        console.log(chalk_1["default"].whiteBright("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n"));
                        return [3 /*break*/, 4];
                    }
                    return [3 /*break*/, 4];
                case 16: return [2 /*return*/];
            }
        });
    });
}
while (true) {
    var choice = await Choice();
    if (choice === 'C') {
        await CreateNewAccount();
    }
    else if (choice === 'S') {
        await SignIn();
    }
    // EXIT PROGRAM CHOICE
    var input = await inquirer_1["default"].prompt([
        {
            name: chalk_1["default"].rgb(255, 255, 160)("Do You Want To Exit?"),
            type: "confirm",
            "default": false
        }
    ]);
    var value = await input['\x1B[38;2;255;255;160mDo You Want To Exit?\x1B[39m'];
    if (value) {
        break;
    }
    console.log(chalk_1["default"].whiteBright('\n================================================================'));
    console.log(chalk_1["default"].whiteBright('================================================================\n'));
}
