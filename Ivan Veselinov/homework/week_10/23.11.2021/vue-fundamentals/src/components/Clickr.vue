<template>
    <div>
        <h1>This is clickr</h1>
        <button @click="incrementCount">{{ clicks }} Clicks so far!</button>
    </div>
</template>

<script>
export default {
    name: 'Clickr',
    data() {
        return {
            clicks: 0  
        }
    },
    methods: {
        incrementCount(){
            this.clicks++;
        }
    }
}
</script>

<style scoped>
button{
    background-color: aliceblue;
    color: red;
}
</style>



