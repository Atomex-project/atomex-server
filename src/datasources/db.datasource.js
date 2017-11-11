"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const fs = require("fs");
const repository_1 = require("@loopback/repository");
const dsConfigPath = path.resolve('config', 'datasources.json');
const config = JSON.parse(fs.readFileSync(dsConfigPath, 'utf8'));
exports.db = new repository_1.DataSourceConstructor(config);
