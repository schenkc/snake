(function(root){
  
  var SnakeGame = root.SnakeGame = (root.SnakeGame || {});
  
  var View = SnakeGame.View = function (options) {
    this.$el = options.$el
    this.board = new SnakeGame.Board
  };
  
  View.prototype.setupView = function () {
    var html = "<ul>";
    
    for (var i = 0; i < 22; i++) {
      for (var j = 0; j < 22; j++) {
        if ( i === 0 || i === 21 || j === 0 || j === 21 ) {
          html += '<li class="border"></li>'
        } else {
          var pos = "" + (i-1) + "-" + (j-1);
          html +='<li class="' + pos + '"></li>'
        };
      };
    };
    
    html += "</ul>"
    
    return html
  }
  
  View.prototype.render = function () {
    var segments = this.board.snake.segments;
    for (var i = 0; i < segments.length; i++) {
      var liClass = "" + segments[i][0] + "-" + segments[i][1]
      $("." + liClass).toggleClass( "snake" )
    }
    var apple = this.board.apple.position;
    var liClass = "" + apple[0] + "-" + apple[1];
    $("." + liClass).toggleClass( "apple" )
  };
  
  View.prototype.start = function () {
    var board = this.board
    
    key('a', function () { 
      board.snake.turn("W");
      step();
    });
    key('w', function () { 
      board.snake.turn("N");
      step();
    });
    key('d', function () {
      board.snake.turn("E");
      step();
    });
    key('s', function () {
      board.snake.turn("S");
      step();
    });
    var that = this;
    var step = function () {

      board.placeSnake();
      board.placeApple();
      board.render();
      
      // that.$el.remove()
      that.$el.html(that.setupView());
      that.render();
      
      board.removeSnake();
      board.removeApple();
      if ( !board.snake.move() ) {
        alert("Game Over");
        window.clearInterval(that.intervalID);
      }
    }
    step();
    this.intervalID = window.setInterval(step, 500);
  };
  
})(this);


