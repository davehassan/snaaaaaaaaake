(function () {

  if (typeof Snake === "undefined") {
    window.Snake = {};
  }

  var Snake = window.Snake = function (dir, segments) {
    this.dir = dir;
    this.segments = [];
    for (var i = 0; i < segments.length; i++) {
      this.segments.push(new Coordinate(segments[i]));
    }
  };

  Snake.VECTORS = {
      "N": [-1,0],
      "S": [1,0],
      "E": [0,1],
      "W": [0,-1]
  };

  Snake.prototype.move = function () {
    this.segments.pop();
    var head = this.segments[0];
    this.segments.unshift(head.plus(this.dir));
  };

  Snake.prototype.turn = function (dir) {
    this.dir = dir;
  };

  var Coordinate = function (pos) {
    this[0] = pos[0];
    this[1] = pos[1];
  };

  Coordinate.prototype.plus = function (dir) {
    var vector = Snake.VECTORS[dir];
    var x = this[0] + vector[0];
    var y = this[1] + vector[1];
    return new Coordinate([x, y]);
  };

  Coordinate.prototype.equals = function (pos) {
    return (pos[0] === this[0] && pos[1] === this[1]);
  };

  Coordinate.prototype.isOpposite = function () {

  };

  var Board = Snake.Board = function (gridsize) {
    this.gridsize = gridsize;
    this.snake = new Snake("n", [[0,0],[0,1],[0,2],[0,3],[0,4],[0,5]])
  };

  Board.prototype.render = function () {
    var asciiString = ""
    for (var i = 0; i < this.gridsize; i++) {
      for (var j = 0; j < this.gridsize; j++) {
        if (this.snake.segments.find(function (el) {
          return el.equals([i,j]);
        })) {
          asciiString += "S";
        }
        else {
          asciiString += ".";
        }

      }
      asciiString += "\n";
    }
    return asciiString;
  };


})();
