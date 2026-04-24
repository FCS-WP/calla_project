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
		title,
		description,
		buttonText,
		buttonUrl,
		image1Id,
		image1Url,
		image1Alt,
	} = attributes;

	const blockProps = useBlockProps({ className: "calla-about" });

	const setImage = (media) => {
		setAttributes({
			image1Id: media?.id || 0,
			image1Url: media?.url || "",
			image1Alt: media?.alt || "",
		});
	};

	const clearImage = () => {
		setAttributes({ image1Id: 0, image1Url: "", image1Alt: "" });
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("About CTA", "ai-zippy-child")} initialOpen={true}>
					<TextControl
						label={__("Button URL", "ai-zippy-child")}
						value={buttonUrl}
						onChange={(value) => setAttributes({ buttonUrl: value })}
					/>
				</PanelBody>
				<PanelBody title={__("Featured image", "ai-zippy-child")} initialOpen={true}>
					{image1Url ? (
						<img
							src={image1Url}
							alt=""
							style={{ width: "100%", borderRadius: "12px", marginBottom: "8px" }}
						/>
					) : null}
					<MediaUploadCheck>
						<MediaUpload
							allowedTypes={["image"]}
							value={image1Id}
							onSelect={setImage}
							render={({ open }) => (
								<Button variant="secondary" onClick={open}>
									{image1Url
										? __("Replace image", "ai-zippy-child")
										: __("Select image", "ai-zippy-child")}
								</Button>
							)}
						/>
					</MediaUploadCheck>
					{image1Url ? (
						<Button variant="link" isDestructive onClick={clearImage}>
							{__("Remove", "ai-zippy-child")}
						</Button>
					) : null}
					<TextControl
						label={__("Image alt text", "ai-zippy-child")}
						value={image1Alt}
						onChange={(value) => setAttributes({ image1Alt: value })}
					/>
				</PanelBody>
			</InspectorControls>

			<section {...blockProps}>
				<div className="calla-about__inner">
					<div className="calla-about__content">
						<RichText
							tagName="h2"
							className="calla-about__title"
							value={title}
							onChange={(value) => setAttributes({ title: value })}
							placeholder={__("About title", "ai-zippy-child")}
						/>
						<RichText
							tagName="p"
							className="calla-about__description"
							value={description}
							onChange={(value) => setAttributes({ description: value })}
							placeholder={__("About description", "ai-zippy-child")}
						/>
					</div>

					<div className="calla-about__collage">
						{image1Url ? (
							<img className="calla-about__image" src={image1Url} alt={image1Alt} />
						) : (
							<div className="calla-about__image calla-about__image--placeholder" />
						)}
					</div>
				</div>

				<div className="calla-about__actions">
					<RichText
						tagName="span"
						className="calla-about__button-text"
						value={buttonText}
						onChange={(value) => setAttributes({ buttonText: value })}
						placeholder={__("Button text", "ai-zippy-child")}
					/>
					<span className="calla-about__button-arrow" aria-hidden="true">→</span>
				</div>
			</section>
		</>
	);
}
