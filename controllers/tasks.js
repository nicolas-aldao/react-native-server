"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.home = exports.getTasks = void 0;

var home = function home(req, res) {
  res.send('My Home site');
};

exports.home = home;

var getTasks = function getTasks(req, res) {
  res.send('Oh ye!!');
};

exports.getTasks = getTasks;