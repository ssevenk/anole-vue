// 导入所有组件
import Container from './src/container';
import Root from './src/root';
import AButton from './src/button';
import AInput from './src/input';
import AImage from './src/image';

const components = [Container];
const install = function (vue) {
  /* istanbul ignore if */
  if (install.installed) return;
  /*eslint-disable*/
    components.map((component) => {
        vue.component(component.name, component); //component.name 此处使用到组件vue文件中的 name 属性
    });
};
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
};

export {
    Container,
    Root,
    AButton,
    AInput,
    AImage
}