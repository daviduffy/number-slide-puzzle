const Model = new window.Puzzle.Model();
const Controller = new window.Puzzle.Controller();
const View = new window.Puzzle.View();
View.render({ cells: Model.state });
