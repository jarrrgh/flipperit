/* @flow */
/*eslint-disable react/prop-types*/

import React from 'react';
import MapView from './views/MapView';
import MapView from './views/ListView';

/**
 * AppRouter is responsible for mapping a navigator scene to a view
 */
export default function AppRouter(props) {
  const key = props.scene.route.key;

  if (key === 'Map') {
    return <MapView />;
  }

  if (key === 'List') {
    return <ListView />;
  }

  throw new Error('Unknown navigation key: ' + key);
}
