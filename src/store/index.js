import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios);

export default new Vuex.Store({
    state: {
        name: "",
        position: "",
        // Center 2 taskings
        tasks_center2: [
            {
                tasking: "Dishwashing",
                coordinator: "Rangie Laurente",
                members: [
                    "Aeromel Laure",
                    "Leonilo Torres",
                    "Jane Repollo",
                    "Chilla Jean",
                    "Joey Destacamento",
                    "Renzy Verano",
                    "Maria Lyn",
                    "Mary Jane Paller",
                ]
            },
            {
                tasking: "Kitchen",
                coordinator: "Jhon Adrian Tigusan",
                members: [
                    "Renan Bargaso",
                    "Mary Grace Cordoto",
                    "Jan Kenneth Diansin",
                    "Jakeniel Erim",
                    "Ivy Joy",
                    "Nerissa Sunit",
                    "John Louie Bersaluna",
                ]
            },
            {
                tasking: "Dining",
                coordinator: "Jan Patrick Tancinco",
                members: [
                    "Christian Gigante",
                    "Mary Ann Camay",
                    "Cherry Herrera",
                    "Marion Jay Balugo",
                    "Redgie Gravador",
                    "Lealyn Eulin",
                ]
            },
            {
                tasking: "Back Garden",
                coordinator: "Cardo Dalisay",
                members: [
                    "Lola Ritemed",
                    "Eddie Garcia",
                    "Gloria Arroyo",
                    "Rodrigo Duterte"
                ]
            },
            {
                tasking: "Front Garden",
                coordinator: "Julius Babao",
                members: [
                    "Renan Bargaso",
                    "Renzy Verano",
                    "Jan Patrick Tancinco",
                    "John Louie Bersaluna"
                ]
            },
            {
                tasking: "Courtyard",
                coordinator: "Chervin Tanilon",
                members: [
                    "Renan Bargaso",
                    "Renzy Verano",
                    "Jan Patrick Tancinco",
                    "John Louie Bersaluna"
                ]
            },
            {
                tasking: "Hallway and Corridor",
                coordinator: "Charo Santos",
                members: [
                    "Renan Bargaso",
                    "Renzy Verano",
                    "Jan Patrick Tancinco",
                    "John Louie Bersaluna"
                ]
            }
            ,
            {
                tasking: "Window 1",
                coordinator: "Alexander The Great",
                members: [
                    "Renan Bargaso"
                ]
            },
            {
                tasking: "Window 2",
                coordinator: "King David II",
                members: [
                    "Renan Bargaso"
                ]
            },
            {
                tasking: "Laundry",
                coordinator: "Matteo Tax Collector",
                members: [
                    "Renan Bargaso",
                    "Renzy Verano",
                    "Jan Patrick Tancinco",
                ]
            },
            {
                tasking: "Comlab",
                coordinator: "King Solomon I",
                members: [
                    "Renan Bargaso"
                ]
            },
            {
                tasking: "Water Jag",
                coordinator: "Kuya Jay"
            },
            {
                tasking: "Kettle",
                coordinator: "Kuya Jopax"
            }
        ],
        // Center 1 taskings
        tasks_center1: [
            {
                tasking: "Dishwashing",
                coordinator: "Rose Mary Goyo",
                members: [
                    "Harvey Apparace",
                    "Sernel Asunto",
                    "Rhea May Ardiente",
                    "Sheena Torres",
                    "Quency Atacador",
                    "Antonette Biore",
                    "Jay Ann Carzon",
                    "Aiza Aniga",
                ]
            },
            {
                tasking: "Kitchen",
                coordinator: "Ailyn Albores",
                members: [
                    "Kristine Reyes",
                    "Bea Alonzo",
                    "Sarah Geronimo",
                    "Vice Ganda",
                    "Alex Gonzaga",
                    "DJ Loonyo",
                    "Vhong Navarro"
                ]
            },
            {
                tasking: "Dining",
                coordinator: "Gerald Afable",
                members: [
                    "Billy Crawford",
                    "Jonalyn Test",
                    "Gerald Anderson",
                    "Chang Amy",
                    "Jhon Hilario",
                    "Korina Sanchez"
                ]
            },
            {
                tasking: "Front and Sorroundings",
                coordinator: "Precy Roxas",
                members: [
                    "Black Pink",
                    "Crazy Kart",
                    "Mobile Legends",
                    "Java Script",
                    "Marvel Super War",
                    "Captain America"
                ]
            },
            {
                tasking: "Windows and Stairways",
                coordinator: "Jennie Joy Tomalon",
                members: [
                    "Renan Bargaso",
                    "Renzy Verano",
                    "Jan Patrick Tancinco",
                ]
            },
            {
                tasking: "Laundry",
                coordinator: "James Reid",
                members: [
                    "Justine Bayutas",
                    "Kaith Chymbe",
                    "Angelica Joy"
                ]
            },
            {
                tasking: "Office and Library",
                coordinator: "Daniel Padilla",
                members: [
                    "Cardo Dalisay",
                    "Juaqin Bordado"
                ]
            },
            {
                tasking: "Comlab ",
                coordinator: "Kathryn Bernardo",
                members: [
                    "Jurick Baybayanon"
                ]
            },
            {
                tasking: "Multipurpose",
                coordinator: "Julia Montes",
                members: [
                    "Josehp John"
                ]
            }
        ],
        centerTasks: [
            {
                id: 1,
                sTasks: "Kitchen",
                Difficulty: "Hard",
                NoOfStudents: 8,
                Center: "Center 1"
            },
            {
                id: 2,
                sTasks: "Front Garden",
                Difficulty: "Light",
                NoOfStudents: 5,
                Center: "Center 2"
            },
        ]
    },
    getters: {
        getTasks_Center1: state => {
            return state.tasks_center1
        },
        getTasks_Center2: state => {
            return state.tasks_center2
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