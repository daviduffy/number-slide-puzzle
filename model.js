(function () {
  const Model = function () {

    const { savedPuzzle } = window.localStorage;

    this.defaultState = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null];
    this.state = savedPuzzle ? JSON.parse(savedPuzzle) : this.defaultState;

    this.save = () => {
      window.localStorage.savedPuzzle = JSON.stringify(this.state);
    };

    this.reset = () => {
      this.state = [].concat(this.defaultState);
      this.moves = 0;
      window.localStorage.removeItem('savedPuzzle');
    };

    this.new = () => {
      const donor = [].concat(this.defaultState);
      const nextState = [];
      while (donor.length > 0) {
        const rand = Math.floor(Math.random() * donor.length);
        const [value] = donor.splice(rand, 1);
        nextState.push(value);
      }
      this.state = nextState;
      this.moves = 0;
    }

    this.move = ({ click, empty }) => {
      const { x, y, index } = click;
      const { x: emptyX, y: emptyY } = empty;
      // move horizontally
      if (x === emptyX) {
        this.state = this.shiftH({ x, index });
      // move vertically
      } else if (y === emptyY) {
        this.state = this.shiftV({ x, y, index });
      }
      // set new empty on the cleanup from this move to prevent over-calc if illegal moves are attempted
      this.empty = this.getCoordinates({ index: this.state.indexOf(null) });
      this.moves = (this.moves || 0) + 1;
      this.isWin({ x: emptyX, y: emptyY });
    };

    this.shiftH = ({ x, index } = {}) => {
      // eliminate the empty space from state
      const nextState = [].concat(this.state).filter(it => it);
      // splice it back in at the index of the click
      nextState.splice(index, 0, null);
      return nextState;
    };

    this.shiftV = ({ x, y, index } = {}) => {
      // create array with indexes from column of numbers to "move"
      const indexes = new Array(4).fill(null).map((v, i) => y + (i * 4));
      const columnValues = indexes
        .map((value, index) => this.state[value])
        .filter(it => it);
      columnValues.splice(x, 0, null);

      const nextState = this.state.map((value, index) => {
        if (indexes.includes(index)) {
          const x = Math.floor(index / 4)
          return columnValues[x];
        }
        return value;

      });
      return nextState;
    };

    this.getCoordinates = ({ index } = {}) => {
      const x = Math.floor(index / 4);
      const y = index % 4;
      return { x, y };
    }

    this.isWin = () => {
      // do easy test first
      if (this.state[15] === null) {
        // ensure the puzzle is in the right order
        if (JSON.stringify(this.defaultState) === JSON.stringify(this.state)) {
          console.log('you win');
        }
      }
    }

  };

  window.Puzzle.Model = Model;
})();
