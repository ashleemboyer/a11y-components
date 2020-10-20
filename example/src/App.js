import React, { useState } from 'react';
import { Listbox } from 'a11y-components';
import 'a11y-components/dist/index.css';

const App = () => {
  const [favoriteGoldenGirl, setFavoriteGoldenGirl] = useState('rose_nylund');

  return (
    <Listbox
      label="Who's your favorite Golden Girl?"
      onChange={(e) => {
        setFavoriteGoldenGirl(e);
      }}
      options={[
        { id: 'blanche_devereaux', label: 'Blanche Devereaux' },
        { id: 'rose_nylund', label: 'Rose Nylund' },
        { id: 'sophia_petrillo', label: 'Sophia Petrillo' },
        { id: 'dorothy_zbornak', label: 'Dorothy Zbornak' }
      ]}
      value={favoriteGoldenGirl}
    />
  );
};

export default App;
