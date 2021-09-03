
export default {
    state:{
        priceCourse:[
            {id:1, title:"VND", actions:true},
            {id:2, title:"USD", actions:false},
            {id:3, title:"ERU", actions:false},
        ],
        actionComponentCourse:true,

    },
    actions:{
        ACTIONS_PRICE({commit}, id){
            commit('actionPrice', id)
        }
    },
    mutations:{
        actionPrice(state, payload){
            console.log("Show payload:",payload);
            state.priceCourse.forEach(e => {
               console.log("Show element id:", e.id)
               console.log("Show element action:", e.actions)
               e.actions = false;
            });
            state.priceCourse[payload].actions = true;
        }
    },
    getters:{
        getTypePriceCourse:state =>state.priceCourse,
        getPriceCourse:state => state.priceCourse.filter(type => type.actions),
        getActionComponentCourse:state =>state.actionComponentCourse
    }
}