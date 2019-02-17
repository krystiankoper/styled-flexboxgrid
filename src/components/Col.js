import PropTypes from 'prop-types';
import styled from 'styled-components';

import config from '../config';
import { media, isInteger, calculatePercentageGridValue } from '../helpers';

const ColPropType = PropTypes.oneOfType([PropTypes.number, PropTypes.bool]);
const ColOffsetPropType = PropTypes.number;

const colProps = config.breakpointNames.reduce((colProp, breakpoint) => {
  colProp[breakpoint] = ColPropType;
  colProp[`${breakpoint}Offset`] = ColOffsetPropType;
  return colProp;
}, {});

const propTypes = {
  ...colProps,
  reverse: PropTypes.bool,
  children: PropTypes.node,
};

const createBreakpointsStyles = props =>
  Object.keys(props)
    .filter(breakpoint => ~config.breakpointNames.indexOf(breakpoint))
    .sort(
      (breakpoint1, breakpoint2) =>
        config.breakpointNames.indexOf(breakpoint1) -
        config.breakpointNames.indexOf(breakpoint2)
    )
    .map(breakpoint => {
      return isInteger(props[breakpoint])
        ? media[breakpoint]`
            flex-basis: ${calculatePercentageGridValue(
              props[breakpoint],
              config.gridSize
            )};
            max-width: ${calculatePercentageGridValue(
              props[breakpoint],
              config.gridSize
            )};
          `
        : media[breakpoint]`${
            props[breakpoint] === true
              ? `
            flex-grow: 1;
            flex-basis: 0;
            max-width: 100%;
            `
              : `
              display: none;
            `
          }`;
    });

const createBreakpointOffsetStyles = props =>
  Object.keys(props)
    .filter(
      breakpoint =>
        ~Object.keys(config.breakpointOffsetNames).indexOf(breakpoint)
    )
    .map(breakpoint => {
      return media[config.breakpointOffsetNames[breakpoint]]`
        margin-left: ${calculatePercentageGridValue(
          props[breakpoint],
          config.gridSize
        )};
      `;
    });

const Col = styled.div`
  box-sizing: border-box;
  flex: 0 0 auto;
  padding-right: ${config.halfGutterWidth}rem;
  padding-left: ${config.halfGutterWidth}rem;
  flex-direction: column;
  ${props => props.reverse && 'flex-direction: column-reverse;'}
  ${props => createBreakpointsStyles(props)}
  ${props => createBreakpointOffsetStyles(props)}
`;

Col.propTypes = propTypes;

export default Col;
