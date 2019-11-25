"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _favouritesController = _interopRequireDefault(require("../controllers/favouritesController"));

var _weatherController = _interopRequireDefault(require("../controllers/weatherController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get('/weather', _weatherController["default"].get_weather_by_city_name);
router.get('/weather/coordinates', _weatherController["default"].get_weather_by_coords);
router.get('/favourites', _favouritesController["default"].get_favourites);
router.post('/favourites', _favouritesController["default"].add_to_favourites);
router["delete"]('/favourites', _favouritesController["default"].delete_from_favourites);
var _default = router;
exports["default"] = _default;