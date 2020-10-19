import React, { useState } from 'react';

import { Input } from 'a11y-components';
import 'a11y-components/dist/index.css';

const App = () => {
  const [firstName, setFirstName] = useState('Ashlee');

  return (
    <Input
      label='First name'
      value={firstName}
      onChange={(e) => {
        setFirstName(e.target.value);
      }}
    />
  );
};

export default App;
