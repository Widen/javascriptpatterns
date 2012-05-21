package com.widen.javascriptpatterns.services;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.apache.tapestry5.Asset;
import org.apache.tapestry5.services.javascript.JavaScriptStack;
import org.apache.tapestry5.services.javascript.StylesheetLink;

public class JsStack implements JavaScriptStack
{
	private final List<Asset> libraries;

	public JsStack(AssetLocator assetLocator)
	{
		List<String> assets = new ArrayList<String>();

		assets.add("${js-library-root}/jquery-${jquery-version}.js");
		assets.add("${js-library-root}/jquery-init.js");
		assets.add("${js-library-root}/jquery-ui-${jquery-ui-version}.custom.js");
		assets.add("${js-library-root}/underscore.js");
		assets.add("${js-library-root}/backbone.js");
		assets.add("${js-library-root}/dust-full-${dust-version}.js");

		libraries = assetLocator.locateAssets(assets.toArray(new String[] {}));
	}

	public List<String> getStacks()
	{
		return Collections.EMPTY_LIST;
	}

	public List<Asset> getJavaScriptLibraries()
	{
		return libraries;
	}

	public List<StylesheetLink> getStylesheets()
	{
		return Collections.EMPTY_LIST;
	}

	public String getInitialization()
	{
		return "";
	}
}
