import { __ } from "@wordpress/i18n";
import { InspectorControls, RichText, useBlockProps } from "@wordpress/block-editor";
import { PanelBody, TextControl } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
	const { breadcrumbHomeLabel, breadcrumbHomeUrl, breadcrumbCurrentLabel, title } = attributes;
	const blockProps = useBlockProps({ className: "calla-about-hero" });

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
			</InspectorControls>

			<section {...blockProps}>
				<div className="calla-about-hero__inner">
					<p className="calla-about-hero__breadcrumb">
						<a href={breadcrumbHomeUrl || "#"}>
							{breadcrumbHomeLabel || __("Home", "ai-zippy-child")}
						</a>
						<span className="calla-about-hero__separator" aria-hidden="true">
							/
						</span>
						<span>{breadcrumbCurrentLabel || __("Our Story", "ai-zippy-child")}</span>
					</p>
					<RichText
						tagName="h1"
						className="calla-about-hero__title"
						value={title}
						onChange={(value) => setAttributes({ title: value })}
						placeholder={__("About hero title", "ai-zippy-child")}
					/>
				</div>
			</section>
		</>
	);
}
