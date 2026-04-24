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
	const {
		breadcrumbHomeLabel,
		breadcrumbHomeUrl,
		breadcrumbCurrentLabel,
		title,
		backgroundImageId,
		backgroundImageUrl,
		backgroundImageAlt,
	} = attributes;

	const blockProps = useBlockProps({ className: "calla-nourish-hero" });

	const onSelectImage = (media) => {
		setAttributes({
			backgroundImageId: media?.id || 0,
			backgroundImageUrl: media?.url || "",
			backgroundImageAlt: media?.alt || "",
		});
	};

	const backgroundStyle = backgroundImageUrl
		? { backgroundImage: `url(${backgroundImageUrl})` }
		: undefined;

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Breadcrumb", "ai-zippy-child")} initialOpen={true}>
					<TextControl
						label={__("Home label", "ai-zippy-child")}
						value={breadcrumbHomeLabel}
						onChange={(value) => setAttributes({ breadcrumbHomeLabel: value })}
					/>
					<TextControl
						label={__("Home URL", "ai-zippy-child")}
						value={breadcrumbHomeUrl}
						onChange={(value) => setAttributes({ breadcrumbHomeUrl: value })}
					/>
					<TextControl
						label={__("Current label", "ai-zippy-child")}
						value={breadcrumbCurrentLabel}
						onChange={(value) => setAttributes({ breadcrumbCurrentLabel: value })}
					/>
				</PanelBody>

				<PanelBody title={__("Hero background", "ai-zippy-child")} initialOpen={true}>
					<MediaUploadCheck>
						<MediaUpload
							allowedTypes={["image"]}
							value={backgroundImageId}
							onSelect={onSelectImage}
							render={({ open }) => (
								<div>
									{backgroundImageUrl ? (
										<img
											src={backgroundImageUrl}
											alt=""
											style={{ width: "100%", borderRadius: "10px", marginBottom: "8px" }}
										/>
									) : null}
									<Button variant="secondary" onClick={open}>
										{backgroundImageUrl
											? __("Replace image", "ai-zippy-child")
											: __("Select image", "ai-zippy-child")}
									</Button>
									{backgroundImageUrl ? (
										<Button
											variant="link"
											isDestructive
											onClick={() =>
												setAttributes({
													backgroundImageId: 0,
													backgroundImageUrl: "",
													backgroundImageAlt: "",
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
						label={__("Background image alt text", "ai-zippy-child")}
						value={backgroundImageAlt}
						onChange={(value) => setAttributes({ backgroundImageAlt: value })}
					/>
				</PanelBody>
			</InspectorControls>

			<section {...blockProps}>
				<div className="calla-nourish-hero__bg" style={backgroundStyle} aria-hidden="true" />
				<div className="calla-nourish-hero__inner">
					<p className="calla-nourish-hero__breadcrumb">
						<a href={breadcrumbHomeUrl || "#"}>
							{breadcrumbHomeLabel || __("Home", "ai-zippy-child")}
						</a>
						<span className="calla-nourish-hero__separator" aria-hidden="true">
							/ 
						</span>
						<span>{breadcrumbCurrentLabel || __("Nourish", "ai-zippy-child")}</span>
					</p>
					<RichText
						tagName="h1"
						className="calla-nourish-hero__title"
						value={title}
						onChange={(value) => setAttributes({ title: value })}
						placeholder={__("Nourish page title", "ai-zippy-child")}
					/>
				</div>
			</section>
		</>
	);
}
