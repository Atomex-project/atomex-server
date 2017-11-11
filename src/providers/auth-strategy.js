"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const context_1 = require("@loopback/context");
const authentication_1 = require("@loopback/authentication");
const passport_http_1 = require("passport-http");
let MyAuthStrategyProvider = class MyAuthStrategyProvider {
    constructor(metadata) {
        this.metadata = metadata;
    }
    value() {
        if (!this.metadata) {
            return Promise.reject('Authentication metadata not found');
        }
        const name = this.metadata.strategy;
        if (name === 'BasicStrategy') {
            return new passport_http_1.BasicStrategy(this.verify);
        }
        else {
            return Promise.reject(`The strategy ${name} is not available.`);
        }
    }
    verify(username, password, cb) {
        // find user by name & password
        // call cb(null, false) when user not found
        // call cb(null, userProfile) when user is authenticated
    }
};
MyAuthStrategyProvider = __decorate([
    __param(0, context_1.inject(authentication_1.AuthenticationBindings.METADATA)),
    __metadata("design:paramtypes", [Object])
], MyAuthStrategyProvider);
exports.MyAuthStrategyProvider = MyAuthStrategyProvider;
