<template>
  <h1>Lista de Paises</h1>
  <p v-for="(pais, index) in arrayData" :key="index">
    {{pais.name}}
  </p>
</template>

<script>
import {onMounted, ref} from "vue";
export default {
  name: "Paises",
  setup(){
    const arrayData = ref([])
    //Ciclo de vida implicito dentro de Setup
    onMounted( async () => {
      try {
        const res = await fetch('api.json')
        arrayData.value = await res.json()
      } catch (e) {
        console.log(e)
      }
    })
    return{arrayData}


  }
}
</script>

<style scoped>

</style>