<template>
  <div class="home">
    <h1
        :style="{'color':color}"

    >contador : {{contador}}</h1>
    <button @click="aumentar">aumentar</button>
    <button @click="disminuir">disminuir</button>

  </div>
</template>

<script>
// @ is an alias to /src
export default {
  data() {
    return {
      contador: 0
    }
  },
  computed:{
    color(){
      if (this.contador<0){
        return 'red'}
      else{
        return 'blue'
      }
    }
  },
  methods:{
    aumentar(){
      this.contador++
    },
    disminuir(){
      this.contador--
    }
  }

}
</script>
