<template>
  <div class="yangzx" v-for="(item, index) in data.list" :key="index" :style="item">
    {{ index }}
  </div>
  
 

  <Loading></Loading>
</template>
<script setup>
import { reactive } from "vue";
import Loading from "./Loading.vue";
const data = reactive({
  list:[
    { background: 'rgb(233,32,38)'}
  ]
})



async function getList(num) {

  const time = Math.random(0, 5) * 1000

  const f1 = async () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve()
        for (let index = 0; index < num; index++) {
          const rgb = {}
          rgb.background = `rgb(${Math.floor(Math.random(0, 255) * 100)},${Math.floor(Math.random(0, 255) * 100)},${Math.floor(Math.random(0, 255) * 100)})`
          data.list.push(rgb)
        }
      }, time);
    });
  }
  await f1()
}
getList(10)
window.addEventListener("scroll",()=>{
  console.log(window.scrollY,window.screen.height/2);
  if(window.scrollY>=(window.screen.height/2)&&data.list.length<=40){
    getList(10)
  }
})
</script>
<style scoped>
.yangzx {
  width: 100%;
  height: 500px;
  font-size: 50px;
  text-align: center;
  line-height: 150px;
}
</style>
