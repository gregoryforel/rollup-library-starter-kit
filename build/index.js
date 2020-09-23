'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var antd = require('antd');
var React = require('react');

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".styles-module_test__1MZUD {\n  background: red;\n}\n";
var styles_module = {"test":"styles-module_test__1MZUD"};
var stylesheet=".styles-module_test__1MZUD {\n  background: red;\n}\n";
styleInject(css_248z);

var styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': styles_module,
  stylesheet: stylesheet
});

var App = function () {
    return (React.createElement("div", { className: "App" },
        React.createElement("header", { className: "App-header" },
            React.createElement("h1", { className: "App-title" }, "Welcome to React")),
        React.createElement("p", { className: undefined }, "To get started, edit `src/App.js` and save to reload!"),
        React.createElement(antd.Button, { type: "primary" }, "Antd Button")));
};

exports.App = App;
//# sourceMappingURL=index.js.map
