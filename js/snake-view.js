(function () {

  if (typeof Snake === "undefined") {
    window.Snake = {};
  }
  var View = Snake.View = function ($el) {
    this.game = new Snake.Board(20);
    this.$el = $el;

    $(document).on('keydown', function (e) {

      this.handleKeyEvent(e);
    }.bind(this))
  }

  View.prototype.handleKeyEvent = function (event) {

    var keyPressed = event.keyCode;

    if (keyPressed === 37) {
      this.game.snake.turn("W");
    } else if (keyPressed === 38) {
      this.game.snake.turn("N");
    } else if (keyPressed === 39) {
      this.game.snake.turn("E");
    } else if (keyPressed === 40) {
      this.game.snake.turn("S");
    }

  };

})();
