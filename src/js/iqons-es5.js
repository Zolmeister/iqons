(function(global) {
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var IqonsCatalog = { face: ["face_01", "face_02", "face_03", "face_04", "face_05", "face_06", "face_07", "face_08", "face_09", "face_10", "face_11", "face_12", "face_13", "face_14", "face_15", "face_16", "face_17", "face_18", "face_19", "face_20", "face_21"], side: ["side_01", "side_02", "side_03", "side_04", "side_05", "side_06", "side_07", "side_08", "side_09", "side_10", "side_11", "side_12", "side_13", "side_14", "side_15", "side_16", "side_17", "side_18", "side_19", "side_20", "side_21"], top: ["top_01", "top_02", "top_03", "top_04", "top_05", "top_06", "top_07", "top_08", "top_09", "top_10", "top_11", "top_12", "top_13", "top_14", "top_15", "top_16", "top_17", "top_18", "top_19", "top_20", "top_21"], bottom: ["bottom_01", "bottom_02", "bottom_03", "bottom_04", "bottom_05", "bottom_06", "bottom_07", "bottom_08", "bottom_09", "bottom_10", "bottom_11", "bottom_12", "bottom_13", "bottom_14", "bottom_15", "bottom_16", "bottom_17", "bottom_18", "bottom_19", "bottom_20", "bottom_21"] };

var Iqons = function () {
  function Iqons() {
    _classCallCheck(this, Iqons);
    this.svgPath = '/libraries/iqons/dist/iqons.min.svg'
  }

  _createClass(Iqons, null, [{
    key: "svg",
    value: function svg(t) {
      var s = this._hash(t);return this._svgTemplate(s[0], s[2], s[3] + s[4], s[5] + s[6], s[7] + s[8], s[9] + s[10], s[11], s[12]);
    }
  }, {
    key: "render",
    value: function render(t, s) {
      s.innerHTML = this.svg(t);
    }
  }, {
    key: "toDataUrl",
    value: function toDataUrl(t) {
      return "data:image/svg+xml;base64," + btoa(this.svg(t));
    }
  }, {
    key: "image",
    value: async function image(t) {
      var s = this._$use;this._$use = this._$useForImage, this.$lib = await this._includeLib();var e = this.toDataUrl(t);return this._$use = s, this._loadImage(e);
    }
  }, {
    key: "_svgTemplate",
    value: function _svgTemplate(t, s, e, i, a, n, r, c) {
      return this._$svg(this._$iqons(t, s, e, i, a, n, r), c);
    }
  }, {
    key: "_$iqons",
    value: function _$iqons(t, s, e, i, a, n, r, c) {
      for (t = parseInt(t), s = parseInt(s), r = parseInt(r), t === s && ++t > 9 && (t = 0); r === t || r === s;) {
        ++r > 9 && (r = 0);
      }return t = this.colors[t], s = this.colors[s], "\n            <g style=\"color:" + t + "; fill:" + (r = this.colors[r]) + ";\">\n                <rect fill=\"" + s + "\" x=\"0\" y=\"0\" width=\"160\" height=\"160\"></rect>\n                <circle cx=\"80\" cy=\"80\" r=\"40\" fill=\"" + t + "\"></circle>\n                <g opacity=\".1\" fill=\"#010101\"><path d=\"M119.21,80a39.46,39.46,0,0,1-67.13,28.13c10.36,2.33,36,3,49.82-14.28,10.39-12.47,8.31-33.23,4.16-43.26A39.35,39.35,0,0,1,119.21,80Z\"/></g>\n                " + this._$use("top", i) + "\n                " + this._$use("side", a) + "\n                " + this._$use("face", e) + "\n                " + this._$use("bottom", n) + "\n            </g>";
    }
  }, {
    key: "_$svg",
    value: function _$svg(t, s) {
      return "\n            <svg viewBox=\"0 0 160 160\" width=\"160\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/2000/xlink\" >\n                <defs>\n                    <clipPath id=\"hexagon-clip\" transform=\"scale(0.5) translate(0, 16)\">\n                        <path d=\"M251.6 17.34l63.53 110.03c5.72 9.9 5.72 22.1 0 32L251.6 269.4c-5.7 9.9-16.27 16-27.7 16H96.83c-11.43 0-22-6.1-27.7-16L5.6 159.37c-5.7-9.9-5.7-22.1 0-32L69.14 17.34c5.72-9.9 16.28-16 27.7-16H223.9c11.43 0 22 6.1 27.7 16z\"/>\n                    </clipPath>\n                </defs>\n                <path fill=\"white\" transform=\"translate(0, 8) scale(0.5)\" d=\"M251.6 17.34l63.53 110.03c5.72 9.9 5.72 22.1 0 32L251.6 269.4c-5.7 9.9-16.27 16-27.7 16H96.83c-11.43 0-22-6.1-27.7-16L5.6 159.37c-5.7-9.9-5.7-22.1 0-32L69.14 17.34c5.72-9.9 16.28-16 27.7-16H223.9c11.43 0 22 6.1 27.7 16z\"/>\n                <g transform=\"scale(0.9) translate(9, 8)\">\n                    <g " + this._$flip(s) + " clip-path=\"url(#hexagon-clip)\">\n                        " + t + "\n                    </g>\n                </g>\n            </svg>";
    }
  }, {
    key: "_$use",
    value: function _$use(t, s) {
      return "<use width=\"160\" height=\"160\" xlink:href=\"" + this.svgPath + "#" + t + "_" + this._assetIndex(s, t) + "\"/>";
      /* @asset(/libraries/iqons/dist/iqons.min.svg) */
    }
  }, {
    key: "_loadImage",
    value: function _loadImage(t) {
      return new Promise(function (s, e) {
        var i = document.createElement("img");i.addEventListener("load", function (t) {
          return s(i);
        }, { once: !0 }), i.src = t;
      });
    }
  }, {
    key: "_includeLib",
    value: async function _includeLib() {
      var t = await this._fetchLib(),
          s = document.createElement("x-lib");return s.innerHTML = t, s;
    }
  }, {
    key: "_fetchLib",
    value: function _fetchLib() {
      return fetch("/libraries/iqons/dist/iqons.min.svg").then(function (t) {
        return t.text();
      });
    }
  }, {
    key: "_$useForImage",
    value: function _$useForImage(t, s) {
      var e = "#" + t + "_" + this._assetIndex(s, t);return this.$lib.querySelector(e).innerHTML;
    }
  }, {
    key: "_$flip",
    value: function _$flip(t) {
      return "";
    }
  }, {
    key: "_assetIndex",
    value: function _assetIndex(t, s) {
      return (t = Number(t) % Iqons.assetCounts[s] + 1) < 10 && (t = "0" + t), t;
    }
  }, {
    key: "_hash",
    value: function _hash(t) {
      var _this = this;

      return ("" + t.split("").map(function (t) {
        return Number(t.charCodeAt(0)) + 3;
      }).reduce(function (t, s) {
        return t * (1 - t) * _this.__chaosHash(s);
      }, .5)).split("").reduce(function (t, s) {
        return s + t;
      }, "").substr(4, 17);
    }
  }, {
    key: "__chaosHash",
    value: function __chaosHash(t) {
      var s = 1 / t;for (var _t = 0; _t < 100; _t++) {
        s = (1 - s) * s * 3.569956786876;
      }return s;
    }
  }, {
    key: "colors",
    get: function get() {
      return ["#fb8c00", "#d32f2f", "#fbc02d", "#3949ab", "#03a9f4", "#8e24aa", "#009688", "#f06292", "#7cb342", "#795548"];
    }
  }, {
    key: "assetCounts",
    get: function get() {
      return { face: IqonsCatalog.face.length, side: IqonsCatalog.side.length, top: IqonsCatalog.top.length, bottom: IqonsCatalog.bottom.length, gaze: 2 };
    }
  }]);

  return Iqons;
}();

global.Iqons = Iqons;
})(window);
