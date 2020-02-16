import Root from './root.vue';

/* istanbul ignore next */
Root.install = function (Vue) {
  Vue.component(Root.name, Root);
};

export default Root;

