export const ADD_TODOLIST = "TodoList/Reducer/ADD-TODOLIST";
export const DELETE_TODOLIST = "TodoList/Reducer/DELETE-TODOLIST";
export const DELETE_TASK = "TodoList/Reducer/DELETE-TASK";
export const ADD_TASK = "TodoList/Reducer/ADD-TASK";
export const SET_TASKS = "TodoList/Reducer/SET_TASKS";
export const UPDATE_TASK = "TodoList/Reducer/UPDATE-TASK";
export const SET_TODOLISTS = "TodoList/Reducer/SET_TODOLISTS";

const initialState = {
    "todolists": [
        {
            "id": 0, "title": "every day",
            tasks: [
                {"title": "css11", "isDone": false, "priority": "low", "id": 0},
                {"title": "js", "isDone": false, "priority": "low", "id": 1},
                {"title": "react", "isDone": false, "priority": "low", "id": 2},
                {"title": "sasasa", "isDone": false, "priority": "low", "id": 3},
                {"title": "yoaa", "isDone": false, "priority": "low", "id": 4},
                {"title": "sddsdsds", "isDone": false, "priority": "low", "id": 5}]
        },
        {"id": 1, "title": "tomorrow", tasks: []},
        {"id": 2, "title": "weewwe`", tasks: []},
        {"id": 3, "title": "dddd", tasks: []}
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TASKS:
            return {
                ...state,
                todolists: state.todolists.map(tl => {
                    if (tl.id !== action.todolistId) {
                        return tl;
                    } else {
                        return {...tl, tasks: action.tasks}
                    }
                })
            }
        case SET_TODOLISTS:
            return {
                ...state,
                todolists: action.todolists.map(tl => ({...tl, tasks: []}))
            }
        case ADD_TODOLIST:
            return {
                ...state,
                todolists: [...state.todolists, action.newTodolist]
            }
        case DELETE_TODOLIST:
            return {
                ...state,
                todolists: state.todolists.filter(tl => tl.id != action.todolistId)
            }
        case DELETE_TASK:
            return {
                ...state,
                todolists: state.todolists.map(tl => {
                    if (tl.id === action.todolistId) {
                        return {
                            ...tl,
                            tasks: tl.tasks.filter(t => t.id != action.taskId)
                        }
                    } else {
                        return tl
                    }
                })
            }
        case ADD_TASK:
            return {
                ...state,
                todolists: state.todolists.map(tl => {
                    if (tl.id === action.todolistId) {
                        return {...tl, tasks: [...tl.tasks, action.newTask]}
                    } else {
                        return tl
                    }
                })
            }
        case UPDATE_TASK:
            return {
                ...state,
                todolists: state.todolists.map(tl => {
                    if (tl.id === action.todolistId) {
                        return {
                            ...tl,
                            tasks: tl.tasks.map(t => {
                                if (t.id != action.taskId) {
                                    return t;
                                } else {
                                    return {...t, ...action.obj};
                                }
                            })
                        }
                    } else {
                        return tl
                    }
                })
            }
    }
    console.log("reducer: ", action);
    return state;
}

export const updateTaskAC = (taskId, obj, todolistId) => {
    return { type: UPDATE_TASK, taskId, obj, todolistId };
}
export const deleteTodolistAC = (todolistId) => {
    return {
        type: DELETE_TODOLIST,
        todolistId: todolistId
    };
}
export const deleteTaskAC = (todolistId, taskId) => {
    return {
        type: DELETE_TASK,
        todolistId,
        taskId
    };
}
export const addTaskAC = (newTask, todolistId) => {
    return { type: ADD_TASK, newTask, todolistId };
}
export const setTasksAC = (tasks, todolistId) => {
    return { type: SET_TASKS, tasks, todolistId };
}
export const addTodolistAC = (newTodolist) => {
    return {
        type: ADD_TODOLIST,
        newTodolist: newTodolist
    }
}
export const setTodolistsAC = (todolists) => {
    return {
        type: SET_TODOLISTS,
        todolists: todolists
    }
}

export default reducer;
