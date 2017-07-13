import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['main-header', 'top-header'],
  tagName: 'header',
  actions: {
    sidebarTogger() {
      var class_name = 'control-sidebar-open';
      if ($('body').hasClass(class_name)) {
        $('body').addClass(class_name);
      } else {
        $('body').removeClass(class_name);
      }
    }
  }
});
