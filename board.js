(function(root) {
  
  var SnakeGame = root.SnakeGame = (root.SnakeGame || {});
  
  var Board = SnakeGame.Board = function(snake) {
    this.snake = snake;
    this.board = this.buildBoard();
    // this.apples = this.placeApples();
  };
  
  Board.prototype.buildBoard = function () {
    var board = [];
    for (var i = 0; i < 20; i++) {
      var row = []
      for (var j= 0; j < 20; j++) {
        row.push(null);
      }
      board.push(row);
    }
    return board;
  }
  
  Board.prototype.placeSnake = function () {
    var segments = this.snake.segments;
    for (var i = 0; i < segments.length; i++) {
      var y = segments[i][0];
      var x = segments[i][1];
      this.board[y][x] = "S"
    }
  }
  
  Board.prototype.render = function () {
    var board = this.board;
    for (var i = 0; i < board.length; i++) {
      var row = "";
      for (var j = 0; j < board.length; j++) {
        if (board[i][j] === null) {
          row = row.concat("*");
        } else {
          row = row.concat(board[i][j])
        }
      }
      console.log(row);
    }
  }
  
})(this);

