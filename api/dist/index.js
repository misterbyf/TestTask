/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./controllers/answer.controller.js":
/*!******************************************!*\
  !*** ./controllers/answer.controller.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createAnswer": () => (/* binding */ createAnswer),
/* harmony export */   "getAnswer": () => (/* binding */ getAnswer),
/* harmony export */   "getAnswers": () => (/* binding */ getAnswers)
/* harmony export */ });
/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http-status */ "http-status");
/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http_status__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_Answer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/Answer */ "./models/Answer.js");
/* harmony import */ var _models_Survey__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/Survey */ "./models/Survey.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





function createAnswer(_x, _x2, _x3) {
  return _createAnswer.apply(this, arguments);
}

function _createAnswer() {
  _createAnswer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var _id, url, data, survey, answer, result;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _id = req.user._id;
            url = req.params.url;
            data = req.body;
            _context.next = 6;
            return _models_Survey__WEBPACK_IMPORTED_MODULE_2__.default.findOne({
              url: url
            });

          case 6:
            survey = _context.sent;

            if (survey) {
              _context.next = 9;
              break;
            }

            return _context.abrupt("return", res.status((http_status__WEBPACK_IMPORTED_MODULE_0___default().NOT_FOUND)).json({
              message: 'Survey not found.'
            }));

          case 9:
            if (data) {
              _context.next = 11;
              break;
            }

            return _context.abrupt("return", res.status((http_status__WEBPACK_IMPORTED_MODULE_0___default().BAD_REQUEST)).json({
              message: 'Data is empty.'
            }));

          case 11:
            answer = new _models_Answer__WEBPACK_IMPORTED_MODULE_1__.default({
              user: _id,
              survey: survey._id,
              data: data
            });
            _context.next = 14;
            return answer.save();

          case 14:
            result = _context.sent;
            return _context.abrupt("return", res.status((http_status__WEBPACK_IMPORTED_MODULE_0___default().CREATED)).json(result));

          case 18:
            _context.prev = 18;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", next(_context.t0));

          case 21:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 18]]);
  }));
  return _createAnswer.apply(this, arguments);
}

function getAnswer(_x4, _x5, _x6) {
  return _getAnswer.apply(this, arguments);
}

function _getAnswer() {
  _getAnswer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
    var _req$params, url, id, survey, answer;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _req$params = req.params, url = _req$params.url, id = _req$params.id;
            _context2.next = 4;
            return _models_Survey__WEBPACK_IMPORTED_MODULE_2__.default.findOne({
              url: url
            });

          case 4:
            survey = _context2.sent;

            if (survey) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", res.status((http_status__WEBPACK_IMPORTED_MODULE_0___default().NOT_FOUND)).json({
              message: 'Survey with same email not found.'
            }));

          case 7:
            _context2.next = 9;
            return _models_Answer__WEBPACK_IMPORTED_MODULE_1__.default.findById(id).populate('survey');

          case 9:
            answer = _context2.sent;

            if (answer) {
              _context2.next = 12;
              break;
            }

            return _context2.abrupt("return", res.status((http_status__WEBPACK_IMPORTED_MODULE_0___default().NOT_FOUND)).json({
              message: 'Answer with same id not found.'
            }));

          case 12:
            return _context2.abrupt("return", res.status(200).json(answer));

          case 15:
            _context2.prev = 15;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", next(_context2.t0));

          case 18:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 15]]);
  }));
  return _getAnswer.apply(this, arguments);
}

function getAnswers(_x7, _x8, _x9) {
  return _getAnswers.apply(this, arguments);
}

function _getAnswers() {
  _getAnswers = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res, next) {
    var url, survey, answer;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            url = req.params.url;
            _context3.next = 4;
            return _models_Survey__WEBPACK_IMPORTED_MODULE_2__.default.findOne({
              url: url
            });

          case 4:
            survey = _context3.sent;
            _context3.next = 7;
            return _models_Answer__WEBPACK_IMPORTED_MODULE_1__.default.find({}).populate('survey');

          case 7:
            answer = _context3.sent;

            if (survey) {
              _context3.next = 10;
              break;
            }

            return _context3.abrupt("return", res.status((http_status__WEBPACK_IMPORTED_MODULE_0___default().NOT_FOUND)).json({
              message: 'Survey with same email not found.'
            }));

          case 10:
            return _context3.abrupt("return", res.status((http_status__WEBPACK_IMPORTED_MODULE_0___default().OK)).json(answer));

          case 13:
            _context3.prev = 13;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", next(_context3.t0));

          case 16:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 13]]);
  }));
  return _getAnswers.apply(this, arguments);
}



/***/ }),

/***/ "./controllers/auth.controller.js":
/*!****************************************!*\
  !*** ./controllers/auth.controller.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "login": () => (/* binding */ login),
/* harmony export */   "register": () => (/* binding */ register),
/* harmony export */   "googleAuthorization": () => (/* binding */ googleAuthorization)
/* harmony export */ });
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcrypt */ "bcrypt");
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! http-status */ "http-status");
/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(http_status__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_init_redis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/init.redis */ "./utils/init.redis.js");
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/User */ "./models/User.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






var SECRET_KEY = process.env.JWT;
var saltRounds = 10;

function login(_x, _x2, _x3) {
  return _login.apply(this, arguments);
}

function _login() {
  _login = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var _req$body, email, password, user, passwordResult, token;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, email = _req$body.email, password = _req$body.password;
            _context.next = 4;
            return _models_User__WEBPACK_IMPORTED_MODULE_4__.default.findOne({
              email: email
            });

          case 4:
            user = _context.sent;

            if (user) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", res.status((http_status__WEBPACK_IMPORTED_MODULE_2___default().NOT_FOUND)).json({
              message: 'User does not exist.'
            }));

          case 7:
            _context.next = 9;
            return bcrypt__WEBPACK_IMPORTED_MODULE_0___default().compare(password, user.password);

          case 9:
            passwordResult = _context.sent;

            if (passwordResult) {
              _context.next = 12;
              break;
            }

            return _context.abrupt("return", res.status((http_status__WEBPACK_IMPORTED_MODULE_2___default().BAD_REQUEST)).json({
              message: 'Incorrect password.'
            }));

          case 12:
            token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().sign({
              userId: user._id,
              email: user.email
            }, SECRET_KEY, {
              expiresIn: 60 * 60
            });
            _context.next = 15;
            return _utils_init_redis__WEBPACK_IMPORTED_MODULE_3__.default.set(token.toString(), user._id.toString(), 'EX', 60 * 60);

          case 15:
            return _context.abrupt("return", res.cookie('jwt', token, {
              signed: true,
              httpOnly: true
            }).status((http_status__WEBPACK_IMPORTED_MODULE_2___default().OK)).json({
              token: "Bearer ".concat(token)
            }));

          case 18:
            _context.prev = 18;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", next(_context.t0));

          case 21:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 18]]);
  }));
  return _login.apply(this, arguments);
}

function register(_x4, _x5, _x6) {
  return _register.apply(this, arguments);
}

function _register() {
  _register = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
    var _req$body2, name, email, password, candidate, salt, user;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _req$body2 = req.body, name = _req$body2.name, email = _req$body2.email, password = _req$body2.password;
            _context2.next = 4;
            return _models_User__WEBPACK_IMPORTED_MODULE_4__.default.findOne({
              email: email
            });

          case 4:
            candidate = _context2.sent;

            if (!candidate) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", res.status((http_status__WEBPACK_IMPORTED_MODULE_2___default().BAD_REQUEST)).json({
              message: 'User with same email has been created.'
            }));

          case 7:
            salt = bcrypt__WEBPACK_IMPORTED_MODULE_0___default().genSaltSync(saltRounds);
            user = new _models_User__WEBPACK_IMPORTED_MODULE_4__.default({
              name: name,
              email: email,
              password: bcrypt__WEBPACK_IMPORTED_MODULE_0___default().hashSync(password, salt)
            });
            _context2.next = 11;
            return user.save();

          case 11:
            return _context2.abrupt("return", res.status((http_status__WEBPACK_IMPORTED_MODULE_2___default().CREATED)).json(user));

          case 14:
            _context2.prev = 14;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", next(_context2.t0));

          case 17:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 14]]);
  }));
  return _register.apply(this, arguments);
}

function googleAuthorization(_x7, _x8, _x9) {
  return _googleAuthorization.apply(this, arguments);
}

function _googleAuthorization() {
  _googleAuthorization = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res, next) {
    var email, user, token;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            email = req.user.email;
            _context3.next = 4;
            return _models_User__WEBPACK_IMPORTED_MODULE_4__.default.findOne({
              email: email
            });

          case 4:
            user = _context3.sent;

            if (user) {
              _context3.next = 7;
              break;
            }

            return _context3.abrupt("return", res.status((http_status__WEBPACK_IMPORTED_MODULE_2___default().NOT_FOUND)).json({
              message: 'User does not exist.'
            }));

          case 7:
            token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().sign({
              userId: user._id,
              email: user.email
            }, SECRET_KEY, {
              expiresIn: 60 * 60
            });
            _context3.next = 10;
            return _utils_init_redis__WEBPACK_IMPORTED_MODULE_3__.default.set(token.toString(), user._id.toString(), 'EX', 60 * 60);

          case 10:
            return _context3.abrupt("return", res.cookie('jwt', token, {
              signed: true,
              httpOnly: true
            }).status((http_status__WEBPACK_IMPORTED_MODULE_2___default().OK)).json({
              token: "Bearer ".concat(token)
            }));

          case 13:
            _context3.prev = 13;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", next(_context3.t0));

          case 16:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 13]]);
  }));
  return _googleAuthorization.apply(this, arguments);
}



/***/ }),

/***/ "./controllers/survey.controller.js":
/*!******************************************!*\
  !*** ./controllers/survey.controller.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSurvey": () => (/* binding */ createSurvey),
/* harmony export */   "getSurvey": () => (/* binding */ getSurvey),
/* harmony export */   "updateSurvey": () => (/* binding */ updateSurvey),
/* harmony export */   "removeSurvey": () => (/* binding */ removeSurvey)
/* harmony export */ });
/* harmony import */ var _models_Survey__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/Survey */ "./models/Survey.js");
/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! http-status */ "http-status");
/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(http_status__WEBPACK_IMPORTED_MODULE_1__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




function createSurvey(_x, _x2, _x3) {
  return _createSurvey.apply(this, arguments);
}

function _createSurvey() {
  _createSurvey = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var _req$body, name, url, questions, result, survey;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, name = _req$body.name, url = _req$body.url, questions = _req$body.questions;
            _context.next = 4;
            return _models_Survey__WEBPACK_IMPORTED_MODULE_0__.default.findOne({
              url: url
            });

          case 4:
            result = _context.sent;

            if (!result) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", res.status((http_status__WEBPACK_IMPORTED_MODULE_1___default().BAD_REQUEST)).json({
              message: 'Survey with same email not found.'
            }));

          case 7:
            survey = new _models_Survey__WEBPACK_IMPORTED_MODULE_0__.default({
              name: name,
              url: url,
              questions: questions
            });
            _context.next = 10;
            return survey.save();

          case 10:
            return _context.abrupt("return", res.status((http_status__WEBPACK_IMPORTED_MODULE_1___default().CREATED)).json(survey));

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", next(_context.t0));

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 13]]);
  }));
  return _createSurvey.apply(this, arguments);
}

