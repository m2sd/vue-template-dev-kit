<template>
  <header class="page-header">
    <page-logo
      alternative="Napura Logo"
      title="Napura"
    />
    <div class="title">Vue template dev kit</div>
  </header>
</template>

<script>
import PageLogo from 'elements/Logo';

export default {
  name: 'PageHeader',
  components: {
    PageLogo
  }
};
</script>

<style lang="scss">
header.page-header {
  background: #3e3e3e;
  color: white;

  .logo {
    float: left;
  }
}
</style>
