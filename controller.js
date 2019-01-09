(function() {
  const Controller = function () {

    this.handleClick = (element) => {
      const { id, value: INDEX } = element;
      const index = parseInt(INDEX, 10);
      const { x, y } = Model.getCoordinates({ index: parseInt(INDEX, 10) });
      const { x: emptyX, y: emptyY } = Model.getCoordinates({ index: Model.state.indexOf(null) })
      // only calc move and re-render if the move is legal
      if (x === emptyX || y === emptyY) {
        Model.move({ click: { x, y, index }, empty: { x: emptyX, y: emptyY } });
        View.render({ cells: Model.state, moves: Model.moves });
      }
    };

    this.handleSave = () => {
      Model.save();
      View.render({ cells: Model.state, moves: Model.moves });
    }

    this.handleReset = () => {
      if (confirm('Are you sure you want to reset? This will clear any saved puzzles.')) {
        Model.reset();
        View.render({ cells: Model.state, moves: Model.moves });
      }
    }

    this.handleNew = () => {
      Model.new();
      View.render({ cells: Model.state, moves: Model.moves });
    }

  }

  window.Puzzle.Controller = Controller;
})();