function getSurvey(_x4, _x5, _x6) {
  return _getSurvey.apply(this, arguments);
}

function _getSurvey() {
  _getSurvey = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
    var id, survey;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            id = req.params.id;
            _context2.next = 4;
            return _models_Survey__WEBPACK_IMPORTED_MODULE_0__.default.findById(id);

          case 4:
            survey = _context2.sent;

            if (survey) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", res.status((http_status__WEBPACK_IMPORTED_MODULE_1___default().NOT_FOUND)).json({
              message: 'Survey with same id not found.'
            }));

          case 7:
            return _context2.abrupt("return", res.status((http_status__WEBPACK_IMPORTED_MODULE_1___default().OK)).json(survey));

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", next(_context2.t0));

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 10]]);
  }));
  return _getSurvey.apply(this, arguments);
}

function updateSurvey(_x7, _x8, _x9) {
  return _updateSurvey.apply(this, arguments);
}

function _updateSurvey() {
  _updateSurvey = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res, next) {
    var id, _req$body2, name, url, questions, survey, reloadSurvey;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _req$body2 = req.body, name = _req$body2.name, url = _req$body2.url, questions = _req$body2.questions;
            _context3.next = 5;
            return _models_Survey__WEBPACK_IMPORTED_MODULE_0__.default.findById(id);

          case 5:
            survey = _context3.sent;

            if (survey) {
              _context3.next = 8;
              break;
            }

            return _context3.abrupt("return", res.status((http_status__WEBPACK_IMPORTED_MODULE_1___default().NOT_FOUND)).json({
              message: 'Survey with same id not found.'
            }));

          case 8:
            _context3.next = 10;
            return _models_Survey__WEBPACK_IMPORTED_MODULE_0__.default.updateOne({
              _id: id
            }, {
              $set: {
                name: name,
                url: url,
                questions: questions
              }
            }, {
              "new": true
            });

          case 10:
            reloadSurvey = _context3.sent;
            return _context3.abrupt("return", res.status((http_status__WEBPACK_IMPORTED_MODULE_1___default().OK)).json(reloadSurvey));

          case 14:
            _context3.prev = 14;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", next(_context3.t0));

          case 17:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 14]]);
  }));
  return _updateSurvey.apply(this, arguments);
}

function removeSurvey(_x10, _x11, _x12) {
  return _removeSurvey.apply(this, arguments);
}

function _removeSurvey() {
  _removeSurvey = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res, next) {
    var id, survey, result;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            _context4.next = 4;
            return _models_Survey__WEBPACK_IMPORTED_MODULE_0__.default.findById(id);

          case 4:
            survey = _context4.sent;

            if (survey) {
              _context4.next = 7;
              break;
            }

            return _context4.abrupt("return", res.status((http_status__WEBPACK_IMPORTED_MODULE_1___default().NOT_FOUND)).json({
              message: 'Survey with same id not found.'
            }));

          case 7:
            _context4.next = 9;
            return _models_Survey__WEBPACK_IMPORTED_MODULE_0__.default.remove(id);

          case 9:
            result = _context4.sent;
            return _context4.abrupt("return", res.status((http_status__WEBPACK_IMPORTED_MODULE_1___default().OK)).json(result));

          case 13:
            _context4.prev = 13;
            _context4.t0 = _context4["catch"](0);
            return _context4.abrupt("return", next(_context4.t0));

          case 16:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 13]]);
  }));
  return _removeSurvey.apply(this, arguments);
}



/***/ }),

/***/ "./controllers/user.controller.js":
/*!****************************************!*\
  !*** ./controllers/user.controller.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createUser": () => (/* binding */ createUser),
/* harmony export */   "getUser": () => (/* binding */ getUser),
/* harmony export */   "updateUser": () => (/* binding */ updateUser)
/* harmony export */ });
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/User */ "./models/User.js");
/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! http-status */ "http-status");
/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(http_status__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcrypt */ "bcrypt");
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_2__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var saltRounds = 10;

function createUser(_x, _x2, _x3) {
  return _createUser.apply(this, arguments);
}

function _createUser() {
  _createUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var _req$body, name, email, password, candidate, salt, user;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, name = _req$body.name, email = _req$body.email, password = _req$body.password;
            _context.next = 4;
            return _models_User__WEBPACK_IMPORTED_MODULE_0__.default.findOne({
              email: email
            });

          case 4:
            candidate = _context.sent;

            if (!candidate) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", res.status((http_status__WEBPACK_IMPORTED_MODULE_1___default().BAD_REQUEST)).json({
              message: 'User with same email has been created.'
            }));

          case 7:
            salt = bcrypt__WEBPACK_IMPORTED_MODULE_2___default().genSaltSync(saltRounds);
            user = new _models_User__WEBPACK_IMPORTED_MODULE_0__.default({
              name: name,
              email: email,
              password: bcrypt__WEBPACK_IMPORTED_MODULE_2___default().hashSync(password, salt)
            });
            _context.next = 11;
            return user.save();

          case 11:
            return _context.abrupt("return", res.status((http_status__WEBPACK_IMPORTED_MODULE_1___default().CREATED)).json(user));

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", next(_context.t0));

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 14]]);
  }));
  return _createUser.apply(this, arguments);
}

function getUser(_x4, _x5, _x6) {
  return _getUser.apply(this, arguments);
}

function _getUser() {
  _getUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
    var id, user;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            id = req.params.id;
            _context2.next = 4;
            return _models_User__WEBPACK_IMPORTED_MODULE_0__.default.findById(id);

          case 4:
            user = _context2.sent;

            if (user) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", res.status((http_status__WEBPACK_IMPORTED_MODULE_1___default().BAD_REQUEST)).json({
              message: 'User does not exist.'
            }));

          case 7:
            return _context2.abrupt("return", res.status((http_status__WEBPACK_IMPORTED_MODULE_1___default().OK)).json(user));

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", next(_context2.t0));

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 10]]);
  }));
  return _getUser.apply(this, arguments);
}

function updateUser(_x7, _x8, _x9) {
  return _updateUser.apply(this, arguments);
}

function _updateUser() {
  _updateUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res, next) {
    var id, _req$body2, name, email, password, candidate, salt, user;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _req$body2 = req.body, name = _req$body2.name, email = _req$body2.email, password = _req$body2.password;
            _context3.next = 5;
            return _models_User__WEBPACK_IMPORTED_MODULE_0__.default.findById(id);

          case 5:
            candidate = _context3.sent;

            if (candidate) {
              _context3.next = 8;
              break;
            }

            return _context3.abrupt("return", res.status((http_status__WEBPACK_IMPORTED_MODULE_1___default().NOT_FOUND)).json({
              message: 'User does not exist.'
            }));

          case 8:
            salt = bcrypt__WEBPACK_IMPORTED_MODULE_2___default().genSaltSync(saltRounds);
            _context3.next = 11;
            return _models_User__WEBPACK_IMPORTED_MODULE_0__.default.updateOne({
              _id: id
            }, {
              $set: {
                name: name,
                email: email,
                password: bcrypt__WEBPACK_IMPORTED_MODULE_2___default().hashSync(password, salt)
              }
            }, {
              "new": true
            });

          case 11:
            user = _context3.sent;
            return _context3.abrupt("return", res.status((http_status__WEBPACK_IMPORTED_MODULE_1___default().OK)).json(user));

          case 15:
            _context3.prev = 15;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", next(_context3.t0));

          case 18:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 15]]);
  }));
  return _updateUser.apply(this, arguments);
}



/***/ }),

/***/ "./middleware/errorHandler.js":
/*!************************************!*\
  !*** ./middleware/errorHandler.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ errorHandler)
/* harmony export */ });
/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http-status */ "http-status");
/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http_status__WEBPACK_IMPORTED_MODULE_0__);

function errorHandler(err, req, res, next) {
  return res.status((http_status__WEBPACK_IMPORTED_MODULE_0___default().INTERNAL_SERVER_ERROR)).json({
    success: false,
    error: err.message ? err.message : err
  });
}

/***/ }),

/***/ "./middleware/middleware.validator.js":
/*!********************************************!*\
  !*** ./middleware/middleware.validator.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ middlewareValidator)
/* harmony export */ });
/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! joi */ "joi");
/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(joi__WEBPACK_IMPORTED_MODULE_0__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


function middlewareValidator(schema) {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
      var body, query, params, newSchema;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              body = req.body, query = req.query, params = req.params;
              newSchema = schema((joi__WEBPACK_IMPORTED_MODULE_0___default()));
              _context.prev = 2;
              _context.next = 5;
              return newSchema.validateAsync({
                body: body,
                query: query,
                params: params
              });

            case 5:
              return _context.abrupt("return", next());

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](2);
              return _context.abrupt("return", next(_context.t0));

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 8]]);
    }));

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
}

/***/ }),

/***/ "./middleware/passportGoogle.js":
/*!**************************************!*\
  !*** ./middleware/passportGoogle.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ middlewareGoogle)
/* harmony export */ });
/* harmony import */ var passport_google_oauth20__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! passport-google-oauth20 */ "passport-google-oauth20");
/* harmony import */ var passport_google_oauth20__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(passport_google_oauth20__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv */ "dotenv");
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/User */ "./models/User.js");
/* harmony import */ var chai_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chai/index */ "chai/index");
/* harmony import */ var chai_index__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(chai_index__WEBPACK_IMPORTED_MODULE_3__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





dotenv__WEBPACK_IMPORTED_MODULE_1___default().config();
var options = {
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_SECRET_KEY,
  callbackURL: "http://localhost:".concat(process.env.PORT, "/api/auth/google/callback")
};
function middlewareGoogle(passport) {
  passport.use(new passport_google_oauth20__WEBPACK_IMPORTED_MODULE_0__.Strategy(options, /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(accessToken, refreshToken, payload, done) {
      var user, newUser;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _models_User__WEBPACK_IMPORTED_MODULE_2__.default.findOne({
                email: payload.emails[0].value
              });

            case 3:
              user = _context.sent;
              if (user) done(null, user);
              _context.next = 7;
              return _models_User__WEBPACK_IMPORTED_MODULE_2__.default.create({
                name: payload.name.givenName,
                email: payload.emails[0].value
              }).save();

            case 7:
              newUser = _context.sent;
              return _context.abrupt("return", done(null, newUser));

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](0);
              return _context.abrupt("return", done(_context.t0));

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 11]]);
    }));

    return function (_x, _x2, _x3, _x4) {
      return _ref.apply(this, arguments);
    };
  }()));
  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });
  passport.deserializeUser(function (id, done) {
    _models_User__WEBPACK_IMPORTED_MODULE_2__.default.findById(id, function (err, user) {
      done(err, user);
    });
  });
}

