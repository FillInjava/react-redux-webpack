import * as actions from 'actions/actions'

describe('todo actions',() => {
  it('addTodo should create ADD_TODO action',() => {
    expect(actions.addTodo('Use Redux')).to.be.eql({
       type: 'ADD_TODO',
       text: 'Use Redux',
       id: 0
    })
  })

  it('setVisibilityFilter should create SET_VISIBILITY_FILTER action',() => {
    expect(actions.setVisibilityFilter('active')).to.be.eql({
      type: 'SET_VISIBILITY_FILTER',
      filter: 'active'
    })
  })

  it('tooggle should create TOOGLE_TODO action', () => {
    expect(actions.toggleTodo(1)).to.be.eql({
      type: 'TOGGLE_TODO',
      id: 1
    })
  })
})

