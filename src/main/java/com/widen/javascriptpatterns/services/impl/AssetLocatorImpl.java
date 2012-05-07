package com.widen.javascriptpatterns.services.impl;

import java.util.List;

import org.apache.tapestry5.Asset;
import org.apache.tapestry5.ioc.internal.util.CollectionFactory;
import org.apache.tapestry5.ioc.services.SymbolSource;
import org.apache.tapestry5.services.AssetSource;

import com.widen.javascriptpatterns.services.AssetLocator;

public class AssetLocatorImpl implements AssetLocator
{
	private final SymbolSource symbolSource;

	private final AssetSource assetSource;

	public AssetLocatorImpl(SymbolSource symbolSource, AssetSource assetSource)
	{
		this.symbolSource = symbolSource;
		this.assetSource = assetSource;
	}

	public Asset locateAsset(String path)
	{
		String expanded = symbolSource.expandSymbols(path);

		return assetSource.getAsset(null, expanded, null);
	}

	public List<Asset> locateAssets(String... paths)
	{
		List<Asset>  result = CollectionFactory.newList();

		for (String path : paths) {
			result.add(locateAsset(path));
		}

		return result;
	}

}
