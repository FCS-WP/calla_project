import { __ } from "@wordpress/i18n";
import { InspectorControls, RichText, useBlockProps } from "@wordpress/block-editor";
import { PanelBody, TextControl } from "@wordpress/components";

const ArrowIcon = () => (
	<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
		<line x1="3" y1="10" x2="17" y2="10" />
		<polyline points="12 5 17 10 12 15" />
	</svg>
);

export default function Edit({ attributes, setAttributes }) {
	const {
		eyebrow,
		heading,
		buttonText,
		successHeading,
		successMessage,
		emailHeading,
		email,
		socialHeading,
		social1Text,
		social1Url,
		social2Text,
		social2Url,
		visitHeading,
		visitText,
	} = attributes;
	const blockProps = useBlockProps({ className: "calla-connect-form" });

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Aside links", "ai-zippy-child")} initialOpen={true}>
					<TextControl
						label={__("Email address", "ai-zippy-child")}
						value={email}
						onChange={(value) => setAttributes({ email: value })}
					/>
					<TextControl
						label={__("Social 1 URL", "ai-zippy-child")}
						value={social1Url}
						onChange={(value) => setAttributes({ social1Url: value })}
					/>
					<TextControl
						label={__("Social 2 URL", "ai-zippy-child")}
						value={social2Url}
						onChange={(value) => setAttributes({ social2Url: value })}
					/>
				</PanelBody>
			</InspectorControls>

			<section {...blockProps}>
				<div className="calla-connect-form__inner">
					<div className="calla-connect-form__header">
						<RichText
							tagName="p"
							value={eyebrow}
							onChange={(value) => setAttributes({ eyebrow: value })}
						/>
						<RichText
							tagName="h2"
							value={heading}
							onChange={(value) => setAttributes({ heading: value })}
						/>
					</div>

					<div className="calla-connect-form__layout">
						<div>
							<form className="calla-connect-form__form">
								<div className="calla-connect-form__field-row">
									<div className="calla-connect-form__field">
										<label>{__("Name", "ai-zippy-child")}</label>
										<input type="text" placeholder={__("Your full name", "ai-zippy-child")} readOnly />
									</div>
									<div className="calla-connect-form__field">
										<label>{__("Phone Number", "ai-zippy-child")}</label>
										<input type="tel" placeholder="+65 9000 0000" readOnly />
									</div>
								</div>
								<div className="calla-connect-form__field">
									<label>{__("Email", "ai-zippy-child")}</label>
									<input type="email" placeholder="hello@email.com" readOnly />
								</div>
								<div className="calla-connect-form__field">
									<label>{__("Leave your message here", "ai-zippy-child")}</label>
									<textarea placeholder={__("Tell us how we can help...", "ai-zippy-child")} readOnly />
								</div>
								<div className="calla-connect-form__button">
									<RichText
										tagName="span"
										value={buttonText}
										onChange={(value) => setAttributes({ buttonText: value })}
									/>
									<ArrowIcon />
								</div>
							</form>
							<div className="calla-connect-form__success">
								<RichText
									tagName="h3"
									value={successHeading}
									onChange={(value) => setAttributes({ successHeading: value })}
								/>
								<RichText
									tagName="p"
									value={successMessage}
									onChange={(value) => setAttributes({ successMessage: value })}
								/>
							</div>
						</div>

						<div className="calla-connect-form__aside">
							<div className="calla-connect-form__aside-block">
								<RichText
									tagName="h4"
									value={emailHeading}
									onChange={(value) => setAttributes({ emailHeading: value })}
								/>
								<a href={`mailto:${email || ""}`}>{email}</a>
							</div>
							<div className="calla-connect-form__aside-divider" />
							<div className="calla-connect-form__aside-block">
								<RichText
									tagName="h4"
									value={socialHeading}
									onChange={(value) => setAttributes({ socialHeading: value })}
								/>
								<RichText
									tagName="a"
									href={social1Url || "#"}
									value={social1Text}
									onChange={(value) => setAttributes({ social1Text: value })}
								/>
								<RichText
									tagName="a"
									href={social2Url || "#"}
									value={social2Text}
									onChange={(value) => setAttributes({ social2Text: value })}
								/>
							</div>
							<div className="calla-connect-form__aside-divider" />
							<div className="calla-connect-form__aside-block">
								<RichText
									tagName="h4"
									value={visitHeading}
									onChange={(value) => setAttributes({ visitHeading: value })}
								/>
								<RichText
									tagName="p"
									value={visitText}
									onChange={(value) => setAttributes({ visitText: value })}
									multiline="br"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
