<template>
  <div class="logo">
    <img
      :src="url"
      :alt="alternative || title"
      :title="title || alternative"
      @click="logoClick"
    >
  </div>
</template>

<script>
export default {
  name: 'PageLogo',
  props: {
    url: {
      type: String,
      default: require('assets/images/logo.png')
    },
    alternative: {
      type: String,
      default: 'Page Logo'
    },
    title: {
      type: String,
      default: 'Page Name'
    }
  },
  methods: {
    logoClick: function() {
      alert('This is a test!');
    }
  }
};
</script>

<style lang="scss">
.logo {
  img {
    width: auto;
    height: 100%;
  }
}
</style>
