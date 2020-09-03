<template>
    <div>
        baixoayu 
        <h3>{{bai}}</h3>
    </div>
</template>

<script>
    export default {
        name:"bai",
        data(){
            return {
                bai:"我是小张啊"
            }
        }
    }
</script>

<style lang="scss" scoped >
    $textColor:red;
    h3{
        color: $textColor;
    }
</style>