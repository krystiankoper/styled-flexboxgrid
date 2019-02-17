import PropTypes from 'prop-types';
import styled from 'styled-components';

import config from '../config';
import { media } from '../helpers';

const propTypes = {
  fluid: PropTypes.bool,
  children: PropTypes.node,
};

const createMediaQueries = Object.keys(config.container).map(breakpoint => {
  return media[breakpoint]`
        width: ${config.container[breakpoint]}rem;
        max-width: 100%;
      `;
});

const Container = styled.div`
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  padding-right: ${config.halfGutterWidth}rem;
  padding-left: ${config.halfGutterWidth}rem;
  ${props =>
    props.fluid &&
    `
    padding-right: ${config.gutterWidth}rem;
    padding-left: ${config.gutterWidth}rem;
  `}
  ${props => !props.fluid && createMediaQueries}
`;

Container.propTypes = propTypes;

export default Container;
