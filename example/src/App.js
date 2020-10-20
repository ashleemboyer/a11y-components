import React, { useState } from 'react';
import { Input } from 'a11y-components';
import 'a11y-components/dist/index.css';

const App = () => {
  const [favoriteGoldenGirl, setFavoriteGoldenGirl] = useState('rose_nylund');

  return <Input label="Who's your favorite Golden Girl?" />;
};

export default App;
