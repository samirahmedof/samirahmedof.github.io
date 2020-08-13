<template>
  <div class="col-md-12 col-lg-6 mb-4" @click="clicked">
    <figure>
      <img :src="item.media[0].src" :alt="item.name" />
      <div class="itemOverlay">
        <span>{{item.name}}</span>
      </div>
    </figure>
  </div>
</template>
<script>
export default {
  props: ["item", "index"],
  methods: {
    clicked() {
      this.$emit("clickedLi", this.index);
    },
  },
};
</script>