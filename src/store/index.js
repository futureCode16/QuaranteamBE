import Vue from 'vue'
import Vuex from 'vuex'
// import http from 'vue-axios'
import axios from 'axios'

Vue.use(Vuex,axios);

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
        centerTasks: [
            {
                sTasks: "Kitchen",
                Difficulty: "Hard",
                NoOfStudents: 8,
                Center: "Center 1"
            },
            {
                sTasks: "Front Garden",
                Difficulty: "Light",
                NoOfStudents: 5,
                Center: "Center 2"
            },
        ]
    },
    getters: {
        getTasks: state => {
            return state.tasks
        }
    },
    mutations: {
        setTasks(state, tasks) {
            state.centerTasks = tasks
        },
        addTask(state, newTask) {
            state.centerTasks.push(newTask)
        },
        removeTask(state, task) {
            state.centerTasks.forEach(element => {
                if (task.id == element.id) {
                    state.centerTasks.splice(1, task)
                }
            })
        },

    },
    actions: {
        // Getting the new generated task
        GetTasks({ commit }) {
            return new Promise((resolve, reject) => {
                axios.get("http://172.16.32.15:8000/retrieve_names").then(res => {
                    commit("setTasks", res)
                    resolve()
                }).catch(err => {
                    reject(err)
                })
            })
        },
        // Add new task
        AddTask({ commit, task }) {
            return new Promise((resolve, reject) => {
                axios.post("http://172.16.32.15:8000/admin/addtasks", task).then(res => {
                    console.log(res, "response")
                    if (res.data.status == "success") {
                        commit("addTask", res)
                        resolve()
                    }
                }).catch(err => {
                    reject(err)
                })
            })
        },
        // Remove the task 
        RemoveTask({ commit, task }) {
            return new Promise((resolve, reject) => {
                axios.delete("url_from_backend/deleteTask/:id", task).then(res => {
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