export const addtodo = (todo) => {
    if(todo.todo){
        return {
            type: "ADD_TODO",
            payload: todo,
          };
        };

    }
 

// remove  todo action
export const removeTodo = (id) => {
  return {
    type: "REMOVE_TODO",
    payload: id,
  };
};
// remove all
export const removeAll = () => {
  return {
    type: "REMOVE_ALL",
  };
};


