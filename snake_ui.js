(function(root){
  
  var SnakeGame = root.SnakeGame = (root.SnakeGame || {});
  
  var View = SnakeGame.View = function ($el) {
    this.$el = $el
  }
  
  View.prototype.start = function () {
    var snake = new SnakeGame.Snake();
    var game = new SnakeGame.Board(snake);
    
    key('a', function () { game.snake.turn("W") });
    key('w', function () { game.snake.turn("N") });
    key('d', function () { game.snake.turn("E") });
    key('s', function () { game.snake.turn("S") });
    var that = this;
    var step = function () {
      that.$el.remove()
      that.$el.html("<pre>" + game.render() + "</pre>");
      snake.move();      
    }
    
    // setInterval(step, 1000);
  }
  
})(this);

var game = new SnakeGame.View($(".game-board"));
game.start();