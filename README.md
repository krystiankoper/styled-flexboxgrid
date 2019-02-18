# styled-flexboxgrid

[![NPM](https://img.shields.io/npm/v/@krystiankoper/styled-flexboxgrid.svg)](https://www.npmjs.com/package/@krystiankoper/styled-flexboxgrid) 
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Grid system based on flexboxgrid2 and styled-components for React

## Install

```
$ npm install @krystiankoper/styled-flexboxgrid --save

or

$ yarn add @krystiankoper/styled-flexboxgrid
```
`styled-flexboxgrid` depends on these peer dependencies:
- `prop-types@^15.5.4`
- `react@^15.0.0 || ^16.0.0`
- `react-dom@^^15.0.0 || ^16.0.0`
- `styled-components@2`

You have to install them in your project.

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
| Props | Type | Value | Style |
|--|--|--|--|
| `fluid` | *`Boolean`* | *true* | `padding-right: 1rem;` <br> `padding-left: 1rem;` <br> *Without fixed widths for breakpoints*
| `fluid` | *`Boolean`* | *false* | `padding-right: 0.5rem;` <br> `padding-left: 0.5rem;` <br> *Fixed widths for breakpoints*

## Col
| Props | Type | Value | Style |
|--|--|--|--|
| `reverse` | *`Boolean`* | *true* | `flex-direction: column-reverse;`
| `reverse` | *`Boolean`* | *false* | `flex-direction: column`;
| `xs` `sm` `md` `lg` `xl` | *`Boolean`* | *true* | `flex-grow: 1;` <br> `flex-basis: 0;` <br> `max-width: 100%;`
| `xs` `sm` `md` `lg` `xl` | *`Boolean`* | *false* | `display: none;`
| `xs` `sm` `md` `lg` `xl` | *`Integer`* | *1-12* | `flex-basis: ((100 / 12) * value)%` <br> `max-width: ((100 / 12) * value)%`
| `xsOffset` <br> `smOffset` <br> `mdOffset` <br> `lgOffset` <br> `xlOffset` | *`Integer`* | *1-12* | `margin-left: ((100 / 12) * value)%` 

## Row
| Props | Type | Value | Style |
|--|--|--|--|
| `reverse` | *`Boolean`* | *true* | `flex-direction: row-reverse;`
| `reverse` | *`Boolean`* | *false* | `flex-direction: row`;
| `start` | *`One of type`* | `xs` <br> `sm` <br> `md` <br> `lg` <br> `xl` | `justify-content: flex-start;`
| `center` | *`One of type`* | `xs` <br> `sm` <br> `md` <br> `lg` <br> `xl` | `justify-content: center;`
| `end` | *`One of type`* | `xs` <br> `sm` <br> `md` <br> `lg` <br> `xl` | `justify-content: flex-end;`
| `top` | *`One of type`* | `xs` <br> `sm` <br> `md` <br> `lg` <br> `xl` | `align-items: flex-start;`
| `middle` | *`One of type`* | `xs` <br> `sm` <br> `md` <br> `lg` <br> `xl` | `align-items: center;`
| `bottom` | *`One of type`* | `xs` <br> `sm` <br> `md` <br> `lg` <br> `xl` | `align-items: flex-end;`
| `around` | *`One of type`* | `xs` <br> `sm` <br> `md` <br> `lg` <br> `xl` | `justify-content: space-around;`
| `between` | *`One of type`* | `xs` <br> `sm` <br> `md` <br> `lg` <br> `xl` | `justify-content: space-between;`
| `first` | *`One of type`* | `xs` <br> `sm` <br> `md` <br> `lg` <br> `xl` | `order: -1;`
| `last` | *`One of type`* | `xs` <br> `sm` <br> `md` <br> `lg` <br> `xl` | `order: 1;`

## License

MIT © [krystiankoper](https://github.com/krystiankoper)
