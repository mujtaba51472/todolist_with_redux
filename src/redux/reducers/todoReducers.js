const initstate = [];
const todoreducer = (state = initstate, action) => {
  let newTodo;
  switch (action.type) {
    //   add
    case "ADD_TODO":
      // newTodo = [...state]; // useless line
      // newTodo.push(action.payload);
      return [action.payload].concat(state); // Adds in reverse like a todo
    //remove
    case "REMOVE_TODO":
      newTodo = [...state];
      const remainingTodo = newTodo.filter(
        (todo) => todo.id !== action.payload
      );
      return remainingTodo;

    // remove all
    case "REMOVE_ALL":
      alert("removing all");
      return initstate;
    //    edit
    // case "EDIT_TODO" :
    //   newTodo = [ ...state] ;
    //   if(action.payload.id){
    //       payload.map()
    //   }

    case "edit ma todo b*tch!":  // declare actions like real nigga !
      return state.map((i) =>
        i.id == action.id ? { id: i.id, todo: action.payload } : i
      );

    default:
      return state;
  }
};
export default todoreducer;
