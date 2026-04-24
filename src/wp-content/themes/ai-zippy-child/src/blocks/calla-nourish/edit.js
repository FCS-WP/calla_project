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
	const { title, description, imageId, imageUrl, imageAlt } = attributes;
	const blockProps = useBlockProps({ className: "calla-nourish" });

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
				<PanelBody title={__("Nourish image", "ai-zippy-child")} initialOpen={true}>
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
											style={{ width: "100%", borderRadius: "999px", marginBottom: "8px" }}
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
				<div className="calla-nourish__inner">
					<div className="calla-nourish__media-wrap">
						{imageUrl ? (
							<img className="calla-nourish__media" src={imageUrl} alt={imageAlt} />
						) : (
							<div className="calla-nourish__media calla-nourish__media--placeholder" />
						)}
					</div>
					<div className="calla-nourish__content">
						<RichText
							tagName="h2"
							className="calla-nourish__title"
							value={title}
							onChange={(value) => setAttributes({ title: value })}
							placeholder={__("Section title", "ai-zippy-child")}
						/>
						<RichText
							tagName="p"
							className="calla-nourish__description"
							value={description}
							onChange={(value) => setAttributes({ description: value })}
							placeholder={__("Section description", "ai-zippy-child")}
						/>
					</div>
				</div>
			</section>
		</>
	);
}
