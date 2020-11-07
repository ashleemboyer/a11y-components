import React from 'react';
import { Input } from 'a11y-components';
import 'a11y-components/dist/index.css';

const App = () => (
  <Input
    id='my-input'
    label='Label and an ID'
    style={{ border: '1px solid black', padding: 24, margin: 100 }}
    onChange={(e) => {
      console.log(e.target.value);
    }}
  />
);

export default App;
