/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/basket.js":
/*!****************************!*\
  !*** ./frontend/basket.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// import basket from '../public/basket.png'
var Basket = /*#__PURE__*/function () {
  function Basket(hole, ctx) {
    _classCallCheck(this, Basket);

    this.hole = hole;
    this.ctx = ctx;
    this.placeBasket(this.ctx);
  }

  _createClass(Basket, [{
    key: "placeBasket",
    value: function placeBasket(ctx) {
      var basket = new Image();
      basket.src = '../public/basket.png';

      if (this.hole === 1) {
        basket.onload = function () {
          ctx.drawImage(basket, 1000, 260, 60, 100);
        };
      }
    }
  }]);

  return Basket;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Basket);

/***/ }),

/***/ "./frontend/courses/courseOne.js":
/*!***************************************!*\
  !*** ./frontend/courses/courseOne.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CourseOne = /*#__PURE__*/function () {
  function CourseOne(ctx) {
    _classCallCheck(this, CourseOne);

    this.ctx = ctx;
    this.placeTree(this.ctx, 800, 200);
    this.placeTree(this.ctx, 400, 250);
    this.placeTree(this.ctx, 500, 450);
  }

  _createClass(CourseOne, [{
    key: "placeTree",
    value: function placeTree(ctx, x, y) {
      var tree = new Image();
      tree.src = '../public/tree1.png';

      tree.onload = function () {
        ctx.drawImage(tree, x, y, 60, 100);
      };
    }
  }]);

  return CourseOne;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CourseOne);

/***/ }),

/***/ "./frontend/disc.js":
/*!**************************!*\
  !*** ./frontend/disc.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Disc = /*#__PURE__*/function () {
  function Disc(ctx, x, y) {
    _classCallCheck(this, Disc);

    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.disc();
  }

  _createClass(Disc, [{
    key: "disc",
    value: function disc() {
      this.ctx.beginPath();
      this.ctx.arc(this.x + 50, this.y + 25, 10, 0, Math.PI * 2, true);
      this.ctx.fillStyle = 'red';
      this.ctx.closePath();
      this.ctx.fill();
    } // clear() {
    //   ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
    //   ctx.fillRect(0,0,canvas.width,canvas.height);
    // }
    // this.ctx.addEventListener('mousemove', function(e) {
    // if ((x >= 300 && x <= 1100) && (y >= 170 && y <= 570)) {
    //   clear();
    //   a = e.clientX;
    //   b = e.clientY;
    //   drawDashedLine(a, b);
    // }})
    // drawDashedLine(x, y) {
    //   ctx.beginPath();
    //   ctx.setLineDash(10, 10);
    //   ctx.moveTo(x+50, y+25);
    //   ctx.lineTo(300, y);
    //   ctx.stroke();
    //   y += 20;
    // }

  }]);

  return Disc;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Disc);

/***/ }),

/***/ "./frontend/game.js":
/*!**************************!*\
  !*** ./frontend/game.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _courses_courseOne_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./courses/courseOne.js */ "./frontend/courses/courseOne.js");
/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player.js */ "./frontend/player.js");
/* harmony import */ var _basket_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basket.js */ "./frontend/basket.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Game = /*#__PURE__*/function () {
  function Game() {
    _classCallCheck(this, Game);

    this.attempts = [];
    this.hole = 1;
  }

  _createClass(Game, [{
    key: "course",
    value: function course(ctx) {
      if (this.hole === 1) return new _courses_courseOne_js__WEBPACK_IMPORTED_MODULE_0__.default(ctx);
    }
  }, {
    key: "player",
    value: function player(ctx) {
      return new _player_js__WEBPACK_IMPORTED_MODULE_1__.default(this.hole, ctx);
    }
  }, {
    key: "placeBasket",
    value: function placeBasket(ctx) {
      return new _basket_js__WEBPACK_IMPORTED_MODULE_2__.default(this.hole, ctx);
    }
  }]);

  return Game;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);

/***/ }),

/***/ "./frontend/game_view.js":
/*!*******************************!*\
  !*** ./frontend/game_view.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var GameView = /*#__PURE__*/function () {
  function GameView(game, ctx) {
    _classCallCheck(this, GameView);

    this.ctx = ctx;
    this.game = game;
    this.fieldSetup(300, 170);
    this.game.player(this.ctx);
    this.game.course(this.ctx);
    this.game.placeBasket(this.ctx);
  }

  _createClass(GameView, [{
    key: "start",
    value: function start() {
      this.lastTime = 0;
    }
  }, {
    key: "fieldSetup",
    value: function fieldSetup(x, y) {
      this.ctx.beginPath();
      this.ctx.moveTo(x, y);
      this.ctx.lineTo(x + 800, y);
      this.ctx.lineTo(x + 800, y + 500);
      this.ctx.lineTo(x, y + 500);
      this.ctx.closePath();
      this.ctx.fillStyle = '#aed581';
      this.ctx.fill();
    } // basketExample() {
    //   this.ctx.beginPath();
    //   this.ctx.moveTo(950, 380)
    //   this.lineTo()
    // }

  }]);

  return GameView;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameView);

/***/ }),

/***/ "./frontend/player.js":
/*!****************************!*\
  !*** ./frontend/player.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _disc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./disc.js */ "./frontend/disc.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Player = /*#__PURE__*/function () {
  function Player(hole, ctx) {
    _classCallCheck(this, Player);

    this.hole = hole;
    this.ctx = ctx;
    this.teePad(300, 360);
  }

  _createClass(Player, [{
    key: "teePad",
    value: function teePad(x, y) {
      if (this.hole === 1) {
        this.horizontalTeePad(x, y);
        new _disc_js__WEBPACK_IMPORTED_MODULE_0__.default(this.ctx, x, y);
      }
    }
  }, {
    key: "horizontalTeePad",
    value: function horizontalTeePad(x, y) {
      this.ctx.beginPath();
      this.ctx.moveTo(x, y);
      this.ctx.lineTo(x + 100, y);
      this.ctx.lineTo(x + 100, y + 50);
      this.ctx.lineTo(x, y + 50);
      this.ctx.closePath();
      this.ctx.fillStyle = '#689f38';
      this.ctx.fill();
    }
  }]);

  return Player;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************!*\
  !*** ./frontend/entry.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ "./frontend/game.js");
/* harmony import */ var _game_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game_view.js */ "./frontend/game_view.js");


document.addEventListener("DOMContentLoaded", function () {
  var canvasEl = document.getElementById("game");
  canvasEl.width = window.innerWidth;
  canvasEl.height = window.innerHeight; // 

  var isDrawing = false;

  function draw(e) {
    if (!isDrawing) return;

    if (e.offsetX > 299 && e.offsetX < 1101 && e.offsetY > 169 && e.offsetY < 671) {
      ctx.lineTo(e.offsetX, e.offsetY);
    }

    ctx.stroke();
  }

  canvasEl.addEventListener('mousemove', draw);
  canvasEl.addEventListener('mousemove', function (e) {
    if (e.offsetX > 299 && e.offsetX < 1101 && e.offsetY > 169 && e.offsetY < 671) {
      isDrawing = true;
      ctx.moveTo(e.offsetX, e.offsetY);
    }
  });
  canvasEl.addEventListener('mouseup', function () {
    return isDrawing = false;
  });
  canvasEl.addEventListener('mouseout', function () {
    return isDrawing = false;
  }); // 

  var ctx = canvasEl.getContext("2d");
  var game = new _game_js__WEBPACK_IMPORTED_MODULE_0__.default();
  new _game_view_js__WEBPACK_IMPORTED_MODULE_1__.default(game, ctx).start();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map