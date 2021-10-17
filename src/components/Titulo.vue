<template>
<h1>Titulo:{{signo}} </h1>
</template>

<script>
import {computed} from "vue";
export default {
  name: "Titulo",
  props: ['contador'],
  setup(props){
    const signo = computed(()=>{
      return '$'+ props.contador
    })
    return {
      signo
    }
  }
}
</script>

<style scoped>

</style>