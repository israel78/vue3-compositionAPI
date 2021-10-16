<template>
  <div class="home">
<h1>contador : {{contador}}</h1>
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
