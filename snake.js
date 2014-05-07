(function(root) {
  var SnakeGame = root.SnakeGame = (root.SnakeGame || {});
  
  var Snake = SnakeGame.Snake = function () {
    this.dir = "N",
    this.segments = [[10,10],[11,10]]
  };
  
  Snake.prototype.getDirCoor = function(dir) {
    if ( dir === "N" ) {
      return [-1,0];
    } else if (dir === "E") {
      return [0,1];
    } else if (dir === "S") {
      return [1,0];
    } else if (dir === "W") {
      return [0,-1];
    };
  };
  
  Snake.prototype.move = function() {
    var newHead = [];
    var delta = this.getDirCoor(this.dir);
    var that = this;
    for (var i = 0; i < delta.length; i++) {
      newHead[i] = that.segments[0][i] + delta[i];
    };    
    this.segments.unshift(newHead);
    this.segments.pop();
  };
  
  Snake.prototype.turn = function(dir) {
    this.dir = dir;
  }
  
})(this);
