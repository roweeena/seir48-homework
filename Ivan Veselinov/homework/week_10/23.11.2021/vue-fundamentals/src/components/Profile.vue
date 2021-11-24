<template>
    <div>
     
       <h1>{{ name }}</h1> 
       <h2>{{ bio }}</h2>
         <div>
            <button @click="ZoomOut">-</button>
            <button @click="zoomIn">+</button>
        </div>
       <img v-bind:src="pic" v-bind:height="size"/>
       
    </div>
</template>

<script>
    export default {
        name: 'Profile',
        props: {
            name: String,
            bio: String,
            pic: String
        },
        data(){
            return{
                size: 100
            }
        },
        methods: {
            zoomIn() {
                this.size += 10;
            },
            ZoomOut() {
                if (this.size > 0){
                this.size -= 10;
                }
            }
        }
    }
</script>
