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
	const { heading, body, imageId, imageUrl, imageAlt } = attributes;
	const blockProps = useBlockProps({ className: "calla-about-story" });

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
				<PanelBody title={__("Story image", "ai-zippy-child")} initialOpen={true}>
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
				<div className="calla-about-story__inner">
					<div className="calla-about-story__media">
						{imageUrl ? (
							<img src={imageUrl} alt={imageAlt} />
						) : (
							<span>{__("Story Image", "ai-zippy-child")}</span>
						)}
					</div>
					<div className="calla-about-story__copy">
						<RichText
							tagName="h2"
							className="calla-about-story__heading"
							value={heading}
							onChange={(value) => setAttributes({ heading: value })}
							placeholder={__("Section heading", "ai-zippy-child")}
						/>
						<RichText
							tagName="p"
							className="calla-about-story__body"
							value={body}
							onChange={(value) => setAttributes({ body: value })}
							placeholder={__("Story text", "ai-zippy-child")}
						/>
					</div>
				</div>
			</section>
		</>
	);
}
