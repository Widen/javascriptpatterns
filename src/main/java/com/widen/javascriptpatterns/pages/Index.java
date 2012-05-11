package com.widen.javascriptpatterns.pages;

import org.apache.tapestry5.annotations.Import;
import org.apache.tapestry5.ioc.annotations.Inject;
import org.apache.tapestry5.json.JSONObject;
import org.apache.tapestry5.services.javascript.JavaScriptSupport;

@Import(library = {
//		"context:js/patterns/workspace.js",
		"context:js/model.js",
		"context:js/field-view.js",
		"context:js/scores-view.js",
		"context:js/game.js",
		"${tapestry.scriptaculous}/effects.js"})
public class Index
{
	@Inject
	private JavaScriptSupport jsSupport;

	void afterRender()
	{
		JSONObject spec = new JSONObject();

//		jsSupport.addInitializerCall("BallGame", spec);
	}
}
