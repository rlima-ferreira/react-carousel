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

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var Wrapper = styled__default["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  width: ", ";\n  background-color: ", ";\n  overflow: hidden;\n\n  > div.items {\n    display: flex;\n    overflow-x: auto;\n    -ms-overflow-style: none; /* IE and Edge */\n    scrollbar-width: none; /* Firefox */\n    scroll-snap-type: x mandatory;\n    scroll-behavior: smooth;\n    -webkit-overflow-scrolling: touch;\n\n    &:-webkit-scrollbar {\n      display: none;\n    }\n\n    > div {\n      flex: none;\n      width: 100%;\n      height: ", ";\n      scroll-snap-align: start;\n      pointer-events: none;\n    }\n  }\n\n  > div.arrows {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n\n    > button {\n      color: ", ";\n      cursor: pointer;\n    }\n  }\n\n  > div.indicators {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    button {\n      background-color: ", ";\n      cursor: pointer;\n    }\n  }\n"], ["\n  position: relative;\n  width: ", ";\n  background-color: ", ";\n  overflow: hidden;\n\n  > div.items {\n    display: flex;\n    overflow-x: auto;\n    -ms-overflow-style: none; /* IE and Edge */\n    scrollbar-width: none; /* Firefox */\n    scroll-snap-type: x mandatory;\n    scroll-behavior: smooth;\n    -webkit-overflow-scrolling: touch;\n\n    &:-webkit-scrollbar {\n      display: none;\n    }\n\n    > div {\n      flex: none;\n      width: 100%;\n      height: ", ";\n      scroll-snap-align: start;\n      pointer-events: none;\n    }\n  }\n\n  > div.arrows {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n\n    > button {\n      color: ", ";\n      cursor: pointer;\n    }\n  }\n\n  > div.indicators {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    button {\n      background-color: ", ";\n      cursor: pointer;\n    }\n  }\n"])), function (_a) {
    var width = _a.width;
    return "".concat(width, "px") || '100vw';
}, function (_a) {
    var background = _a.background;
    return background || '#444';
}, function (_a) {
    var height = _a.height;
    return "".concat(height, "px") || '500px';
}, function (_a) {
    var color = _a.color;
    return color || '#fff';
}, function (_a) {
    var color = _a.color;
    return color || '#fff';
});
var Indicator = styled__default["default"].button(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  border-radius: 100%;\n  height: 20px;\n  width: 20px;\n  border: none;\n  margin-left: 10px;\n  background-color: ", ";\n\n  &:first-of-type {\n    margin-left: 0;\n  }\n"], ["\n  border-radius: 100%;\n  height: 20px;\n  width: 20px;\n  border: none;\n  margin-left: 10px;\n  background-color: ", ";\n\n  &:first-of-type {\n    margin-left: 0;\n  }\n"])), function (_a) {
    var active = _a.active;
    return !active && 'rgba(0, 0, 0, 0.3)';
});
var templateObject_1, templateObject_2;

var Carousel = function (_a) {
    var h = _a.h, w = _a.w, source = _a.source, getSlide = _a.getSlide, getIndicator = _a.getIndicator, arrowLeftIcon = _a.arrowLeftIcon, arrowRightIcon = _a.arrowRightIcon, autoplay = _a.autoplay, delay = _a.delay, iconColor = _a.iconColor, bg = _a.bg;
    var _b = React.useState(0), selected = _b[0], setSelected = _b[1];
    React.useEffect(function () {
        if (!autoplay)
            return;
        var timer = setTimeout(function () { return toggleSlide(1); }, delay);
        return function () { return clearTimeout(timer); };
    }, [autoplay]);
    function toggleSlide(iterator) {
        var pos = 0;
        if (iterator > 0) {
            pos = selected + iterator < source.length ? selected + iterator : 0;
        }
        else if (iterator < 0) {
            pos = selected + iterator >= 0 ? selected + iterator : source.length - 1;
        }
        setSelected(pos);
    }
    return (React__default["default"].createElement(Wrapper, { width: w, height: h, background: bg, color: iconColor },
        React__default["default"].createElement("div", { className: "items", onWheel: function (e) { return toggleSlide(e.deltaY > 0 ? -1 : 1); } }, source.map(function (item, index) { return (React__default["default"].createElement("div", { key: index.toString() }, getSlide(item))); })),
        React__default["default"].createElement("div", { className: "arrows" },
            React__default["default"].createElement("div", null,
                React__default["default"].createElement("button", { onClick: function () { return toggleSlide(-1); } }, arrowLeftIcon || 'Previous')),
            React__default["default"].createElement("div", null,
                React__default["default"].createElement("button", { onClick: function () { return toggleSlide(1); } }, arrowRightIcon || 'Next'))),
        React__default["default"].createElement("div", { className: "indicators" }, new Array(source.length).map(function (_, index) {
            return getIndicator ? (getIndicator({
                index: index,
                active: index === selected,
                navigate: function () { return setSelected(index); },
            })) : (React__default["default"].createElement(Indicator, { key: index.toString(), active: selected == index, onClick: function () { return setSelected(index); } }));
        }))));
};

exports["default"] = Carousel;
//# sourceMappingURL=index.js.map
