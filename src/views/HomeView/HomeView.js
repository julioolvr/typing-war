/* @flow */
import React from 'react'

import Battleground from 'containers/Battleground'

type Props = {};

export class HomeView extends React.Component {
  props: Props;

  render () {
    return (
      <div>
        <Battleground />
      </div>
    )
  }
}
export default HomeView
