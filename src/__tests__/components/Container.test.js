import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import config from '../../config';

import { Container } from '../../';

describe('Container', () => {
  it('is truthy', () => {
    expect(Container).toBeTruthy();
  });
  it('has proper style rules without props', () => {
    const tree = renderer.create(<Container />).toJSON();
    expect(tree).toHaveStyleRule('box-sizing', 'border-box');
    expect(tree).toHaveStyleRule('margin-left', 'auto');
    expect(tree).toHaveStyleRule('margin-right', 'auto');
    expect(tree).toHaveStyleRule(
      'padding-right',
      `${config.halfGutterWidth}rem`
    );
    expect(tree).toHaveStyleRule(
      'padding-left',
      `${config.halfGutterWidth}rem`
    );
    Object.keys(config.container).forEach(breakpoint => {
      expect(tree).toHaveStyleRule(
        'width',
        `${config.container[breakpoint]}rem`,
        {
          media: `${config.viewport[breakpoint]}`,
        }
      );
      expect(tree).toHaveStyleRule('max-width', '100%', {
        media: `${config.viewport[breakpoint]}`,
      });
    });
  });
  it('has proper style rules with fluid property', () => {
    const tree = renderer.create(<Container fluid={true} />).toJSON();
    expect(tree).toHaveStyleRule('padding-right', `${config.gutterWidth}rem`);
    expect(tree).toHaveStyleRule('padding-left', `${config.gutterWidth}rem`);
  });
});
