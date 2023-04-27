"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloApp = void 0;
const react_1 = __importDefault(require("react"));
const HelloApp = (props) => {
    return react_1.default.createElement("div", { style: { fontSize: '40px', textAlign: 'center', fontWeight: 'bolder', color: 'cadetblue' } }, "Hello From Auto Published Lib 2 update - new live ci for taylor");
};
exports.HelloApp = HelloApp;
