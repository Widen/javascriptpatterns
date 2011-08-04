var BallGame = function() {
	var ballGame = BallGame.prototype;

	function BallGame(config) {
		var greenBall = $(config.ballId);
		var mbWithBall = $(config.dancingId);

		this.throwBall = function() {
			var moveXBy = mbWithBall.offsetLeft - greenBall.offsetLeft;
			var moveYBy = mbWithBall.offsetTop - greenBall.offsetTop;

			new Effect.Move(greenBall, {x: moveXBy, y: moveYBy, duration: 1});
		}

		this.moveBeaverNBall = function(event) {
			var moveXBy = event.clientX - mbWithBall.offsetLeft;
			var moveYBy = event.clientY - mbWithBall.offsetTop;

			new Effect.Move(mbWithBall, {x: moveXBy, y: moveYBy, duration: 1});
			new Effect.Move(greenBall, {x: moveXBy, y: moveYBy, duration: 1});
		}

		this.handleClick = function(event) {
			var eventElement = Event.element(event);

			if (eventElement.id === config.dancingId && mbWithBall.id !== config.dancingId) {
				mbWithBall = $(config.dancingId);
				this.throwBall();
				return;
			}

			if (eventElement.id === config.nonDancingId && mbWithBall.id !== config.nonDancingId) {
				mbWithBall = $(config.nonDancingId);
				this.throwBall();
				return;
			}

			this.moveBeaverNBall(event);
		}
	}


	///// PUBLIC API /////

	ballGame.init = function() {
		var self = this;

		document.observe('click', function(event) {
			self.handleClick(event);
		});
	}

	return BallGame;
}();

document.observe('dom:loaded', function() {
	new BallGame({
		dancingId : 'dancingmoosenbeaver',
		nonDancingId : 'moosenbeaver',
		ballId : 'green-ball'
	}).init();

	new BallGame({
		dancingId : 'dancingmoosenbeaver2',
		nonDancingId : 'moosenbeaver2',
		ballId : 'green-ball2'
	}).init();
});