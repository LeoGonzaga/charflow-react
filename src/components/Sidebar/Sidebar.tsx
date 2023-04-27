import React from 'react';

import AbsoluteButton from './components/AbsoluteButton';
import * as SC from './styles';

export const Sidebar = (): JSX.Element => {
  return (
    <SC.Container>
      <div className="content">
        Sidebar
        <AbsoluteButton />
      </div>
    </SC.Container>
  );
};
