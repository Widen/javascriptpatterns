var BallGame = {}

$j(function() {
	var model = new BallGame.Model();
	var fieldView = new BallGame.FieldView({model : model});
	var scoresView = new BallGame.ScoresView({model : model});
	var crowdView = new BallGame.CrowdView({model : model});
});