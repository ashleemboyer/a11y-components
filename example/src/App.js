import React from 'react';
import { Input, Listbox } from 'a11y-components';
import 'a11y-components/dist/index.css';

const App = () => (
  <>
    <Listbox
      label='My favorite day of the week'
      options={[
        { id: 'sunday', label: 'Sunday' },
        { id: 'monday', label: 'Monday' },
        { id: 'tuesday', label: 'Tuesday' },
        { id: 'wednesday', label: 'Wednesday' },
        { id: 'thursday', label: 'Thursday' },
        { id: 'friday', label: 'Friday' },
        { id: 'saturday', label: 'Saturday' }
      ]}
    />
    <Input
      id='my-input'
      label='Label and an ID'
      style={{ border: '1px solid black', padding: 24, margin: 100 }}
      onChange={(e) => {
        console.log(e.target.value);
      }}
    />
  </>
);

export default App;
