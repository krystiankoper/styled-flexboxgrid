# styled-flexboxgrid

[![NPM](https://img.shields.io/npm/v/@krystiankoper/styled-flexboxgrid.svg)](https://www.npmjs.com/package/@krystiankoper/styled-flexboxgrid) 
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Grid system based on flexboxgrid2 and styled-components for React

## Install

```
// with npm
$ npm install styled-flexboxgrid  --save

// with yarn
$ yarn add styled-flexboxgrid

`styled-flexboxgrid` depends on these peer dependencies:
- `prop-types@^15.5.4`
- `react@^15.0.0 || ^16.0.0`
- `react-dom@^^15.0.0 || ^16.0.0`
- `styled-components@2`

You have to install them in your project.

```

Usage
-----

```jsx
import React from 'react';
import { Container, Row, Col } from '@krystiankoper/styled-flexboxgrid';

class App extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col xs={12} sm={6} md={3} lg={2} xl={1}>
            Styled FlexboxGrid
          </Col>
        </Row>
      </Container>
    );
  }
}
```

## Container
- `fluid` (Boolean)

## Col
- `reverse` (Boolean) - `flex-direction: column-reverse;`
- `xs` (Boolean | Integer) - `Boolean [true] -> flex-grow: 1; flex-basis: 0; max-width: 100%;` or `Boolean [false] -> display: none;` or `Integer [1-12] -> flex-basis: ((100 / gridSize) * value)%`
- `sm` (Boolean | Integer) - `Boolean [true] -> flex-grow: 1; flex-basis: 0; max-width: 100%;` or `Boolean [false] -> display: none;` or `Integer [1-12] -> flex-basis: ((100 / gridSize) * value)%`
- `md` (Boolean | Integer) - `Boolean [true] -> flex-grow: 1; flex-basis: 0; max-width: 100%;` or `Boolean [false] -> display: none;` or `Integer [1-12] -> flex-basis: ((100 / gridSize) * value)%`
- `lg` (Boolean | Integer) - `Boolean [true] -> flex-grow: 1; flex-basis: 0; max-width: 100%;` or `Boolean [false] -> display: none;` or `Integer [1-12] -> flex-basis: ((100 / gridSize) * value)%`
- `xl` (Boolean | Integer) - `Boolean [true] -> flex-grow: 1; flex-basis: 0; max-width: 100%;` or `Boolean [false] -> display: none;` or `Integer [1-12] -> flex-basis: ((100 / gridSize) * value)%`
- `xsOffset` (Integer) - `value [1-12] -> margin-left: ((100 / gridSize) * value)%`  
- `smOffset` (Integer) - `value [1-12] -> margin-left: ((100 / gridSize) * value)%`  
- `mdOffset` (Integer) - `value [1-12] -> margin-left: ((100 / gridSize) * value)%`  
- `lgOffset` (Integer) - `value [1-12] -> margin-left: ((100 / gridSize) * value)%`  
- `xlOffset` (Integer) - `value [1-12] -> margin-left: ((100 / gridSize) * value)%`  

## Row
- `reverse` (Boolean) - `flex-direction: row-reverse;`
- `start` (xs|sm|md|lg|xl) - `justify-content: flex-start;`
- `center` (xs|sm|md|lg|xl) - `justify-content: center;`
- `end` (xs|sm|md|lg|xl) - `justify-content: flex-end;`
- `top` (xs|sm|md|lg|xl) - `align-items: flex-start;`
- `middle` (xs|sm|md|lg|xl) - `align-items: center;`
- `bottom` (xs|sm|md|lg|xl) - `align-items: flex-end;`
- `around` (xs|sm|md|lg|xl) - `justify-content: space-around;`
- `between` (xs|sm|md|lg|xl) - `justify-content: space-between;`
- `first` (xs|sm|md|lg|xl) - `order: -1;`
- `last` (xs|sm|md|lg|xl) - `order: 1;`

## License

MIT © [krystiankoper](https://github.com/krystiankoper)
