import { __ } from "@wordpress/i18n";
import {
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
	RichText,
	useBlockProps,
} from "@wordpress/block-editor";
import { Button, PanelBody, TextControl } from "@wordpress/components";

const steps = [1, 2, 3, 4, 5];

const ArrowIcon = () => (
	<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
		<line x1="5" y1="12" x2="19" y2="12" />
		<polyline points="14 7 19 12 14 17" />
	</svg>
);

export default function Edit({ attributes, setAttributes }) {
	const {
		shortEyebrow,
		shortHeading,
		shortDescription,
		imageId,
		imageUrl,
		imageAlt,
		imagePlaceholder,
		guideEyebrow,
		guideHeading,
		primaryButtonText,
		primaryButtonUrl,
		secondaryButtonText,
		secondaryButtonUrl,
	} = attributes;
	const blockProps = useBlockProps({ className: "calla-firsttime-guide" });

	const onSelectImage = (media) => {
		setAttributes({
			imageId: media?.id || 0,
			imageUrl: media?.url || "",
			imageAlt: media?.alt || "",
		});
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Guide image", "ai-zippy-child")} initialOpen={true}>
					<MediaUploadCheck>
						<MediaUpload
							allowedTypes={["image"]}
							value={imageId}
							onSelect={onSelectImage}
							render={({ open }) => (
								<div>
									{imageUrl ? (
										<img src={imageUrl} alt="" style={{ width: "100%", marginBottom: "8px" }} />
									) : null}
									<Button variant="secondary" onClick={open}>
										{imageUrl
											? __("Replace image", "ai-zippy-child")
											: __("Select image", "ai-zippy-child")}
									</Button>
									{imageUrl ? (
										<Button
											variant="link"
											isDestructive
											onClick={() => setAttributes({ imageId: 0, imageUrl: "", imageAlt: "" })}
										>
											{__("Remove", "ai-zippy-child")}
										</Button>
									) : null}
									<TextControl
										label={__("Placeholder text", "ai-zippy-child")}
										value={imagePlaceholder}
										onChange={(value) => setAttributes({ imagePlaceholder: value })}
									/>
								</div>
							)}
						/>
					</MediaUploadCheck>
				</PanelBody>
				<PanelBody title={__("CTA links", "ai-zippy-child")} initialOpen={false}>
					<TextControl
						label={__("Primary button URL", "ai-zippy-child")}
						value={primaryButtonUrl}
						onChange={(value) => setAttributes({ primaryButtonUrl: value })}
					/>
					<TextControl
						label={__("Secondary button URL", "ai-zippy-child")}
						value={secondaryButtonUrl}
						onChange={(value) => setAttributes({ secondaryButtonUrl: value })}
					/>
				</PanelBody>
			</InspectorControls>

			<section {...blockProps}>
				<div className="calla-firsttime-guide__inner">
					<div className="calla-firsttime-guide__grid">
						<div className="calla-firsttime-guide__short">
							<RichText tagName="span" className="calla-firsttime-guide__eyebrow" value={shortEyebrow} onChange={(value) => setAttributes({ shortEyebrow: value })} />
							<RichText tagName="h2" className="calla-firsttime-guide__short-heading" value={shortHeading} onChange={(value) => setAttributes({ shortHeading: value })} />
							<RichText tagName="p" className="calla-firsttime-guide__short-description" value={shortDescription} onChange={(value) => setAttributes({ shortDescription: value })} />
						</div>

						<div className="calla-firsttime-guide__image-card">
							{imageUrl ? (
								<img src={imageUrl} alt={imageAlt || ""} />
							) : (
								<span>{imagePlaceholder}</span>
							)}
						</div>

						<div className="calla-firsttime-guide__writeup">
							<RichText tagName="span" className="calla-firsttime-guide__eyebrow" value={guideEyebrow} onChange={(value) => setAttributes({ guideEyebrow: value })} />
							<RichText tagName="h3" className="calla-firsttime-guide__guide-heading" value={guideHeading} onChange={(value) => setAttributes({ guideHeading: value })} />

							<ul className="calla-firsttime-guide__steps">
								{steps.map((step) => (
									<li className="calla-firsttime-guide__step" key={step}>
										<span className="calla-firsttime-guide__step-num">{step}</span>
										<div className="calla-firsttime-guide__step-body">
											<RichText
												tagName="strong"
												value={attributes[`step${step}Title`]}
												onChange={(value) => setAttributes({ [`step${step}Title`]: value })}
											/>
											<RichText
												tagName="span"
												value={attributes[`step${step}Text`]}
												onChange={(value) => setAttributes({ [`step${step}Text`]: value })}
											/>
										</div>
									</li>
								))}
							</ul>
						</div>
					</div>

					<div className="calla-firsttime-guide__cta-row">
						<a className="calla-firsttime-guide__cta calla-firsttime-guide__cta--primary" href={primaryButtonUrl || "#"}>
							<RichText tagName="span" value={primaryButtonText} onChange={(value) => setAttributes({ primaryButtonText: value })} />
							<ArrowIcon />
						</a>
						<a className="calla-firsttime-guide__cta calla-firsttime-guide__cta--secondary" href={secondaryButtonUrl || "#"}>
							<RichText tagName="span" value={secondaryButtonText} onChange={(value) => setAttributes({ secondaryButtonText: value })} />
							<ArrowIcon />
						</a>
					</div>
				</div>
			</section>
		</>
	);
}
