import Room from './room.vue';

/* istanbul ignore next */
Room.install = function (Vue) {
  Vue.component(Room.name, Room);
};

export default Room;

