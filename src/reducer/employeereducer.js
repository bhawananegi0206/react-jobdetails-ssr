const initialstate = { list: [], selectedEmployeeId: 0 };


const employeeinfo = (state=initialstate, action) => {
  switch (action.type) {
    case 'displayrecords':
       action.state.list = action.state.list.filter(records => 
        records.id === action.state.selectedTopic
        );
      return Object.assign({}, state, action.state);
    default:
      return Object.assign({}, state, action.state);
  }
}

export default employeeinfo;