/***/ }),

/***/ "./middleware/passportJWT.js":
/*!***********************************!*\
  !*** ./middleware/passportJWT.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ middlewareJwt)
/* harmony export */ });
/* harmony import */ var passport_jwt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! passport-jwt */ "passport-jwt");
/* harmony import */ var passport_jwt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(passport_jwt__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv */ "dotenv");
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/User */ "./models/User.js");
/* harmony import */ var _utils_init_redis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/init.redis */ "./utils/init.redis.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





dotenv__WEBPACK_IMPORTED_MODULE_1___default().config();
var SECRET_KEY = process.env.JWT;

var cookieExtractor = function cookieExtractor(req) {
  var token = null;

  if (req && req.signedCookies && req.signedCookies.jwt) {
    token = req.signedCookies.jwt;
  }

  return token;
};

var options = {
  jwtFromRequest: cookieExtractor,
  secretOrKey: SECRET_KEY,
  passReqToCallback: true
};
function middlewareJwt(passport) {
  passport.use(new passport_jwt__WEBPACK_IMPORTED_MODULE_0__.Strategy(options, /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, payload, done) {
      var result, user;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _utils_init_redis__WEBPACK_IMPORTED_MODULE_3__.default.get(req.signedCookies.jwt.toString());

            case 3:
              result = _context.sent;

              if (result) {
                _context.next = 6;
                break;
              }

              return _context.abrupt("return", done(null, false));

            case 6:
              _context.next = 8;
              return _models_User__WEBPACK_IMPORTED_MODULE_2__.default.findById(result);

            case 8:
              user = _context.sent;

              if (user) {
                _context.next = 11;
                break;
              }

              return _context.abrupt("return", done(null, false));

            case 11:
              return _context.abrupt("return", done(null, user));

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](0);
              return _context.abrupt("return", done(_context.t0));

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 14]]);
    }));

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }()));
}

/***/ }),

/***/ "./middleware/schemas.for.validation/authSchema.js":
/*!*********************************************************!*\
  !*** ./middleware/schemas.for.validation/authSchema.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loginSchema": () => (/* binding */ loginSchema),
/* harmony export */   "registerSchema": () => (/* binding */ registerSchema)
/* harmony export */ });
function loginSchema(Joi) {
  return Joi.object().keys({
    query: {},
    params: {},
    body: {
      email: Joi.string().trim().email().required(),
      password: Joi.string().min(5).max(16).required()
    }
  });
}

function registerSchema(Joi) {
  return Joi.object().keys({
    query: {},
    params: {},
    body: {
      name: Joi.string().required(),
      email: Joi.string().trim().email().required(),
      password: Joi.string().min(5).max(16).required()
    }
  });
}



/***/ }),

/***/ "./models/Answer.js":
/*!**************************!*\
  !*** ./models/Answer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

var answerSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
  user: {
    ref: 'User',
    type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.ObjectId,
    required: true
  },
  survey: {
    ref: 'Survey',
    type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.ObjectId,
    required: true
  },
  data: {
    type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.Mixed,
    required: true
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('Answer', answerSchema));

/***/ }),

/***/ "./models/Survey.js":
/*!**************************!*\
  !*** ./models/Survey.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

var reqString = {
  type: String,
  required: true
};
var reqUrl = {
  type: String,
  required: true,
  unique: true
};
var questionSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
  name: {
    type: String
  }
});
var surveySchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
  name: reqString,
  url: reqUrl,
  questions: [questionSchema]
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('Survey', surveySchema));

/***/ }),

/***/ "./models/User.js":
/*!************************!*\
  !*** ./models/User.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

var reqString = {
  type: String,
  required: true
};
var userSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
  name: reqString,
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: reqString
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('User', userSchema));

/***/ }),

/***/ "./routes/answer.js":
/*!**************************!*\
  !*** ./routes/answer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! passport */ "passport");
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _controllers_answer_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/answer.controller */ "./controllers/answer.controller.js");



var router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();
router.route('/:url').post(passport__WEBPACK_IMPORTED_MODULE_1___default().authenticate('jwt', {
  session: false
}), _controllers_answer_controller__WEBPACK_IMPORTED_MODULE_2__.createAnswer).get(passport__WEBPACK_IMPORTED_MODULE_1___default().authenticate('jwt', {
  session: false
}), _controllers_answer_controller__WEBPACK_IMPORTED_MODULE_2__.getAnswers);
router.get('/:url/:id', passport__WEBPACK_IMPORTED_MODULE_1___default().authenticate('jwt', {
  session: false
}), _controllers_answer_controller__WEBPACK_IMPORTED_MODULE_2__.getAnswer);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);

/***/ }),

/***/ "./routes/auth.js":
/*!************************!*\
  !*** ./routes/auth.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! passport */ "passport");
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/auth.controller */ "./controllers/auth.controller.js");
/* harmony import */ var _middleware_schemas_for_validation_authSchema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../middleware/schemas.for.validation/authSchema */ "./middleware/schemas.for.validation/authSchema.js");
/* harmony import */ var _middleware_middleware_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../middleware/middleware.validator */ "./middleware/middleware.validator.js");





var router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();
router.post('/login', (0,_middleware_middleware_validator__WEBPACK_IMPORTED_MODULE_4__.default)(_middleware_schemas_for_validation_authSchema__WEBPACK_IMPORTED_MODULE_3__.loginSchema), _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__.login);
router.post('/register', (0,_middleware_middleware_validator__WEBPACK_IMPORTED_MODULE_4__.default)(_middleware_schemas_for_validation_authSchema__WEBPACK_IMPORTED_MODULE_3__.registerSchema), _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__.register);
router.get('/google', passport__WEBPACK_IMPORTED_MODULE_1___default().authenticate('google', {
  scope: ['profile', 'email']
}));
router.get('/google/callback', passport__WEBPACK_IMPORTED_MODULE_1___default().authenticate('google', {
  failureRedirect: '/api/auth/login'
}), _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__.googleAuthorization);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);

/***/ }),

/***/ "./routes/survey.js":
/*!**************************!*\
  !*** ./routes/survey.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! passport */ "passport");
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _controllers_survey_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/survey.controller */ "./controllers/survey.controller.js");



var router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();
router.route('/:id').get(passport__WEBPACK_IMPORTED_MODULE_1___default().authenticate('jwt', {
  session: false
}), _controllers_survey_controller__WEBPACK_IMPORTED_MODULE_2__.getSurvey)["delete"](passport__WEBPACK_IMPORTED_MODULE_1___default().authenticate('jwt', {
  session: false
}), _controllers_survey_controller__WEBPACK_IMPORTED_MODULE_2__.removeSurvey).put(passport__WEBPACK_IMPORTED_MODULE_1___default().authenticate('jwt', {
  session: false
}), _controllers_survey_controller__WEBPACK_IMPORTED_MODULE_2__.updateSurvey);
router.post('/', passport__WEBPACK_IMPORTED_MODULE_1___default().authenticate('jwt', {
  session: false
}), _controllers_survey_controller__WEBPACK_IMPORTED_MODULE_2__.createSurvey);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);

/***/ }),

/***/ "./routes/user.js":
/*!************************!*\
  !*** ./routes/user.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/user.controller */ "./controllers/user.controller.js");


var router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();
router.route('/:id').get(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__.getUser).put(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__.updateUser);
router.post('/', _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__.createUser);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! body-parser */ "body-parser");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cookie-parser */ "cookie-parser");
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! passport */ "passport");
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! morgan */ "morgan");
/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _middleware_passportJWT__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../middleware/passportJWT */ "./middleware/passportJWT.js");
/* harmony import */ var _middleware_passportGoogle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../middleware/passportGoogle */ "./middleware/passportGoogle.js");
/* harmony import */ var _routes_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../routes/auth */ "./routes/auth.js");
/* harmony import */ var _routes_user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../routes/user */ "./routes/user.js");
/* harmony import */ var _routes_survey__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../routes/survey */ "./routes/survey.js");
/* harmony import */ var _routes_answer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../routes/answer */ "./routes/answer.js");
/* harmony import */ var _middleware_errorHandler__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../middleware/errorHandler */ "./middleware/errorHandler.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }














var PORT = process.env.PORT || 8080;
var URL = process.env.URL;
var SECRET_COOKIE = process.env.SECRET_COOKIE;
var app = express__WEBPACK_IMPORTED_MODULE_0___default()();
app.use(cookie_parser__WEBPACK_IMPORTED_MODULE_3___default()(SECRET_COOKIE));
app.use(morgan__WEBPACK_IMPORTED_MODULE_5___default()('dev'));
app.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default().json());
app.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default().urlencoded({
  extended: true
}));
app.use(passport__WEBPACK_IMPORTED_MODULE_4___default().initialize());
app.use(passport__WEBPACK_IMPORTED_MODULE_4___default().session());
(0,_middleware_passportJWT__WEBPACK_IMPORTED_MODULE_6__.default)((passport__WEBPACK_IMPORTED_MODULE_4___default()));
(0,_middleware_passportGoogle__WEBPACK_IMPORTED_MODULE_7__.default)((passport__WEBPACK_IMPORTED_MODULE_4___default()));
app.use('/api/auth', _routes_auth__WEBPACK_IMPORTED_MODULE_8__.default);
app.use('/api/user', _routes_user__WEBPACK_IMPORTED_MODULE_9__.default);
app.use('/api/survey', _routes_survey__WEBPACK_IMPORTED_MODULE_10__.default);
app.use('/api/answer', _routes_answer__WEBPACK_IMPORTED_MODULE_11__.default);
app.use(_middleware_errorHandler__WEBPACK_IMPORTED_MODULE_12__.default);

function runServer() {
  return _runServer.apply(this, arguments);
}

function _runServer() {
  _runServer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return mongoose__WEBPACK_IMPORTED_MODULE_1___default().connect(URL, {
              useNewUrlParser: true,
              useUnifiedTopology: true,
              useCreateIndex: true
            });

          case 3:
            app.listen(PORT, function () {
              console.log("Server has been started on port: ".concat(PORT));
            });
            _context.next = 11;
            break;

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](0);
            console.log("Server message: ".concat(_context.t0.message));
            mongoose__WEBPACK_IMPORTED_MODULE_1___default().connection.close();
            process.exit(1);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 6]]);
  }));
  return _runServer.apply(this, arguments);
}

runServer();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);

/***/ }),

