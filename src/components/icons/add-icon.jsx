import React from 'react';
import lightVersion from '../../images/icons/ui-images/light/light-add.svg';
import darkVersion from '../../images/icons/ui-images/dark/dark-add.svg';
import IconWrap from './icon-wrap';

function AddIcon({ constTheme=false, size='small' }) {
  const style = {width: '40px', height: '40px'};

  return (
    <IconWrap
      customStyle={size === 'big' ? style : {}}
      light={lightVersion}
      dark={darkVersion}
      constTheme={constTheme}
    />
  )
}

export default AddIcon;
