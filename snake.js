(function(root) {
  var SnakeGame = root.SnakeGame = (root.SnakeGame || {});
  
  var Snake = SnakeGame.Snake = function (board) {
    this.dir = "N",
    this.segments = [[10,10],[11,10]],
    this.board = board;
    
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
    if (newHead[0] === this.board.apple.position[0] && newHead[1] === this.board.apple.position[1]) {
      this.segments.unshift(newHead);
      this.board.apple = new SnakeGame.Apple;
      return true;
    } else if ( this.validMove(newHead) ) { 
      this.segments.unshift(newHead);
      this.segments.pop();
      return true;
    } else {
      return false;
    }
  };
  

  Snake.prototype.onBoard = function (arr) {
    return ( arr[0] >= 0 && arr[0] <= 19 && arr[1] >= 0 && arr[1] <= 19 )
  }
  
  Snake.prototype.validMove = function (newHead) {
    return this.onBoard(newHead) && !(_.contains(this.segments, newHead))
  }
  
  Snake.prototype.turn = function(dir) {
    this.dir = dir;
  }
  
})(this);
