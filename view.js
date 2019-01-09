(function() {
  const View = function () {
    this.render = ({ cells, moves = 0 } = {}) => {
      this.renderPuzzle(cells);
      this.renderMoves(moves);
    }
    this.renderPuzzle = (cells) => {
      const target = document.getElementById('puzzle_cells');
      const template = cells
        .map((cellNumber, index) => (`
            <li class="Puzzle__cell ${cellNumber ? '' : 'Puzzle__cell--empty'}">
              <button class="Puzzle__button" onClick='Controller.handleClick(this)' value='${index}'>${cellNumber || ''}</button>
            </li>
          `))
        .join('');
      target.innerHTML = template;
    }
    this.renderMoves = (moves) => {
      const target = document.getElementById('moves');
      target.innerHTML = moves;
    };
  }

  window.Puzzle.View = View;
})();
