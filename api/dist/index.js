/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
            return _utils_init_redis__WEBPACK_IMPORTED_MODULE_3__.default.set(user._id.toString(), token.toString(), 'EX', 60 * 60);

          case 15:
            return _context.abrupt("return", res.cookie('jwt', token, {
              signed: true,
              httpOnly: true
            }).status((http_status__WEBPACK_IMPORTED_MODULE_2___default().OK)).json({
              userId: user._id,
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
            salt = bcrypt__WEBPACK_IMPORTED_MODULE_0___default().genSaltSync(10);
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
            return _utils_init_redis__WEBPACK_IMPORTED_MODULE_3__.default.set(user._id.toString(), token.toString(), 'EX', 60 * 60);

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

/***/ "./controllers/survey.answer.controller.js":
/*!*************************************************!*\
  !*** ./controllers/survey.answer.controller.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSurveyAnswer": () => (/* binding */ createSurveyAnswer),
/* harmony export */   "getSurveyAnswer": () => (/* binding */ getSurveyAnswer),
/* harmony export */   "getSurveyAnswers": () => (/* binding */ getSurveyAnswers)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function createSurveyAnswer(_x, _x2, _x3) {
  return _createSurveyAnswer.apply(this, arguments);
}

function _createSurveyAnswer() {
  _createSurveyAnswer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log(req.user);
            console.log(req.body.survey);
            return _context.abrupt("return", res.status(201).json({
              surveyAnswer: 'surveyAnswerCreated'
            }));

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _createSurveyAnswer.apply(this, arguments);
}

function getSurveyAnswer(req, res) {
  res.status(200).json({
    surveyAnswer: 'showSurveyAnswer'
  });
}

function getSurveyAnswers(req, res) {
  res.status(200).json({
    surveyAnswer: 'listSurveyAnswer'
  });
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
    var _req$body, name, url, questions, survey;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, name = _req$body.name, url = _req$body.url, questions = _req$body.questions;
            survey = new _models_Survey__WEBPACK_IMPORTED_MODULE_0__.default({
              name: name,
              url: url
            });
            survey.questions = questions;
            _context.next = 6;
            return survey.save();

          case 6:
            return _context.abrupt("return", res.status((http_status__WEBPACK_IMPORTED_MODULE_1___default().CREATED)).json({
              survey: survey
            }));

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", next(_context.t0));

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 9]]);
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
    var _req$body2, id, name, url, questions, result;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _req$body2 = req.body, id = _req$body2.id, name = _req$body2.name, url = _req$body2.url, questions = _req$body2.questions;
            _context3.next = 4;
            return _models_Survey__WEBPACK_IMPORTED_MODULE_0__.default.findByIdAndUpdate(id, {
              name: name,
              url: url,
              questions: questions
            }, {
              "new": true
            });

          case 4:
            result = _context3.sent;

            if (result) {
              _context3.next = 7;
              break;
            }

            return _context3.abrupt("return", res.status((http_status__WEBPACK_IMPORTED_MODULE_1___default().NOT_FOUND)).json({
              message: 'Survey with same id not found.'
            }));

          case 7:
            return _context3.abrupt("return", res.status((http_status__WEBPACK_IMPORTED_MODULE_1___default().OK)).json(result));

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", next(_context3.t0));

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 10]]);
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
            return _models_Survey__WEBPACK_IMPORTED_MODULE_0__.default.deleteOne({
              id: id
            });

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
            salt = bcrypt__WEBPACK_IMPORTED_MODULE_2___default().genSaltSync(10);
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

            return _context3.abrupt("return", res.status((http_status__WEBPACK_IMPORTED_MODULE_1___default().BAD_REQUEST)).json({
              message: 'User does not exist.'
            }));

          case 8:
            salt = bcrypt__WEBPACK_IMPORTED_MODULE_2___default().genSaltSync(10);
            _context3.next = 11;
            return _models_User__WEBPACK_IMPORTED_MODULE_0__.default.findOneAndUpdate({
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
              res.json(_context.t0.message);
              return _context.abrupt("return", next(_context.t0));

            case 12:
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
      var user;
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

              if (!user) {
                _context.next = 8;
                break;
              }

              done(null, user);
              _context.next = 12;
              break;

            case 8:
              _context.next = 10;
              return _models_User__WEBPACK_IMPORTED_MODULE_2__.default.create({
                name: payload.name.givenName,
                email: payload.emails[0].value
              });

            case 10:
              user = _context.sent;
              done(null, user);

            case 12:
              _context.next = 17;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](0);
              console.error(_context.t0);

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 14]]);
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
  secretOrKey: SECRET_KEY
};
function middlewareJwt(passport) {
  passport.use(new passport_jwt__WEBPACK_IMPORTED_MODULE_0__.Strategy(options, /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(payload, done) {
      var user, redisToken;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _models_User__WEBPACK_IMPORTED_MODULE_2__.default.findOne({
                email: payload.email
              });

            case 3:
              user = _context.sent;
              _context.next = 6;
              return _utils_init_redis__WEBPACK_IMPORTED_MODULE_3__.default.get(payload.userId.toString());

            case 6:
              redisToken = _context.sent;

              if (user && redisToken) {
                done(null, user);
              } else {
                done(null, false);
              }

              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              console.error(_context.t0);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 10]]);
    }));

    return function (_x, _x2) {
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
var questionSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
  name: {
    type: String
  }
});
var surveySchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
  name: reqString,
  url: reqString,
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

/***/ "./routes/survey.answer.js":
/*!*********************************!*\
  !*** ./routes/survey.answer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! passport */ "passport");
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _controllers_survey_answer_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/survey.answer.controller */ "./controllers/survey.answer.controller.js");



