<template>
    <div class="home">
        <img v-for="(URLphoto, index) in getListPhoto" :key="index" :src="URLphoto" alt="">
    </div>
</template>

<script>
import {mapGetters} from "vuex"
    export default {
        name: '',
        data () {
            return {

            }
        },
        computed:{
            ...mapGetters(["getListPhoto"]),

        },
        methods:{

        },
        components:{
            
        },
    }
</script>

<style scoped>
    img{
        width: 300px;
        height: 200px;
        margin-right: 10px;
    }
</style>