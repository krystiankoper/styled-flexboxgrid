import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

var config = {
  gridSize: 12,
  gutterWidth: 1,
  gutterCompensation: -0.5,
  halfGutterWidth: 0.5,
  breakpointNames: ['xs', 'sm', 'md', 'lg', 'xl'],
  breakpointOffsetNames: ['xsOffset', 'smOffset', 'mdOffset', 'lgOffset', 'xlOffset'],
  breakpoints: {
    xs: 0,
    sm: 36,
    md: 48,
    lg: 62,
    xl: 75
  },
  container: {
    sm: 35,
    md: 47,
    lg: 61,
    xl: 74
  },
  viewport: {
    sm: 'only screen and (min-width: 36em)',
    md: 'only screen and (min-width: 48em)',
    lg: 'only screen and (min-width: 62em)',
    xl: 'only screen and (min-width: 75em)'
  }
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var taggedTemplateLiteral = function (strings, raw) {
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
};

var _templateObject = taggedTemplateLiteral(['\n            ', '\n          '], ['\n            ', '\n          ']),
    _templateObject2 = taggedTemplateLiteral(['\n            @media ', ' {\n              ', '\n            }\n          '], ['\n            @media ', ' {\n              ', '\n            }\n          ']);

var isInteger = function isInteger(value) {
  return parseFloat(value) === parseInt(value, 10);
};
var calculatePercentageGridValue = function calculatePercentageGridValue(value, gridSize) {
  return 100 / gridSize * value + '%';
};

var media = Object.keys(config.breakpoints).reduce(function (media, breakpoint, index) {
  media[breakpoint] = index === 0 ? function () {
    return css(_templateObject, css.apply(undefined, arguments));
  } : function () {
    return css(_templateObject2, config.viewport[breakpoint], css.apply(undefined, arguments));
  };
  return media;
}, {});

var _templateObject$1 = taggedTemplateLiteral(['\n        width: ', 'rem;\n        max-width: 100%;\n      '], ['\n        width: ', 'rem;\n        max-width: 100%;\n      ']),
    _templateObject2$1 = taggedTemplateLiteral(['\n  box-sizing: border-box;\n  margin-left: auto;\n  margin-right: auto;\n  padding-right: ', 'rem;\n  padding-left: ', 'rem;\n  ', '\n  ', '\n'], ['\n  box-sizing: border-box;\n  margin-left: auto;\n  margin-right: auto;\n  padding-right: ', 'rem;\n  padding-left: ', 'rem;\n  ', '\n  ', '\n']);

var propTypes = {
  fluid: PropTypes.bool,
  children: PropTypes.node
};

var createMediaQueries = Object.keys(config.container).map(function (breakpoint) {
  return media[breakpoint](_templateObject$1, config.container[breakpoint]);
});

var Container = styled.div(_templateObject2$1, config.halfGutterWidth, config.halfGutterWidth, function (props) {
  return props.fluid && '\n    padding-right: ' + config.gutterWidth + 'rem;\n    padding-left: ' + config.gutterWidth + 'rem;\n  ';
}, function (props) {
  return !props.fluid && createMediaQueries;
});

Container.propTypes = propTypes;

var _templateObject$2 = taggedTemplateLiteral(['\n  box-sizing: border-box;\n  display: flex;\n  flex: 0 1 auto;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin-right: ', 'rem;\n  margin-left: ', 'rem;\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'], ['\n  box-sizing: border-box;\n  display: flex;\n  flex: 0 1 auto;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin-right: ', 'rem;\n  margin-left: ', 'rem;\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']),
    _templateObject2$2 = taggedTemplateLiteral(['\n      justify-content: flex-start;\n  '], ['\n      justify-content: flex-start;\n  ']),
    _templateObject3 = taggedTemplateLiteral(['\n    justify-content: center;\n  '], ['\n    justify-content: center;\n  ']),
    _templateObject4 = taggedTemplateLiteral(['\n    justify-content: flex-end;\n  '], ['\n    justify-content: flex-end;\n  ']),
    _templateObject5 = taggedTemplateLiteral(['\n    align-items: flex-start;\n  '], ['\n    align-items: flex-start;\n  ']),
    _templateObject6 = taggedTemplateLiteral(['\n    align-items: center;\n  '], ['\n    align-items: center;\n  ']),
    _templateObject7 = taggedTemplateLiteral(['\n    align-items: flex-end;\n  '], ['\n    align-items: flex-end;\n  ']),
    _templateObject8 = taggedTemplateLiteral(['\n    justify-content: space-around;\n  '], ['\n    justify-content: space-around;\n  ']),
    _templateObject9 = taggedTemplateLiteral(['\n    justify-content: space-between;\n  '], ['\n    justify-content: space-between;\n  ']),
    _templateObject10 = taggedTemplateLiteral(['\n    order: -1;\n  '], ['\n    order: -1;\n  ']),
    _templateObject11 = taggedTemplateLiteral(['\n    order: 1;\n  '], ['\n    order: 1;\n  ']);

var RowPropType = PropTypes.oneOf(config.breakpointNames);

var propTypes$1 = {
  reverse: PropTypes.bool,
  start: RowPropType,
  center: RowPropType,
  end: RowPropType,
  top: RowPropType,
  middle: RowPropType,
  bottom: RowPropType,
  around: RowPropType,
  between: RowPropType,
  first: RowPropType,
  last: RowPropType,
  children: PropTypes.node
};

var Row = styled.div(_templateObject$2, config.gutterCompensation, config.gutterCompensation, function (props) {
  return props.reverse && 'flex-direction: row-reverse;';
}, function (props) {
  return props.start && media[props.start](_templateObject2$2);
}, function (props) {
  return props.center && media[props.center](_templateObject3);
}, function (props) {
  return props.end && media[props.end](_templateObject4);
}, function (props) {
  return props.top && media[props.top](_templateObject5);
}, function (props) {
  return props.middle && media[props.middle](_templateObject6);
}, function (props) {
  return props.bottom && media[props.bottom](_templateObject7);
}, function (props) {
  return props.around && media[props.around](_templateObject8);
}, function (props) {
  return props.between && media[props.between](_templateObject9);
}, function (props) {
  return props.first && media[props.first](_templateObject10);
}, function (props) {
  return props.last && media[props.last](_templateObject11);
});

Row.propTypes = propTypes$1;

var _templateObject$3 = taggedTemplateLiteral(['\n            flex-basis: ', ';\n            max-width: ', ';\n          '], ['\n            flex-basis: ', ';\n            max-width: ', ';\n          ']),
    _templateObject2$3 = taggedTemplateLiteral(['', ''], ['', '']),
    _templateObject3$1 = taggedTemplateLiteral(['\n        margin-left: ', ';\n      '], ['\n        margin-left: ', ';\n      ']),
    _templateObject4$1 = taggedTemplateLiteral(['\n  box-sizing: border-box;\n  flex: 0 0 auto;\n  padding-right: ', 'rem;\n  padding-left: ', 'rem;\n  flex-direction: column;\n  ', '\n  ', '\n  ', '\n'], ['\n  box-sizing: border-box;\n  flex: 0 0 auto;\n  padding-right: ', 'rem;\n  padding-left: ', 'rem;\n  flex-direction: column;\n  ', '\n  ', '\n  ', '\n']);

var ColPropType = PropTypes.oneOfType([PropTypes.number, PropTypes.bool]);
var ColOffsetPropType = PropTypes.number;

var colProps = config.breakpointNames.reduce(function (colProp, breakpoint) {
  colProp[breakpoint] = ColPropType;
  colProp[breakpoint + 'Offset'] = ColOffsetPropType;
  return colProp;
}, {});

var propTypes$2 = _extends({}, colProps, {
  reverse: PropTypes.bool,
  children: PropTypes.node
});

var createBreakpointsStyles = function createBreakpointsStyles(props) {
  return Object.keys(props).filter(function (breakpoint) {
    return ~config.breakpointNames.indexOf(breakpoint);
  }).sort(function (breakpoint1, breakpoint2) {
    return config.breakpointNames.indexOf(breakpoint1) - config.breakpointNames.indexOf(breakpoint2);
  }).map(function (breakpoint) {
    return isInteger(props[breakpoint]) ? media[breakpoint](_templateObject$3, calculatePercentageGridValue(props[breakpoint], config.gridSize), calculatePercentageGridValue(props[breakpoint], config.gridSize)) : media[breakpoint](_templateObject2$3, props[breakpoint] === true ? '\n            flex-grow: 1;\n            flex-basis: 0;\n            max-width: 100%;\n            ' : '\n              display: none;\n            ');
  });
};

var createBreakpointOffsetStyles = function createBreakpointOffsetStyles(props) {
  return Object.keys(props).filter(function (breakpoint) {
    return ~Object.keys(config.breakpointOffsetNames).indexOf(breakpoint);
  }).map(function (breakpoint) {
    return media[config.breakpointOffsetNames[breakpoint]](_templateObject3$1, calculatePercentageGridValue(props[breakpoint], config.gridSize));
  });
};

var Col = styled.div(_templateObject4$1, config.halfGutterWidth, config.halfGutterWidth, function (props) {
  return props.reverse && 'flex-direction: column-reverse;';
}, function (props) {
  return createBreakpointsStyles(props);
}, function (props) {
  return createBreakpointOffsetStyles(props);
});

Col.propTypes = propTypes$2;

export { Container, Row, Col };
//# sourceMappingURL=index.es.js.map
