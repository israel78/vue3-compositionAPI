<template>
<h1  :style="{'color':color}">contador: {{contador}}</h1>
  <Btn :textoBoton="'Aumentar'" @accion="aumentar"></Btn>
  <Btn :textoBoton="'Disminuir'" @accion="disminuir"></Btn>
</template>

<script>
//Importamos el componente reutilizable
import Btn from "../components/Btn";
import {useContador} from "../hooks/useContador";
export default {
  name: "Contador",
  components:{
    Btn
  },
  setup(){
    //Tenemos acceso a los métodos del codigo reutilizable
    return {...useContador()}
  }
}
</script>

<style scoped>

</style>