/***/ "./utils/init.redis.js":
/*!*****************************!*\
  !*** ./utils/init.redis.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var async_redis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! async-redis */ "async-redis");
/* harmony import */ var async_redis__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(async_redis__WEBPACK_IMPORTED_MODULE_0__);

var redisClient = async_redis__WEBPACK_IMPORTED_MODULE_0___default().createClient({
  port: 6379,
  host: 'localhost'
});
redisClient.on('connect', function () {
  console.log('Client connect to redis...');
});
redisClient.on('ready', function () {
  console.log('Client connect to redis and ready to use...');
});
redisClient.on('error', function (err) {
  console.log(err);
});
redisClient.on('end', function () {
  console.log('Client disconnect from redis.');
});
process.on('SIGIN', function () {
  redisClient.quit();
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (redisClient);

/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@babel/polyfill");;

/***/ }),

/***/ "async-redis":
/*!******************************!*\
  !*** external "async-redis" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("async-redis");;

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");;

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("body-parser");;

/***/ }),

/***/ "chai/index":
/*!*****************************!*\
  !*** external "chai/index" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("chai/index");;

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("cookie-parser");;

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");;

/***/ }),

/***/ "http-status":
/*!******************************!*\
  !*** external "http-status" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("http-status");;

/***/ }),

/***/ "joi":
/*!**********************!*\
  !*** external "joi" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("joi");;

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");;

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");;

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("morgan");;

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("passport");;

/***/ }),

