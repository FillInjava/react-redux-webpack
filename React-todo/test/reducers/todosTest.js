import todos from 'reducers/todos'

describe('todos reducers',() => {
  it('should handle initial state',() => {
    expect(todos(undefined,{})).to.be.eql([]);
  });

  it('should handle ADD_TODO',() => {
    expect(todos(undefined,{type:'ADD_TODO',text:'Return the test',id:0}))
      .to
      .be
      .deep
      .eql([{text: 'Return the test',completed:false,id:0}])
  });

  it('should handle TOOGGLE_TODO',()=>{
    expect(todos(
      [{text: 'Return the test',completed:false,id:0}],
      {type:'TOGGLE_TODO',id:0}))
    .to
    .be
    .deep
    .eql([{text: 'Return the test',completed:true,id:0}])
  });

})