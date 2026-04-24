import { __ } from "@wordpress/i18n";
import { InspectorControls, RichText, useBlockProps } from "@wordpress/block-editor";
import { PanelBody, TextControl } from "@wordpress/components";

const rows = [1, 2, 3, 4];

export default function Edit({ attributes, setAttributes }) {
	const {
		addressHeading,
		address,
		mapLinkText,
		mapLinkUrl,
		hoursHeading,
	} = attributes;
	const blockProps = useBlockProps({ className: "calla-connect-info" });

	const hourRows = rows.map((row) => ({
		day: attributes[`hoursDay${row}`],
		time: attributes[`hoursTime${row}`],
	}));

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Map link", "ai-zippy-child")} initialOpen={true}>
					<TextControl
						label={__("Map link URL", "ai-zippy-child")}
						value={mapLinkUrl}
						onChange={(value) => setAttributes({ mapLinkUrl: value })}
					/>
				</PanelBody>
				<PanelBody title={__("Opening hours", "ai-zippy-child")} initialOpen={false}>
					{rows.map((row) => (
						<div key={row} style={{ marginBottom: "10px" }}>
							<TextControl
								label={__(`Day ${row}`, "ai-zippy-child")}
								value={attributes[`hoursDay${row}`]}
								onChange={(value) => setAttributes({ [`hoursDay${row}`]: value })}
							/>
							<TextControl
								label={__(`Time ${row}`, "ai-zippy-child")}
								value={attributes[`hoursTime${row}`]}
								onChange={(value) => setAttributes({ [`hoursTime${row}`]: value })}
							/>
						</div>
					))}
				</PanelBody>
			</InspectorControls>

			<section {...blockProps}>
				<div className="calla-connect-info__band">
					<div className="calla-connect-info__cell">
						<RichText
							tagName="h3"
							value={addressHeading}
							onChange={(value) => setAttributes({ addressHeading: value })}
						/>
						<RichText
							tagName="address"
							value={address}
							onChange={(value) => setAttributes({ address: value })}
							multiline="br"
						/>
						<a className="calla-connect-info__map-link" href={mapLinkUrl || "#"}>
							<span aria-hidden="true">⌖</span>
							<RichText
								tagName="span"
								value={mapLinkText}
								onChange={(value) => setAttributes({ mapLinkText: value })}
							/>
						</a>
					</div>
					<div className="calla-connect-info__cell">
						<RichText
							tagName="h3"
							value={hoursHeading}
							onChange={(value) => setAttributes({ hoursHeading: value })}
						/>
						<div className="calla-connect-info__hours">
							{hourRows.map((row, index) =>
								row.day || row.time ? (
									<div className="calla-connect-info__hours-row" key={index}>
										<span>{row.day}</span>
										<span>{row.time}</span>
									</div>
								) : null,
							)}
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
