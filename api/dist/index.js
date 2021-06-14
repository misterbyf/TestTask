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
            }).status((http_status__WEBPACK_IMPORTED_MODULE_2___default().OK)).json(user));

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
            }).status((http_status__WEBPACK_IMPORTED_MODULE_2___default().OK)).json(user));

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
  !*** ./middleware/error.handler.js ***!
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
  !*** ./middleware/passport.google.js ***!
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
  !*** ./middleware/schemas.for.validation/auth.schema.js ***!
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
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! passport */ "passport");
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_2__);



var router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();
router.route('/:id').get(passport__WEBPACK_IMPORTED_MODULE_2___default().authenticate('jwt', {
  session: false
}), _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__.getUser).put(passport__WEBPACK_IMPORTED_MODULE_2___default().authenticate('jwt', {
  session: false
}), _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__.updateUser);
router.post('/', passport__WEBPACK_IMPORTED_MODULE_2___default().authenticate('jwt', {
  session: false
}), _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__.createUser);
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
  port: process.env.REDIS_PORT,
  host: process.env.REDIS_HOST
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIkQ6XFxOb2RlSlNGaWxlXFx0ZXN0LWF1dGgtY3J1ZFxcYXBpXFxjb250cm9sbGVyc1xcYW5zd2VyLmNvbnRyb2xsZXIuanMiLCJEOlxcTm9kZUpTRmlsZVxcdGVzdC1hdXRoLWNydWRcXGFwaVxcY29udHJvbGxlcnNcXGF1dGguY29udHJvbGxlci5qcyIsIkQ6XFxOb2RlSlNGaWxlXFx0ZXN0LWF1dGgtY3J1ZFxcYXBpXFxjb250cm9sbGVyc1xcc3VydmV5LmNvbnRyb2xsZXIuanMiLCJEOlxcTm9kZUpTRmlsZVxcdGVzdC1hdXRoLWNydWRcXGFwaVxcY29udHJvbGxlcnNcXHVzZXIuY29udHJvbGxlci5qcyIsIkQ6XFxOb2RlSlNGaWxlXFx0ZXN0LWF1dGgtY3J1ZFxcYXBpXFxtaWRkbGV3YXJlXFxlcnJvckhhbmRsZXIuanMiLCJEOlxcTm9kZUpTRmlsZVxcdGVzdC1hdXRoLWNydWRcXGFwaVxcbWlkZGxld2FyZVxcbWlkZGxld2FyZS52YWxpZGF0b3IuanMiLCJEOlxcTm9kZUpTRmlsZVxcdGVzdC1hdXRoLWNydWRcXGFwaVxcbWlkZGxld2FyZVxccGFzc3BvcnRHb29nbGUuanMiLCJEOlxcTm9kZUpTRmlsZVxcdGVzdC1hdXRoLWNydWRcXGFwaVxcbWlkZGxld2FyZVxccGFzc3BvcnRKV1QuanMiLCJEOlxcTm9kZUpTRmlsZVxcdGVzdC1hdXRoLWNydWRcXGFwaVxcbWlkZGxld2FyZVxcc2NoZW1hcy5mb3IudmFsaWRhdGlvblxcYXV0aFNjaGVtYS5qcyIsIkQ6XFxOb2RlSlNGaWxlXFx0ZXN0LWF1dGgtY3J1ZFxcYXBpXFxtb2RlbHNcXEFuc3dlci5qcyIsIkQ6XFxOb2RlSlNGaWxlXFx0ZXN0LWF1dGgtY3J1ZFxcYXBpXFxtb2RlbHNcXFN1cnZleS5qcyIsIkQ6XFxOb2RlSlNGaWxlXFx0ZXN0LWF1dGgtY3J1ZFxcYXBpXFxtb2RlbHNcXFVzZXIuanMiLCJEOlxcTm9kZUpTRmlsZVxcdGVzdC1hdXRoLWNydWRcXGFwaVxccm91dGVzXFxhbnN3ZXIuanMiLCJEOlxcTm9kZUpTRmlsZVxcdGVzdC1hdXRoLWNydWRcXGFwaVxccm91dGVzXFxhdXRoLmpzIiwiRDpcXE5vZGVKU0ZpbGVcXHRlc3QtYXV0aC1jcnVkXFxhcGlcXHJvdXRlc1xcc3VydmV5LmpzIiwiRDpcXE5vZGVKU0ZpbGVcXHRlc3QtYXV0aC1jcnVkXFxhcGlcXHJvdXRlc1xcdXNlci5qcyIsIkQ6XFxOb2RlSlNGaWxlXFx0ZXN0LWF1dGgtY3J1ZFxcYXBpXFxzcmNcXGluZGV4LmpzIiwiRDpcXE5vZGVKU0ZpbGVcXHRlc3QtYXV0aC1jcnVkXFxhcGlcXHV0aWxzXFxpbml0LnJlZGlzLmpzIiwiZXh0ZXJuYWwgXCJAYmFiZWwvcG9seWZpbGxcIiIsImV4dGVybmFsIFwiYXN5bmMtcmVkaXNcIiIsImV4dGVybmFsIFwiYmNyeXB0XCIiLCJleHRlcm5hbCBcImJvZHktcGFyc2VyXCIiLCJleHRlcm5hbCBcImNvb2tpZS1wYXJzZXJcIiIsImV4dGVybmFsIFwiZG90ZW52XCIiLCJleHRlcm5hbCBcImV4cHJlc3NcIiIsImV4dGVybmFsIFwiaHR0cC1zdGF0dXNcIiIsImV4dGVybmFsIFwiam9pXCIiLCJleHRlcm5hbCBcImpzb253ZWJ0b2tlblwiIiwiZXh0ZXJuYWwgXCJtb25nb29zZVwiIiwiZXh0ZXJuYWwgXCJtb3JnYW5cIiIsImV4dGVybmFsIFwicGFzc3BvcnRcIiIsImV4dGVybmFsIFwicGFzc3BvcnQtZ29vZ2xlLW9hdXRoMjBcIiIsImV4dGVybmFsIFwicGFzc3BvcnQtand0XCIiLCJ3ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrL3N0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGh0dHBTdGF0dXMgZnJvbSAnaHR0cC1zdGF0dXMnO1xyXG5pbXBvcnQgQW5zd2VyIGZyb20gJy4uL21vZGVscy9BbnN3ZXInO1xyXG5pbXBvcnQgU3VydmV5IGZyb20gJy4uL21vZGVscy9TdXJ2ZXknO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gY3JlYXRlQW5zd2VyKHJlcSwgcmVzLCBuZXh0KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgX2lkIH0gPSByZXEudXNlcjtcclxuICAgIGNvbnN0IHsgdXJsIH0gPSByZXEucGFyYW1zO1xyXG4gICAgY29uc3QgZGF0YSA9IHJlcS5ib2R5O1xyXG4gICAgY29uc3Qgc3VydmV5ID0gYXdhaXQgU3VydmV5LmZpbmRPbmUoeyB1cmwgfSk7XHJcbiAgICBpZiAoIXN1cnZleSkge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhodHRwU3RhdHVzLk5PVF9GT1VORCkuanNvbih7XHJcbiAgICAgICAgbWVzc2FnZTogJ1N1cnZleSBub3QgZm91bmQuJ1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmICghZGF0YSkge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhodHRwU3RhdHVzLkJBRF9SRVFVRVNUKS5qc29uKHtcclxuICAgICAgICBtZXNzYWdlOiAnRGF0YSBpcyBlbXB0eS4nXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY29uc3QgYW5zd2VyID0gbmV3IEFuc3dlcih7XHJcbiAgICAgIHVzZXI6IF9pZCxcclxuICAgICAgc3VydmV5OiBzdXJ2ZXkuX2lkLFxyXG4gICAgICBkYXRhXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFuc3dlci5zYXZlKCk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyhodHRwU3RhdHVzLkNSRUFURUQpLmpzb24ocmVzdWx0KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIG5leHQoZXJyb3IpO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0QW5zd2VyKHJlcSwgcmVzLCBuZXh0KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgdXJsLCBpZCB9ID0gcmVxLnBhcmFtcztcclxuICAgIGNvbnN0IHN1cnZleSA9IGF3YWl0IFN1cnZleS5maW5kT25lKHsgdXJsIH0pO1xyXG4gICAgaWYgKCFzdXJ2ZXkpIHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoaHR0cFN0YXR1cy5OT1RfRk9VTkQpLmpzb24oe1xyXG4gICAgICAgIG1lc3NhZ2U6ICdTdXJ2ZXkgd2l0aCBzYW1lIGVtYWlsIG5vdCBmb3VuZC4nXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY29uc3QgYW5zd2VyID0gYXdhaXQgQW5zd2VyLmZpbmRCeUlkKGlkKS5wb3B1bGF0ZSgnc3VydmV5Jyk7XHJcbiAgICBpZiAoIWFuc3dlcikge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhodHRwU3RhdHVzLk5PVF9GT1VORCkuanNvbih7XHJcbiAgICAgICAgbWVzc2FnZTogJ0Fuc3dlciB3aXRoIHNhbWUgaWQgbm90IGZvdW5kLidcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oYW5zd2VyKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIG5leHQoZXJyb3IpO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0QW5zd2VycyhyZXEsIHJlcywgbmV4dCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IHVybCB9ID0gcmVxLnBhcmFtcztcclxuICAgIGNvbnN0IHN1cnZleSA9IGF3YWl0IFN1cnZleS5maW5kT25lKHsgdXJsIH0pO1xyXG4gICAgY29uc3QgYW5zd2VyID0gYXdhaXQgQW5zd2VyLmZpbmQoe30pLnBvcHVsYXRlKCdzdXJ2ZXknKTtcclxuICAgIGlmICghc3VydmV5KSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGh0dHBTdGF0dXMuTk9UX0ZPVU5EKS5qc29uKHtcclxuICAgICAgICBtZXNzYWdlOiAnU3VydmV5IHdpdGggc2FtZSBlbWFpbCBub3QgZm91bmQuJ1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXMuc3RhdHVzKGh0dHBTdGF0dXMuT0spLmpzb24oYW5zd2VyKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIG5leHQoZXJyb3IpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBjcmVhdGVBbnN3ZXIsXHJcbiAgZ2V0QW5zd2VyLFxyXG4gIGdldEFuc3dlcnMsXHJcbn07XHJcbiIsImltcG9ydCBiQ3J5cHQgZnJvbSAnYmNyeXB0JztcclxuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nO1xyXG5pbXBvcnQgaHR0cFN0YXR1cyBmcm9tICdodHRwLXN0YXR1cyc7XHJcbmltcG9ydCByZWRpc0NsaWVudCBmcm9tICcuLi91dGlscy9pbml0LnJlZGlzJztcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi4vbW9kZWxzL1VzZXInO1xyXG5jb25zdCBTRUNSRVRfS0VZID0gcHJvY2Vzcy5lbnYuSldUO1xyXG5jb25zdCBzYWx0Um91bmRzID0gMTA7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBsb2dpbihyZXEsIHJlcywgbmV4dCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gcmVxLmJvZHk7XHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgZW1haWwgfSk7XHJcbiAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoaHR0cFN0YXR1cy5OT1RfRk9VTkQpLmpzb24oeyBtZXNzYWdlOiAnVXNlciBkb2VzIG5vdCBleGlzdC4nIH0pO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcGFzc3dvcmRSZXN1bHQgPSBhd2FpdCBiQ3J5cHQuY29tcGFyZShwYXNzd29yZCwgdXNlci5wYXNzd29yZCk7XHJcbiAgICBpZiAoIXBhc3N3b3JkUmVzdWx0KSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGh0dHBTdGF0dXMuQkFEX1JFUVVFU1QpLmpzb24oeyBtZXNzYWdlOiAnSW5jb3JyZWN0IHBhc3N3b3JkLicgfSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCB0b2tlbiA9IGp3dC5zaWduKHtcclxuICAgICAgdXNlcklkOiB1c2VyLl9pZCxcclxuICAgICAgZW1haWw6IHVzZXIuZW1haWxcclxuICAgIH0sIFNFQ1JFVF9LRVksIHsgZXhwaXJlc0luOiA2MCAqIDYwIH0pO1xyXG4gICAgYXdhaXQgcmVkaXNDbGllbnQuc2V0KHRva2VuLnRvU3RyaW5nKCksIHVzZXIuX2lkLnRvU3RyaW5nKCksICdFWCcsIDYwICogNjApO1xyXG4gICAgcmV0dXJuIHJlc1xyXG4gICAgICAuY29va2llKCdqd3QnLCB0b2tlbiwgeyBzaWduZWQ6IHRydWUsIGh0dHBPbmx5OiB0cnVlIH0pXHJcbiAgICAgIC5zdGF0dXMoaHR0cFN0YXR1cy5PSylcclxuICAgICAgLmpzb24odXNlcik7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiBuZXh0KGVycm9yKTtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyKHJlcSwgcmVzLCBuZXh0KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgbmFtZSwgZW1haWwsIHBhc3N3b3JkIH0gPSByZXEuYm9keTtcclxuICAgIGNvbnN0IGNhbmRpZGF0ZSA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IGVtYWlsIH0pO1xyXG4gICAgaWYgKGNhbmRpZGF0ZSkge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhodHRwU3RhdHVzLkJBRF9SRVFVRVNUKS5qc29uKHsgbWVzc2FnZTogJ1VzZXIgd2l0aCBzYW1lIGVtYWlsIGhhcyBiZWVuIGNyZWF0ZWQuJyB9KTtcclxuICAgIH1cclxuICAgIGNvbnN0IHNhbHQgPSBiQ3J5cHQuZ2VuU2FsdFN5bmMoc2FsdFJvdW5kcyk7XHJcbiAgICBjb25zdCB1c2VyID0gbmV3IFVzZXIoe1xyXG4gICAgICBuYW1lLFxyXG4gICAgICBlbWFpbCxcclxuICAgICAgcGFzc3dvcmQ6IGJDcnlwdC5oYXNoU3luYyhwYXNzd29yZCwgc2FsdClcclxuICAgIH0pO1xyXG4gICAgYXdhaXQgdXNlci5zYXZlKCk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyhodHRwU3RhdHVzLkNSRUFURUQpLmpzb24odXNlcik7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiBuZXh0KGVycm9yKTtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdvb2dsZUF1dGhvcml6YXRpb24ocmVxLCByZXMsIG5leHQpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBlbWFpbCB9ID0gcmVxLnVzZXI7XHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgZW1haWwgfSk7XHJcbiAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoaHR0cFN0YXR1cy5OT1RfRk9VTkQpLmpzb24oeyBtZXNzYWdlOiAnVXNlciBkb2VzIG5vdCBleGlzdC4nIH0pO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdG9rZW4gPSBqd3Quc2lnbih7XHJcbiAgICAgIHVzZXJJZDogdXNlci5faWQsXHJcbiAgICAgIGVtYWlsOiB1c2VyLmVtYWlsXHJcbiAgICB9LCBTRUNSRVRfS0VZLCB7IGV4cGlyZXNJbjogNjAgKiA2MCB9KTtcclxuICAgIGF3YWl0IHJlZGlzQ2xpZW50LnNldCh0b2tlbi50b1N0cmluZygpLCB1c2VyLl9pZC50b1N0cmluZygpLCAnRVgnLCA2MCAqIDYwKTtcclxuICAgIHJldHVybiByZXNcclxuICAgICAgLmNvb2tpZSgnand0JywgdG9rZW4sIHsgc2lnbmVkOiB0cnVlLCBodHRwT25seTogdHJ1ZSB9KVxyXG4gICAgICAuc3RhdHVzKGh0dHBTdGF0dXMuT0spXHJcbiAgICAgIC5qc29uKHVzZXIpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gbmV4dChlcnJvcik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIGxvZ2luLFxyXG4gIHJlZ2lzdGVyLFxyXG4gIGdvb2dsZUF1dGhvcml6YXRpb25cclxufTtcclxuIiwiaW1wb3J0IFN1cnZleSBmcm9tICcuLi9tb2RlbHMvU3VydmV5JztcclxuaW1wb3J0IGh0dHBTdGF0dXMgZnJvbSAnaHR0cC1zdGF0dXMnO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gY3JlYXRlU3VydmV5KHJlcSwgcmVzLCBuZXh0KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgbmFtZSxcclxuICAgICAgdXJsLFxyXG4gICAgICBxdWVzdGlvbnNcclxuICAgIH0gPSByZXEuYm9keTtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IFN1cnZleS5maW5kT25lKHsgdXJsIH0pO1xyXG4gICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhodHRwU3RhdHVzLkJBRF9SRVFVRVNUKS5qc29uKHtcclxuICAgICAgICBtZXNzYWdlOiAnU3VydmV5IHdpdGggc2FtZSBlbWFpbCBub3QgZm91bmQuJ1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGNvbnN0IHN1cnZleSA9IG5ldyBTdXJ2ZXkoe1xyXG4gICAgICBuYW1lLFxyXG4gICAgICB1cmwsXHJcbiAgICAgIHF1ZXN0aW9uc1xyXG4gICAgfSk7XHJcbiAgICBhd2FpdCBzdXJ2ZXkuc2F2ZSgpO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoaHR0cFN0YXR1cy5DUkVBVEVEKS5qc29uKHN1cnZleSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiBuZXh0KGVycm9yKTtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFN1cnZleShyZXEsIHJlcywgbmV4dCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGlkIH0gPSByZXEucGFyYW1zO1xyXG4gICAgY29uc3Qgc3VydmV5ID0gYXdhaXQgU3VydmV5LmZpbmRCeUlkKGlkKTtcclxuICAgIGlmICghc3VydmV5KSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGh0dHBTdGF0dXMuTk9UX0ZPVU5EKS5qc29uKHsgbWVzc2FnZTogJ1N1cnZleSB3aXRoIHNhbWUgaWQgbm90IGZvdW5kLicgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyhodHRwU3RhdHVzLk9LKS5qc29uKHN1cnZleSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiBuZXh0KGVycm9yKTtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVN1cnZleShyZXEsIHJlcywgbmV4dCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGlkIH0gPSByZXEucGFyYW1zO1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBuYW1lLFxyXG4gICAgICB1cmwsXHJcbiAgICAgIHF1ZXN0aW9uc1xyXG4gICAgfSA9IHJlcS5ib2R5O1xyXG4gICAgY29uc3Qgc3VydmV5ID0gYXdhaXQgU3VydmV5LmZpbmRCeUlkKGlkKTtcclxuICAgIGlmICghc3VydmV5KSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGh0dHBTdGF0dXMuTk9UX0ZPVU5EKS5qc29uKHsgbWVzc2FnZTogJ1N1cnZleSB3aXRoIHNhbWUgaWQgbm90IGZvdW5kLicgfSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCByZWxvYWRTdXJ2ZXkgPSBhd2FpdCBTdXJ2ZXkudXBkYXRlT25lKHsgX2lkOiBpZCB9LCB7XHJcbiAgICAgICRzZXQ6IHtcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgIHVybCxcclxuICAgICAgICBxdWVzdGlvbnNcclxuICAgICAgfVxyXG4gICAgfSwge1xyXG4gICAgICBuZXc6IHRydWVcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoaHR0cFN0YXR1cy5PSykuanNvbihyZWxvYWRTdXJ2ZXkpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gbmV4dChlcnJvcik7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiByZW1vdmVTdXJ2ZXkocmVxLCByZXMsIG5leHQpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBpZCB9ID0gcmVxLnBhcmFtcztcclxuICAgIGNvbnN0IHN1cnZleSA9IGF3YWl0IFN1cnZleS5maW5kQnlJZChpZCk7XHJcbiAgICBpZiAoIXN1cnZleSkge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhodHRwU3RhdHVzLk5PVF9GT1VORCkuanNvbih7IG1lc3NhZ2U6ICdTdXJ2ZXkgd2l0aCBzYW1lIGlkIG5vdCBmb3VuZC4nIH0pO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgU3VydmV5LnJlbW92ZShpZCk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyhodHRwU3RhdHVzLk9LKS5qc29uKHJlc3VsdCk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiBuZXh0KGVycm9yKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgY3JlYXRlU3VydmV5LFxyXG4gIGdldFN1cnZleSxcclxuICB1cGRhdGVTdXJ2ZXksXHJcbiAgcmVtb3ZlU3VydmV5XHJcbn07XHJcbiIsImltcG9ydCBVc2VyIGZyb20gJy4uL21vZGVscy9Vc2VyJztcclxuaW1wb3J0IGh0dHBTdGF0dXMgZnJvbSAnaHR0cC1zdGF0dXMnO1xyXG5pbXBvcnQgYkNyeXB0IGZyb20gJ2JjcnlwdCc7XHJcbmNvbnN0IHNhbHRSb3VuZHMgPSAxMDtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVVzZXIocmVxLCByZXMsIG5leHQpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBuYW1lLCBlbWFpbCwgcGFzc3dvcmQgfSA9IHJlcS5ib2R5O1xyXG4gICAgY29uc3QgY2FuZGlkYXRlID0gYXdhaXQgVXNlci5maW5kT25lKHsgZW1haWwgfSk7XHJcbiAgICBpZiAoY2FuZGlkYXRlKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGh0dHBTdGF0dXMuQkFEX1JFUVVFU1QpLmpzb24oeyBtZXNzYWdlOiAnVXNlciB3aXRoIHNhbWUgZW1haWwgaGFzIGJlZW4gY3JlYXRlZC4nIH0pO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc2FsdCA9IGJDcnlwdC5nZW5TYWx0U3luYyhzYWx0Um91bmRzKTtcclxuICAgIGNvbnN0IHVzZXIgPSBuZXcgVXNlcih7XHJcbiAgICAgIG5hbWUsXHJcbiAgICAgIGVtYWlsLFxyXG4gICAgICBwYXNzd29yZDogYkNyeXB0Lmhhc2hTeW5jKHBhc3N3b3JkLCBzYWx0KVxyXG4gICAgfSk7XHJcbiAgICBhd2FpdCB1c2VyLnNhdmUoKTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKGh0dHBTdGF0dXMuQ1JFQVRFRCkuanNvbih1c2VyKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIG5leHQoZXJyb3IpO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0VXNlcihyZXEsIHJlcywgbmV4dCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGlkIH0gPSByZXEucGFyYW1zO1xyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZEJ5SWQoaWQpO1xyXG4gICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGh0dHBTdGF0dXMuQkFEX1JFUVVFU1QpLmpzb24oe1xyXG4gICAgICAgIG1lc3NhZ2U6ICdVc2VyIGRvZXMgbm90IGV4aXN0LidcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyhodHRwU3RhdHVzLk9LKS5qc29uKHVzZXIpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gbmV4dChlcnJvcik7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiB1cGRhdGVVc2VyKHJlcSwgcmVzLCBuZXh0KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgaWQgfSA9IHJlcS5wYXJhbXM7XHJcbiAgICBjb25zdCB7IG5hbWUsIGVtYWlsLCBwYXNzd29yZCB9ID0gcmVxLmJvZHk7XHJcbiAgICBjb25zdCBjYW5kaWRhdGUgPSBhd2FpdCBVc2VyLmZpbmRCeUlkKGlkKTtcclxuICAgIGlmICghY2FuZGlkYXRlKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGh0dHBTdGF0dXMuTk9UX0ZPVU5EKS5qc29uKHtcclxuICAgICAgICBtZXNzYWdlOiAnVXNlciBkb2VzIG5vdCBleGlzdC4nXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc2FsdCA9IGJDcnlwdC5nZW5TYWx0U3luYyhzYWx0Um91bmRzKTtcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLnVwZGF0ZU9uZSh7IF9pZDogaWQgfSwge1xyXG4gICAgICAkc2V0OiB7XHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICBlbWFpbCxcclxuICAgICAgICBwYXNzd29yZDogYkNyeXB0Lmhhc2hTeW5jKHBhc3N3b3JkLCBzYWx0KVxyXG4gICAgICB9XHJcbiAgICB9LCB7XHJcbiAgICAgIG5ldzogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyhodHRwU3RhdHVzLk9LKS5qc29uKHVzZXIpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gbmV4dChlcnJvcik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIGNyZWF0ZVVzZXIsXHJcbiAgZ2V0VXNlcixcclxuICB1cGRhdGVVc2VyXHJcbn07XHJcbiIsImltcG9ydCBodHRwU3RhdHVzIGZyb20gJ2h0dHAtc3RhdHVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVycm9ySGFuZGxlcihlcnIsIHJlcSwgcmVzLCBuZXh0KSB7XHJcbiAgcmV0dXJuIHJlcy5zdGF0dXMoaHR0cFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1IpLmpzb24oe1xyXG4gICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICBlcnJvcjogZXJyLm1lc3NhZ2UgPyBlcnIubWVzc2FnZSA6IGVyclxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCBKb2kgZnJvbSAnam9pJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pZGRsZXdhcmVWYWxpZGF0b3Ioc2NoZW1hKSB7XHJcbiAgcmV0dXJuIGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xyXG4gICAgY29uc3QgeyBib2R5LCBxdWVyeSwgcGFyYW1zIH0gPSByZXE7XHJcbiAgICBjb25zdCBuZXdTY2hlbWEgPSBzY2hlbWEoSm9pKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IG5ld1NjaGVtYS52YWxpZGF0ZUFzeW5jKHtcclxuICAgICAgICBib2R5LFxyXG4gICAgICAgIHF1ZXJ5LFxyXG4gICAgICAgIHBhcmFtc1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIG5leHQoKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiBuZXh0KGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcbiIsImltcG9ydCB7IFN0cmF0ZWd5IGFzIEdvb2dsZVN0cmF0ZWd5IH0gZnJvbSAncGFzc3BvcnQtZ29vZ2xlLW9hdXRoMjAnO1xyXG5pbXBvcnQgZG90RW52IGZyb20gJ2RvdGVudic7XHJcbmltcG9ydCBVc2VyIGZyb20gJy4uL21vZGVscy9Vc2VyJztcclxuZG90RW52LmNvbmZpZygpO1xyXG5cclxuY29uc3Qgb3B0aW9ucyA9IHtcclxuICBjbGllbnRJRDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCxcclxuICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9TRUNSRVRfS0VZLFxyXG4gIGNhbGxiYWNrVVJMOiBgaHR0cDovL2xvY2FsaG9zdDoke3Byb2Nlc3MuZW52LlBPUlR9L2FwaS9hdXRoL2dvb2dsZS9jYWxsYmFja2BcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pZGRsZXdhcmVHb29nbGUocGFzc3BvcnQpIHtcclxuICBwYXNzcG9ydC51c2UoXHJcbiAgICBuZXcgR29vZ2xlU3RyYXRlZ3kob3B0aW9ucywgYXN5bmMgKGFjY2Vzc1Rva2VuLCByZWZyZXNoVG9rZW4sIHBheWxvYWQsIGRvbmUpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBsZXQgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IGVtYWlsOiBwYXlsb2FkLmVtYWlsc1swXS52YWx1ZSB9KTtcclxuICAgICAgICBpZiAodXNlcikgZG9uZShudWxsLCB1c2VyKTtcclxuICAgICAgICBjb25zdCBuZXdVc2VyID0gYXdhaXQgVXNlci5jcmVhdGUoe1xyXG4gICAgICAgICAgbmFtZTogcGF5bG9hZC5uYW1lLmdpdmVuTmFtZSxcclxuICAgICAgICAgIGVtYWlsOiBwYXlsb2FkLmVtYWlsc1swXS52YWx1ZVxyXG4gICAgICAgIH0pLnNhdmUoKTtcclxuICAgICAgICByZXR1cm4gZG9uZShudWxsLCBuZXdVc2VyKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gZG9uZShlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgKTtcclxuICBwYXNzcG9ydC5zZXJpYWxpemVVc2VyKCh1c2VyLCBkb25lKSA9PiB7XHJcbiAgICBkb25lKG51bGwsIHVzZXIuaWQpO1xyXG4gIH0pO1xyXG5cclxuICBwYXNzcG9ydC5kZXNlcmlhbGl6ZVVzZXIoKGlkLCBkb25lKSA9PiB7XHJcbiAgICBVc2VyLmZpbmRCeUlkKGlkLCAoZXJyLCB1c2VyKSA9PiB7XHJcbiAgICAgIGRvbmUoZXJyLCB1c2VyKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IFN0cmF0ZWd5IGFzIEpXVFN0cmF0ZWd5IH0gZnJvbSAncGFzc3BvcnQtand0JztcclxuaW1wb3J0IGRvdEVudiBmcm9tICdkb3RlbnYnO1xyXG5pbXBvcnQgVXNlciBmcm9tICcuLi9tb2RlbHMvVXNlcic7XHJcbmltcG9ydCByZWRpc0NsaWVudCBmcm9tICcuLi91dGlscy9pbml0LnJlZGlzJztcclxuZG90RW52LmNvbmZpZygpO1xyXG5jb25zdCBTRUNSRVRfS0VZID0gcHJvY2Vzcy5lbnYuSldUO1xyXG5cclxuY29uc3QgY29va2llRXh0cmFjdG9yID0gKHJlcSkgPT4ge1xyXG4gIGxldCB0b2tlbiA9IG51bGw7XHJcbiAgaWYgKHJlcSAmJiByZXEuc2lnbmVkQ29va2llcyAmJiByZXEuc2lnbmVkQ29va2llcy5qd3QpIHtcclxuICAgIHRva2VuID0gcmVxLnNpZ25lZENvb2tpZXMuand0O1xyXG4gIH1cclxuICByZXR1cm4gdG9rZW47XHJcbn07XHJcblxyXG5jb25zdCBvcHRpb25zID0ge1xyXG4gIGp3dEZyb21SZXF1ZXN0OiBjb29raWVFeHRyYWN0b3IsXHJcbiAgc2VjcmV0T3JLZXk6IFNFQ1JFVF9LRVksXHJcbiAgcGFzc1JlcVRvQ2FsbGJhY2s6IHRydWVcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pZGRsZXdhcmVKd3QocGFzc3BvcnQpIHtcclxuICBwYXNzcG9ydC51c2UoXHJcbiAgICBuZXcgSldUU3RyYXRlZ3kob3B0aW9ucywgYXN5bmMgKHJlcSwgcGF5bG9hZCwgZG9uZSkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlZGlzQ2xpZW50LmdldChyZXEuc2lnbmVkQ29va2llcy5qd3QudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgaWYgKCFyZXN1bHQpIHJldHVybiBkb25lKG51bGwsIGZhbHNlKTtcclxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kQnlJZChyZXN1bHQpO1xyXG4gICAgICAgIGlmICghdXNlcikgcmV0dXJuIGRvbmUobnVsbCwgZmFsc2UpO1xyXG4gICAgICAgIHJldHVybiBkb25lKG51bGwsIHVzZXIpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJldHVybiBkb25lKGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICApO1xyXG59XHJcbiIsImZ1bmN0aW9uIGxvZ2luU2NoZW1hKEpvaSkge1xyXG4gIHJldHVybiBKb2kub2JqZWN0KCkua2V5cyh7XHJcbiAgICBxdWVyeToge30sXHJcbiAgICBwYXJhbXM6IHt9LFxyXG4gICAgYm9keToge1xyXG4gICAgICBlbWFpbDogSm9pLnN0cmluZygpLnRyaW0oKS5lbWFpbCgpLnJlcXVpcmVkKCksXHJcbiAgICAgIHBhc3N3b3JkOiBKb2kuc3RyaW5nKCkubWluKDUpLm1heCgxNikucmVxdWlyZWQoKVxyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZWdpc3RlclNjaGVtYShKb2kpIHtcclxuICByZXR1cm4gSm9pLm9iamVjdCgpLmtleXMoe1xyXG4gICAgcXVlcnk6IHt9LFxyXG4gICAgcGFyYW1zOiB7fSxcclxuICAgIGJvZHk6IHtcclxuICAgICAgbmFtZTogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgIGVtYWlsOiBKb2kuc3RyaW5nKCkudHJpbSgpLmVtYWlsKCkucmVxdWlyZWQoKSxcclxuICAgICAgcGFzc3dvcmQ6IEpvaS5zdHJpbmcoKS5taW4oNSkubWF4KDE2KS5yZXF1aXJlZCgpXHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgbG9naW5TY2hlbWEsXHJcbiAgcmVnaXN0ZXJTY2hlbWFcclxufTtcclxuIiwiaW1wb3J0IG1vbmdvb3NlLCB7IFNjaGVtYSB9IGZyb20gJ21vbmdvb3NlJztcclxuXHJcbmNvbnN0IGFuc3dlclNjaGVtYSA9IG5ldyBTY2hlbWEoe1xyXG4gIHVzZXI6IHtcclxuICAgIHJlZjogJ1VzZXInLFxyXG4gICAgdHlwZTogU2NoZW1hLlR5cGVzLk9iamVjdElkLFxyXG4gICAgcmVxdWlyZWQ6IHRydWVcclxuICB9LFxyXG4gIHN1cnZleToge1xyXG4gICAgcmVmOiAnU3VydmV5JyxcclxuICAgIHR5cGU6IFNjaGVtYS5UeXBlcy5PYmplY3RJZCxcclxuICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgfSxcclxuICBkYXRhOiB7XHJcbiAgICB0eXBlOiBTY2hlbWEuVHlwZXMuTWl4ZWQsXHJcbiAgICByZXF1aXJlZDogdHJ1ZVxyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtb25nb29zZS5tb2RlbCgnQW5zd2VyJywgYW5zd2VyU2NoZW1hKTtcclxuIiwiaW1wb3J0IG1vbmdvb3NlLCB7IFNjaGVtYSB9IGZyb20gJ21vbmdvb3NlJztcclxuXHJcbmNvbnN0IHJlcVN0cmluZyA9IHtcclxuICB0eXBlOiBTdHJpbmcsXHJcbiAgcmVxdWlyZWQ6IHRydWVcclxufTtcclxuXHJcbmNvbnN0IHJlcVVybCA9IHtcclxuICB0eXBlOiBTdHJpbmcsXHJcbiAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgdW5pcXVlOiB0cnVlXHJcbn07XHJcblxyXG5jb25zdCBxdWVzdGlvblNjaGVtYSA9IG5ldyBTY2hlbWEoe1xyXG4gIG5hbWU6IHtcclxuICAgIHR5cGU6IFN0cmluZ1xyXG4gIH1cclxufSk7XHJcblxyXG5jb25zdCBzdXJ2ZXlTY2hlbWEgPSBuZXcgU2NoZW1hKHtcclxuICBuYW1lOiByZXFTdHJpbmcsXHJcbiAgdXJsOiByZXFVcmwsXHJcbiAgcXVlc3Rpb25zOiBbcXVlc3Rpb25TY2hlbWFdXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWwoJ1N1cnZleScsIHN1cnZleVNjaGVtYSk7XHJcbiIsImltcG9ydCBtb25nb29zZSwgeyBTY2hlbWEgfSBmcm9tICdtb25nb29zZSc7XHJcblxyXG5jb25zdCByZXFTdHJpbmcgPSB7XHJcbiAgdHlwZTogU3RyaW5nLFxyXG4gIHJlcXVpcmVkOiB0cnVlXHJcbn07XHJcblxyXG5jb25zdCB1c2VyU2NoZW1hID0gbmV3IFNjaGVtYSh7XHJcbiAgbmFtZTogcmVxU3RyaW5nLFxyXG4gIGVtYWlsOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIHVuaXF1ZTogdHJ1ZVxyXG4gIH0sXHJcbiAgcGFzc3dvcmQ6IHJlcVN0cmluZ1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVsKCdVc2VyJywgdXNlclNjaGVtYSk7XHJcbiIsImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgcGFzc3BvcnQgZnJvbSAncGFzc3BvcnQnO1xyXG5pbXBvcnQge2NyZWF0ZUFuc3dlciwgZ2V0QW5zd2VyLCBnZXRBbnN3ZXJzLCByZW1vdmVBbnN3ZXJ9IGZyb20gJy4uL2NvbnRyb2xsZXJzL2Fuc3dlci5jb250cm9sbGVyJztcclxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcclxuXHJcbnJvdXRlci5yb3V0ZSgnLzp1cmwnKVxyXG4gIC5wb3N0KHBhc3Nwb3J0LmF1dGhlbnRpY2F0ZSgnand0JywgeyBzZXNzaW9uOiBmYWxzZSB9KSwgY3JlYXRlQW5zd2VyKVxyXG4gIC5nZXQocGFzc3BvcnQuYXV0aGVudGljYXRlKCdqd3QnLCB7IHNlc3Npb246IGZhbHNlIH0pLCBnZXRBbnN3ZXJzKTtcclxucm91dGVyLmdldCgnLzp1cmwvOmlkJywgcGFzc3BvcnQuYXV0aGVudGljYXRlKCdqd3QnLCB7IHNlc3Npb246IGZhbHNlIH0pLCBnZXRBbnN3ZXIpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xyXG4iLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IHBhc3Nwb3J0IGZyb20gJ3Bhc3Nwb3J0JztcclxuaW1wb3J0IHsgZ29vZ2xlQXV0aG9yaXphdGlvbiwgbG9naW4sIHJlZ2lzdGVyIH0gZnJvbSAnLi4vY29udHJvbGxlcnMvYXV0aC5jb250cm9sbGVyJztcclxuaW1wb3J0IHsgbG9naW5TY2hlbWEsIHJlZ2lzdGVyU2NoZW1hIH0gZnJvbSAnLi4vbWlkZGxld2FyZS9zY2hlbWFzLmZvci52YWxpZGF0aW9uL2F1dGhTY2hlbWEnO1xyXG5pbXBvcnQgbWlkZGxld2FyZVZhbGlkYXRvciBmcm9tICcuLi9taWRkbGV3YXJlL21pZGRsZXdhcmUudmFsaWRhdG9yJztcclxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcclxuXHJcbnJvdXRlci5wb3N0KCcvbG9naW4nLCBtaWRkbGV3YXJlVmFsaWRhdG9yKGxvZ2luU2NoZW1hKSwgbG9naW4pO1xyXG5yb3V0ZXIucG9zdCgnL3JlZ2lzdGVyJywgbWlkZGxld2FyZVZhbGlkYXRvcihyZWdpc3RlclNjaGVtYSksIHJlZ2lzdGVyKTtcclxucm91dGVyLmdldCgnL2dvb2dsZScsIHBhc3Nwb3J0LmF1dGhlbnRpY2F0ZSgnZ29vZ2xlJywgeyBzY29wZTogWydwcm9maWxlJywgJ2VtYWlsJ10gfSkpO1xyXG5yb3V0ZXIuZ2V0KFxyXG4gICcvZ29vZ2xlL2NhbGxiYWNrJyxcclxuICBwYXNzcG9ydC5hdXRoZW50aWNhdGUoJ2dvb2dsZScsIHsgZmFpbHVyZVJlZGlyZWN0OiAnL2FwaS9hdXRoL2xvZ2luJyB9KSxcclxuICBnb29nbGVBdXRob3JpemF0aW9uXHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XHJcbiIsImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgcGFzc3BvcnQgZnJvbSAncGFzc3BvcnQnO1xyXG5pbXBvcnQge1xyXG4gIGdldFN1cnZleSxcclxuICB1cGRhdGVTdXJ2ZXksXHJcbiAgcmVtb3ZlU3VydmV5LFxyXG4gIGNyZWF0ZVN1cnZleVxyXG59IGZyb20gJy4uL2NvbnRyb2xsZXJzL3N1cnZleS5jb250cm9sbGVyJztcclxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcclxuXHJcbnJvdXRlci5yb3V0ZSgnLzppZCcpXHJcbiAgLmdldChwYXNzcG9ydC5hdXRoZW50aWNhdGUoJ2p3dCcsIHsgc2Vzc2lvbjogZmFsc2UgfSksIGdldFN1cnZleSlcclxuICAuZGVsZXRlKHBhc3Nwb3J0LmF1dGhlbnRpY2F0ZSgnand0JywgeyBzZXNzaW9uOiBmYWxzZSB9KSwgcmVtb3ZlU3VydmV5KVxyXG4gIC5wdXQocGFzc3BvcnQuYXV0aGVudGljYXRlKCdqd3QnLCB7IHNlc3Npb246IGZhbHNlIH0pLCB1cGRhdGVTdXJ2ZXkpO1xyXG5yb3V0ZXIucG9zdCgnLycsIHBhc3Nwb3J0LmF1dGhlbnRpY2F0ZSgnand0JywgeyBzZXNzaW9uOiBmYWxzZSB9KSwgY3JlYXRlU3VydmV5KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcclxuIiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCB7IGNyZWF0ZVVzZXIsIHVwZGF0ZVVzZXIsIGdldFVzZXIgfSBmcm9tICcuLi9jb250cm9sbGVycy91c2VyLmNvbnRyb2xsZXInO1xyXG5pbXBvcnQgcGFzc3BvcnQgZnJvbSBcInBhc3Nwb3J0XCI7XHJcbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XHJcblxyXG5yb3V0ZXIucm91dGUoJy86aWQnKVxyXG4gIC5nZXQocGFzc3BvcnQuYXV0aGVudGljYXRlKCdqd3QnLCB7IHNlc3Npb246IGZhbHNlIH0pLCBnZXRVc2VyKVxyXG4gIC5wdXQocGFzc3BvcnQuYXV0aGVudGljYXRlKCdqd3QnLCB7IHNlc3Npb246IGZhbHNlIH0pLCB1cGRhdGVVc2VyKTtcclxucm91dGVyLnBvc3QoJy8nLCBwYXNzcG9ydC5hdXRoZW50aWNhdGUoJ2p3dCcsIHsgc2Vzc2lvbjogZmFsc2UgfSksIGNyZWF0ZVVzZXIpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xyXG4iLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuaW1wb3J0IGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInO1xyXG5pbXBvcnQgY29va2llUGFyc2VyIGZyb20gJ2Nvb2tpZS1wYXJzZXInO1xyXG5pbXBvcnQgcGFzc3BvcnQgZnJvbSAncGFzc3BvcnQnO1xyXG5pbXBvcnQgbW9yZ2FuIGZyb20gJ21vcmdhbic7XHJcbmltcG9ydCBtaWRkbGV3YXJlSnd0IGZyb20gJy4uL21pZGRsZXdhcmUvcGFzc3BvcnRKV1QnO1xyXG5pbXBvcnQgbWlkZGxld2FyZUdvb2dsZSBmcm9tICcuLi9taWRkbGV3YXJlL3Bhc3Nwb3J0R29vZ2xlJztcclxuaW1wb3J0IGF1dGhSb3V0ZXIgZnJvbSAnLi4vcm91dGVzL2F1dGgnO1xyXG5pbXBvcnQgdXNlclJvdXRlciBmcm9tICcuLi9yb3V0ZXMvdXNlcic7XHJcbmltcG9ydCBzdXJ2ZXlSb3V0ZXIgZnJvbSAnLi4vcm91dGVzL3N1cnZleSc7XHJcbmltcG9ydCBzdXJ2ZXlBbnN3ZXJSb3V0ZXIgZnJvbSAnLi4vcm91dGVzL2Fuc3dlcic7XHJcbmltcG9ydCBlcnJvckhhbmRsZXIgZnJvbSAnLi4vbWlkZGxld2FyZS9lcnJvckhhbmRsZXInO1xyXG5cclxuY29uc3QgUE9SVCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgODA4MDtcclxuY29uc3QgVVJMID0gcHJvY2Vzcy5lbnYuVVJMO1xyXG5jb25zdCBTRUNSRVRfQ09PS0lFID0gcHJvY2Vzcy5lbnYuU0VDUkVUX0NPT0tJRTtcclxuXHJcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcclxuXHJcbmFwcC51c2UoY29va2llUGFyc2VyKFNFQ1JFVF9DT09LSUUpKTtcclxuYXBwLnVzZShtb3JnYW4oJ2RldicpKTtcclxuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XHJcbmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IHRydWUgfSkpO1xyXG5cclxuYXBwLnVzZShwYXNzcG9ydC5pbml0aWFsaXplKCkpO1xyXG5hcHAudXNlKHBhc3Nwb3J0LnNlc3Npb24oKSk7XHJcblxyXG5taWRkbGV3YXJlSnd0KHBhc3Nwb3J0KTtcclxubWlkZGxld2FyZUdvb2dsZShwYXNzcG9ydCk7XHJcblxyXG5hcHAudXNlKCcvYXBpL2F1dGgnLCBhdXRoUm91dGVyKTtcclxuYXBwLnVzZSgnL2FwaS91c2VyJywgdXNlclJvdXRlcik7XHJcbmFwcC51c2UoJy9hcGkvc3VydmV5Jywgc3VydmV5Um91dGVyKTtcclxuYXBwLnVzZSgnL2FwaS9hbnN3ZXInLCBzdXJ2ZXlBbnN3ZXJSb3V0ZXIpO1xyXG5hcHAudXNlKGVycm9ySGFuZGxlcik7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBydW5TZXJ2ZXIoKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QoVVJMLCB7XHJcbiAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcclxuICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxyXG4gICAgICB1c2VDcmVhdGVJbmRleDogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBhcHAubGlzdGVuKFBPUlQsICgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coYFNlcnZlciBoYXMgYmVlbiBzdGFydGVkIG9uIHBvcnQ6ICR7UE9SVH1gKTtcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUubG9nKGBTZXJ2ZXIgbWVzc2FnZTogJHtlLm1lc3NhZ2V9YCk7XHJcbiAgICBtb25nb29zZS5jb25uZWN0aW9uLmNsb3NlKCk7XHJcbiAgICBwcm9jZXNzLmV4aXQoMSk7XHJcbiAgfVxyXG59XHJcblxyXG5ydW5TZXJ2ZXIoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFwcDtcclxuIiwiaW1wb3J0IGFzeW5jUmVkaXMgZnJvbSAnYXN5bmMtcmVkaXMnO1xyXG5cclxuY29uc3QgcmVkaXNDbGllbnQgPSBhc3luY1JlZGlzLmNyZWF0ZUNsaWVudCh7XHJcbiAgcG9ydDogcHJvY2Vzcy5lbnYuUkVESVNfUE9SVCxcclxuICBob3N0OiBwcm9jZXNzLmVudi5SRURJU19IT1NUXHJcbn0pO1xyXG5cclxucmVkaXNDbGllbnQub24oJ2Nvbm5lY3QnLCAoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coJ0NsaWVudCBjb25uZWN0IHRvIHJlZGlzLi4uJyk7XHJcbn0pO1xyXG5cclxucmVkaXNDbGllbnQub24oJ3JlYWR5JywgKCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKCdDbGllbnQgY29ubmVjdCB0byByZWRpcyBhbmQgcmVhZHkgdG8gdXNlLi4uJyk7XHJcbn0pO1xyXG5cclxucmVkaXNDbGllbnQub24oJ2Vycm9yJywgKGVycikgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGVycik7XHJcbn0pO1xyXG5cclxucmVkaXNDbGllbnQub24oJ2VuZCcsICgpID0+IHtcclxuICBjb25zb2xlLmxvZygnQ2xpZW50IGRpc2Nvbm5lY3QgZnJvbSByZWRpcy4nKTtcclxufSk7XHJcblxyXG5wcm9jZXNzLm9uKCdTSUdJTicsICgpID0+IHtcclxuICByZWRpc0NsaWVudC5xdWl0KCk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkaXNDbGllbnQ7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9wb2x5ZmlsbFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXN5bmMtcmVkaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJjcnlwdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvb2tpZS1wYXJzZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRvdGVudlwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cC1zdGF0dXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpvaVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNvbndlYnRva2VuXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9yZ2FuXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXNzcG9ydFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGFzc3BvcnQtZ29vZ2xlLW9hdXRoMjBcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhc3Nwb3J0LWp3dFwiKTs7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnbW9kdWxlJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiQGJhYmVsL3BvbHlmaWxsXCIpO1xudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUpBO0FBQUE7QUFLQTtBQUFBO0FBQ0E7QUFOQTtBQUtBO0FBQ0E7QUFOQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFRQTtBQURBO0FBQ0E7QUFSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQWFBO0FBREE7QUFDQTtBQWJBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFoQkE7QUFBQTtBQUNBO0FBREE7QUFxQkE7QUFyQkE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQTRCQTs7Ozs7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBSkE7QUFHQTtBQUNBO0FBSkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBTUE7QUFEQTtBQUNBO0FBTkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQVNBO0FBQ0E7QUFWQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFZQTtBQURBO0FBQ0E7QUFaQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7QUFxQkE7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUZBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFKQTtBQUdBO0FBSEE7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBTEE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBT0E7QUFEQTtBQUNBO0FBUEE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFKQTtBQUdBO0FBQ0E7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFLQTtBQUFBO0FBQ0E7QUFOQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBT0E7QUFDQTtBQVJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQVNBO0FBQUE7QUFDQTtBQVZBO0FBV0E7QUFDQTtBQUNBO0FBRkE7QUFHQTtBQUFBO0FBZEE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQWlCQTtBQUFBO0FBQUE7QUFDQTtBQWxCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7QUF5QkE7Ozs7O0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQUpBO0FBR0E7QUFDQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUtBO0FBQUE7QUFDQTtBQU5BO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBUkE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7O0FBb0JBOzs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFGQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBSkE7QUFHQTtBQUNBO0FBSkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFBQTtBQUNBO0FBTkE7QUFPQTtBQUNBO0FBQ0E7QUFGQTtBQUdBO0FBQUE7QUFWQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBYUE7QUFBQTtBQUFBO0FBQ0E7QUFkQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7OztBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckRBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUFBO0FBQ0E7QUFSQTtBQU9BO0FBQ0E7QUFSQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFVQTtBQURBO0FBQ0E7QUFWQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFiQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7QUF5QkE7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUZBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUtBO0FBQUE7QUFDQTtBQU5BO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQWFBOzs7OztBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUZBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFRQTtBQUNBO0FBVEE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBVUE7QUFBQTtBQUNBO0FBWEE7QUFBQTtBQUFBO0FBWUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQU9BO0FBREE7QUFDQTtBQW5CQTtBQVlBO0FBWkE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQTJCQTs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBSkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFBQTtBQUNBO0FBTkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQU9BO0FBUEE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7O0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBSkE7QUFHQTtBQUNBO0FBSkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFBQTtBQUNBO0FBTkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFSQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7QUFvQkE7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUZBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQU1BO0FBREE7QUFDQTtBQU5BO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQWVBOzs7OztBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUZBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBTEE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBT0E7QUFEQTtBQUNBO0FBUEE7QUFVQTtBQVZBO0FBQUE7QUFXQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBT0E7QUFEQTtBQUNBO0FBbEJBO0FBV0E7QUFYQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7QTs7Ozs7Ozs7Ozs7Ozs7QUN4Q0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUxBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFjQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBSEE7QUFFQTtBQUNBO0FBSEE7QUFBQTtBQUtBO0FBQ0E7QUFGQTtBQUNBO0FBTEE7QUFJQTtBQUpBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBY0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFMQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFZQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUhBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUhBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFYQTtBQWlCQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7O0FDcEJBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBREE7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBUEE7QUFVQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFJQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBO0FBQ0E7QUFDQTtBQU1BO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUhBO0FBT0E7QUFDQTtBQUNBO0FBVEE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFkQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQWlCQTtBQUVBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7QUN6REE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QTs7Ozs7Ozs7QUM1QkE7QUFDQTtBOzs7Ozs7OztBQ0RBO0FBQ0E7QTs7Ozs7Ozs7QUNEQTtBQUNBO0E7Ozs7Ozs7O0FDREE7QUFDQTtBOzs7Ozs7OztBQ0RBO0FBQ0E7QTs7Ozs7Ozs7QUNEQTtBQUNBO0E7Ozs7Ozs7O0FDREE7QUFDQTtBOzs7Ozs7OztBQ0RBO0FBQ0E7QTs7Ozs7Ozs7QUNEQTtBQUNBO0E7Ozs7Ozs7O0FDREE7QUFDQTtBOzs7Ozs7OztBQ0RBO0FBQ0E7QTs7Ozs7Ozs7QUNEQTtBQUNBO0E7Ozs7Ozs7O0FDREE7QUFDQTtBOzs7Ozs7OztBQ0RBO0FBQ0E7QTs7Ozs7Ozs7QUNEQTtBQUNBO0E7Ozs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBIiwic291cmNlUm9vdCI6IiJ9