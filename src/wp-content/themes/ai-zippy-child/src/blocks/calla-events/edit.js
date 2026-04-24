import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	RichText,
	MediaUpload,
	MediaUploadCheck,
	InspectorControls,
} from "@wordpress/block-editor";
import { PanelBody, Button, TextControl } from "@wordpress/components";

const renderEventEditor = (prefix, attributes, setAttributes) => (
	<div className="calla-events__card">
		<RichText
			tagName="h3"
			className="calla-events__card-title"
			value={attributes[`${prefix}Title`]}
			onChange={(value) => setAttributes({ [`${prefix}Title`]: value })}
			placeholder={__("Event title", "ai-zippy-child")}
		/>
		<RichText
			tagName="p"
			className="calla-events__card-body"
			value={attributes[`${prefix}Body`]}
			onChange={(value) => setAttributes({ [`${prefix}Body`]: value })}
			placeholder={__("Event description", "ai-zippy-child")}
		/>
		<div className="calla-events__meta">
			<div className="calla-events__meta-item">
				<span className="calla-events__meta-icon" aria-hidden="true">📅</span>
				<RichText
					tagName="span"
					className="calla-events__meta-text"
					value={attributes[`${prefix}Schedule`] || attributes[`${prefix}Meta`]}
					onChange={(value) => setAttributes({ [`${prefix}Schedule`]: value })}
					placeholder={__("Date and time", "ai-zippy-child")}
				/>
			</div>
			<div className="calla-events__meta-item">
				<span className="calla-events__meta-icon" aria-hidden="true">👤</span>
				<RichText
					tagName="span"
					className="calla-events__meta-text"
					value={attributes[`${prefix}Host`]}
					onChange={(value) => setAttributes({ [`${prefix}Host`]: value })}
					placeholder={__("Instructor / host", "ai-zippy-child")}
				/>
			</div>
		</div>
	</div>
);

export default function Edit({ attributes, setAttributes }) {
	const {
		heading,
		featureImageId,
		featureImageUrl,
		featureImageAlt,
		moreText,
		moreUrl,
	} = attributes;

	const blockProps = useBlockProps({ className: "calla-events" });

	const onSelectImage = (media) => {
		setAttributes({
			featureImageId: media?.id || 0,
			featureImageUrl: media?.url || "",
			featureImageAlt: media?.alt || "",
		});
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Events media", "ai-zippy-child")} initialOpen={true}>
					<MediaUploadCheck>
						<MediaUpload
							allowedTypes={["image"]}
							value={featureImageId}
							onSelect={onSelectImage}
							render={({ open }) => (
								<div>
									{featureImageUrl ? (
										<img
											src={featureImageUrl}
											alt=""
											style={{ width: "100%", borderRadius: "16px", marginBottom: "8px" }}
										/>
									) : null}
									<Button variant="secondary" onClick={open}>
										{featureImageUrl
											? __("Replace image", "ai-zippy-child")
											: __("Select image", "ai-zippy-child")}
									</Button>
									{featureImageUrl ? (
										<Button
											variant="link"
											isDestructive
											onClick={() =>
												setAttributes({
													featureImageId: 0,
													featureImageUrl: "",
													featureImageAlt: "",
												})
											}
										>
											{__("Remove", "ai-zippy-child")}
										</Button>
									) : null}
								</div>
							)}
						/>
					</MediaUploadCheck>
					<TextControl
						label={__("Image alt text", "ai-zippy-child")}
						value={featureImageAlt}
						onChange={(value) => setAttributes({ featureImageAlt: value })}
					/>
				</PanelBody>
				<PanelBody title={__("See more", "ai-zippy-child")} initialOpen={false}>
					<TextControl
						label={__("Button URL", "ai-zippy-child")}
						value={moreUrl}
						onChange={(value) => setAttributes({ moreUrl: value })}
					/>
				</PanelBody>
			</InspectorControls>

			<section {...blockProps}>
				<div className="calla-events__inner">
					<RichText
						tagName="h2"
						className="calla-events__heading"
						value={heading}
						onChange={(value) => setAttributes({ heading: value })}
						placeholder={__("Section heading", "ai-zippy-child")}
					/>

					<div className="calla-events__grid">
						<div className="calla-events__feature-wrap">
							{featureImageUrl ? (
								<img
									className="calla-events__feature"
									src={featureImageUrl}
									alt={featureImageAlt}
								/>
							) : (
								<div className="calla-events__feature calla-events__feature--placeholder" />
							)}
						</div>

						<div className="calla-events__cards">
							{renderEventEditor("event1", attributes, setAttributes)}
							{renderEventEditor("event2", attributes, setAttributes)}
							{renderEventEditor("event3", attributes, setAttributes)}
						</div>
					</div>

					<div className="calla-events__more-wrap calla-events__more">
						<RichText
							tagName="span"
							className="calla-events__more-text"
							value={moreText}
							onChange={(value) => setAttributes({ moreText: value })}
							placeholder={__("See More", "ai-zippy-child")}
						/>
						<span className="calla-events__more-arrow" aria-hidden="true">→</span>
					</div>
				</div>
			</section>
		</>
	);
}
