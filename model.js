(function () {
  const Model = function () {
    const { savedPuzzle } = window.localStorage;
    console.log(savedPuzzle);
    this.defaultState = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null];
    this.state = savedPuzzle
      ?
      JSON.parse(savedPuzzle)
      :
      this.defaultState;
    this.save = () => {
      window.localStorage.savedPuzzle = JSON.stringify(this.state);
    };
    this.restart = () => {
      this.state = [].concat(this.defaultState);
      window.localStorage.removeItem('savedPuzzle');
    };
    this.canMove = function({ value } = {}) {
      console.log('Model.canMove');
      return value;
    };
  }
  window.Puzzle.Model = Model;
})();
