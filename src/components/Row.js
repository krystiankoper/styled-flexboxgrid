import PropTypes from 'prop-types';
import styled from 'styled-components';

import { media } from '../helpers';
import config from '../config';

const RowPropType = PropTypes.oneOf(config.breakpointNames);

const propTypes = {
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
  children: PropTypes.node,
};

const Row = styled.div`
  box-sizing: border-box;
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
  margin-right: ${config.gutterCompensation}rem;
  margin-left: ${config.gutterCompensation}rem;
  ${props => props.reverse && 'flex-direction: row-reverse;'}
  ${props =>
    props.start &&
    media[props.start]`
      justify-content: flex-start;
  `}
  ${props =>
    props.center &&
    media[props.center]`
    justify-content: center;
  `}
  ${props =>
    props.end &&
    media[props.end]`
    justify-content: flex-end;
  `}
  ${props =>
    props.top &&
    media[props.top]`
    align-items: flex-start;
  `}
  ${props =>
    props.middle &&
    media[props.middle]`
    align-items: center;
  `}
  ${props =>
    props.bottom &&
    media[props.bottom]`
    align-items: flex-end;
  `}
  ${props =>
    props.around &&
    media[props.around]`
    justify-content: space-around;
  `}
  ${props =>
    props.between &&
    media[props.between]`
    justify-content: space-between;
  `}
  ${props =>
    props.first &&
    media[props.first]`
    order: -1;
  `}
  ${props =>
    props.last &&
    media[props.last]`
    order: 1;
  `}
`;

Row.propTypes = propTypes;

export default Row;
