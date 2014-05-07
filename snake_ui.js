(function(root){
  
  var SnakeGame = root.SnakeGame = (root.SnakeGame || {});
  
  var View = SnakeGame.View = function (options) {
    this.$el = options.$el
  };
  
  View.prototype.render = function () {
    
  };
  
  View.prototype.start = function () {
    var snake = new SnakeGame.Snake();
    var board = new SnakeGame.Board(snake);
    
    
    key('a', function () { board.snake.turn("W") });
    key('w', function () { board.snake.turn("N") });
    key('d', function () { board.snake.turn("E") });
    key('s', function () { board.snake.turn("S") });
    var that = this;
    var step = function () {
      board.removeSnake();
      board.snake.move();
      board.placeSnake();
      board.render();
      
      // that.$el.remove()
      that.$el.html("<pre>" + board.render() + "</pre>");
      console.log(that.$el)
    }
    step();
    setInterval(step, 5000);
  };
  
})(this);


