<template>
  <titulo :contador="contador"/>
  <div class="about">
    <h1
        :style="{'color':color}"

    >contador : {{contador}}</h1>
<!--    <button @click="aumentar">+</button>
    <button @click="disminuir">-</button>-->
    <Btn :textoBoton="'Aumentar'" @accion="aumentar"></Btn>
    <Btn :textoBoton="'Disminuir'" @accion="disminuir"></Btn>
    <hr>
    <input type="text" v-model="texto">
    <p>{{texto}}</p>

  </div>
</template>
<script>
import {computed,ref} from "vue";
import Titulo from "@/components/Titulo";
import Btn from "@/components/Btn"
export default {
  components:{
    Titulo,
    Btn
  },
  //Este metodo es llamado antes de que se pinte el componente
  setup(){
    //esta variable actua como referencia a un valor para que se pueda
    //modificar su valor de forma reactiva (Sin refrescar la pantalla)
    const contador  = ref(0);
    const texto  = ref("");
    const aumentar = () => {
      contador.value ++
    }
    const disminuir = () => {
      contador.value --
    }
    const color = computed(()=>{
      if (contador.value>0) {
        return 'blue'
      }else {
        return 'red'
      }
    })
    return {
      contador,
      aumentar,
      disminuir,
      color,
      texto
    }
  }
}
</script>