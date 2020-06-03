import Vue from 'vue'
import Vuex from 'vuex'
import http from 'vue-axios'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        name: "",
        position: "",
        tasks: [
            {
                tasking: "Dishwashing",
                coordinator: "Rangie Laurente",
                members: [
                    "Renan Bargaso",
                    "Renzy Verano",
                    "Jan Patrick Tancinco",
                    "John Louie Bersaluna",
                ]
            },
            {
                tasking: "Kitchen",
                coordinator: "James Laurente",
                members: [
                    "Renan Bargaso",
                    "Renzy Verano",
                    "Jan Patrick Tancinco",
                    "John Louie Bersaluna"
                ]
            },
            {
                tasking: "Dining",
                coordinator: "John Laurente",
                members: [
                    "Renan Bargaso",
                    "Renzy Verano",
                    "Jan Patrick Tancinco",
                    "John Louie Bersaluna"
                ]
            },
            {
                tasking: "Back Garden",
                coordinator: "Jay Laurente",
                members: [
                    "Renan Bargaso",
                    "Renzy Verano",
                    "Jan Patrick Tancinco",
                    "John Louie Bersaluna"
                ]
            },
            {
                tasking: "Front Garden",
                coordinator: "Jay Laurente",
                members: [
                    "Renan Bargaso",
                    "Renzy Verano",
                    "Jan Patrick Tancinco",
                    "John Louie Bersaluna"
                ]
            },
            {
                tasking: "Courtyard",
                coordinator: "Jay Laurente",
                members: [
                    "Renan Bargaso",
                    "Renzy Verano",
                    "Jan Patrick Tancinco",
                    "John Louie Bersaluna"
                ]
            },
            {
                tasking: "Hallway and Corridor",
                coordinator: "Jay Laurente",
                members: [
                    "Renan Bargaso",
                    "Renzy Verano",
                    "Jan Patrick Tancinco",
                    "John Louie Bersaluna"
                ]
            }
        ],
    },
    getters: {
        getTasks: state => {
            return state.tasks
        }
    },
    mutations: {
        setTasks(state, tasks) {
            state.tasks = tasks
        },
        addTask(state, newTask) {
            state.tasks.push(newTask)
        },
        removeTask(state, task) {
            state.tasks.forEach(element => {
                if (task.id == element.id) {
                    state.tasks.splice(1, task)
                }
            })
        }
    },
    actions: {
        // Getting the new generated task
        GetTasks({ commit }) {
            return new Promise((resolve, reject) => {
                http.get("url_from_backend/getTasks").then(res => {
                    commit("setTasks", res)
                    resolve()
                }).catch(err => {
                    reject(err)
                })
            })
        },
        // Add some new task
        AddTask({ commit, task }) {
            return new Promise((resolve, reject) => {
                http.post("url_from_backend/addTask", task).then(res => {
                    commit("addTask", res)
                    resolve()
                }).catch(err => {
                    reject(err)
                })
            })
        },
        // Remove the task 
        RemoveTask({ commit, task }) {
            return new Promise((resolve, reject) => {
                http.delete("url_from_backend/deleteTask/:id", task).then(res => {
                    commit("removeTask", res)
                    resolve()
                }).catch(err => {
                    reject(err)
                })
            })
        },
        EditTask() {

        }
    }
})