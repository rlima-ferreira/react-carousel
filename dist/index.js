Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var Wrapper = styled__default["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: ", ";\n  background-color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  > div.items {\n    display: flex;\n    overflow-x: auto;\n    -ms-overflow-style: none; /* IE and Edge */\n    scrollbar-width: none; /* Firefox */\n    scroll-snap-type: x mandatory;\n    scroll-behavior: smooth;\n    -webkit-overflow-scrolling: touch;\n\n    &::-webkit-scrollbar {\n      display: none;\n    }\n\n    > div {\n      flex: none;\n      width: 100%;\n      height: ", ";\n      scroll-snap-align: start;\n    }\n  }\n\n  > div.arrows {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n\n    > div {\n      position: absolute;\n      top: calc(50% - 85px);\n      left: 5%;\n\n      &:last-of-type {\n        left: inherit;\n        right: 5%;\n      }\n\n      > button {\n        color: ", ";\n        cursor: pointer;\n        height: 70px;\n        width: 70px;\n        background-color: transparent;\n        border: none;\n        outline: none;\n      }\n    }\n  }\n\n  > div.indicators {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: absolute;\n    bottom: 0;\n    height: 50px;\n    width: 100%;\n  }\n"], ["\n  width: ", ";\n  background-color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  > div.items {\n    display: flex;\n    overflow-x: auto;\n    -ms-overflow-style: none; /* IE and Edge */\n    scrollbar-width: none; /* Firefox */\n    scroll-snap-type: x mandatory;\n    scroll-behavior: smooth;\n    -webkit-overflow-scrolling: touch;\n\n    &::-webkit-scrollbar {\n      display: none;\n    }\n\n    > div {\n      flex: none;\n      width: 100%;\n      height: ", ";\n      scroll-snap-align: start;\n    }\n  }\n\n  > div.arrows {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n\n    > div {\n      position: absolute;\n      top: calc(50% - 85px);\n      left: 5%;\n\n      &:last-of-type {\n        left: inherit;\n        right: 5%;\n      }\n\n      > button {\n        color: ", ";\n        cursor: pointer;\n        height: 70px;\n        width: 70px;\n        background-color: transparent;\n        border: none;\n        outline: none;\n      }\n    }\n  }\n\n  > div.indicators {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: absolute;\n    bottom: 0;\n    height: 50px;\n    width: 100%;\n  }\n"])), function (_a) {
    var width = _a.width;
    return width || '100vw';
}, function (_a) {
    var background = _a.background;
    return background || '#444';
}, function (_a) {
    var height = _a.height;
    return height || '500px';
}, function (_a) {
    var color = _a.color;
    return color || '#fff';
});
var Indicator = styled__default["default"].button(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  border-radius: 100%;\n  height: 10px;\n  width: 10px;\n  border: none;\n  margin-left: 10px;\n  background-color: ", ";\n  outline: none;\n  cursor: pointer;\n\n  &:first-of-type {\n    margin-left: 0;\n  }\n"], ["\n  border-radius: 100%;\n  height: 10px;\n  width: 10px;\n  border: none;\n  margin-left: 10px;\n  background-color: ", ";\n  outline: none;\n  cursor: pointer;\n\n  &:first-of-type {\n    margin-left: 0;\n  }\n"])), function (_a) {
    var active = _a.active, color = _a.color;
    return active ? color || '#fff' : 'rgba(0, 0, 0, 0.3)';
});
var templateObject_1, templateObject_2;

var Carousel = function (_a) {
    var h = _a.h, w = _a.w, source = _a.source, getItem = _a.getItem, getIndicator = _a.getIndicator, arrowLeftIcon = _a.arrowLeftIcon, arrowRightIcon = _a.arrowRightIcon, 
    // autoplay,
    // delay,
    iconColor = _a.iconColor, bg = _a.bg;
    var _b = React.useState({
        current: 0,
        last: 0,
    }), position = _b[0], setPosition = _b[1];
    // const [timer] = useState(
    //   autoplay ? setInterval(toggleItem, delay || 3000) : 0
    // );
    var items = React.useRef(null);
    React.useEffect(function () {
        var _a, _b;
        var size = source.length - 1;
        var current = position.current, last = position.last;
        if (current <= size) {
            (_a = items.current) === null || _a === void 0 ? void 0 : _a.scrollBy(items.current.offsetWidth * (current - last), 0);
        }
        else {
            (_b = items.current) === null || _b === void 0 ? void 0 : _b.scrollBy(items.current.offsetWidth * -current, 0);
        }
        // return () => clearInterval(timer);
    }, [position]);
    function toggleItem(iterator) {
        if (iterator === void 0) { iterator = 1; }
        var size = source.length - 1;
        var current = position.current + iterator;
        if (iterator > 0)
            current = current <= size ? current : 0;
        else if (iterator < 0)
            current = current >= 0 ? current : size;
        setPosition({ last: position.current, current: current });
    }
    return (React__default["default"].createElement(Wrapper, { width: w, height: h, background: bg, color: iconColor },
        React__default["default"].createElement("div", { ref: items, className: "items" }, source.map(function (item, index) { return (React__default["default"].createElement("div", { key: index.toString() }, getItem(item))); })),
        React__default["default"].createElement("div", { className: "arrows" },
            React__default["default"].createElement("div", null,
                React__default["default"].createElement("button", { onClick: function () { return toggleItem(-1); } }, arrowLeftIcon || 'Back')),
            React__default["default"].createElement("div", null,
                React__default["default"].createElement("button", { onClick: function () { return toggleItem(1); } }, arrowRightIcon || 'Next'))),
        React__default["default"].createElement("div", { className: "indicators" }, __spreadArray([], new Array(source.length), true).map(function (_, index) {
            return getIndicator ? (getIndicator({
                index: index,
                active: index === position.current,
                navigate: function () {
                    return setPosition({ last: position.current, current: index });
                },
            })) : (React__default["default"].createElement(Indicator, { key: index.toString(), active: position.current == index, color: iconColor, onClick: function () {
                    return setPosition({ last: position.current, current: index });
                } }));
        }))));
};

exports["default"] = Carousel;
//# sourceMappingURL=index.js.map
