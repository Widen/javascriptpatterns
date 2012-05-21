$j(function() {
	BallGame.ScoresView = Backbone.View.extend({
		el : $j('#scores'),
		initialize : function() {
			this.compileTemplate();
			this.render();
			this.model.bind('scored', this.render, this);
		},
		compileTemplate : function() {
			var templateSource = $j('#score-template').html();
			var template = dust.compile(templateSource, 'scores');
			dust.loadSource(template);
		},
		render : function() {
			var el = this.el;
			el.hide();
			dust.render('scores', {dancingscore : this.model.get('dancingScore'), albinoscore : this.model.get('albinoScore')},
				function(err, out) {
					$j(el).html(out).show();
				});
		}
	});
});