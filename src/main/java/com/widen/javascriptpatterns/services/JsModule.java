package com.widen.javascriptpatterns.services;

import org.apache.tapestry5.ioc.MappedConfiguration;
import org.apache.tapestry5.ioc.annotations.Contribute;
import org.apache.tapestry5.services.javascript.JavaScriptStack;
import org.apache.tapestry5.services.javascript.JavaScriptStackSource;

public class JsModule
{
	public static void contributeApplicationDefaults(MappedConfiguration<String, String> configuration)
	{
		configuration.add("jquery-version", "1.7.2");
		configuration.add("handlebars-version", "1.0.0.beta.6");

		configuration.add("js-library-root", "context:js/library");
	}

	@Contribute(JavaScriptStackSource.class)
	public static void contributeJavaScriptStackSource(MappedConfiguration<String, JavaScriptStack> configuration)
	{
		configuration.addInstance("mystack", JsStack.class);
	}
}
