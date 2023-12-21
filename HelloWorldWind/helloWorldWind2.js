// Create the WorldWindow.
var wwd = new WorldWind.WorldWindow("canvasOne");

// Create and add imagery layers.
wwd.addLayer(new WorldWind.BMNGLayer());
wwd.addLayer(new WorldWind.BingAerialWithLabelsLayer(null));

// Create and add layers for shapes, but don't add any shapes yet.
wwd.addLayer(new RenderableLayer());
wwd.addLayer(new RenderableLayer());

// Create and add a compass and view controls.
wwd.addLayer(new WorldWind.CompassLayer());
wwd.addLayer(new WorldWind.ViewControlsLayer(wwd));

// Update the display.
wwd.redraw();