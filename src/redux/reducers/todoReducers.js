const initstate = [
 
];
const todoreducer = (state = initstate, action) => {
  let newTodo;
  switch (action.type) {
    //   add 
    case "ADD_TODO":
      newTodo = [...state];
     newTodo.push(action.payload);
      return newTodo;
   //remove
   case "REMOVE_TODO" : 
   newTodo=[...state]
   const remainingTodo= newTodo.filter(todo=> todo.id!==action.payload)
   return remainingTodo;

  // remove all 
  case "REMOVE_ALL":
    alert("removing all")
    return  initstate
//    edit 
// case "EDIT_TODO" : 
//   newTodo = [ ...state] ;
//   if(action.payload.id){
//       payload.map()
//   }
    default:
      return state;
  }
};
export default todoreducer;
