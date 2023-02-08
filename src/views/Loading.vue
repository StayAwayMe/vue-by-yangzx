<template>
    <div class="bigloading">
        <div class="loading"></div>
    </div>
</template>

<script setup>

</script>

<style  scoped>
.bigloading{
    display: flex;
    justify-content: center;
}
.loading{
    width: 30px;
    height: 30px;
    border-radius: 100%;
    border: 5px solid #000;
    border-left: 0px;
    background-color: #fff;
    position: fixed;
    bottom: 0;
}
</style>