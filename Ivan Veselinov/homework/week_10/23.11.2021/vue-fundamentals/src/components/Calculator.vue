<template>
    <div>
       <h1>This is Calculator</h1> 
       <div v-if="a && b">
       <h2>Results</h2>
        <p>{{ a }} + {{ b }} = {{ a + b }}</p>
          <p>{{ a }} - {{ b }} = {{ a - b }}</p>
            <p>{{ a }} * {{ b }} = {{ a * b }}</p>
              <p>{{ a }} / {{ b }} = {{ a / b }}</p>
                <p>{{ a }} ** {{ b }} = {{ a ** b }}</p>
       </div>
       <input type="number" v-model.number="a"/>
       <input type="number" v-model.number="b"/>
    </div>
</template>

<style >

</style>

<script>
    export default {
        name: 'Calculatror',
        data(){
            return{
                a: null,
                b: null,
            }
        }
    }
</script>
