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
			this.template = Handlebars.compile(templateSource);
		},
		render : function() {
			var html = this.template({dancingscore : this.model.get('dancingScore'), albinoscore : this.model.get('albinoScore')});
			this.el.hide();
			$j(this.el).html(html).show();
		}
	});
});