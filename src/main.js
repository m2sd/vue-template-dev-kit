'use strict';

import Vue from 'vue';
import Layout from 'layouts/Home';

new Vue({
  el: '#page',
  mounted () {
    // You'll need this for renderAfterDocumentEvent.
    document.dispatchEvent(new Event('render-event'))
  },
  render: h => h(Layout)
})