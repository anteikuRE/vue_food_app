<template>
  <section>
    <div class="container">
      <slot></slot>
    </div>
  </section>
</template>

<style scoped>
section {
  height: 100vh;
}
.container {
  width: 400px;
  margin: 10px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* justify-content: space-around; */
  flex-direction: column;
  border-radius: 4px;
  box-shadow: 0px 0px 10px 0.5px rgba(0, 0, 0, 0.75);
}
@media only screen and (max-width: 600px) {
  .container {
    margin: 0;
  }
}
@media only screen and (max-width: 600px) {
  .container {
    width: 100%;
    height: 100%;
  }
}
</style>
