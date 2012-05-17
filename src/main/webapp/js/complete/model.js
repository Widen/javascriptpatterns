$j(function() {
	BallGame.Model = Backbone.Model.extend({
		initialize : function() {
			this.set({
				mbWithBall : $j('#dancingbeaver'),
				dancingScore : 0,
				albinoScore : 0
			})
		},
		passBall : function() {
			if (this.get('mbWithBall').attr('id') == 'dancingbeaver') {
				this.set({mbWithBall : $j('#albinobeaver')});
			}
			else {
				this.set({mbWithBall : $j('#dancingbeaver')});
			}
		},
		touchdown : function() {
			if (this.get('mbWithBall').attr('id') == 'dancingbeaver') {
				this.set({dancingScore : this.get('dancingScore') + 1});
				this.trigger('scored');
			}
			else {
				this.set({albinoScore : this.get('albinoScore') + 1});
				this.trigger('scored');
			}
		}
	});
});