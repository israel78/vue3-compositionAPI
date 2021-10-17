<template>
<!--  se llama al accion hijo que a su vez internamente y con el context
  llama al accion padre-->
<button @click="accionHijo" >{{textoBoton}}</button>
</template>

<script>
export default {
  name: "Btn",
  props:['textoBoton'],
  setup(props,context){
    const accionHijo = ()=>{
      //llamamos a la accion que se ejecuta en el padre "About"
      context.emit('accion')
    }
    return{
      accionHijo
    }
  }
}
</script>

<style scoped>

</style>