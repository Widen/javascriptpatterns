package com.widen.javascriptpatterns.services;

import java.util.List;

import org.apache.tapestry5.Asset;

/**
 * Used to convert string paths into {@link org.apache.tapestry5.Asset} instances, including
 * expansions of symbols within the provided path.
 *
 */
public interface AssetLocator
{
	/** Convenience for locating multiple assets at the same time. */
	List<Asset> locateAssets(String... paths);

	/** Expand symbols and converts to an asset. The path must exist or a runtime exception is thrown. */
	Asset locateAsset(String path);
}
