import Vue from "vue"
import Vuex from "vuex"
import home from "./modules/homeState"
import courseLearning from "./modules/courseLearning"

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        home,
        courseLearning,
        
    },
})