import {computed, ref} from "vue";

export function useContador(){
    const contador  = ref(0);
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
        color
    }
}