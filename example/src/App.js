import React from 'react';

import { Button } from 'a11y-components';
import 'a11y-components/dist/index.css';

const App = () => (
  <Button
    onClick={() => {
      console.log('hello!');
    }}
  >
    Click me!
  </Button>
);

export default App;
