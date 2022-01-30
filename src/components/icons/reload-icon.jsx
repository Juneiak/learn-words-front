import React from 'react';
import lightVersion from '../../images/icons/ui-images/light/light-reload.svg';
import IconWrap from './icon-wrap';

function ReloadIcon({ constTheme='light' }) {

  return (
    <IconWrap light={lightVersion} constTheme={constTheme} />
  )
}

export default ReloadIcon;
