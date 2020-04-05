import AButton from './button.vue';

/* istanbul ignore next */
AButton.install = function (Vue) {
  Vue.component(AButton.name, AButton);
};

export default AButton;
