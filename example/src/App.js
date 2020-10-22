import React from 'react';
import { Button, Input, Listbox } from 'a11y-components';
import 'a11y-components/dist/index.css';

const testOptions = [];
for (let i = 0; i < 100; i++) {
  testOptions.push({ id: i, label: i });
}

const App = () => {
  return (
    <>
      <Button />
      <Input />
      <Listbox label="Lot's of stuff" options={testOptions} />
    </>
  );
};

export default App;
