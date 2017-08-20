import Ember from 'ember';

export default Ember.Component.extend({
  // body
  classNames: 'canvasStar',
  async didInsertElement() {
    this._super(...arguments);
    await bsLoad('vender/canvas.js');
    var CanvasStares = new CanvasStar();
    CanvasStares.init();
  }
});