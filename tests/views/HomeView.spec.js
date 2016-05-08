import React from 'react'
import TestUtils from 'react-addons-test-utils'
import { isComponentOfType, findWithType } from 'react-shallow-testutils'
import { HomeView } from 'views/HomeView/HomeView'
import Battleground from 'containers/Battleground'

function shallowRender (component) {
  const renderer = TestUtils.createRenderer()

  renderer.render(component)
  return renderer.getRenderOutput()
}

function renderWithProps (props = {}) {
  return TestUtils.renderIntoDocument(<HomeView {...props} />)
}

function shallowRenderWithProps (props = {}) {
  return shallowRender(<HomeView {...props} />)
}

describe('(View) Home', function () {
  let _component, _rendered, _props, _spies

  beforeEach(function () {
    _spies = {}
    _props = {}

    _component = shallowRenderWithProps(_props)
  })

  it('Should render as a <div>.', function () {
    expect(isComponentOfType(_component, 'div')).to.be.true
  })

  it('Should include a Battleground.', function () {
    const battleground = findWithType(_component, Battleground)
    expect(battleground).to.exist
  })
})
