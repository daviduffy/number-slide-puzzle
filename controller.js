(function() {
  const Controller = function () {
    this.handleClick = (element) => {
      const { id, value: VALUE } = element;
      const value = parseInt(VALUE, 10);
      const canMove = Model.canMove({ value });
      console.log(canMove);
    };
    this.handleSave = () => {
      Model.save();
      View.render({ cells: Model.state });
    }
    this.handleRestart = () => {
      Model.restart();
      View.render({ cells: Model.state });
    }
  }

  window.Puzzle.Controller = Controller;
})();
