"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateMethodInitSpec(e, a) { _checkPrivateRedeclaration(e, a), a.add(e); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
var Todo = require('./todo');
var _TodoList_brand = /*#__PURE__*/new WeakSet();
var TodoList = /*#__PURE__*/function () {
  function TodoList(title) {
    _classCallCheck(this, TodoList);
    _classPrivateMethodInitSpec(this, _TodoList_brand);
    this.title = title;
    this.todos = [];
  }
  return _createClass(TodoList, [{
    key: "add",
    value: function add(todo) {
      if (todo instanceof Todo) {
        this.todos.push(todo);
      } else throw new TypeError('can only add Todo objects');
    }
  }, {
    key: "size",
    value: function size() {
      return this.todos.length;
    }
  }, {
    key: "first",
    value: function first() {
      return this.todos[0];
    }
  }, {
    key: "last",
    value: function last() {
      return this.todos[this.size() - 1];
    }
  }, {
    key: "itemAt",
    value: function itemAt(position) {
      _assertClassBrand(_TodoList_brand, this, _validateIndex).call(this, position);
      return this.todos[position];
    }
  }, {
    key: "markDoneAt",
    value: function markDoneAt(position) {
      this.itemAt(position).markDone();
    }
  }, {
    key: "markUndoneAt",
    value: function markUndoneAt(position) {
      this.itemAt(position).markUndone();
    }
  }, {
    key: "isDone",
    value: function isDone() {
      var _iterator = _createForOfIteratorHelper(this.todos),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var todo = _step.value;
          if (!todo.isDone()) return false;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return true;
    }
  }, {
    key: "shift",
    value: function shift() {
      return this.todos.shift();
    }
  }, {
    key: "pop",
    value: function pop() {
      return this.todos.pop();
    }
  }, {
    key: "removeAt",
    value: function removeAt(position) {
      return this.todos.splice(this.itemAt(position), 1);
    }
  }, {
    key: "toString",
    value: function toString() {
      var displayArray = ['---- Today\'s Todos ----'];
      this.todos.forEach(function (todo) {
        return displayArray.push(todo.toString());
      });
      var displayString = displayArray.join('\n');
      return displayString;
    }
  }, {
    key: "forEach",
    value: function forEach(callback) {
      function forEach(arr, callback, context) {
        for (var idx = 0; idx < arr.length; idx++) {
          if (context) callback.call(context, arr[idx]);else callback(arr[idx], idx, arr);
        }
      }
      forEach(this.todos, callback);
    }
  }, {
    key: "filter",
    value: function filter(callback) {
      var newList = new TodoList(this.title);
      this.forEach(function (todo) {
        if (callback(todo)) {
          newList.add(todo);
        }
      });
      return newList;
    }
  }, {
    key: "findByTitle",
    value: function findByTitle(title) {
      var filteredTodos = this.filter(function (todo) {
        return todo.title === title;
      });
      var firstTodo = filteredTodos.first();
      return firstTodo;
    }
  }, {
    key: "allDone",
    value: function allDone() {
      return this.filter(function (todo) {
        return todo.isDone();
      });
    }
  }, {
    key: "allNotDone",
    value: function allNotDone() {
      return this.filter(function (todo) {
        return !todo.isDone();
      });
    }
  }, {
    key: "markDone",
    value: function markDone(title) {
      if (this.findByTitle(title)) this.findByTitle(title).markDone();
    }
  }, {
    key: "markAllDone",
    value: function markAllDone() {
      this.forEach(function (todo) {
        return todo.markDone();
      });
    }
  }, {
    key: "markAllUndone",
    value: function markAllUndone() {
      this.forEach(function (todo) {
        return todo.markUndone();
      });
    }
  }, {
    key: "toArray",
    value: function toArray() {
      return _toConsumableArray(this.todos);
    }
  }]);
}();
function _validateIndex(position) {
  if (!this.todos.hasOwnProperty(position)) {
    throw new ReferenceError("invalid index: ".concat(position));
  }
}
module.exports = TodoList;