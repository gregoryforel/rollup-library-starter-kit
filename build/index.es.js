import { Button } from 'antd';
import { createElement } from 'react';

var styles = {"test":"TestComponent-module_test__1dsFv"};

var TestComponent = function (_a) {
    var theme = _a.theme;
    return (createElement("div", { "data-testid": "test-component", className: "test-component test-component-" + theme },
        createElement("h1", { className: styles.test }, "I'm the test component"),
        createElement(Button, null, "Test")));
};

export { TestComponent };
//# sourceMappingURL=index.es.js.map
