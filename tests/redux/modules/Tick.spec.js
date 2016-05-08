import reducer, {
  initialState,
  TICK,
  tick
} from 'redux/modules/Tick'

describe('(Redux) Tick', () => {
  describe('(Reducer)', () => {
    it('sets up initial state', () => {
      expect(reducer(undefined, {})).to.eql(initialState)
    })

    it('exports a TICK constant', () => {
      expect(TICK).to.eql('TICK')
    })

    describe('(Actions) tick', () => {
      it('increases the state by one', () => {
        expect(reducer(1, tick())).to.eql(2)
      })
    })
  })

  describe('(Action Creator) tick', () => {
    it('is a function', () => {
      expect(tick).to.be.a('function')
    })

    it('should return a TICK action', () => {
      expect(tick().type).to.eql(TICK)
    })
  })
})
