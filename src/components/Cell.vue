<template>
  <div class="cell">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'cell',
    data() {
      return {

      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .cell{
    display: flex;
    flex-wrap: wrap;
    min-width: 100%;
    padding: 4px;
    min-height: 50px;
    box-sizing: border-box;
    color: white;
    /*line-height: 41px;*/
    border-bottom: 1px solid #fff;
  }
  .cell:hover{
    cursor: pointer;
    background: rgba(0, 0, 0, .1);
  }
  .cell:active{
    background: rgba(0, 0, 0, .3);
  }
</style>
