import reducer, {
  initialState,
  ENEMY_POWER_CHANGE,
  changeEnemyPower
} from 'redux/modules/EnemyPower'

import { tick } from 'redux/modules/Tick'

describe('(Redux) EnemyPower', () => {
  describe('(Reducer)', () => {
    it('sets up initial state', () => {
      expect(reducer(undefined, {})).to.eql(initialState)
    })

    it('exports an ENEMY_POWER_CHANGE constant', () => {
      expect(ENEMY_POWER_CHANGE).to.eql('ENEMY_POWER_CHANGE')
    })

    describe('(Actions) changeEnemyPower', () => {
      it('changes the state by the given number', () => {
        expect(reducer(1, changeEnemyPower(10))).to.eql(11)
      })
    })

    describe('(Actions) tick', () => {
      it('increases the state by 10', () => {
        expect(reducer(1, tick())).to.eql(11)
      })
    })
  })

  describe('(Action Creator) changeEnemyPower', () => {
    it('is a function', () => {
      expect(changeEnemyPower).to.be.a('function')
    })

    it('should return a ENEMY_POWER_CHANGE action', () => {
      expect(changeEnemyPower().type).to.eql(ENEMY_POWER_CHANGE)
    })

    it('should have a payload of the passed value', () => {
      expect(changeEnemyPower(10).payload).to.eql(10)
    })
  })
})
