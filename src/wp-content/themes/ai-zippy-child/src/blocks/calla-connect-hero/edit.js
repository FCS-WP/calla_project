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
	} = attributes;
	const blockProps = useBlockProps({ className: "calla-connect-hero" });

	const onSelectBackground = (media) => {
		setAttributes({
			backgroundImageId: media?.id || 0,
			backgroundImageUrl: media?.url || "",
		});
	};

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
				<PanelBody title={__("Background", "ai-zippy-child")} initialOpen={false}>
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
											onClick={() => setAttributes({ backgroundImageId: 0, backgroundImageUrl: "" })}
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
					className="calla-connect-hero__bg"
					style={backgroundImageUrl ? { backgroundImage: `url(${backgroundImageUrl})` } : undefined}
				/>
				<div className="calla-connect-hero__content">
					<p className="calla-connect-hero__breadcrumb">
						<a href={breadcrumbHomeUrl || "#"}>{breadcrumbHomeLabel}</a>
						<span aria-hidden="true">›</span>
						<span>{breadcrumbCurrentLabel}</span>
					</p>
					<RichText
						tagName="h1"
						className="calla-connect-hero__title"
						value={title}
						onChange={(value) => setAttributes({ title: value })}
						placeholder={__("Connect", "ai-zippy-child")}
					/>
				</div>
			</section>
		</>
	);
}
