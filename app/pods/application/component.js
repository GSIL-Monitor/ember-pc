import Component from '@ember/component';

export default Component.extend({
  didInsertElement() {
    this._super(...arguments);
    // window.bsLoad('./Adminlte/index.js');
  },
});
