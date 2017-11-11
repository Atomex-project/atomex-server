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
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
let Todo = class Todo extends repository_1.Entity {
    getId() {
        return this.id;
    }
};
__decorate([
    repository_1.property({
        type: 'number',
        id: true
    }),
    __metadata("design:type", Number)
], Todo.prototype, "id", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        required: true
    }),
    __metadata("design:type", String)
], Todo.prototype, "title", void 0);
__decorate([
    repository_1.property({
        type: 'string'
    }),
    __metadata("design:type", String)
], Todo.prototype, "desc", void 0);
__decorate([
    repository_1.property({
        type: 'boolean'
    }),
    __metadata("design:type", Boolean)
], Todo.prototype, "isComplete", void 0);
Todo = __decorate([
    repository_1.model()
], Todo);
exports.Todo = Todo;
exports.TodoSchema = {
    title: 'todoItem',
    properties: {
        id: {
            type: 'number',
            description: 'ID number of the Todo entry.'
        },
        title: {
            type: 'string',
            description: 'Title of the Todo entry.'
        },
        desc: {
            type: 'number',
            description: 'ID number of the Todo entry.'
        },
        isComplete: {
            type: 'boolean',
            description: 'Whether or not the Todo entry is complete.'
        }
    }
};
