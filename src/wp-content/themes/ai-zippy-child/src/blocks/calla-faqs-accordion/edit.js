import { __ } from "@wordpress/i18n";
import { InspectorControls, RichText, useBlockProps } from "@wordpress/block-editor";
import { Button, PanelBody, TextControl } from "@wordpress/components";

const ArrowIcon = () => (
	<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
		<line x1="3" y1="10" x2="17" y2="10" />
		<polyline points="12 5 17 10 12 15" />
	</svg>
);

const ChevronIcon = () => (
	<svg className="calla-faqs-accordion__chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
		<polyline points="6 9 12 15 18 9" />
	</svg>
);

const defaultFaq = {
	question: "Question",
	answer: "Answer",
};

const normalizeFaqs = (faqs = []) => (Array.isArray(faqs) && faqs.length ? faqs : [{ ...defaultFaq }]);

export default function Edit({ attributes, setAttributes }) {
	const {
		introHeading,
		introText,
		ctaHeading,
		ctaText,
		ctaButtonText,
		ctaButtonUrl,
	} = attributes;
	const faqs = normalizeFaqs(attributes.faqs);
	const blockProps = useBlockProps({ className: "calla-faqs-accordion" });

	const updateFaq = (index, patch) => {
		const nextFaqs = faqs.map((faq, faqIndex) =>
			faqIndex === index ? { ...faq, ...patch } : faq,
		);
		setAttributes({ faqs: nextFaqs });
	};

	const addFaq = () => {
		setAttributes({ faqs: [...faqs, { ...defaultFaq }] });
	};

	const removeFaq = (index) => {
		setAttributes({ faqs: faqs.filter((_, faqIndex) => faqIndex !== index) });
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("CTA settings", "ai-zippy-child")} initialOpen={true}>
					<TextControl
						label={__("CTA button URL", "ai-zippy-child")}
						value={ctaButtonUrl}
						onChange={(value) => setAttributes({ ctaButtonUrl: value })}
					/>
				</PanelBody>
				<PanelBody title={__("FAQ items", "ai-zippy-child")} initialOpen={false}>
					<Button variant="primary" onClick={addFaq}>
						{__("Add FAQ item", "ai-zippy-child")}
					</Button>
				</PanelBody>
			</InspectorControls>

			<section {...blockProps}>
				<div className="calla-faqs-accordion__inner">
					<div className="calla-faqs-accordion__intro">
						<RichText
							tagName="h2"
							value={introHeading}
							onChange={(value) => setAttributes({ introHeading: value })}
							placeholder={__("Have questions?", "ai-zippy-child")}
						/>
						<RichText
							tagName="p"
							value={introText}
							onChange={(value) => setAttributes({ introText: value })}
							placeholder={__("Intro text", "ai-zippy-child")}
						/>
					</div>

					<div className="calla-faqs-accordion__list">
						{faqs.map((faq, index) => (
							<div
								className={`calla-faqs-accordion__item ${index === 0 ? "is-open" : ""}`}
								key={index}
							>
								<div className="calla-faqs-accordion__question">
									<RichText
										tagName="span"
										value={faq.question}
										onChange={(value) => updateFaq(index, { question: value })}
										placeholder={__("Question", "ai-zippy-child")}
									/>
									<ChevronIcon />
								</div>
								<div className="calla-faqs-accordion__answer">
									<div className="calla-faqs-accordion__answer-inner">
										<RichText
											tagName="div"
											value={faq.answer}
											onChange={(value) => updateFaq(index, { answer: value })}
											placeholder={__("Answer", "ai-zippy-child")}
										/>
										<div className="calla-faqs-accordion__item-actions">
											<Button
												variant="link"
												isDestructive
												onClick={() => removeFaq(index)}
												disabled={faqs.length <= 1}
											>
												{__("Remove item", "ai-zippy-child")}
											</Button>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>

					<div className="calla-faqs-accordion__cta">
						<p className="calla-faqs-accordion__cta-copy">
							<strong>
								<RichText
									tagName="span"
									value={ctaHeading}
									onChange={(value) => setAttributes({ ctaHeading: value })}
									placeholder={__("Still have questions?", "ai-zippy-child")}
								/>
							</strong>
							<br />
							<RichText
								tagName="span"
								value={ctaText}
								onChange={(value) => setAttributes({ ctaText: value })}
								placeholder={__("We'd love to hear from you.", "ai-zippy-child")}
							/>
						</p>
						<a className="calla-faqs-accordion__btn" href={ctaButtonUrl || "#"}>
							<RichText
								tagName="span"
								value={ctaButtonText}
								onChange={(value) => setAttributes({ ctaButtonText: value })}
								placeholder={__("Get in touch", "ai-zippy-child")}
							/>
							<ArrowIcon />
						</a>
					</div>
				</div>
			</section>
		</>
	);
}
