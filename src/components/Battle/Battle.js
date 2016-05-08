import React from 'react'
import classes from './Battle.scss'

import Army from 'components/Army'

type Props = {
  firstArmyPower: number,
  secondArmyPower: number
};
export class Battle extends React.Component {
  props: Props;

  render () {
    return (
      <div className={classes['armies-container']}>
        <Army power={this.props.firstArmyPower} />
        <Army power={this.props.secondArmyPower} />
      </div>
    )
  }
}

export default Battle

