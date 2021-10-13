<template>
    <div class="container">
        <h1>Equipo de desarrollo</h1>
        <div class="row">
            <CardTeam></CardTeam>
        </div> 
    </div>
</template>
<script>
import CardTeam from "../components/CardTeam.vue";
    export default {
    name: "App",
    components: {
        CardTeam,
    },
    };
</script>

