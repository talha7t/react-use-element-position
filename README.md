# use-element-position

`use-element-position` is a custom React hook that allows developers to easily track the position of a DOM element within the viewport. This hook is particularly useful for implementing features like lazy loading, animations, and conditional rendering based on an element's visibility.

## Features

- **Real-time Position Tracking**: Automatically updates the position of the target element as it scrolls in and out of the viewport.
- **Intersection Observer**: Utilizes the Intersection Observer API for optimal performance, reducing the need for expensive scroll event listeners.
- **Bounding Rectangle**: Returns the current bounding rectangle of the element, providing precise layout calculations.

## Installation

To install the package, use npm or yarn:

**npm**
`npm install use-element-position`

**yarn**
`yarn add use-element-position`


Here’s a simple example of how to use the use-element-position hook in a React component:

```
import React from 'react';
import useElementPosition from 'use-element-position';

const MyComponent = () => {
  const [rect, ref] = useElementPosition();

  return (
    <div ref={ref}>
      <h1>Hello, World!</h1>
      {rect && <p>Element Position: {JSON.stringify(rect)}</p>}
    </div>
  );
};

export default MyComponent;
```
