import reducer, {
  initialState,
  OWN_POWER_CHANGE,
  changeOwnPower
} from 'redux/modules/OwnPower'

describe('(Redux) OwnPower', () => {
  describe('(Reducer)', () => {
    it('sets up initial state', () => {
      expect(reducer(undefined, {})).to.eql(initialState)
    })

    it('exports an OWN_POWER_CHANGE constant', () => {
      expect(OWN_POWER_CHANGE).to.eql('OWN_POWER_CHANGE')
    })

    describe('(Actions) changeOwnPower', () => {
      it('changes the state by the given number', () => {
        expect(reducer(1, changeOwnPower(10))).to.eql(11)
      })
    })
  })

  describe('(Action Creator) changeOwnPower', () => {
    it('is a function', () => {
      expect(changeOwnPower).to.be.a('function')
    })

    it('should return a OWN_POWER_CHANGE action', () => {
      expect(changeOwnPower().type).to.eql(OWN_POWER_CHANGE)
    })

    it('should have a payload of the passed value', () => {
      expect(changeOwnPower(10).payload).to.eql(10)
    })
  })
})
