<template>
  <div class="map">
    <img
      :src="require(`@/assets/images/${src}_empty.png`)"
      alt="Cambodia Map"
    />
  </div>
</template>

<script>
export default {
  name: "MapImage",
  props: {
    src: String,
  },
};
</script>

<style scoped>
img {
  height: 300px;
  width: 300px;
  margin-top: 1.5vh;
}
</style>
