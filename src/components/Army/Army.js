import React from 'react'
import classes from './Army.scss'

type Props = {
  power: number
};
export class Army extends React.Component {
  props: Props;

  render () {
    return (
      <div className={classes.army}>Power: {this.props.power}</div>
    )
  }
}

export default Army

