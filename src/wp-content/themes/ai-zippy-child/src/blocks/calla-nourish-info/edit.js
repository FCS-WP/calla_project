import { __ } from "@wordpress/i18n";
import {
	InspectorControls,
	RichText,
	useBlockProps,
} from "@wordpress/block-editor";
import { PanelBody, TextControl } from "@wordpress/components";

const rows = [1, 2, 3, 4];

export default function Edit({ attributes, setAttributes }) {
	const {
		eyebrow,
		heading,
		description,
		hoursTitle,
		hoursDay1,
		hoursTime1,
		hoursDay2,
		hoursTime2,
		hoursDay3,
		hoursTime3,
		hoursDay4,
		hoursTime4,
		menuTitle,
		menuDescription,
		menuButtonText,
		menuButtonUrl,
	} = attributes;

	const blockProps = useBlockProps({ className: "calla-nourish-info" });

	const hourRows = [
		{ day: hoursDay1, time: hoursTime1 },
		{ day: hoursDay2, time: hoursTime2 },
		{ day: hoursDay3, time: hoursTime3 },
		{ day: hoursDay4, time: hoursTime4 },
	];

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Opening hours", "ai-zippy-child")} initialOpen={true}>
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
				<PanelBody title={__("Menu link", "ai-zippy-child")} initialOpen={false}>
					<TextControl
						label={__("Button URL", "ai-zippy-child")}
						value={menuButtonUrl}
						onChange={(value) => setAttributes({ menuButtonUrl: value })}
					/>
				</PanelBody>
			</InspectorControls>

			<section {...blockProps}>
				<div className="calla-nourish-info__inner">
					<div className="calla-nourish-info__writeup">
						<RichText
							tagName="span"
							className="calla-nourish-info__eyebrow"
							value={eyebrow}
							onChange={(value) => setAttributes({ eyebrow: value })}
							placeholder={__("Eyebrow text", "ai-zippy-child")}
						/>
						<RichText
							tagName="h2"
							className="calla-nourish-info__heading"
							value={heading}
							onChange={(value) => setAttributes({ heading: value })}
							placeholder={__("Write-up heading", "ai-zippy-child")}
						/>
						<RichText
							tagName="p"
							className="calla-nourish-info__description"
							value={description}
							onChange={(value) => setAttributes({ description: value })}
							placeholder={__("Write-up description", "ai-zippy-child")}
						/>
					</div>

					<div className="calla-nourish-info__hours-card">
						<RichText
							tagName="h3"
							className="calla-nourish-info__hours-title"
							value={hoursTitle}
							onChange={(value) => setAttributes({ hoursTitle: value })}
							placeholder={__("Opening hours heading", "ai-zippy-child")}
						/>
						<table className="calla-nourish-info__hours-table">
							<tbody>
								{hourRows.map((row, index) =>
									row.day || row.time ? (
										<tr key={`${row.day}-${row.time}-${index}`}>
											<td>{row.day}</td>
											<td>{row.time}</td>
										</tr>
									) : null,
								)}
							</tbody>
						</table>

						<div className="calla-nourish-info__divider" />

						<div className="calla-nourish-info__menu">
							<RichText
								tagName="h3"
								className="calla-nourish-info__menu-title"
								value={menuTitle}
								onChange={(value) => setAttributes({ menuTitle: value })}
								placeholder={__("Menu title", "ai-zippy-child")}
							/>
							<RichText
								tagName="p"
								className="calla-nourish-info__menu-description"
								value={menuDescription}
								onChange={(value) => setAttributes({ menuDescription: value })}
								placeholder={__("Menu description", "ai-zippy-child")}
							/>
							<div className="calla-nourish-info__button-wrap">
								<RichText
									tagName="span"
									className="calla-nourish-info__button-text"
									value={menuButtonText}
									onChange={(value) => setAttributes({ menuButtonText: value })}
									placeholder={__("Button text", "ai-zippy-child")}
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
