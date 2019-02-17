import { css } from 'styled-components';

import config from './config';

const isInteger = value => parseFloat(value) === parseInt(value, 10);
const calculatePercentageGridValue = (value, gridSize) =>
  `${(100 / gridSize) * value}%`;

const media = Object.keys(config.breakpoints).reduce(
  (media, breakpoint, index) => {
    media[breakpoint] =
      index === 0
        ? (...args) => css`
            ${css(...args)}
          `
        : (...args) => css`
            @media ${config.viewport[breakpoint]} {
              ${css(...args)}
            }
          `;
    return media;
  },
  {}
);

export { media, isInteger, calculatePercentageGridValue };
