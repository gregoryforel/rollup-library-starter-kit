'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var antd = require('antd');
var React = require('react');

var styles = {"test":"TestComponent-module_test__1dsFv"};

var TestComponent = function (_a) {
    var theme = _a.theme;
    return (React.createElement("div", { "data-testid": "test-component", className: "test-component test-component-" + theme },
        React.createElement("h1", { className: styles.test }, "I'm the test component"),
        React.createElement(antd.Button, null, "Test")));
};

exports.TestComponent = TestComponent;
//# sourceMappingURL=index.js.map
