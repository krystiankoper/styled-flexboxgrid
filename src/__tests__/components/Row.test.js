import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import config from '../../config';

import { Row } from '../../';

const propTypesSettings = () => {
  const propSettings = [
    ['start', 'justify-content', 'flex-start'],
    ['center', 'justify-content', 'center'],
    ['end', 'justify-content', 'flex-end'],
    ['top', 'align-items', 'flex-start'],
    ['middle', 'align-items', 'center'],
    ['bottom', 'align-items', 'flex-end'],
    ['around', 'justify-content', 'space-around'],
    ['between', 'justify-content', 'space-between'],
    ['first', 'order', '-1'],
    ['last', 'order', '1'],
  ];
  const data = [];
  config.breakpointNames.forEach(breakpoint =>
    propSettings.forEach(prop => data.push([breakpoint].concat(prop)))
  );
  return data;
};

describe('Row', () => {
  it('is truthy', () => {
    expect(Row).toBeTruthy();
  });
  it('has proper style rules without props', () => {
    const tree = renderer.create(<Row />).toJSON();
    expect(tree).toHaveStyleRule('box-sizing', 'border-box');
    expect(tree).toHaveStyleRule('display', 'flex');
    expect(tree).toHaveStyleRule('flex', '0 1 auto');
    expect(tree).toHaveStyleRule('flex-direction', 'row');
    expect(tree).toHaveStyleRule('flex-wrap', 'wrap');
    expect(tree).toHaveStyleRule(
      'margin-right',
      `${config.gutterCompensation}rem`
    );
    expect(tree).toHaveStyleRule(
      'margin-left',
      `${config.gutterCompensation}rem`
    );
  });
  it('has proper style rules with reverse property', () => {
    const tree = renderer.create(<Row reverse={true} />).toJSON();
    expect(tree).toHaveStyleRule('flex-direction', 'row-reverse');
  });
  it.each(propTypesSettings())(
    'has %s value as %s property with %s set to %s',
    (breakpoint, type, styleAttr, styleValue) => {
      const prop = { [type]: breakpoint };
      const tree = renderer.create(<Row {...prop} />).toJSON();
      expect(tree).toHaveStyleRule(
        styleAttr,
        styleValue,
        breakpoint === 'xs'
          ? {}
          : {
              media: `${config.viewport[breakpoint]}`,
            }
      );
    }
  );
});
