<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
button {
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 20px;
  cursor: pointer;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgb(136 144 194 / 20%),
    0px 5px 15px rgb(37 44 97 / 15%);
  border-radius: 999px;
}
</style>
