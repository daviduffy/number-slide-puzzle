(function() {
  const View = function () {
    this.render = ({ cells } = {}) => {
      const target = document.getElementById('puzzle_cells');
      const template = cells
        .map(cellNumber => (`
            <li class="Puzzle__cell ${cellNumber ? '' : 'Puzzle__cell--empty'}">
              <button class="Puzzle__button" onClick='Controller.handleClick(this)' value='${cellNumber}'>${cellNumber || ''}</button>
            </li>
          `))
        .join('');
      target.innerHTML = template;
    }
  }

  window.Puzzle.View = View;
})();
