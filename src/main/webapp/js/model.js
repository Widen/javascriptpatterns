$j(function() {
	BallGame.Model = Backbone.Model.extend({
		initialize : function() {
			this.set({
				mbWithBall : $j('#dancingmoosenbeaver'),
				dancingScore : 0,
				albinoScore : 0
			})
		}
	});
});