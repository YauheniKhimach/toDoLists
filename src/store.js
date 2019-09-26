import {createStore} from "redux";


const initialState = {
    todolists: [
        {
            "id": 0, "title": "js", tasks: [
                {"id": 0, "title": "4", "isDone": false, "priority": "low"}
            ], "filterValue": "All"
        },
        {
            "id": 1, "title": "react", tasks: [
                {"id": 0, "title": "react", "isDone": false, "priority": "low"},
                {"id": 1, "title": "new", "isDone": false, "priority": "low"}
            ], "filterValue": "All"
        },
    ]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD-TODOLIST":
            return {
                ...state,
                todolists: [...state.todolists, action.newTodolist]
            };
        case "ADD-TASK":
            return {
                ...state,
                todolists: state.todolists.map(tl=> {
                    if (tl.id=== action.todolistId) {
                        return {...tl, tasks: [...tl.tasks, action.newTask]}
                    } else  {
                        return tl
                    }
                })
            }
    }
    return state;
};

const store = createStore(reducer);
export default store;