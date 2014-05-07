(function(root){
  var SnakeGame = root.SnakeGame = (root.SnakeGame || {});
  
  var Apple = SnakeGame.Apple = function () {
    this.position = this.randomApple();
  }
  
  Apple.prototype.randomApple = function () {
    var x = Math.floor(Math.random() * 20);
    var y = Math.floor(Math.random() * 20);
    
    return [x,y];
  }

})(this);