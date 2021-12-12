<template>
    <div>
        <h1>We are winners</h1>
        <Clickr />
        <button>Don't touch prekidac!</button>

        <hr/>

        <Profile name="Groucho" bio="no goeats no masters" pic="http://www.fillmurray.com/400/600" />
         <Profile name="Harpo" bio="no goeats no masters" pic="http://www.fillmurray.com/401/600" />
          <Profile name="Chico" bio="no goeats no masters" pic="http://www.fillmurray.com/400/601" />
   
        <hr/>

        <Calculator />
    </div>

</template>


<script>
    import Clickr from '@/components/Clickr.vue';
    import Profile from '@/components/Profile.vue';
    import Calculator from '@/components/Calculator.vue';

    export default {
        name: 'Experiments',
        components: {
            Clickr : Clickr,
            Profile: Profile,
            Calculator: Calculator
        }
    }
</script>

<style >

</style>