/***/ "passport-google-oauth20":
/*!******************************************!*\
  !*** external "passport-google-oauth20" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("passport-google-oauth20");;

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("passport-jwt");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	__webpack_require__("@babel/polyfill");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIkQ6XFxOb2RlSlNGaWxlXFx0ZXN0LWF1dGgtY3J1ZFxcYXBpXFxjb250cm9sbGVyc1xcYW5zd2VyLmNvbnRyb2xsZXIuanMiLCJEOlxcTm9kZUpTRmlsZVxcdGVzdC1hdXRoLWNydWRcXGFwaVxcY29udHJvbGxlcnNcXGF1dGguY29udHJvbGxlci5qcyIsIkQ6XFxOb2RlSlNGaWxlXFx0ZXN0LWF1dGgtY3J1ZFxcYXBpXFxjb250cm9sbGVyc1xcc3VydmV5LmNvbnRyb2xsZXIuanMiLCJEOlxcTm9kZUpTRmlsZVxcdGVzdC1hdXRoLWNydWRcXGFwaVxcY29udHJvbGxlcnNcXHVzZXIuY29udHJvbGxlci5qcyIsIkQ6XFxOb2RlSlNGaWxlXFx0ZXN0LWF1dGgtY3J1ZFxcYXBpXFxtaWRkbGV3YXJlXFxlcnJvckhhbmRsZXIuanMiLCJEOlxcTm9kZUpTRmlsZVxcdGVzdC1hdXRoLWNydWRcXGFwaVxcbWlkZGxld2FyZVxcbWlkZGxld2FyZS52YWxpZGF0b3IuanMiLCJEOlxcTm9kZUpTRmlsZVxcdGVzdC1hdXRoLWNydWRcXGFwaVxcbWlkZGxld2FyZVxccGFzc3BvcnRHb29nbGUuanMiLCJEOlxcTm9kZUpTRmlsZVxcdGVzdC1hdXRoLWNydWRcXGFwaVxcbWlkZGxld2FyZVxccGFzc3BvcnRKV1QuanMiLCJEOlxcTm9kZUpTRmlsZVxcdGVzdC1hdXRoLWNydWRcXGFwaVxcbWlkZGxld2FyZVxcc2NoZW1hcy5mb3IudmFsaWRhdGlvblxcYXV0aFNjaGVtYS5qcyIsIkQ6XFxOb2RlSlNGaWxlXFx0ZXN0LWF1dGgtY3J1ZFxcYXBpXFxtb2RlbHNcXEFuc3dlci5qcyIsIkQ6XFxOb2RlSlNGaWxlXFx0ZXN0LWF1dGgtY3J1ZFxcYXBpXFxtb2RlbHNcXFN1cnZleS5qcyIsIkQ6XFxOb2RlSlNGaWxlXFx0ZXN0LWF1dGgtY3J1ZFxcYXBpXFxtb2RlbHNcXFVzZXIuanMiLCJEOlxcTm9kZUpTRmlsZVxcdGVzdC1hdXRoLWNydWRcXGFwaVxccm91dGVzXFxhbnN3ZXIuanMiLCJEOlxcTm9kZUpTRmlsZVxcdGVzdC1hdXRoLWNydWRcXGFwaVxccm91dGVzXFxhdXRoLmpzIiwiRDpcXE5vZGVKU0ZpbGVcXHRlc3QtYXV0aC1jcnVkXFxhcGlcXHJvdXRlc1xcc3VydmV5LmpzIiwiRDpcXE5vZGVKU0ZpbGVcXHRlc3QtYXV0aC1jcnVkXFxhcGlcXHJvdXRlc1xcdXNlci5qcyIsIkQ6XFxOb2RlSlNGaWxlXFx0ZXN0LWF1dGgtY3J1ZFxcYXBpXFxzcmNcXGluZGV4LmpzIiwiRDpcXE5vZGVKU0ZpbGVcXHRlc3QtYXV0aC1jcnVkXFxhcGlcXHV0aWxzXFxpbml0LnJlZGlzLmpzIiwiZXh0ZXJuYWwgXCJAYmFiZWwvcG9seWZpbGxcIiIsImV4dGVybmFsIFwiYXN5bmMtcmVkaXNcIiIsImV4dGVybmFsIFwiYmNyeXB0XCIiLCJleHRlcm5hbCBcImJvZHktcGFyc2VyXCIiLCJleHRlcm5hbCBcImNoYWkvaW5kZXhcIiIsImV4dGVybmFsIFwiY29va2llLXBhcnNlclwiIiwiZXh0ZXJuYWwgXCJkb3RlbnZcIiIsImV4dGVybmFsIFwiZXhwcmVzc1wiIiwiZXh0ZXJuYWwgXCJodHRwLXN0YXR1c1wiIiwiZXh0ZXJuYWwgXCJqb2lcIiIsImV4dGVybmFsIFwianNvbndlYnRva2VuXCIiLCJleHRlcm5hbCBcIm1vbmdvb3NlXCIiLCJleHRlcm5hbCBcIm1vcmdhblwiIiwiZXh0ZXJuYWwgXCJwYXNzcG9ydFwiIiwiZXh0ZXJuYWwgXCJwYXNzcG9ydC1nb29nbGUtb2F1dGgyMFwiIiwiZXh0ZXJuYWwgXCJwYXNzcG9ydC1qd3RcIiIsIndlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2svc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaHR0cFN0YXR1cyBmcm9tICdodHRwLXN0YXR1cyc7XHJcbmltcG9ydCBBbnN3ZXIgZnJvbSAnLi4vbW9kZWxzL0Fuc3dlcic7XHJcbmltcG9ydCBTdXJ2ZXkgZnJvbSAnLi4vbW9kZWxzL1N1cnZleSc7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBjcmVhdGVBbnN3ZXIocmVxLCByZXMsIG5leHQpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBfaWQgfSA9IHJlcS51c2VyO1xyXG4gICAgY29uc3QgeyB1cmwgfSA9IHJlcS5wYXJhbXM7XHJcbiAgICBjb25zdCBkYXRhID0gcmVxLmJvZHk7XHJcbiAgICBjb25zdCBzdXJ2ZXkgPSBhd2FpdCBTdXJ2ZXkuZmluZE9uZSh7IHVybCB9KTtcclxuICAgIGlmICghc3VydmV5KSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGh0dHBTdGF0dXMuTk9UX0ZPVU5EKS5qc29uKHtcclxuICAgICAgICBtZXNzYWdlOiAnU3VydmV5IG5vdCBmb3VuZC4nXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKCFkYXRhKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGh0dHBTdGF0dXMuQkFEX1JFUVVFU1QpLmpzb24oe1xyXG4gICAgICAgIG1lc3NhZ2U6ICdEYXRhIGlzIGVtcHR5LidcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBhbnN3ZXIgPSBuZXcgQW5zd2VyKHtcclxuICAgICAgdXNlcjogX2lkLFxyXG4gICAgICBzdXJ2ZXk6IHN1cnZleS5faWQsXHJcbiAgICAgIGRhdGFcclxuICAgIH0pO1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYW5zd2VyLnNhdmUoKTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKGh0dHBTdGF0dXMuQ1JFQVRFRCkuanNvbihyZXN1bHQpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gbmV4dChlcnJvcik7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRBbnN3ZXIocmVxLCByZXMsIG5leHQpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyB1cmwsIGlkIH0gPSByZXEucGFyYW1zO1xyXG4gICAgY29uc3Qgc3VydmV5ID0gYXdhaXQgU3VydmV5LmZpbmRPbmUoeyB1cmwgfSk7XHJcbiAgICBpZiAoIXN1cnZleSkge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhodHRwU3RhdHVzLk5PVF9GT1VORCkuanNvbih7XHJcbiAgICAgICAgbWVzc2FnZTogJ1N1cnZleSB3aXRoIHNhbWUgZW1haWwgbm90IGZvdW5kLidcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBhbnN3ZXIgPSBhd2FpdCBBbnN3ZXIuZmluZEJ5SWQoaWQpLnBvcHVsYXRlKCdzdXJ2ZXknKTtcclxuICAgIGlmICghYW5zd2VyKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGh0dHBTdGF0dXMuTk9UX0ZPVU5EKS5qc29uKHtcclxuICAgICAgICBtZXNzYWdlOiAnQW5zd2VyIHdpdGggc2FtZSBpZCBub3QgZm91bmQuJ1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihhbnN3ZXIpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gbmV4dChlcnJvcik7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRBbnN3ZXJzKHJlcSwgcmVzLCBuZXh0KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgdXJsIH0gPSByZXEucGFyYW1zO1xyXG4gICAgY29uc3Qgc3VydmV5ID0gYXdhaXQgU3VydmV5LmZpbmRPbmUoeyB1cmwgfSk7XHJcbiAgICBjb25zdCBhbnN3ZXIgPSBhd2FpdCBBbnN3ZXIuZmluZCh7fSkucG9wdWxhdGUoJ3N1cnZleScpO1xyXG4gICAgaWYgKCFzdXJ2ZXkpIHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoaHR0cFN0YXR1cy5OT1RfRk9VTkQpLmpzb24oe1xyXG4gICAgICAgIG1lc3NhZ2U6ICdTdXJ2ZXkgd2l0aCBzYW1lIGVtYWlsIG5vdCBmb3VuZC4nXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoaHR0cFN0YXR1cy5PSykuanNvbihhbnN3ZXIpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gbmV4dChlcnJvcik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIGNyZWF0ZUFuc3dlcixcclxuICBnZXRBbnN3ZXIsXHJcbiAgZ2V0QW5zd2VycyxcclxufTtcclxuIiwiaW1wb3J0IGJDcnlwdCBmcm9tICdiY3J5cHQnO1xyXG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbic7XHJcbmltcG9ydCBodHRwU3RhdHVzIGZyb20gJ2h0dHAtc3RhdHVzJztcclxuaW1wb3J0IHJlZGlzQ2xpZW50IGZyb20gJy4uL3V0aWxzL2luaXQucmVkaXMnO1xyXG5pbXBvcnQgVXNlciBmcm9tICcuLi9tb2RlbHMvVXNlcic7XHJcbmNvbnN0IFNFQ1JFVF9LRVkgPSBwcm9jZXNzLmVudi5KV1Q7XHJcbmNvbnN0IHNhbHRSb3VuZHMgPSAxMDtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGxvZ2luKHJlcSwgcmVzLCBuZXh0KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSByZXEuYm9keTtcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoeyBlbWFpbCB9KTtcclxuICAgIGlmICghdXNlcikge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhodHRwU3RhdHVzLk5PVF9GT1VORCkuanNvbih7IG1lc3NhZ2U6ICdVc2VyIGRvZXMgbm90IGV4aXN0LicgfSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBwYXNzd29yZFJlc3VsdCA9IGF3YWl0IGJDcnlwdC5jb21wYXJlKHBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKTtcclxuICAgIGlmICghcGFzc3dvcmRSZXN1bHQpIHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoaHR0cFN0YXR1cy5CQURfUkVRVUVTVCkuanNvbih7IG1lc3NhZ2U6ICdJbmNvcnJlY3QgcGFzc3dvcmQuJyB9KTtcclxuICAgIH1cclxuICAgIGNvbnN0IHRva2VuID0gand0LnNpZ24oe1xyXG4gICAgICB1c2VySWQ6IHVzZXIuX2lkLFxyXG4gICAgICBlbWFpbDogdXNlci5lbWFpbFxyXG4gICAgfSwgU0VDUkVUX0tFWSwgeyBleHBpcmVzSW46IDYwICogNjAgfSk7XHJcbiAgICBhd2FpdCByZWRpc0NsaWVudC5zZXQodG9rZW4udG9TdHJpbmcoKSwgdXNlci5faWQudG9TdHJpbmcoKSwgJ0VYJywgNjAgKiA2MCk7XHJcbiAgICByZXR1cm4gcmVzXHJcbiAgICAgIC5jb29raWUoJ2p3dCcsIHRva2VuLCB7IHNpZ25lZDogdHJ1ZSwgaHR0cE9ubHk6IHRydWUgfSlcclxuICAgICAgLnN0YXR1cyhodHRwU3RhdHVzLk9LKVxyXG4gICAgICAuanNvbih7XHJcbiAgICAgICAgdG9rZW46IGBCZWFyZXIgJHt0b2tlbn1gXHJcbiAgICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gbmV4dChlcnJvcik7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiByZWdpc3RlcihyZXEsIHJlcywgbmV4dCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IG5hbWUsIGVtYWlsLCBwYXNzd29yZCB9ID0gcmVxLmJvZHk7XHJcbiAgICBjb25zdCBjYW5kaWRhdGUgPSBhd2FpdCBVc2VyLmZpbmRPbmUoeyBlbWFpbCB9KTtcclxuICAgIGlmIChjYW5kaWRhdGUpIHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoaHR0cFN0YXR1cy5CQURfUkVRVUVTVCkuanNvbih7IG1lc3NhZ2U6ICdVc2VyIHdpdGggc2FtZSBlbWFpbCBoYXMgYmVlbiBjcmVhdGVkLicgfSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBzYWx0ID0gYkNyeXB0LmdlblNhbHRTeW5jKHNhbHRSb3VuZHMpO1xyXG4gICAgY29uc3QgdXNlciA9IG5ldyBVc2VyKHtcclxuICAgICAgbmFtZSxcclxuICAgICAgZW1haWwsXHJcbiAgICAgIHBhc3N3b3JkOiBiQ3J5cHQuaGFzaFN5bmMocGFzc3dvcmQsIHNhbHQpXHJcbiAgICB9KTtcclxuICAgIGF3YWl0IHVzZXIuc2F2ZSgpO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoaHR0cFN0YXR1cy5DUkVBVEVEKS5qc29uKHVzZXIpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gbmV4dChlcnJvcik7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnb29nbGVBdXRob3JpemF0aW9uKHJlcSwgcmVzLCBuZXh0KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgZW1haWwgfSA9IHJlcS51c2VyO1xyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IGVtYWlsIH0pO1xyXG4gICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGh0dHBTdGF0dXMuTk9UX0ZPVU5EKS5qc29uKHsgbWVzc2FnZTogJ1VzZXIgZG9lcyBub3QgZXhpc3QuJyB9KTtcclxuICAgIH1cclxuICAgIGNvbnN0IHRva2VuID0gand0LnNpZ24oe1xyXG4gICAgICB1c2VySWQ6IHVzZXIuX2lkLFxyXG4gICAgICBlbWFpbDogdXNlci5lbWFpbFxyXG4gICAgfSwgU0VDUkVUX0tFWSwgeyBleHBpcmVzSW46IDYwICogNjAgfSk7XHJcbiAgICBhd2FpdCByZWRpc0NsaWVudC5zZXQodG9rZW4udG9TdHJpbmcoKSwgdXNlci5faWQudG9TdHJpbmcoKSwgJ0VYJywgNjAgKiA2MCk7XHJcbiAgICByZXR1cm4gcmVzXHJcbiAgICAgIC5jb29raWUoJ2p3dCcsIHRva2VuLCB7IHNpZ25lZDogdHJ1ZSwgaHR0cE9ubHk6IHRydWUgfSlcclxuICAgICAgLnN0YXR1cyhodHRwU3RhdHVzLk9LKVxyXG4gICAgICAuanNvbih7XHJcbiAgICAgICAgdG9rZW46IGBCZWFyZXIgJHt0b2tlbn1gXHJcbiAgICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gbmV4dChlcnJvcik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIGxvZ2luLFxyXG4gIHJlZ2lzdGVyLFxyXG4gIGdvb2dsZUF1dGhvcml6YXRpb25cclxufTtcclxuIiwiaW1wb3J0IFN1cnZleSBmcm9tICcuLi9tb2RlbHMvU3VydmV5JztcclxuaW1wb3J0IGh0dHBTdGF0dXMgZnJvbSAnaHR0cC1zdGF0dXMnO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gY3JlYXRlU3VydmV5KHJlcSwgcmVzLCBuZXh0KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgbmFtZSxcclxuICAgICAgdXJsLFxyXG4gICAgICBxdWVzdGlvbnNcclxuICAgIH0gPSByZXEuYm9keTtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IFN1cnZleS5maW5kT25lKHsgdXJsIH0pO1xyXG4gICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhodHRwU3RhdHVzLkJBRF9SRVFVRVNUKS5qc29uKHtcclxuICAgICAgICBtZXNzYWdlOiAnU3VydmV5IHdpdGggc2FtZSBlbWFpbCBub3QgZm91bmQuJ1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGNvbnN0IHN1cnZleSA9IG5ldyBTdXJ2ZXkoe1xyXG4gICAgICBuYW1lLFxyXG4gICAgICB1cmwsXHJcbiAgICAgIHF1ZXN0aW9uc1xyXG4gICAgfSk7XHJcbiAgICBhd2FpdCBzdXJ2ZXkuc2F2ZSgpO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoaHR0cFN0YXR1cy5DUkVBVEVEKS5qc29uKHN1cnZleSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiBuZXh0KGVycm9yKTtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFN1cnZleShyZXEsIHJlcywgbmV4dCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGlkIH0gPSByZXEucGFyYW1zO1xyXG4gICAgY29uc3Qgc3VydmV5ID0gYXdhaXQgU3VydmV5LmZpbmRCeUlkKGlkKTtcclxuICAgIGlmICghc3VydmV5KSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGh0dHBTdGF0dXMuTk9UX0ZPVU5EKS5qc29uKHsgbWVzc2FnZTogJ1N1cnZleSB3aXRoIHNhbWUgaWQgbm90IGZvdW5kLicgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyhodHRwU3RhdHVzLk9LKS5qc29uKHN1cnZleSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiBuZXh0KGVycm9yKTtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVN1cnZleShyZXEsIHJlcywgbmV4dCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGlkIH0gPSByZXEucGFyYW1zO1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBuYW1lLFxyXG4gICAgICB1cmwsXHJcbiAgICAgIHF1ZXN0aW9uc1xyXG4gICAgfSA9IHJlcS5ib2R5O1xyXG4gICAgY29uc3Qgc3VydmV5ID0gYXdhaXQgU3VydmV5LmZpbmRCeUlkKGlkKTtcclxuICAgIGlmICghc3VydmV5KSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGh0dHBTdGF0dXMuTk9UX0ZPVU5EKS5qc29uKHsgbWVzc2FnZTogJ1N1cnZleSB3aXRoIHNhbWUgaWQgbm90IGZvdW5kLicgfSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCByZWxvYWRTdXJ2ZXkgPSBhd2FpdCBTdXJ2ZXkudXBkYXRlT25lKHsgX2lkOiBpZCB9LCB7XHJcbiAgICAgICRzZXQ6IHtcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgIHVybCxcclxuICAgICAgICBxdWVzdGlvbnNcclxuICAgICAgfVxyXG4gICAgfSwge1xyXG4gICAgICBuZXc6IHRydWVcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoaHR0cFN0YXR1cy5PSykuanNvbihyZWxvYWRTdXJ2ZXkpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gbmV4dChlcnJvcik7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiByZW1vdmVTdXJ2ZXkocmVxLCByZXMsIG5leHQpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBpZCB9ID0gcmVxLnBhcmFtcztcclxuICAgIGNvbnN0IHN1cnZleSA9IGF3YWl0IFN1cnZleS5maW5kQnlJZChpZCk7XHJcbiAgICBpZiAoIXN1cnZleSkge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhodHRwU3RhdHVzLk5PVF9GT1VORCkuanNvbih7IG1lc3NhZ2U6ICdTdXJ2ZXkgd2l0aCBzYW1lIGlkIG5vdCBmb3VuZC4nIH0pO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgU3VydmV5LnJlbW92ZShpZCk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyhodHRwU3RhdHVzLk9LKS5qc29uKHJlc3VsdCk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiBuZXh0KGVycm9yKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgY3JlYXRlU3VydmV5LFxyXG4gIGdldFN1cnZleSxcclxuICB1cGRhdGVTdXJ2ZXksXHJcbiAgcmVtb3ZlU3VydmV5XHJcbn07XHJcbiIsImltcG9ydCBVc2VyIGZyb20gJy4uL21vZGVscy9Vc2VyJztcclxuaW1wb3J0IGh0dHBTdGF0dXMgZnJvbSAnaHR0cC1zdGF0dXMnO1xyXG5pbXBvcnQgYkNyeXB0IGZyb20gJ2JjcnlwdCc7XHJcbmNvbnN0IHNhbHRSb3VuZHMgPSAxMDtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVVzZXIocmVxLCByZXMsIG5leHQpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBuYW1lLCBlbWFpbCwgcGFzc3dvcmQgfSA9IHJlcS5ib2R5O1xyXG4gICAgY29uc3QgY2FuZGlkYXRlID0gYXdhaXQgVXNlci5maW5kT25lKHsgZW1haWwgfSk7XHJcbiAgICBpZiAoY2FuZGlkYXRlKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGh0dHBTdGF0dXMuQkFEX1JFUVVFU1QpLmpzb24oeyBtZXNzYWdlOiAnVXNlciB3aXRoIHNhbWUgZW1haWwgaGFzIGJlZW4gY3JlYXRlZC4nIH0pO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc2FsdCA9IGJDcnlwdC5nZW5TYWx0U3luYyhzYWx0Um91bmRzKTtcclxuICAgIGNvbnN0IHVzZXIgPSBuZXcgVXNlcih7XHJcbiAgICAgIG5hbWUsXHJcbiAgICAgIGVtYWlsLFxyXG4gICAgICBwYXNzd29yZDogYkNyeXB0Lmhhc2hTeW5jKHBhc3N3b3JkLCBzYWx0KVxyXG4gICAgfSk7XHJcbiAgICBhd2FpdCB1c2VyLnNhdmUoKTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKGh0dHBTdGF0dXMuQ1JFQVRFRCkuanNvbih1c2VyKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIG5leHQoZXJyb3IpO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0VXNlcihyZXEsIHJlcywgbmV4dCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGlkIH0gPSByZXEucGFyYW1zO1xyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZEJ5SWQoaWQpO1xyXG4gICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGh0dHBTdGF0dXMuQkFEX1JFUVVFU1QpLmpzb24oe1xyXG4gICAgICAgIG1lc3NhZ2U6ICdVc2VyIGRvZXMgbm90IGV4aXN0LidcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyhodHRwU3RhdHVzLk9LKS5qc29uKHVzZXIpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gbmV4dChlcnJvcik7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiB1cGRhdGVVc2VyKHJlcSwgcmVzLCBuZXh0KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgaWQgfSA9IHJlcS5wYXJhbXM7XHJcbiAgICBjb25zdCB7IG5hbWUsIGVtYWlsLCBwYXNzd29yZCB9ID0gcmVxLmJvZHk7XHJcbiAgICBjb25zdCBjYW5kaWRhdGUgPSBhd2FpdCBVc2VyLmZpbmRCeUlkKGlkKTtcclxuICAgIGlmICghY2FuZGlkYXRlKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGh0dHBTdGF0dXMuTk9UX0ZPVU5EKS5qc29uKHtcclxuICAgICAgICBtZXNzYWdlOiAnVXNlciBkb2VzIG5vdCBleGlzdC4nXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc2FsdCA9IGJDcnlwdC5nZW5TYWx0U3luYyhzYWx0Um91bmRzKTtcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLnVwZGF0ZU9uZSh7IF9pZDogaWQgfSwge1xyXG4gICAgICAkc2V0OiB7XHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICBlbWFpbCxcclxuICAgICAgICBwYXNzd29yZDogYkNyeXB0Lmhhc2hTeW5jKHBhc3N3b3JkLCBzYWx0KVxyXG4gICAgICB9XHJcbiAgICB9LCB7XHJcbiAgICAgIG5ldzogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyhodHRwU3RhdHVzLk9LKS5qc29uKHVzZXIpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gbmV4dChlcnJvcik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIGNyZWF0ZVVzZXIsXHJcbiAgZ2V0VXNlcixcclxuICB1cGRhdGVVc2VyXHJcbn07XHJcbiIsImltcG9ydCBodHRwU3RhdHVzIGZyb20gJ2h0dHAtc3RhdHVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVycm9ySGFuZGxlcihlcnIsIHJlcSwgcmVzLCBuZXh0KSB7XHJcbiAgcmV0dXJuIHJlcy5zdGF0dXMoaHR0cFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1IpLmpzb24oe1xyXG4gICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICBlcnJvcjogZXJyLm1lc3NhZ2UgPyBlcnIubWVzc2FnZSA6IGVyclxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCBKb2kgZnJvbSAnam9pJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pZGRsZXdhcmVWYWxpZGF0b3Ioc2NoZW1hKSB7XHJcbiAgcmV0dXJuIGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xyXG4gICAgY29uc3QgeyBib2R5LCBxdWVyeSwgcGFyYW1zIH0gPSByZXE7XHJcbiAgICBjb25zdCBuZXdTY2hlbWEgPSBzY2hlbWEoSm9pKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IG5ld1NjaGVtYS52YWxpZGF0ZUFzeW5jKHtcclxuICAgICAgICBib2R5LFxyXG4gICAgICAgIHF1ZXJ5LFxyXG4gICAgICAgIHBhcmFtc1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIG5leHQoKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiBuZXh0KGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcbiIsImltcG9ydCB7IFN0cmF0ZWd5IGFzIEdvb2dsZVN0cmF0ZWd5IH0gZnJvbSAncGFzc3BvcnQtZ29vZ2xlLW9hdXRoMjAnO1xyXG5pbXBvcnQgZG90RW52IGZyb20gJ2RvdGVudic7XHJcbmltcG9ydCBVc2VyIGZyb20gJy4uL21vZGVscy9Vc2VyJztcclxuaW1wb3J0IHt1c2V9IGZyb20gXCJjaGFpL2luZGV4XCI7XHJcbmRvdEVudi5jb25maWcoKTtcclxuXHJcbmNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgY2xpZW50SUQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfSUQsXHJcbiAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfU0VDUkVUX0tFWSxcclxuICBjYWxsYmFja1VSTDogYGh0dHA6Ly9sb2NhbGhvc3Q6JHtwcm9jZXNzLmVudi5QT1JUfS9hcGkvYXV0aC9nb29nbGUvY2FsbGJhY2tgXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaWRkbGV3YXJlR29vZ2xlKHBhc3Nwb3J0KSB7XHJcbiAgcGFzc3BvcnQudXNlKFxyXG4gICAgbmV3IEdvb2dsZVN0cmF0ZWd5KG9wdGlvbnMsIGFzeW5jIChhY2Nlc3NUb2tlbiwgcmVmcmVzaFRva2VuLCBwYXlsb2FkLCBkb25lKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgbGV0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoeyBlbWFpbDogcGF5bG9hZC5lbWFpbHNbMF0udmFsdWUgfSk7XHJcbiAgICAgICAgaWYgKHVzZXIpIGRvbmUobnVsbCwgdXNlcik7XHJcbiAgICAgICAgY29uc3QgbmV3VXNlciA9IGF3YWl0IFVzZXIuY3JlYXRlKHtcclxuICAgICAgICAgIG5hbWU6IHBheWxvYWQubmFtZS5naXZlbk5hbWUsXHJcbiAgICAgICAgICBlbWFpbDogcGF5bG9hZC5lbWFpbHNbMF0udmFsdWVcclxuICAgICAgICB9KS5zYXZlKCk7XHJcbiAgICAgICAgcmV0dXJuIGRvbmUobnVsbCwgbmV3VXNlcik7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIGRvbmUoZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICk7XHJcbiAgcGFzc3BvcnQuc2VyaWFsaXplVXNlcigodXNlciwgZG9uZSkgPT4ge1xyXG4gICAgZG9uZShudWxsLCB1c2VyLmlkKTtcclxuICB9KTtcclxuXHJcbiAgcGFzc3BvcnQuZGVzZXJpYWxpemVVc2VyKChpZCwgZG9uZSkgPT4ge1xyXG4gICAgVXNlci5maW5kQnlJZChpZCwgKGVyciwgdXNlcikgPT4ge1xyXG4gICAgICBkb25lKGVyciwgdXNlcik7XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBTdHJhdGVneSBhcyBKV1RTdHJhdGVneSB9IGZyb20gJ3Bhc3Nwb3J0LWp3dCc7XHJcbmltcG9ydCBkb3RFbnYgZnJvbSAnZG90ZW52JztcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi4vbW9kZWxzL1VzZXInO1xyXG5pbXBvcnQgcmVkaXNDbGllbnQgZnJvbSAnLi4vdXRpbHMvaW5pdC5yZWRpcyc7XHJcbmRvdEVudi5jb25maWcoKTtcclxuY29uc3QgU0VDUkVUX0tFWSA9IHByb2Nlc3MuZW52LkpXVDtcclxuXHJcbmNvbnN0IGNvb2tpZUV4dHJhY3RvciA9IChyZXEpID0+IHtcclxuICBsZXQgdG9rZW4gPSBudWxsO1xyXG4gIGlmIChyZXEgJiYgcmVxLnNpZ25lZENvb2tpZXMgJiYgcmVxLnNpZ25lZENvb2tpZXMuand0KSB7XHJcbiAgICB0b2tlbiA9IHJlcS5zaWduZWRDb29raWVzLmp3dDtcclxuICB9XHJcbiAgcmV0dXJuIHRva2VuO1xyXG59O1xyXG5cclxuY29uc3Qgb3B0aW9ucyA9IHtcclxuICBqd3RGcm9tUmVxdWVzdDogY29va2llRXh0cmFjdG9yLFxyXG4gIHNlY3JldE9yS2V5OiBTRUNSRVRfS0VZLFxyXG4gIHBhc3NSZXFUb0NhbGxiYWNrOiB0cnVlXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaWRkbGV3YXJlSnd0KHBhc3Nwb3J0KSB7XHJcbiAgcGFzc3BvcnQudXNlKFxyXG4gICAgbmV3IEpXVFN0cmF0ZWd5KG9wdGlvbnMsIGFzeW5jIChyZXEsIHBheWxvYWQsIGRvbmUpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZWRpc0NsaWVudC5nZXQocmVxLnNpZ25lZENvb2tpZXMuand0LnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIGlmICghcmVzdWx0KSByZXR1cm4gZG9uZShudWxsLCBmYWxzZSk7XHJcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZEJ5SWQocmVzdWx0KTtcclxuICAgICAgICBpZiAoIXVzZXIpIHJldHVybiBkb25lKG51bGwsIGZhbHNlKTtcclxuICAgICAgICByZXR1cm4gZG9uZShudWxsLCB1c2VyKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gZG9uZShlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgKTtcclxufVxyXG4iLCJmdW5jdGlvbiBsb2dpblNjaGVtYShKb2kpIHtcclxuICByZXR1cm4gSm9pLm9iamVjdCgpLmtleXMoe1xyXG4gICAgcXVlcnk6IHt9LFxyXG4gICAgcGFyYW1zOiB7fSxcclxuICAgIGJvZHk6IHtcclxuICAgICAgZW1haWw6IEpvaS5zdHJpbmcoKS50cmltKCkuZW1haWwoKS5yZXF1aXJlZCgpLFxyXG4gICAgICBwYXNzd29yZDogSm9pLnN0cmluZygpLm1pbig1KS5tYXgoMTYpLnJlcXVpcmVkKClcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVnaXN0ZXJTY2hlbWEoSm9pKSB7XHJcbiAgcmV0dXJuIEpvaS5vYmplY3QoKS5rZXlzKHtcclxuICAgIHF1ZXJ5OiB7fSxcclxuICAgIHBhcmFtczoge30sXHJcbiAgICBib2R5OiB7XHJcbiAgICAgIG5hbWU6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgICBlbWFpbDogSm9pLnN0cmluZygpLnRyaW0oKS5lbWFpbCgpLnJlcXVpcmVkKCksXHJcbiAgICAgIHBhc3N3b3JkOiBKb2kuc3RyaW5nKCkubWluKDUpLm1heCgxNikucmVxdWlyZWQoKVxyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIGxvZ2luU2NoZW1hLFxyXG4gIHJlZ2lzdGVyU2NoZW1hXHJcbn07XHJcbiIsImltcG9ydCBtb25nb29zZSwgeyBTY2hlbWEgfSBmcm9tICdtb25nb29zZSc7XHJcblxyXG5jb25zdCBhbnN3ZXJTY2hlbWEgPSBuZXcgU2NoZW1hKHtcclxuICB1c2VyOiB7XHJcbiAgICByZWY6ICdVc2VyJyxcclxuICAgIHR5cGU6IFNjaGVtYS5UeXBlcy5PYmplY3RJZCxcclxuICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgfSxcclxuICBzdXJ2ZXk6IHtcclxuICAgIHJlZjogJ1N1cnZleScsXHJcbiAgICB0eXBlOiBTY2hlbWEuVHlwZXMuT2JqZWN0SWQsXHJcbiAgICByZXF1aXJlZDogdHJ1ZVxyXG4gIH0sXHJcbiAgZGF0YToge1xyXG4gICAgdHlwZTogU2NoZW1hLlR5cGVzLk1peGVkLFxyXG4gICAgcmVxdWlyZWQ6IHRydWVcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWwoJ0Fuc3dlcicsIGFuc3dlclNjaGVtYSk7XHJcbiIsImltcG9ydCBtb25nb29zZSwgeyBTY2hlbWEgfSBmcm9tICdtb25nb29zZSc7XHJcblxyXG5jb25zdCByZXFTdHJpbmcgPSB7XHJcbiAgdHlwZTogU3RyaW5nLFxyXG4gIHJlcXVpcmVkOiB0cnVlXHJcbn07XHJcblxyXG5jb25zdCByZXFVcmwgPSB7XHJcbiAgdHlwZTogU3RyaW5nLFxyXG4gIHJlcXVpcmVkOiB0cnVlLFxyXG4gIHVuaXF1ZTogdHJ1ZVxyXG59O1xyXG5cclxuY29uc3QgcXVlc3Rpb25TY2hlbWEgPSBuZXcgU2NoZW1hKHtcclxuICBuYW1lOiB7XHJcbiAgICB0eXBlOiBTdHJpbmdcclxuICB9XHJcbn0pO1xyXG5cclxuY29uc3Qgc3VydmV5U2NoZW1hID0gbmV3IFNjaGVtYSh7XHJcbiAgbmFtZTogcmVxU3RyaW5nLFxyXG4gIHVybDogcmVxVXJsLFxyXG4gIHF1ZXN0aW9uczogW3F1ZXN0aW9uU2NoZW1hXVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVsKCdTdXJ2ZXknLCBzdXJ2ZXlTY2hlbWEpO1xyXG4iLCJpbXBvcnQgbW9uZ29vc2UsIHsgU2NoZW1hIH0gZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuY29uc3QgcmVxU3RyaW5nID0ge1xyXG4gIHR5cGU6IFN0cmluZyxcclxuICByZXF1aXJlZDogdHJ1ZVxyXG59O1xyXG5cclxuY29uc3QgdXNlclNjaGVtYSA9IG5ldyBTY2hlbWEoe1xyXG4gIG5hbWU6IHJlcVN0cmluZyxcclxuICBlbWFpbDoge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB1bmlxdWU6IHRydWVcclxuICB9LFxyXG4gIHBhc3N3b3JkOiByZXFTdHJpbmdcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtb25nb29zZS5tb2RlbCgnVXNlcicsIHVzZXJTY2hlbWEpO1xyXG4iLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IHBhc3Nwb3J0IGZyb20gJ3Bhc3Nwb3J0JztcclxuaW1wb3J0IHtjcmVhdGVBbnN3ZXIsIGdldEFuc3dlciwgZ2V0QW5zd2VycywgcmVtb3ZlQW5zd2VyfSBmcm9tICcuLi9jb250cm9sbGVycy9hbnN3ZXIuY29udHJvbGxlcic7XHJcbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XHJcblxyXG5yb3V0ZXIucm91dGUoJy86dXJsJylcclxuICAucG9zdChwYXNzcG9ydC5hdXRoZW50aWNhdGUoJ2p3dCcsIHsgc2Vzc2lvbjogZmFsc2UgfSksIGNyZWF0ZUFuc3dlcilcclxuICAuZ2V0KHBhc3Nwb3J0LmF1dGhlbnRpY2F0ZSgnand0JywgeyBzZXNzaW9uOiBmYWxzZSB9KSwgZ2V0QW5zd2Vycyk7XHJcbnJvdXRlci5nZXQoJy86dXJsLzppZCcsIHBhc3Nwb3J0LmF1dGhlbnRpY2F0ZSgnand0JywgeyBzZXNzaW9uOiBmYWxzZSB9KSwgZ2V0QW5zd2VyKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcclxuIiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCBwYXNzcG9ydCBmcm9tICdwYXNzcG9ydCc7XHJcbmltcG9ydCB7IGdvb2dsZUF1dGhvcml6YXRpb24sIGxvZ2luLCByZWdpc3RlciB9IGZyb20gJy4uL2NvbnRyb2xsZXJzL2F1dGguY29udHJvbGxlcic7XHJcbmltcG9ydCB7IGxvZ2luU2NoZW1hLCByZWdpc3RlclNjaGVtYSB9IGZyb20gJy4uL21pZGRsZXdhcmUvc2NoZW1hcy5mb3IudmFsaWRhdGlvbi9hdXRoU2NoZW1hJztcclxuaW1wb3J0IG1pZGRsZXdhcmVWYWxpZGF0b3IgZnJvbSAnLi4vbWlkZGxld2FyZS9taWRkbGV3YXJlLnZhbGlkYXRvcic7XHJcbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XHJcblxyXG5yb3V0ZXIucG9zdCgnL2xvZ2luJywgbWlkZGxld2FyZVZhbGlkYXRvcihsb2dpblNjaGVtYSksIGxvZ2luKTtcclxucm91dGVyLnBvc3QoJy9yZWdpc3RlcicsIG1pZGRsZXdhcmVWYWxpZGF0b3IocmVnaXN0ZXJTY2hlbWEpLCByZWdpc3Rlcik7XHJcbnJvdXRlci5nZXQoJy9nb29nbGUnLCBwYXNzcG9ydC5hdXRoZW50aWNhdGUoJ2dvb2dsZScsIHsgc2NvcGU6IFsncHJvZmlsZScsICdlbWFpbCddIH0pKTtcclxucm91dGVyLmdldChcclxuICAnL2dvb2dsZS9jYWxsYmFjaycsXHJcbiAgcGFzc3BvcnQuYXV0aGVudGljYXRlKCdnb29nbGUnLCB7IGZhaWx1cmVSZWRpcmVjdDogJy9hcGkvYXV0aC9sb2dpbicgfSksXHJcbiAgZ29vZ2xlQXV0aG9yaXphdGlvblxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xyXG4iLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IHBhc3Nwb3J0IGZyb20gJ3Bhc3Nwb3J0JztcclxuaW1wb3J0IHtcclxuICBnZXRTdXJ2ZXksXHJcbiAgdXBkYXRlU3VydmV5LFxyXG4gIHJlbW92ZVN1cnZleSxcclxuICBjcmVhdGVTdXJ2ZXlcclxufSBmcm9tICcuLi9jb250cm9sbGVycy9zdXJ2ZXkuY29udHJvbGxlcic7XHJcbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XHJcblxyXG5yb3V0ZXIucm91dGUoJy86aWQnKVxyXG4gIC5nZXQocGFzc3BvcnQuYXV0aGVudGljYXRlKCdqd3QnLCB7IHNlc3Npb246IGZhbHNlIH0pLCBnZXRTdXJ2ZXkpXHJcbiAgLmRlbGV0ZShwYXNzcG9ydC5hdXRoZW50aWNhdGUoJ2p3dCcsIHsgc2Vzc2lvbjogZmFsc2UgfSksIHJlbW92ZVN1cnZleSlcclxuICAucHV0KHBhc3Nwb3J0LmF1dGhlbnRpY2F0ZSgnand0JywgeyBzZXNzaW9uOiBmYWxzZSB9KSwgdXBkYXRlU3VydmV5KTtcclxucm91dGVyLnBvc3QoJy8nLCBwYXNzcG9ydC5hdXRoZW50aWNhdGUoJ2p3dCcsIHsgc2Vzc2lvbjogZmFsc2UgfSksIGNyZWF0ZVN1cnZleSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XHJcbiIsImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgeyBjcmVhdGVVc2VyLCB1cGRhdGVVc2VyLCBnZXRVc2VyIH0gZnJvbSAnLi4vY29udHJvbGxlcnMvdXNlci5jb250cm9sbGVyJztcclxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcclxuXHJcbnJvdXRlci5yb3V0ZSgnLzppZCcpXHJcbiAgLmdldChnZXRVc2VyKVxyXG4gIC5wdXQodXBkYXRlVXNlcik7XHJcbnJvdXRlci5wb3N0KCcvJywgY3JlYXRlVXNlcik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XHJcbiIsImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5pbXBvcnQgYm9keVBhcnNlciBmcm9tICdib2R5LXBhcnNlcic7XHJcbmltcG9ydCBjb29raWVQYXJzZXIgZnJvbSAnY29va2llLXBhcnNlcic7XHJcbmltcG9ydCBwYXNzcG9ydCBmcm9tICdwYXNzcG9ydCc7XHJcbmltcG9ydCBtb3JnYW4gZnJvbSAnbW9yZ2FuJztcclxuaW1wb3J0IG1pZGRsZXdhcmVKd3QgZnJvbSAnLi4vbWlkZGxld2FyZS9wYXNzcG9ydEpXVCc7XHJcbmltcG9ydCBtaWRkbGV3YXJlR29vZ2xlIGZyb20gJy4uL21pZGRsZXdhcmUvcGFzc3BvcnRHb29nbGUnO1xyXG5pbXBvcnQgYXV0aFJvdXRlciBmcm9tICcuLi9yb3V0ZXMvYXV0aCc7XHJcbmltcG9ydCB1c2VyUm91dGVyIGZyb20gJy4uL3JvdXRlcy91c2VyJztcclxuaW1wb3J0IHN1cnZleVJvdXRlciBmcm9tICcuLi9yb3V0ZXMvc3VydmV5JztcclxuaW1wb3J0IHN1cnZleUFuc3dlclJvdXRlciBmcm9tICcuLi9yb3V0ZXMvYW5zd2VyJztcclxuaW1wb3J0IGVycm9ySGFuZGxlciBmcm9tICcuLi9taWRkbGV3YXJlL2Vycm9ySGFuZGxlcic7XHJcblxyXG5jb25zdCBQT1JUID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCA4MDgwO1xyXG5jb25zdCBVUkwgPSBwcm9jZXNzLmVudi5VUkw7XHJcbmNvbnN0IFNFQ1JFVF9DT09LSUUgPSBwcm9jZXNzLmVudi5TRUNSRVRfQ09PS0lFO1xyXG5cclxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xyXG5cclxuYXBwLnVzZShjb29raWVQYXJzZXIoU0VDUkVUX0NPT0tJRSkpO1xyXG5hcHAudXNlKG1vcmdhbignZGV2JykpO1xyXG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcclxuYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoeyBleHRlbmRlZDogdHJ1ZSB9KSk7XHJcblxyXG5hcHAudXNlKHBhc3Nwb3J0LmluaXRpYWxpemUoKSk7XHJcbmFwcC51c2UocGFzc3BvcnQuc2Vzc2lvbigpKTtcclxuXHJcbm1pZGRsZXdhcmVKd3QocGFzc3BvcnQpO1xyXG5taWRkbGV3YXJlR29vZ2xlKHBhc3Nwb3J0KTtcclxuXHJcbmFwcC51c2UoJy9hcGkvYXV0aCcsIGF1dGhSb3V0ZXIpO1xyXG5hcHAudXNlKCcvYXBpL3VzZXInLCB1c2VyUm91dGVyKTtcclxuYXBwLnVzZSgnL2FwaS9zdXJ2ZXknLCBzdXJ2ZXlSb3V0ZXIpO1xyXG5hcHAudXNlKCcvYXBpL2Fuc3dlcicsIHN1cnZleUFuc3dlclJvdXRlcik7XHJcbmFwcC51c2UoZXJyb3JIYW5kbGVyKTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHJ1blNlcnZlcigpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgbW9uZ29vc2UuY29ubmVjdChVUkwsIHtcclxuICAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxyXG4gICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXHJcbiAgICAgIHVzZUNyZWF0ZUluZGV4OiB0cnVlXHJcbiAgICB9KTtcclxuICAgIGFwcC5saXN0ZW4oUE9SVCwgKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhgU2VydmVyIGhhcyBiZWVuIHN0YXJ0ZWQgb24gcG9ydDogJHtQT1JUfWApO1xyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5sb2coYFNlcnZlciBtZXNzYWdlOiAke2UubWVzc2FnZX1gKTtcclxuICAgIG1vbmdvb3NlLmNvbm5lY3Rpb24uY2xvc2UoKTtcclxuICAgIHByb2Nlc3MuZXhpdCgxKTtcclxuICB9XHJcbn1cclxuXHJcbnJ1blNlcnZlcigpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXBwO1xyXG4iLCJpbXBvcnQgYXN5bmNSZWRpcyBmcm9tICdhc3luYy1yZWRpcyc7XHJcblxyXG5jb25zdCByZWRpc0NsaWVudCA9IGFzeW5jUmVkaXMuY3JlYXRlQ2xpZW50KHtcclxuICBwb3J0OiA2Mzc5LFxyXG4gIGhvc3Q6ICdsb2NhbGhvc3QnXHJcbn0pO1xyXG5cclxucmVkaXNDbGllbnQub24oJ2Nvbm5lY3QnLCAoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coJ0NsaWVudCBjb25uZWN0IHRvIHJlZGlzLi4uJyk7XHJcbn0pO1xyXG5cclxucmVkaXNDbGllbnQub24oJ3JlYWR5JywgKCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKCdDbGllbnQgY29ubmVjdCB0byByZWRpcyBhbmQgcmVhZHkgdG8gdXNlLi4uJyk7XHJcbn0pO1xyXG5cclxucmVkaXNDbGllbnQub24oJ2Vycm9yJywgKGVycikgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGVycik7XHJcbn0pO1xyXG5cclxucmVkaXNDbGllbnQub24oJ2VuZCcsICgpID0+IHtcclxuICBjb25zb2xlLmxvZygnQ2xpZW50IGRpc2Nvbm5lY3QgZnJvbSByZWRpcy4nKTtcclxufSk7XHJcblxyXG5wcm9jZXNzLm9uKCdTSUdJTicsICgpID0+IHtcclxuICByZWRpc0NsaWVudC5xdWl0KCk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkaXNDbGllbnQ7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9wb2x5ZmlsbFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXN5bmMtcmVkaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJjcnlwdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNoYWkvaW5kZXhcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvb2tpZS1wYXJzZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRvdGVudlwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cC1zdGF0dXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpvaVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNvbndlYnRva2VuXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9yZ2FuXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXNzcG9ydFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGFzc3BvcnQtZ29vZ2xlLW9hdXRoMjBcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhc3Nwb3J0LWp3dFwiKTs7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnbW9kdWxlJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiQGJhYmVsL3BvbHlmaWxsXCIpO1xudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUpBO0FBQUE7QUFLQTtBQUFBO0FBQ0E7QUFOQTtBQUtBO0FBQ0E7QUFOQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFRQTtBQURBO0FBQ0E7QUFSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQWFBO0FBREE7QUFDQTtBQWJBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFoQkE7QUFBQTtBQUNBO0FBREE7QUFxQkE7QUFyQkE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQTRCQTs7Ozs7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBSkE7QUFHQTtBQUNBO0FBSkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBTUE7QUFEQTtBQUNBO0FBTkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQVNBO0FBQ0E7QUFWQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFZQTtBQURBO0FBQ0E7QUFaQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7QUFxQkE7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUZBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFKQTtBQUdBO0FBSEE7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBTEE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBT0E7QUFEQTtBQUNBO0FBUEE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFKQTtBQUdBO0FBQ0E7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFLQTtBQUFBO0FBQ0E7QUFOQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBT0E7QUFDQTtBQVJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQVNBO0FBQUE7QUFDQTtBQVZBO0FBV0E7QUFDQTtBQUNBO0FBRkE7QUFHQTtBQUFBO0FBZEE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQWlCQTtBQUFBO0FBQUE7QUFHQTtBQURBO0FBQ0E7QUFwQkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7O0FBMkJBOzs7OztBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFKQTtBQUdBO0FBQ0E7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFLQTtBQUFBO0FBQ0E7QUFOQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQVJBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQW9CQTs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQUpBO0FBR0E7QUFDQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUtBO0FBQUE7QUFDQTtBQU5BO0FBT0E7QUFDQTtBQUNBO0FBRkE7QUFHQTtBQUFBO0FBVkE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQWFBO0FBQUE7QUFBQTtBQUdBO0FBREE7QUFDQTtBQWhCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7OztBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkRBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUFBO0FBQ0E7QUFSQTtBQU9BO0FBQ0E7QUFSQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFVQTtBQURBO0FBQ0E7QUFWQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFiQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7QUF5QkE7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUZBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUtBO0FBQUE7QUFDQTtBQU5BO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQWFBOzs7OztBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUZBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFRQTtBQUNBO0FBVEE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBVUE7QUFBQTtBQUNBO0FBWEE7QUFBQTtBQUFBO0FBWUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQU9BO0FBREE7QUFDQTtBQW5CQTtBQVlBO0FBWkE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQTJCQTs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBSkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFBQTtBQUNBO0FBTkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQU9BO0FBUEE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7O0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBSkE7QUFHQTtBQUNBO0FBSkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFBQTtBQUNBO0FBTkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFSQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7QUFvQkE7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUZBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQU1BO0FBREE7QUFDQTtBQU5BO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQWVBOzs7OztBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUZBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBTEE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBT0E7QUFEQTtBQUNBO0FBUEE7QUFVQTtBQVZBO0FBQUE7QUFXQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBT0E7QUFEQTtBQUNBO0FBbEJBO0FBV0E7QUFYQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7QTs7Ozs7Ozs7Ozs7Ozs7QUN4Q0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUxBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFjQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUhBO0FBRUE7QUFDQTtBQUhBO0FBQUE7QUFLQTtBQUNBO0FBRkE7QUFDQTtBQUxBO0FBSUE7QUFKQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQWNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBTEE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBWUE7QUFDQTtBOzs7Ozs7Ozs7Ozs7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFIQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFIQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBWEE7QUFpQkE7QUFDQTtBOzs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBOzs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQVBBO0FBVUE7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBSUE7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7QUFNQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUVBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUhBO0FBT0E7QUFDQTtBQUNBO0FBVEE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFkQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQWlCQTtBQUVBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7QUN6REE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QTs7Ozs7Ozs7QUM1QkE7QUFDQTtBOzs7Ozs7OztBQ0RBO0FBQ0E7QTs7Ozs7Ozs7QUNEQTtBQUNBO0E7Ozs7Ozs7O0FDREE7QUFDQTtBOzs7Ozs7OztBQ0RBO0FBQ0E7QTs7Ozs7Ozs7QUNEQTtBQUNBO0E7Ozs7Ozs7O0FDREE7QUFDQTtBOzs7Ozs7OztBQ0RBO0FBQ0E7QTs7Ozs7Ozs7QUNEQTtBQUNBO0E7Ozs7Ozs7O0FDREE7QUFDQTtBOzs7Ozs7OztBQ0RBO0FBQ0E7QTs7Ozs7Ozs7QUNEQTtBQUNBO0E7Ozs7Ozs7O0FDREE7QUFDQTtBOzs7Ozs7OztBQ0RBO0FBQ0E7QTs7Ozs7Ozs7QUNEQTtBQUNBO0E7Ozs7Ozs7O0FDREE7QUFDQTtBOzs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QSIsInNvdXJjZVJvb3QiOiIifQ==