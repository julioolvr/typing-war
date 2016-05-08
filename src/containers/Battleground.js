import React from 'react'
import { connect } from 'react-redux'

import Battle from 'components/Battle'

type Props = {
  ownPower: number,
  enemyPower: number
}
export class Battleground extends React.Component {
  props: Props;

  render () {
    return (
      <div>
        <Battle firstArmyPower={this.props.ownPower}
          secondArmyPower={this.props.enemyPower} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  ownPower: state.ownPower,
  enemyPower: state.enemyPower
})
const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Battleground)
