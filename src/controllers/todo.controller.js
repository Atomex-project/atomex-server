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
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repository_1 = require("@loopback/repository");
const index_1 = require("../repositories/index");
let TodoController = class TodoController {
    constructor(todoRepo) {
        this.todoRepo = todoRepo;
    }
    async createTodo(todo) {
        if (!todo.title) {
            return Promise.reject(new rest_1.HttpErrors.BadRequest('title is required'));
        }
        const result = await this.todoRepo.create(todo);
        return result;
    }
    async findTodoById(id, items) {
        return await this.todoRepo.findById(id);
    }
    async findTodos() {
        return await this.todoRepo.find();
    }
    async replaceTodo(id, todo) {
        return await this.todoRepo.replaceById(id, todo);
    }
    async updateTodo(id, todo) {
        return await this.todoRepo.updateById(id, todo);
    }
    async deleteTodo(id) {
        return await this.todoRepo.deleteById(id);
    }
};
__decorate([
    rest_1.post('/todo'),
    rest_1.param.body('todo', models_1.TodoSchema),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Todo]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "createTodo", null);
__decorate([
    rest_1.get('/todo/{id}'),
    rest_1.param.path.number('id'),
    rest_1.param.query.boolean('items'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Boolean]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "findTodoById", null);
__decorate([
    rest_1.get('/todo'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "findTodos", null);
__decorate([
    rest_1.put('/todo/{id}'),
    rest_1.param.path.number('id'),
    rest_1.param.body('todo', models_1.TodoSchema),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Todo]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "replaceTodo", null);
__decorate([
    rest_1.patch('/todo/{id}'),
    rest_1.param.path.number('id'),
    rest_1.param.body('todo', models_1.TodoSchema),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Todo]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "updateTodo", null);
__decorate([
    rest_1.del('/todo/{id}'),
    rest_1.param.path.number('id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "deleteTodo", null);
TodoController = __decorate([
    __param(0, repository_1.repository('todo')),
    __metadata("design:paramtypes", [index_1.TodoRepository])
], TodoController);
exports.TodoController = TodoController;
