"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _tasks = require("../controllers/tasks");

var router = (0, _express.Router)();
router.get('/', _tasks.home);
router.get('/tasks/count');
router.get('/tasks/:id');
router.get('/tasks', _tasks.getTasks);
router.post('/tasks');
router["delete"]('/tasks/:id');
router.put('/tasks/:id');
var _default = router;
exports["default"] = _default;