import { __ } from "@wordpress/i18n";
import {
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
	RichText,
	useBlockProps,
} from "@wordpress/block-editor";
import { Button, PanelBody } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
	const { title, backgroundImageId, backgroundImageUrl } = attributes;
	const blockProps = useBlockProps({ className: "calla-careers-hero" });

	const onSelectBackground = (media) => {
		setAttributes({
			backgroundImageId: media?.id || 0,
			backgroundImageUrl: media?.url || "",
		});
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Background", "ai-zippy-child")} initialOpen={true}>
					<MediaUploadCheck>
						<MediaUpload
							allowedTypes={["image"]}
							value={backgroundImageId}
							onSelect={onSelectBackground}
							render={({ open }) => (
								<div>
									{backgroundImageUrl ? (
										<img
											src={backgroundImageUrl}
											alt=""
											style={{ width: "100%", marginBottom: "8px" }}
										/>
									) : null}
									<Button variant="secondary" onClick={open}>
										{backgroundImageUrl
											? __("Replace background", "ai-zippy-child")
											: __("Select background", "ai-zippy-child")}
									</Button>
									{backgroundImageUrl ? (
										<Button
											variant="link"
											isDestructive
											onClick={() =>
												setAttributes({ backgroundImageId: 0, backgroundImageUrl: "" })
											}
										>
											{__("Remove", "ai-zippy-child")}
										</Button>
									) : null}
								</div>
							)}
						/>
					</MediaUploadCheck>
				</PanelBody>
			</InspectorControls>

			<section {...blockProps}>
				<div
					className="calla-careers-hero__bg"
					style={backgroundImageUrl ? { backgroundImage: `url(${backgroundImageUrl})` } : undefined}
				/>
				<div className="calla-careers-hero__content">
					<RichText
						tagName="h1"
						className="calla-careers-hero__title"
						value={title}
						onChange={(value) => setAttributes({ title: value })}
						placeholder={__("Careers", "ai-zippy-child")}
					/>
				</div>
			</section>
		</>
	);
}
