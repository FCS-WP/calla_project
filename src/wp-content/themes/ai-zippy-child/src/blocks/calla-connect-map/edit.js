import { __ } from "@wordpress/i18n";
import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import { PanelBody, RangeControl, TextControl, TextareaControl } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
	const { mapSrc, title, height } = attributes;
	const blockProps = useBlockProps({
		className: "calla-connect-map",
		style: { "--calla-connect-map-height": `${height || 420}px` },
	});

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Map embed", "ai-zippy-child")} initialOpen={true}>
					<TextareaControl
						label={__("Google Maps iframe src", "ai-zippy-child")}
						value={mapSrc}
						onChange={(value) => setAttributes({ mapSrc: value })}
						rows={5}
					/>
					<TextControl
						label={__("Iframe title", "ai-zippy-child")}
						value={title}
						onChange={(value) => setAttributes({ title: value })}
					/>
					<RangeControl
						label={__("Map height", "ai-zippy-child")}
						value={height}
						onChange={(value) => setAttributes({ height: value })}
						min={260}
						max={620}
						step={10}
					/>
				</PanelBody>
			</InspectorControls>

			<div {...blockProps} id="map">
				{mapSrc ? (
					<iframe src={mapSrc} title={title} loading="lazy" />
				) : (
					<div className="calla-connect-map__placeholder">
						{__("Paste a Google Maps embed src in the block settings.", "ai-zippy-child")}
					</div>
				)}
				<div className="calla-connect-map__overlay" />
			</div>
		</>
	);
}
