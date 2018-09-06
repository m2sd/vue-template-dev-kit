<template>
  <div id="page">
    <page-header />
  </div>
</template>

<script>
import PageHeader from 'components/Header';

export default {
  name: 'App',
  components: {
    PageHeader
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    };
  }
};
</script>

<style lang="scss">
@import '~styles/normalize.css';
@import '~styles/print.css';

/*
***********************
*    IMPORT FONTS     *
***********************
*/

@import url('https://fonts.googleapis.com/css?family=Abril+Fatface|Roboto:300,400,700');

#page {
  width: 100%;
  min-height: 100vh;
  background: #3e3e3e;
  color: #ffffff;
  font-size: 1.125rem;
  font-family: 'Roboto', sans-serif;

  h2 {
    font-family: 'Abril Fatface', serif;
    font-size: 4.4444rem;
    line-height: 1.325;
  }

  h3 {
    font-weight: 300;
    font-size: 3.125rem;
    line-height: 1.2;
  }

  /* HEADER */

  header {
    display: inline-block;
    width: 100%;
  }

  header nav {
    float: right;
  }

  header nav li {
    float: left;
    margin-left: 10px;
  }

  /* FOOTER */

  footer {
    display: block;
    width: 100%;
  }

  /*
   *******************
   *  MEDIA QUERIES  *
   *******************
  */
  /* Small only */
  //@media only screen and (max-width: 39.9375em) {}

  /* Medium and up */
  //@media only screen and (min-width: 40em) {}

  /* Medium only */
  //@media only screen and (min-width: 40em) and (max-width: 63.9375em) {}

  /* Large and up */
  //@media only screen and (min-width: 64em) {}

  /* Large only */
  //@media only screen and (min-width: 64em) and (max-width: 74.9375em) {}

  /* Extra large and up */
  //@media only screen and (min-width: 75em) {}
}
</style>
