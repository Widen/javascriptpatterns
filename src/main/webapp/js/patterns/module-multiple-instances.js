var BallGame = function() {
	function BallGame(config) {
		this.config = config;
		this.greenBall = $(config.ballId);
		this.mbWithBall = $(config.dancingId);

		this.moveBeaverNBall = function(event) {
			var moveXBy = event.clientX - this.mbWithBall.offsetLeft;
			var moveYBy = event.clientY - this.mbWithBall.offsetTop;

			new Effect.Move(this.mbWithBall, {x: moveXBy, y: moveYBy, duration: 1});
			new Effect.Move(this.greenBall, {x: moveXBy, y: moveYBy, duration: 1});
		}

		this.handleClick = function(event) {
			var eventElement = Event.element(event);

			if ('A' === eventElement.tagName) {
				return;
			}

			if ((eventElement.id === config.dancingId && this.mbWithBall.id !== config.dancingId) ||
				(eventElement.id === config.nonDancingId && this.mbWithBall.id !== config.nonDancingId)) {
				this.throwBall();
				return;
			}

			this.moveBeaverNBall(event);
		}
	}


	///// PUBLIC API /////

	BallGame.prototype.init = function() {
		var self = this;

		document.observe('click', function(event) {
			self.handleClick(event);
		});
	}

	BallGame.prototype.throwBall = function() {
		if (this.mbWithBall.id === this.config.dancingId) {
			this.mbWithBall = $(this.config.nonDancingId);
		}
		else {
			this.mbWithBall = $(this.config.dancingId);
		}

		var moveXBy = this.mbWithBall.offsetLeft - this.greenBall.offsetLeft;
		var moveYBy = this.mbWithBall.offsetTop - this.greenBall.offsetTop;

		new Effect.Move(this.greenBall, {x: moveXBy, y: moveYBy, duration: 1});
	}

	return BallGame;
}();

var ballgame, ballgame2;

document.observe('dom:loaded', function() {
	ballgame = new BallGame({
		dancingId : 'dancingmoosenbeaver',
		nonDancingId : 'moosenbeaver',
		ballId : 'green-ball'
	});
	ballgame.init();

	ballgame2 = new BallGame({
		dancingId : 'dancingmoosenbeaver2',
		nonDancingId : 'moosenbeaver2',
		ballId : 'green-ball2'
	});
	ballgame2.init();
});