var router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();
router.route('/').get(passport__WEBPACK_IMPORTED_MODULE_1___default().authenticate('jwt', {
  session: false
}), _controllers_survey_answer_controller__WEBPACK_IMPORTED_MODULE_2__.getSurveyAnswer).post(passport__WEBPACK_IMPORTED_MODULE_1___default().authenticate('jwt', {
  session: false
}), _controllers_survey_answer_controller__WEBPACK_IMPORTED_MODULE_2__.createSurveyAnswer);
router.get('/:id', passport__WEBPACK_IMPORTED_MODULE_1___default().authenticate('jwt', {
  session: false
}), _controllers_survey_answer_controller__WEBPACK_IMPORTED_MODULE_2__.getSurveyAnswer);
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
}), _controllers_survey_controller__WEBPACK_IMPORTED_MODULE_2__.removeSurvey);
router.put('/', passport__WEBPACK_IMPORTED_MODULE_1___default().authenticate('jwt', {
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
/* harmony import */ var _routes_survey_answer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../routes/survey.answer */ "./routes/survey.answer.js");
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
app.use('/api/survey_answer', _routes_survey_answer__WEBPACK_IMPORTED_MODULE_11__.default);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIkQ6XFxOb2RlSlNGaWxlXFx0ZXN0LWF1dGgtY3J1ZFxcYXBpXFxjb250cm9sbGVyc1xcYXV0aC5jb250cm9sbGVyLmpzIiwiRDpcXE5vZGVKU0ZpbGVcXHRlc3QtYXV0aC1jcnVkXFxhcGlcXGNvbnRyb2xsZXJzXFxzdXJ2ZXkuYW5zd2VyLmNvbnRyb2xsZXIuanMiLCJEOlxcTm9kZUpTRmlsZVxcdGVzdC1hdXRoLWNydWRcXGFwaVxcY29udHJvbGxlcnNcXHN1cnZleS5jb250cm9sbGVyLmpzIiwiRDpcXE5vZGVKU0ZpbGVcXHRlc3QtYXV0aC1jcnVkXFxhcGlcXGNvbnRyb2xsZXJzXFx1c2VyLmNvbnRyb2xsZXIuanMiLCJEOlxcTm9kZUpTRmlsZVxcdGVzdC1hdXRoLWNydWRcXGFwaVxcbWlkZGxld2FyZVxcZXJyb3JIYW5kbGVyLmpzIiwiRDpcXE5vZGVKU0ZpbGVcXHRlc3QtYXV0aC1jcnVkXFxhcGlcXG1pZGRsZXdhcmVcXG1pZGRsZXdhcmUudmFsaWRhdG9yLmpzIiwiRDpcXE5vZGVKU0ZpbGVcXHRlc3QtYXV0aC1jcnVkXFxhcGlcXG1pZGRsZXdhcmVcXHBhc3Nwb3J0R29vZ2xlLmpzIiwiRDpcXE5vZGVKU0ZpbGVcXHRlc3QtYXV0aC1jcnVkXFxhcGlcXG1pZGRsZXdhcmVcXHBhc3Nwb3J0SldULmpzIiwiRDpcXE5vZGVKU0ZpbGVcXHRlc3QtYXV0aC1jcnVkXFxhcGlcXG1pZGRsZXdhcmVcXHNjaGVtYXMuZm9yLnZhbGlkYXRpb25cXGF1dGhTY2hlbWEuanMiLCJEOlxcTm9kZUpTRmlsZVxcdGVzdC1hdXRoLWNydWRcXGFwaVxcbW9kZWxzXFxTdXJ2ZXkuanMiLCJEOlxcTm9kZUpTRmlsZVxcdGVzdC1hdXRoLWNydWRcXGFwaVxcbW9kZWxzXFxVc2VyLmpzIiwiRDpcXE5vZGVKU0ZpbGVcXHRlc3QtYXV0aC1jcnVkXFxhcGlcXHJvdXRlc1xcYXV0aC5qcyIsIkQ6XFxOb2RlSlNGaWxlXFx0ZXN0LWF1dGgtY3J1ZFxcYXBpXFxyb3V0ZXNcXHN1cnZleS5hbnN3ZXIuanMiLCJEOlxcTm9kZUpTRmlsZVxcdGVzdC1hdXRoLWNydWRcXGFwaVxccm91dGVzXFxzdXJ2ZXkuanMiLCJEOlxcTm9kZUpTRmlsZVxcdGVzdC1hdXRoLWNydWRcXGFwaVxccm91dGVzXFx1c2VyLmpzIiwiRDpcXE5vZGVKU0ZpbGVcXHRlc3QtYXV0aC1jcnVkXFxhcGlcXHNyY1xcaW5kZXguanMiLCJEOlxcTm9kZUpTRmlsZVxcdGVzdC1hdXRoLWNydWRcXGFwaVxcdXRpbHNcXGluaXQucmVkaXMuanMiLCJleHRlcm5hbCBcIkBiYWJlbC9wb2x5ZmlsbFwiIiwiZXh0ZXJuYWwgXCJhc3luYy1yZWRpc1wiIiwiZXh0ZXJuYWwgXCJiY3J5cHRcIiIsImV4dGVybmFsIFwiYm9keS1wYXJzZXJcIiIsImV4dGVybmFsIFwiY29va2llLXBhcnNlclwiIiwiZXh0ZXJuYWwgXCJkb3RlbnZcIiIsImV4dGVybmFsIFwiZXhwcmVzc1wiIiwiZXh0ZXJuYWwgXCJodHRwLXN0YXR1c1wiIiwiZXh0ZXJuYWwgXCJqb2lcIiIsImV4dGVybmFsIFwianNvbndlYnRva2VuXCIiLCJleHRlcm5hbCBcIm1vbmdvb3NlXCIiLCJleHRlcm5hbCBcIm1vcmdhblwiIiwiZXh0ZXJuYWwgXCJwYXNzcG9ydFwiIiwiZXh0ZXJuYWwgXCJwYXNzcG9ydC1nb29nbGUtb2F1dGgyMFwiIiwiZXh0ZXJuYWwgXCJwYXNzcG9ydC1qd3RcIiIsIndlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2svc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYkNyeXB0IGZyb20gJ2JjcnlwdCc7XHJcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcclxuaW1wb3J0IGh0dHBTdGF0dXMgZnJvbSAnaHR0cC1zdGF0dXMnO1xyXG5pbXBvcnQgcmVkaXNDbGllbnQgZnJvbSAnLi4vdXRpbHMvaW5pdC5yZWRpcyc7XHJcbmltcG9ydCBVc2VyIGZyb20gJy4uL21vZGVscy9Vc2VyJztcclxuY29uc3QgU0VDUkVUX0tFWSA9IHByb2Nlc3MuZW52LkpXVDtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGxvZ2luKHJlcSwgcmVzLCBuZXh0KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSByZXEuYm9keTtcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoeyBlbWFpbCB9KTtcclxuICAgIGlmICghdXNlcikge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhodHRwU3RhdHVzLk5PVF9GT1VORCkuanNvbih7IG1lc3NhZ2U6ICdVc2VyIGRvZXMgbm90IGV4aXN0LicgfSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBwYXNzd29yZFJlc3VsdCA9IGF3YWl0IGJDcnlwdC5jb21wYXJlKHBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKTtcclxuICAgIGlmICghcGFzc3dvcmRSZXN1bHQpIHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoaHR0cFN0YXR1cy5CQURfUkVRVUVTVCkuanNvbih7IG1lc3NhZ2U6ICdJbmNvcnJlY3QgcGFzc3dvcmQuJyB9KTtcclxuICAgIH1cclxuICAgIGNvbnN0IHRva2VuID0gand0LnNpZ24oe1xyXG4gICAgICB1c2VySWQ6IHVzZXIuX2lkLFxyXG4gICAgICBlbWFpbDogdXNlci5lbWFpbFxyXG4gICAgfSwgU0VDUkVUX0tFWSwgeyBleHBpcmVzSW46IDYwICogNjAgfSk7XHJcbiAgICBhd2FpdCByZWRpc0NsaWVudC5zZXQodXNlci5faWQudG9TdHJpbmcoKSwgdG9rZW4udG9TdHJpbmcoKSwgJ0VYJywgNjAgKiA2MCk7XHJcbiAgICByZXR1cm4gcmVzXHJcbiAgICAgIC5jb29raWUoJ2p3dCcsIHRva2VuLCB7IHNpZ25lZDogdHJ1ZSwgaHR0cE9ubHk6IHRydWUgfSlcclxuICAgICAgLnN0YXR1cyhodHRwU3RhdHVzLk9LKVxyXG4gICAgICAuanNvbih7XHJcbiAgICAgICAgdXNlcklkOiB1c2VyLl9pZCxcclxuICAgICAgICB0b2tlbjogYEJlYXJlciAke3Rva2VufWBcclxuICAgICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiBuZXh0KGVycm9yKTtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyKHJlcSwgcmVzLCBuZXh0KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgbmFtZSwgZW1haWwsIHBhc3N3b3JkIH0gPSByZXEuYm9keTtcclxuICAgIGNvbnN0IGNhbmRpZGF0ZSA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IGVtYWlsIH0pO1xyXG4gICAgaWYgKGNhbmRpZGF0ZSkge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhodHRwU3RhdHVzLkJBRF9SRVFVRVNUKS5qc29uKHsgbWVzc2FnZTogJ1VzZXIgd2l0aCBzYW1lIGVtYWlsIGhhcyBiZWVuIGNyZWF0ZWQuJyB9KTtcclxuICAgIH1cclxuICAgIGNvbnN0IHNhbHQgPSBiQ3J5cHQuZ2VuU2FsdFN5bmMoMTApO1xyXG4gICAgY29uc3QgdXNlciA9IG5ldyBVc2VyKHtcclxuICAgICAgbmFtZSxcclxuICAgICAgZW1haWwsXHJcbiAgICAgIHBhc3N3b3JkOiBiQ3J5cHQuaGFzaFN5bmMocGFzc3dvcmQsIHNhbHQpXHJcbiAgICB9KTtcclxuICAgIGF3YWl0IHVzZXIuc2F2ZSgpO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoaHR0cFN0YXR1cy5DUkVBVEVEKS5qc29uKHVzZXIpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gbmV4dChlcnJvcik7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnb29nbGVBdXRob3JpemF0aW9uKHJlcSwgcmVzLCBuZXh0KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgZW1haWwgfSA9IHJlcS51c2VyO1xyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IGVtYWlsIH0pO1xyXG4gICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGh0dHBTdGF0dXMuTk9UX0ZPVU5EKS5qc29uKHsgbWVzc2FnZTogJ1VzZXIgZG9lcyBub3QgZXhpc3QuJyB9KTtcclxuICAgIH1cclxuICAgIGNvbnN0IHRva2VuID0gand0LnNpZ24oe1xyXG4gICAgICB1c2VySWQ6IHVzZXIuX2lkLFxyXG4gICAgICBlbWFpbDogdXNlci5lbWFpbFxyXG4gICAgfSwgU0VDUkVUX0tFWSwgeyBleHBpcmVzSW46IDYwICogNjAgfSk7XHJcbiAgICBhd2FpdCByZWRpc0NsaWVudC5zZXQodXNlci5faWQudG9TdHJpbmcoKSwgdG9rZW4udG9TdHJpbmcoKSwgJ0VYJywgNjAgKiA2MCk7XHJcbiAgICByZXR1cm4gcmVzXHJcbiAgICAgIC5jb29raWUoJ2p3dCcsIHRva2VuLCB7IHNpZ25lZDogdHJ1ZSwgaHR0cE9ubHk6IHRydWUgfSlcclxuICAgICAgLnN0YXR1cyhodHRwU3RhdHVzLk9LKVxyXG4gICAgICAuanNvbih7XHJcbiAgICAgICAgdG9rZW46IGBCZWFyZXIgJHt0b2tlbn1gXHJcbiAgICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gbmV4dChlcnJvcik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIGxvZ2luLFxyXG4gIHJlZ2lzdGVyLFxyXG4gIGdvb2dsZUF1dGhvcml6YXRpb25cclxufTtcclxuIiwiYXN5bmMgZnVuY3Rpb24gY3JlYXRlU3VydmV5QW5zd2VyKHJlcSwgcmVzLCBuZXh0KSB7XHJcbiAgY29uc29sZS5sb2cocmVxLnVzZXIpO1xyXG4gIGNvbnNvbGUubG9nKHJlcS5ib2R5LnN1cnZleSk7XHJcblxyXG4gIHJldHVybiByZXMuc3RhdHVzKDIwMSkuanNvbih7XHJcbiAgICBzdXJ2ZXlBbnN3ZXI6ICdzdXJ2ZXlBbnN3ZXJDcmVhdGVkJ1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRTdXJ2ZXlBbnN3ZXIocmVxLCByZXMpIHtcclxuICByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICBzdXJ2ZXlBbnN3ZXI6ICdzaG93U3VydmV5QW5zd2VyJ1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRTdXJ2ZXlBbnN3ZXJzKHJlcSwgcmVzKSB7XHJcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgc3VydmV5QW5zd2VyOiAnbGlzdFN1cnZleUFuc3dlcidcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBjcmVhdGVTdXJ2ZXlBbnN3ZXIsXHJcbiAgZ2V0U3VydmV5QW5zd2VyLFxyXG4gIGdldFN1cnZleUFuc3dlcnNcclxufTtcclxuIiwiaW1wb3J0IFN1cnZleSBmcm9tICcuLi9tb2RlbHMvU3VydmV5JztcclxuaW1wb3J0IGh0dHBTdGF0dXMgZnJvbSAnaHR0cC1zdGF0dXMnO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gY3JlYXRlU3VydmV5KHJlcSwgcmVzLCBuZXh0KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgbmFtZSxcclxuICAgICAgdXJsLFxyXG4gICAgICBxdWVzdGlvbnNcclxuICAgIH0gPSByZXEuYm9keTtcclxuICAgIGNvbnN0IHN1cnZleSA9IG5ldyBTdXJ2ZXkoe1xyXG4gICAgICBuYW1lLFxyXG4gICAgICB1cmxcclxuICAgIH0pO1xyXG4gICAgc3VydmV5LnF1ZXN0aW9ucyA9IHF1ZXN0aW9ucztcclxuICAgIGF3YWl0IHN1cnZleS5zYXZlKCk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyhodHRwU3RhdHVzLkNSRUFURUQpLmpzb24oeyBzdXJ2ZXkgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiBuZXh0KGVycm9yKTtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFN1cnZleShyZXEsIHJlcywgbmV4dCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGlkIH0gPSByZXEucGFyYW1zO1xyXG4gICAgY29uc3Qgc3VydmV5ID0gYXdhaXQgU3VydmV5LmZpbmRCeUlkKGlkKTtcclxuICAgIGlmICghc3VydmV5KSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGh0dHBTdGF0dXMuTk9UX0ZPVU5EKS5qc29uKHsgbWVzc2FnZTogJ1N1cnZleSB3aXRoIHNhbWUgaWQgbm90IGZvdW5kLicgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyhodHRwU3RhdHVzLk9LKS5qc29uKHN1cnZleSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiBuZXh0KGVycm9yKTtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVN1cnZleShyZXEsIHJlcywgbmV4dCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGlkLFxyXG4gICAgICBuYW1lLFxyXG4gICAgICB1cmwsXHJcbiAgICAgIHF1ZXN0aW9uc1xyXG4gICAgfSA9IHJlcS5ib2R5O1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgU3VydmV5LmZpbmRCeUlkQW5kVXBkYXRlKGlkLCB7XHJcbiAgICAgIG5hbWUsXHJcbiAgICAgIHVybCxcclxuICAgICAgcXVlc3Rpb25zXHJcbiAgICB9LCB7XHJcbiAgICAgIG5ldzogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBpZiAoIXJlc3VsdCkge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhodHRwU3RhdHVzLk5PVF9GT1VORCkuanNvbih7IG1lc3NhZ2U6ICdTdXJ2ZXkgd2l0aCBzYW1lIGlkIG5vdCBmb3VuZC4nIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoaHR0cFN0YXR1cy5PSykuanNvbihyZXN1bHQpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gbmV4dChlcnJvcik7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiByZW1vdmVTdXJ2ZXkocmVxLCByZXMsIG5leHQpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBpZCB9ID0gcmVxLnBhcmFtcztcclxuICAgIGNvbnN0IHN1cnZleSA9IGF3YWl0IFN1cnZleS5maW5kQnlJZChpZCk7XHJcbiAgICBpZiAoIXN1cnZleSkge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhodHRwU3RhdHVzLk5PVF9GT1VORCkuanNvbih7IG1lc3NhZ2U6ICdTdXJ2ZXkgd2l0aCBzYW1lIGlkIG5vdCBmb3VuZC4nIH0pO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgU3VydmV5LmRlbGV0ZU9uZSh7IGlkIH0pO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoaHR0cFN0YXR1cy5PSykuanNvbihyZXN1bHQpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gbmV4dChlcnJvcik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIGNyZWF0ZVN1cnZleSxcclxuICBnZXRTdXJ2ZXksXHJcbiAgdXBkYXRlU3VydmV5LFxyXG4gIHJlbW92ZVN1cnZleVxyXG59O1xyXG4iLCJpbXBvcnQgVXNlciBmcm9tICcuLi9tb2RlbHMvVXNlcic7XHJcbmltcG9ydCBodHRwU3RhdHVzIGZyb20gJ2h0dHAtc3RhdHVzJztcclxuaW1wb3J0IGJDcnlwdCBmcm9tICdiY3J5cHQnO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gY3JlYXRlVXNlcihyZXEsIHJlcywgbmV4dCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IG5hbWUsIGVtYWlsLCBwYXNzd29yZCB9ID0gcmVxLmJvZHk7XHJcbiAgICBjb25zdCBjYW5kaWRhdGUgPSBhd2FpdCBVc2VyLmZpbmRPbmUoeyBlbWFpbCB9KTtcclxuICAgIGlmIChjYW5kaWRhdGUpIHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoaHR0cFN0YXR1cy5CQURfUkVRVUVTVCkuanNvbih7IG1lc3NhZ2U6ICdVc2VyIHdpdGggc2FtZSBlbWFpbCBoYXMgYmVlbiBjcmVhdGVkLicgfSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBzYWx0ID0gYkNyeXB0LmdlblNhbHRTeW5jKDEwKTtcclxuICAgIGNvbnN0IHVzZXIgPSBuZXcgVXNlcih7XHJcbiAgICAgIG5hbWUsXHJcbiAgICAgIGVtYWlsLFxyXG4gICAgICBwYXNzd29yZDogYkNyeXB0Lmhhc2hTeW5jKHBhc3N3b3JkLCBzYWx0KVxyXG4gICAgfSk7XHJcbiAgICBhd2FpdCB1c2VyLnNhdmUoKTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKGh0dHBTdGF0dXMuQ1JFQVRFRCkuanNvbih1c2VyKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIG5leHQoZXJyb3IpO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0VXNlcihyZXEsIHJlcywgbmV4dCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGlkIH0gPSByZXEucGFyYW1zO1xyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZEJ5SWQoaWQpO1xyXG4gICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGh0dHBTdGF0dXMuQkFEX1JFUVVFU1QpLmpzb24oe1xyXG4gICAgICAgIG1lc3NhZ2U6ICdVc2VyIGRvZXMgbm90IGV4aXN0LidcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyhodHRwU3RhdHVzLk9LKS5qc29uKHVzZXIpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gbmV4dChlcnJvcik7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiB1cGRhdGVVc2VyKHJlcSwgcmVzLCBuZXh0KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgaWQgfSA9IHJlcS5wYXJhbXM7XHJcbiAgICBjb25zdCB7IG5hbWUsIGVtYWlsLCBwYXNzd29yZCB9ID0gcmVxLmJvZHk7XHJcbiAgICBjb25zdCBjYW5kaWRhdGUgPSBhd2FpdCBVc2VyLmZpbmRCeUlkKGlkKTtcclxuICAgIGlmICghY2FuZGlkYXRlKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGh0dHBTdGF0dXMuQkFEX1JFUVVFU1QpLmpzb24oe1xyXG4gICAgICAgIG1lc3NhZ2U6ICdVc2VyIGRvZXMgbm90IGV4aXN0LidcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBzYWx0ID0gYkNyeXB0LmdlblNhbHRTeW5jKDEwKTtcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmVBbmRVcGRhdGUoeyBfaWQ6IGlkIH0sIHtcclxuICAgICAgJHNldDoge1xyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgZW1haWwsXHJcbiAgICAgICAgcGFzc3dvcmQ6IGJDcnlwdC5oYXNoU3luYyhwYXNzd29yZCwgc2FsdClcclxuICAgICAgfVxyXG4gICAgfSwge1xyXG4gICAgICBuZXc6IHRydWVcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoaHR0cFN0YXR1cy5PSykuanNvbih1c2VyKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIG5leHQoZXJyb3IpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBjcmVhdGVVc2VyLFxyXG4gIGdldFVzZXIsXHJcbiAgdXBkYXRlVXNlclxyXG59O1xyXG4iLCJpbXBvcnQgaHR0cFN0YXR1cyBmcm9tICdodHRwLXN0YXR1cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlcnJvckhhbmRsZXIoZXJyLCByZXEsIHJlcywgbmV4dCkge1xyXG4gIHJldHVybiByZXMuc3RhdHVzKGh0dHBTdGF0dXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SKS5qc29uKHtcclxuICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgZXJyb3I6IGVyci5tZXNzYWdlID8gZXJyLm1lc3NhZ2UgOiBlcnJcclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgSm9pIGZyb20gJ2pvaSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaWRkbGV3YXJlVmFsaWRhdG9yKHNjaGVtYSkge1xyXG4gIHJldHVybiBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcclxuICAgIGNvbnN0IHsgYm9keSwgcXVlcnksIHBhcmFtcyB9ID0gcmVxO1xyXG4gICAgY29uc3QgbmV3U2NoZW1hID0gc2NoZW1hKEpvaSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBuZXdTY2hlbWEudmFsaWRhdGVBc3luYyh7XHJcbiAgICAgICAgYm9keSxcclxuICAgICAgICBxdWVyeSxcclxuICAgICAgICBwYXJhbXNcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBuZXh0KCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICByZXMuanNvbihlcnJvci5tZXNzYWdlKTtcclxuICAgICAgcmV0dXJuIG5leHQoZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgU3RyYXRlZ3kgYXMgR29vZ2xlU3RyYXRlZ3kgfSBmcm9tICdwYXNzcG9ydC1nb29nbGUtb2F1dGgyMCc7XHJcbmltcG9ydCBkb3RFbnYgZnJvbSAnZG90ZW52JztcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi4vbW9kZWxzL1VzZXInO1xyXG5kb3RFbnYuY29uZmlnKCk7XHJcblxyXG5jb25zdCBvcHRpb25zID0ge1xyXG4gIGNsaWVudElEOiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX0lELFxyXG4gIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX1NFQ1JFVF9LRVksXHJcbiAgY2FsbGJhY2tVUkw6IGBodHRwOi8vbG9jYWxob3N0OiR7cHJvY2Vzcy5lbnYuUE9SVH0vYXBpL2F1dGgvZ29vZ2xlL2NhbGxiYWNrYFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWlkZGxld2FyZUdvb2dsZShwYXNzcG9ydCkge1xyXG4gIHBhc3Nwb3J0LnVzZShcclxuICAgIG5ldyBHb29nbGVTdHJhdGVneShvcHRpb25zLCBhc3luYyAoYWNjZXNzVG9rZW4sIHJlZnJlc2hUb2tlbiwgcGF5bG9hZCwgZG9uZSkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGxldCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgZW1haWw6IHBheWxvYWQuZW1haWxzWzBdLnZhbHVlIH0pO1xyXG4gICAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgICBkb25lKG51bGwsIHVzZXIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB1c2VyID0gYXdhaXQgVXNlci5jcmVhdGUoe1xyXG4gICAgICAgICAgICBuYW1lOiBwYXlsb2FkLm5hbWUuZ2l2ZW5OYW1lLFxyXG4gICAgICAgICAgICBlbWFpbDogcGF5bG9hZC5lbWFpbHNbMF0udmFsdWVcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgZG9uZShudWxsLCB1c2VyKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgKTtcclxuICBwYXNzcG9ydC5zZXJpYWxpemVVc2VyKCh1c2VyLCBkb25lKSA9PiB7XHJcbiAgICBkb25lKG51bGwsIHVzZXIuaWQpO1xyXG4gIH0pO1xyXG5cclxuICBwYXNzcG9ydC5kZXNlcmlhbGl6ZVVzZXIoKGlkLCBkb25lKSA9PiB7XHJcbiAgICBVc2VyLmZpbmRCeUlkKGlkLCAoZXJyLCB1c2VyKSA9PiB7XHJcbiAgICAgIGRvbmUoZXJyLCB1c2VyKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IFN0cmF0ZWd5IGFzIEpXVFN0cmF0ZWd5IH0gZnJvbSAncGFzc3BvcnQtand0JztcclxuaW1wb3J0IGRvdEVudiBmcm9tICdkb3RlbnYnO1xyXG5pbXBvcnQgVXNlciBmcm9tICcuLi9tb2RlbHMvVXNlcic7XHJcbmltcG9ydCByZWRpc0NsaWVudCBmcm9tICcuLi91dGlscy9pbml0LnJlZGlzJztcclxuZG90RW52LmNvbmZpZygpO1xyXG5jb25zdCBTRUNSRVRfS0VZID0gcHJvY2Vzcy5lbnYuSldUO1xyXG5cclxuY29uc3QgY29va2llRXh0cmFjdG9yID0gKHJlcSkgPT4ge1xyXG4gIGxldCB0b2tlbiA9IG51bGw7XHJcbiAgaWYgKHJlcSAmJiByZXEuc2lnbmVkQ29va2llcyAmJiByZXEuc2lnbmVkQ29va2llcy5qd3QpIHtcclxuICAgIHRva2VuID0gcmVxLnNpZ25lZENvb2tpZXMuand0O1xyXG4gIH1cclxuICByZXR1cm4gdG9rZW47XHJcbn07XHJcblxyXG5jb25zdCBvcHRpb25zID0ge1xyXG4gIGp3dEZyb21SZXF1ZXN0OiBjb29raWVFeHRyYWN0b3IsXHJcbiAgc2VjcmV0T3JLZXk6IFNFQ1JFVF9LRVlcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pZGRsZXdhcmVKd3QocGFzc3BvcnQpIHtcclxuICBwYXNzcG9ydC51c2UoXHJcbiAgICBuZXcgSldUU3RyYXRlZ3kob3B0aW9ucywgYXN5bmMgKHBheWxvYWQsIGRvbmUpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgZW1haWw6IHBheWxvYWQuZW1haWwgfSk7XHJcbiAgICAgICAgY29uc3QgcmVkaXNUb2tlbiA9IGF3YWl0IHJlZGlzQ2xpZW50LmdldChwYXlsb2FkLnVzZXJJZC50b1N0cmluZygpKTtcclxuICAgICAgICBpZiAodXNlciAmJiByZWRpc1Rva2VuKSB7XHJcbiAgICAgICAgICBkb25lKG51bGwsIHVzZXIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBkb25lKG51bGwsIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgKTtcclxufVxyXG4iLCJmdW5jdGlvbiBsb2dpblNjaGVtYShKb2kpIHtcclxuICByZXR1cm4gSm9pLm9iamVjdCgpLmtleXMoe1xyXG4gICAgcXVlcnk6IHt9LFxyXG4gICAgcGFyYW1zOiB7fSxcclxuICAgIGJvZHk6IHtcclxuICAgICAgZW1haWw6IEpvaS5zdHJpbmcoKS50cmltKCkuZW1haWwoKS5yZXF1aXJlZCgpLFxyXG4gICAgICBwYXNzd29yZDogSm9pLnN0cmluZygpLm1pbig1KS5tYXgoMTYpLnJlcXVpcmVkKClcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVnaXN0ZXJTY2hlbWEoSm9pKSB7XHJcbiAgcmV0dXJuIEpvaS5vYmplY3QoKS5rZXlzKHtcclxuICAgIHF1ZXJ5OiB7fSxcclxuICAgIHBhcmFtczoge30sXHJcbiAgICBib2R5OiB7XHJcbiAgICAgIG5hbWU6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgICBlbWFpbDogSm9pLnN0cmluZygpLnRyaW0oKS5lbWFpbCgpLnJlcXVpcmVkKCksXHJcbiAgICAgIHBhc3N3b3JkOiBKb2kuc3RyaW5nKCkubWluKDUpLm1heCgxNikucmVxdWlyZWQoKVxyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIGxvZ2luU2NoZW1hLFxyXG4gIHJlZ2lzdGVyU2NoZW1hXHJcbn07XHJcbiIsImltcG9ydCBtb25nb29zZSwgeyBTY2hlbWEgfSBmcm9tICdtb25nb29zZSc7XHJcblxyXG5jb25zdCByZXFTdHJpbmcgPSB7XHJcbiAgdHlwZTogU3RyaW5nLFxyXG4gIHJlcXVpcmVkOiB0cnVlXHJcbn07XHJcblxyXG5jb25zdCBxdWVzdGlvblNjaGVtYSA9IG5ldyBTY2hlbWEoe1xyXG4gIG5hbWU6IHtcclxuICAgIHR5cGU6IFN0cmluZ1xyXG4gIH1cclxufSk7XHJcblxyXG5jb25zdCBzdXJ2ZXlTY2hlbWEgPSBuZXcgU2NoZW1hKHtcclxuICBuYW1lOiByZXFTdHJpbmcsXHJcbiAgdXJsOiByZXFTdHJpbmcsXHJcbiAgcXVlc3Rpb25zOiBbcXVlc3Rpb25TY2hlbWFdXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWwoJ1N1cnZleScsIHN1cnZleVNjaGVtYSk7XHJcbiIsImltcG9ydCBtb25nb29zZSwgeyBTY2hlbWEgfSBmcm9tICdtb25nb29zZSc7XHJcblxyXG5jb25zdCByZXFTdHJpbmcgPSB7XHJcbiAgdHlwZTogU3RyaW5nLFxyXG4gIHJlcXVpcmVkOiB0cnVlXHJcbn07XHJcblxyXG5jb25zdCB1c2VyU2NoZW1hID0gbmV3IFNjaGVtYSh7XHJcbiAgbmFtZTogcmVxU3RyaW5nLFxyXG4gIGVtYWlsOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIHVuaXF1ZTogdHJ1ZVxyXG4gIH0sXHJcbiAgcGFzc3dvcmQ6IHJlcVN0cmluZ1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVsKCdVc2VyJywgdXNlclNjaGVtYSk7XHJcbiIsImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgcGFzc3BvcnQgZnJvbSAncGFzc3BvcnQnO1xyXG5pbXBvcnQgeyBnb29nbGVBdXRob3JpemF0aW9uLCBsb2dpbiwgcmVnaXN0ZXIgfSBmcm9tICcuLi9jb250cm9sbGVycy9hdXRoLmNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBsb2dpblNjaGVtYSwgcmVnaXN0ZXJTY2hlbWEgfSBmcm9tICcuLi9taWRkbGV3YXJlL3NjaGVtYXMuZm9yLnZhbGlkYXRpb24vYXV0aFNjaGVtYSc7XHJcbmltcG9ydCBtaWRkbGV3YXJlVmFsaWRhdG9yIGZyb20gJy4uL21pZGRsZXdhcmUvbWlkZGxld2FyZS52YWxpZGF0b3InO1xyXG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xyXG5cclxucm91dGVyLnBvc3QoJy9sb2dpbicsIG1pZGRsZXdhcmVWYWxpZGF0b3IobG9naW5TY2hlbWEpLCBsb2dpbik7XHJcbnJvdXRlci5wb3N0KCcvcmVnaXN0ZXInLCBtaWRkbGV3YXJlVmFsaWRhdG9yKHJlZ2lzdGVyU2NoZW1hKSwgcmVnaXN0ZXIpO1xyXG5yb3V0ZXIuZ2V0KCcvZ29vZ2xlJywgcGFzc3BvcnQuYXV0aGVudGljYXRlKCdnb29nbGUnLCB7IHNjb3BlOiBbJ3Byb2ZpbGUnLCAnZW1haWwnXSB9KSk7XHJcbnJvdXRlci5nZXQoXHJcbiAgJy9nb29nbGUvY2FsbGJhY2snLFxyXG4gIHBhc3Nwb3J0LmF1dGhlbnRpY2F0ZSgnZ29vZ2xlJywgeyBmYWlsdXJlUmVkaXJlY3Q6ICcvYXBpL2F1dGgvbG9naW4nIH0pLFxyXG4gIGdvb2dsZUF1dGhvcml6YXRpb25cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcclxuIiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCBwYXNzcG9ydCBmcm9tICdwYXNzcG9ydCc7XHJcbmltcG9ydCB7IGNyZWF0ZVN1cnZleUFuc3dlciwgZ2V0U3VydmV5QW5zd2VyIH0gZnJvbSAnLi4vY29udHJvbGxlcnMvc3VydmV5LmFuc3dlci5jb250cm9sbGVyJztcclxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcclxuXHJcbnJvdXRlci5yb3V0ZSgnLycpXHJcbiAgLmdldChwYXNzcG9ydC5hdXRoZW50aWNhdGUoJ2p3dCcsIHsgc2Vzc2lvbjogZmFsc2UgfSksIGdldFN1cnZleUFuc3dlcilcclxuICAucG9zdChwYXNzcG9ydC5hdXRoZW50aWNhdGUoJ2p3dCcsIHsgc2Vzc2lvbjogZmFsc2UgfSksIGNyZWF0ZVN1cnZleUFuc3dlcik7XHJcbnJvdXRlci5nZXQoJy86aWQnLCBwYXNzcG9ydC5hdXRoZW50aWNhdGUoJ2p3dCcsIHsgc2Vzc2lvbjogZmFsc2UgfSksIGdldFN1cnZleUFuc3dlcik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XHJcbiIsImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgcGFzc3BvcnQgZnJvbSAncGFzc3BvcnQnO1xyXG5pbXBvcnQge1xyXG4gIGdldFN1cnZleSxcclxuICB1cGRhdGVTdXJ2ZXksXHJcbiAgcmVtb3ZlU3VydmV5LFxyXG4gIGNyZWF0ZVN1cnZleVxyXG59IGZyb20gJy4uL2NvbnRyb2xsZXJzL3N1cnZleS5jb250cm9sbGVyJztcclxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcclxuXHJcbnJvdXRlci5yb3V0ZSgnLzppZCcpXHJcbiAgLmdldChwYXNzcG9ydC5hdXRoZW50aWNhdGUoJ2p3dCcsIHsgc2Vzc2lvbjogZmFsc2UgfSksIGdldFN1cnZleSlcclxuICAuZGVsZXRlKHBhc3Nwb3J0LmF1dGhlbnRpY2F0ZSgnand0JywgeyBzZXNzaW9uOiBmYWxzZSB9KSwgcmVtb3ZlU3VydmV5KTtcclxucm91dGVyLnB1dCgnLycsIHBhc3Nwb3J0LmF1dGhlbnRpY2F0ZSgnand0JywgeyBzZXNzaW9uOiBmYWxzZSB9KSwgdXBkYXRlU3VydmV5KTtcclxucm91dGVyLnBvc3QoJy8nLCBwYXNzcG9ydC5hdXRoZW50aWNhdGUoJ2p3dCcsIHsgc2Vzc2lvbjogZmFsc2UgfSksIGNyZWF0ZVN1cnZleSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XHJcbiIsImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgeyBjcmVhdGVVc2VyLCB1cGRhdGVVc2VyLCBnZXRVc2VyIH0gZnJvbSAnLi4vY29udHJvbGxlcnMvdXNlci5jb250cm9sbGVyJztcclxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcclxuXHJcbnJvdXRlci5yb3V0ZSgnLzppZCcpXHJcbiAgLmdldChnZXRVc2VyKVxyXG4gIC5wdXQodXBkYXRlVXNlcik7XHJcbnJvdXRlci5wb3N0KCcvJywgY3JlYXRlVXNlcik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XHJcbiIsImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5pbXBvcnQgYm9keVBhcnNlciBmcm9tICdib2R5LXBhcnNlcic7XHJcbmltcG9ydCBjb29raWVQYXJzZXIgZnJvbSAnY29va2llLXBhcnNlcic7XHJcbmltcG9ydCBwYXNzcG9ydCBmcm9tICdwYXNzcG9ydCc7XHJcbmltcG9ydCBtb3JnYW4gZnJvbSAnbW9yZ2FuJztcclxuaW1wb3J0IG1pZGRsZXdhcmVKd3QgZnJvbSAnLi4vbWlkZGxld2FyZS9wYXNzcG9ydEpXVCc7XHJcbmltcG9ydCBtaWRkbGV3YXJlR29vZ2xlIGZyb20gJy4uL21pZGRsZXdhcmUvcGFzc3BvcnRHb29nbGUnO1xyXG5pbXBvcnQgYXV0aFJvdXRlciBmcm9tICcuLi9yb3V0ZXMvYXV0aCc7XHJcbmltcG9ydCB1c2VyUm91dGVyIGZyb20gJy4uL3JvdXRlcy91c2VyJztcclxuaW1wb3J0IHN1cnZleVJvdXRlciBmcm9tICcuLi9yb3V0ZXMvc3VydmV5JztcclxuaW1wb3J0IHN1cnZleUFuc3dlclJvdXRlciBmcm9tICcuLi9yb3V0ZXMvc3VydmV5LmFuc3dlcic7XHJcbmltcG9ydCBlcnJvckhhbmRsZXIgZnJvbSAnLi4vbWlkZGxld2FyZS9lcnJvckhhbmRsZXInO1xyXG5cclxuY29uc3QgUE9SVCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgODA4MDtcclxuY29uc3QgVVJMID0gcHJvY2Vzcy5lbnYuVVJMO1xyXG5jb25zdCBTRUNSRVRfQ09PS0lFID0gcHJvY2Vzcy5lbnYuU0VDUkVUX0NPT0tJRTtcclxuXHJcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcclxuXHJcbmFwcC51c2UoY29va2llUGFyc2VyKFNFQ1JFVF9DT09LSUUpKTtcclxuYXBwLnVzZShtb3JnYW4oJ2RldicpKTtcclxuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XHJcbmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IHRydWUgfSkpO1xyXG5cclxuYXBwLnVzZShwYXNzcG9ydC5pbml0aWFsaXplKCkpO1xyXG5hcHAudXNlKHBhc3Nwb3J0LnNlc3Npb24oKSk7XHJcblxyXG5taWRkbGV3YXJlSnd0KHBhc3Nwb3J0KTtcclxubWlkZGxld2FyZUdvb2dsZShwYXNzcG9ydCk7XHJcblxyXG5hcHAudXNlKCcvYXBpL2F1dGgnLCBhdXRoUm91dGVyKTtcclxuYXBwLnVzZSgnL2FwaS91c2VyJywgdXNlclJvdXRlcik7XHJcbmFwcC51c2UoJy9hcGkvc3VydmV5Jywgc3VydmV5Um91dGVyKTtcclxuYXBwLnVzZSgnL2FwaS9zdXJ2ZXlfYW5zd2VyJywgc3VydmV5QW5zd2VyUm91dGVyKTtcclxuYXBwLnVzZShlcnJvckhhbmRsZXIpO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gcnVuU2VydmVyKCkge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBtb25nb29zZS5jb25uZWN0KFVSTCwge1xyXG4gICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXHJcbiAgICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcclxuICAgICAgdXNlQ3JlYXRlSW5kZXg6IHRydWVcclxuICAgIH0pO1xyXG4gICAgYXBwLmxpc3RlbihQT1JULCAoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBTZXJ2ZXIgaGFzIGJlZW4gc3RhcnRlZCBvbiBwb3J0OiAke1BPUlR9YCk7XHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhgU2VydmVyIG1lc3NhZ2U6ICR7ZS5tZXNzYWdlfWApO1xyXG4gICAgbW9uZ29vc2UuY29ubmVjdGlvbi5jbG9zZSgpO1xyXG4gICAgcHJvY2Vzcy5leGl0KDEpO1xyXG4gIH1cclxufVxyXG5cclxucnVuU2VydmVyKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcHA7XHJcbiIsImltcG9ydCBhc3luY1JlZGlzIGZyb20gJ2FzeW5jLXJlZGlzJztcclxuXHJcbmNvbnN0IHJlZGlzQ2xpZW50ID0gYXN5bmNSZWRpcy5jcmVhdGVDbGllbnQoe1xyXG4gIHBvcnQ6IDYzNzksXHJcbiAgaG9zdDogJ2xvY2FsaG9zdCdcclxufSk7XHJcblxyXG5yZWRpc0NsaWVudC5vbignY29ubmVjdCcsICgpID0+IHtcclxuICBjb25zb2xlLmxvZygnQ2xpZW50IGNvbm5lY3QgdG8gcmVkaXMuLi4nKTtcclxufSk7XHJcblxyXG5yZWRpc0NsaWVudC5vbigncmVhZHknLCAoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coJ0NsaWVudCBjb25uZWN0IHRvIHJlZGlzIGFuZCByZWFkeSB0byB1c2UuLi4nKTtcclxufSk7XHJcblxyXG5yZWRpc0NsaWVudC5vbignZXJyb3InLCAoZXJyKSA9PiB7XHJcbiAgY29uc29sZS5sb2coZXJyKTtcclxufSk7XHJcblxyXG5yZWRpc0NsaWVudC5vbignZW5kJywgKCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKCdDbGllbnQgZGlzY29ubmVjdCBmcm9tIHJlZGlzLicpO1xyXG59KTtcclxuXHJcbnByb2Nlc3Mub24oJ1NJR0lOJywgKCkgPT4ge1xyXG4gIHJlZGlzQ2xpZW50LnF1aXQoKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWRpc0NsaWVudDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3BvbHlmaWxsXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhc3luYy1yZWRpc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmNyeXB0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29va2llLXBhcnNlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZG90ZW52XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwLXN0YXR1c1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiam9pXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb3JnYW5cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhc3Nwb3J0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXNzcG9ydC1nb29nbGUtb2F1dGgyMFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGFzc3BvcnQtand0XCIpOzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdtb2R1bGUnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19yZXF1aXJlX18oXCJAYmFiZWwvcG9seWZpbGxcIik7XG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQUpBO0FBR0E7QUFDQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUtBO0FBQUE7QUFDQTtBQU5BO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFPQTtBQUNBO0FBUkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBU0E7QUFBQTtBQUNBO0FBVkE7QUFXQTtBQUNBO0FBQ0E7QUFGQTtBQUdBO0FBQUE7QUFkQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBaUJBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFGQTtBQUNBO0FBcEJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQTRCQTs7Ozs7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBSkE7QUFHQTtBQUNBO0FBSkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFBQTtBQUNBO0FBTkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFSQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7QUFvQkE7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUZBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFKQTtBQUdBO0FBQ0E7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFLQTtBQUFBO0FBQ0E7QUFOQTtBQU9BO0FBQ0E7QUFDQTtBQUZBO0FBR0E7QUFBQTtBQVZBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFhQTtBQUFBO0FBQUE7QUFHQTtBQURBO0FBQ0E7QUFoQkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkRBOzs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQURBO0FBQ0E7QUFMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQVNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBWEE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQWFBO0FBQUE7QUFDQTtBQWRBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQW1CQTs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBSkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFBQTtBQUNBO0FBTkE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7O0FBYUE7Ozs7O0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFEQTtBQUNBO0FBYkE7QUFRQTtBQUNBO0FBVEE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBZ0JBO0FBQUE7QUFDQTtBQWpCQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7QUF3QkE7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUZBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUtBO0FBQUE7QUFDQTtBQU5BO0FBQUE7QUFBQTtBQU9BO0FBQUE7QUFDQTtBQVJBO0FBT0E7QUFQQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBSkE7QUFHQTtBQUNBO0FBSkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFBQTtBQUNBO0FBTkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFSQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7QUFvQkE7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUZBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQU1BO0FBREE7QUFDQTtBQU5BO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQWVBOzs7OztBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUZBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBTEE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBT0E7QUFEQTtBQUNBO0FBUEE7QUFVQTtBQVZBO0FBQUE7QUFXQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBT0E7QUFEQTtBQUNBO0FBbEJBO0FBV0E7QUFYQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7QTs7Ozs7Ozs7Ozs7Ozs7QUN2Q0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUxBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQVdBO0FBWEE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQWVBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFIQTtBQUVBO0FBQ0E7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFKQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFPQTtBQUNBO0FBRkE7QUFDQTtBQVBBO0FBTUE7QUFJQTtBQUNBO0FBWEE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFhQTtBQUNBO0FBZEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBaUJBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUhBO0FBRUE7QUFGQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFVQTtBQUNBO0FBWEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBY0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFIQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFIQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFQQTtBQVVBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBSUE7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBTUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUVBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUhBO0FBT0E7QUFDQTtBQUNBO0FBVEE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFkQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQWlCQTtBQUVBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7QUN6REE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QTs7Ozs7Ozs7QUM1QkE7QUFDQTtBOzs7Ozs7OztBQ0RBO0FBQ0E7QTs7Ozs7Ozs7QUNEQTtBQUNBO0E7Ozs7Ozs7O0FDREE7QUFDQTtBOzs7Ozs7OztBQ0RBO0FBQ0E7QTs7Ozs7Ozs7QUNEQTtBQUNBO0E7Ozs7Ozs7O0FDREE7QUFDQTtBOzs7Ozs7OztBQ0RBO0FBQ0E7QTs7Ozs7Ozs7QUNEQTtBQUNBO0E7Ozs7Ozs7O0FDREE7QUFDQTtBOzs7Ozs7OztBQ0RBO0FBQ0E7QTs7Ozs7Ozs7QUNEQTtBQUNBO0E7Ozs7Ozs7O0FDREE7QUFDQTtBOzs7Ozs7OztBQ0RBO0FBQ0E7QTs7Ozs7Ozs7QUNEQTtBQUNBO0E7Ozs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBIiwic291cmNlUm9vdCI6IiJ9