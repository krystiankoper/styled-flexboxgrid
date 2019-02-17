import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import config from '../../config';
import { calculatePercentageGridValue } from '../../helpers';

import { Col } from '../../';

const breakpointGridDimensions = () => {
  const data = [];
  const breakpoints = config.breakpointNames;
  for (let i = 0; i < 12; i++) {
    breakpoints.map(breakpoint => {
      data.push([breakpoint, i + 1]);
    });
  }
  return data;
};

describe('Col', () => {
  it('is truthy', () => {
    expect(Col).toBeTruthy();
  });
  it('has proper style rules without props', () => {
    const tree = renderer.create(<Col />).toJSON();
    expect(tree).toHaveStyleRule('box-sizing', 'border-box');
    expect(tree).toHaveStyleRule('flex', '0 0 auto');
    expect(tree).toHaveStyleRule(
      'padding-right',
      `${config.halfGutterWidth}rem`
    );
    expect(tree).toHaveStyleRule(
      'padding-left',
      `${config.halfGutterWidth}rem`
    );
    expect(tree).toHaveStyleRule('flex-direction', 'column');
  });
  it('has proper style rules with reverse property', () => {
    const tree = renderer.create(<Col reverse={true} />).toJSON();
    expect(tree).toHaveStyleRule('flex-direction', 'column-reverse');
  });
  it.each(config.breakpointNames)(
    'has proper style rules with %s property as true',
    breakpoint => {
      const prop = { [breakpoint]: true };
      const tree = renderer.create(<Col {...prop} />).toJSON();
      const settings =
        breakpoint === 'xs'
          ? {}
          : {
              media: `${config.viewport[breakpoint]}`,
            };
      expect(tree).toHaveStyleRule('flex-grow', '1', settings);
      expect(tree).toHaveStyleRule('flex-basis', '0', settings);
      expect(tree).toHaveStyleRule('max-width', '100%', settings);
    }
  );
  it.each(config.breakpointNames)(
    'has proper style rules with %s property as false',
    breakpoint => {
      const prop = { [breakpoint]: false };
      const tree = renderer.create(<Col {...prop} />).toJSON();
      const settings =
        breakpoint === 'xs'
          ? {}
          : {
              media: `${config.viewport[breakpoint]}`,
            };
      expect(tree).toHaveStyleRule('display', 'none', settings);
    }
  );
  it.each(breakpointGridDimensions())(
    'has proper style rules with %s property as an integer with value equals %d',
    (breakpoint, gridDimension) => {
      const prop = { [breakpoint]: gridDimension };
      const tree = renderer.create(<Col {...prop} />).toJSON();
      const percentValue = calculatePercentageGridValue(
        gridDimension,
        config.gridSize
      );
      const settings =
        breakpoint === 'xs'
          ? {}
          : {
              media: `${config.viewport[breakpoint]}`,
            };
      expect(tree).toHaveStyleRule('flex-basis', percentValue, settings);
      expect(tree).toHaveStyleRule('max-width', percentValue, settings);
    }
  );
});
