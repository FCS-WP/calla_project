import { __ } from "@wordpress/i18n";
import {
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
	RichText,
	useBlockProps,
} from "@wordpress/block-editor";
import { Button, PanelBody, TextControl } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
	const { imageId, imageUrl, imageAlt, stars, quote, author } = attributes;
	const blockProps = useBlockProps({ className: "calla-about-review" });

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
				<PanelBody title={__("Review image", "ai-zippy-child")} initialOpen={true}>
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
											style={{ width: "100%", borderRadius: "8px", marginBottom: "8px" }}
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
											onClick={() => setAttributes({ imageId: 0, imageUrl: "", imageAlt: "" })}
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
				<div className="calla-about-review__inner">
					<div className="calla-about-review__media">
						{imageUrl ? (
							<img src={imageUrl} alt={imageAlt} />
						) : (
							<span>{__("Image from Google Review", "ai-zippy-child")}</span>
						)}
					</div>
					<div className="calla-about-review__card">
						<RichText
							tagName="p"
							className="calla-about-review__stars"
							value={stars}
							onChange={(value) => setAttributes({ stars: value })}
							placeholder={__("Stars", "ai-zippy-child")}
						/>
						<RichText
							tagName="p"
							className="calla-about-review__quote"
							value={quote}
							onChange={(value) => setAttributes({ quote: value })}
							placeholder={__("Quote", "ai-zippy-child")}
						/>
						<RichText
							tagName="p"
							className="calla-about-review__author"
							value={author}
							onChange={(value) => setAttributes({ author: value })}
							placeholder={__("Author", "ai-zippy-child")}
						/>
					</div>
				</div>
			</section>
		</>
	);
}
