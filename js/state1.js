var demo = {};
demo.state1 = function () {};
demo.state1.prototype = {
  preload: function () {

  },
  create: function () {
    game.stage.backgroundColor = '#34495e';
    console.log('In state1');
  },
  update: function () {

  }
};
