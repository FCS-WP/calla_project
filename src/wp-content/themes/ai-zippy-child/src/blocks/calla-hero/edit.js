import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	RichText,
	MediaUpload,
	MediaUploadCheck,
	InspectorControls,
} from "@wordpress/block-editor";
import { PanelBody, TextControl, Button } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
	const {
		eyebrow,
		title,
		description,
		buttonText,
		buttonUrl,
		imageId,
		imageUrl,
		imageAlt,
	} = attributes;
	const blockProps = useBlockProps({ className: "calla-hero" });

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
				<PanelBody title={__("Hero CTA", "ai-zippy-child")} initialOpen={true}>
					<TextControl
						label={__("Button URL", "ai-zippy-child")}
						value={buttonUrl}
						onChange={(value) => setAttributes({ buttonUrl: value })}
					/>
				</PanelBody>
				<PanelBody title={__("Hero Image", "ai-zippy-child")} initialOpen={true}>
					<MediaUploadCheck>
						<MediaUpload
							allowedTypes={["image"]}
							value={imageId}
							onSelect={onSelectImage}
							render={({ open }) => (
								<div>
									{imageUrl ? (
										<img
											src={imageUrl}
											alt=""
											style={{ width: "100%", borderRadius: "12px", marginBottom: "8px" }}
										/>
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
											onClick={() =>
												setAttributes({ imageId: 0, imageUrl: "", imageAlt: "" })
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
						value={imageAlt}
						onChange={(value) => setAttributes({ imageAlt: value })}
					/>
				</PanelBody>
			</InspectorControls>

			<section {...blockProps}>
				<div className="calla-hero__inner">
					<div className="calla-hero__media-wrap">
						{imageUrl ? (
							<img className="calla-hero__media" src={imageUrl} alt={imageAlt} />
						) : (
							<div className="calla-hero__media calla-hero__media--placeholder" />
						)}

						<div className="calla-hero__overlay">
							<RichText
								tagName="p"
								className="calla-hero__eyebrow"
								value={eyebrow}
								onChange={(value) => setAttributes({ eyebrow: value })}
								placeholder={__("Eyebrow (optional)", "ai-zippy-child")}
							/>
							<RichText
								tagName="h2"
								className="calla-hero__title"
								value={title}
								onChange={(value) => setAttributes({ title: value })}
								placeholder={__("Hero title", "ai-zippy-child")}
							/>
							<RichText
								tagName="p"
								className="calla-hero__description"
								value={description}
								onChange={(value) => setAttributes({ description: value })}
								placeholder={__("Hero description (optional)", "ai-zippy-child")}
							/>
							<div className="calla-hero__actions">
								<RichText
									tagName="span"
									className="calla-hero__button-text"
									value={buttonText}
									onChange={(value) => setAttributes({ buttonText: value })}
									placeholder={__("Button", "ai-zippy-child")}
								/>
								<span className="calla-hero__button-arrow" aria-hidden="true">
									→
								</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
