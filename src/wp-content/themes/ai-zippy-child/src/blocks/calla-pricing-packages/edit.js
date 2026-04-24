import { __, sprintf } from "@wordpress/i18n";
import { useEffect, useMemo } from "@wordpress/element";
import { InspectorControls, RichText, useBlockProps } from "@wordpress/block-editor";
import {
	Button,
	PanelBody,
	TextControl,
	TextareaControl,
	ToggleControl,
} from "@wordpress/components";

const DEFAULT_PACKAGES = [
	{
		eyebrow: "Drop In",
		badge: "",
		name: "Pricing Package 1",
		tagline: "Perfect for first-timers or occasional visits.",
		pricePrefix: "$",
		priceValue: "XX",
		pricePeriod: "per session",
		featuresText: "Full facility access\nTowel & locker included\n90-minute session\nCafe discount 10%",
		buttonText: "Book Now",
		buttonUrl: "#",
		isFeatured: false,
	},
	{
		eyebrow: "Membership",
		badge: "Most Popular",
		name: "Pricing Package 2",
		tagline: "For those who make recovery a ritual.",
		pricePrefix: "$",
		priceValue: "XX",
		pricePeriod: "per month",
		featuresText: "Unlimited sessions\nPriority booking\nTowel & locker included\nCafe discount 15%\n1 guest pass / month",
		buttonText: "Get Started",
		buttonUrl: "#",
		isFeatured: true,
	},
	{
		eyebrow: "Pack",
		badge: "",
		name: "Pricing Package 3",
		tagline: "Flexible sessions to use at your own pace.",
		pricePrefix: "$",
		priceValue: "XX",
		pricePeriod: "10-session pack - valid 3 months",
		featuresText: "10 sessions to use freely\nShareable with a friend\nTowel & locker included\nCafe discount 10%",
		buttonText: "Buy Pack",
		buttonUrl: "#",
		isFeatured: false,
	},
];

function cloneDefaultPackages() {
	return DEFAULT_PACKAGES.map((item) => ({ ...item }));
}

function normalizePackage(item = {}) {
	return {
		eyebrow: typeof item?.eyebrow === "string" ? item.eyebrow : "",
		badge: typeof item?.badge === "string" ? item.badge : "",
		name: typeof item?.name === "string" ? item.name : "",
		tagline: typeof item?.tagline === "string" ? item.tagline : "",
		pricePrefix: typeof item?.pricePrefix === "string" ? item.pricePrefix : "$",
		priceValue: typeof item?.priceValue === "string" ? item.priceValue : "",
		pricePeriod: typeof item?.pricePeriod === "string" ? item.pricePeriod : "",
		featuresText: typeof item?.featuresText === "string" ? item.featuresText : "",
		buttonText: typeof item?.buttonText === "string" ? item.buttonText : "",
		buttonUrl: typeof item?.buttonUrl === "string" ? item.buttonUrl : "#",
		isFeatured: Boolean(item?.isFeatured),
	};
}

function splitFeatures(featuresText = "") {
	return featuresText
		.split("\n")
		.map((line) => line.trim())
		.filter(Boolean);
}

export default function Edit({ attributes, setAttributes }) {
	const { introLine1, introLine2, packages, noteText, noteLinkText, noteLinkUrl } = attributes;
	const blockProps = useBlockProps({ className: "calla-pricing-packages" });

	const normalizedPackages = useMemo(() => {
		if (Array.isArray(packages) && packages.length > 0) {
			return packages.map((item) => normalizePackage(item));
		}
		return cloneDefaultPackages();
	}, [packages]);

	useEffect(() => {
		if (!Array.isArray(packages) || packages.length === 0) {
			setAttributes({ packages: cloneDefaultPackages() });
		}
	}, [packages, setAttributes]);

	const setPackages = (nextPackages) => {
		const safePackages = nextPackages.map((item) => normalizePackage(item));
		setAttributes({
			packages: safePackages.length > 0 ? safePackages : [{ ...normalizePackage() }],
		});
	};

	const updatePackage = (index, patch) => {
		setPackages(
			normalizedPackages.map((item, itemIndex) =>
				itemIndex === index ? { ...item, ...patch } : item,
			),
		);
	};

	const addPackage = () => {
		setPackages([
			...normalizedPackages,
			{
				eyebrow: "",
				badge: "",
				name: "",
				tagline: "",
				pricePrefix: "$",
				priceValue: "",
				pricePeriod: "",
				featuresText: "",
				buttonText: "",
				buttonUrl: "#",
				isFeatured: false,
			},
		]);
	};

	const removePackage = (index) => {
		setPackages(normalizedPackages.filter((_, itemIndex) => itemIndex !== index));
	};

	const movePackage = (index, direction) => {
		const targetIndex = direction === "up" ? index - 1 : index + 1;
		if (targetIndex < 0 || targetIndex >= normalizedPackages.length) {
			return;
		}

		const nextPackages = [...normalizedPackages];
		[nextPackages[index], nextPackages[targetIndex]] = [nextPackages[targetIndex], nextPackages[index]];
		setPackages(nextPackages);
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Pricing packages", "ai-zippy-child")} initialOpen={true}>
					{normalizedPackages.map((pkg, index) => (
						<div
							key={`pricing-package-${index}`}
							style={{
								marginBottom: "18px",
								paddingBottom: "18px",
								borderBottom: "1px solid #e2e2e2",
							}}
						>
							<TextControl
								label={sprintf(__("Package %d Eyebrow", "ai-zippy-child"), index + 1)}
								value={pkg.eyebrow}
								onChange={(value) => updatePackage(index, { eyebrow: value })}
							/>
							<TextControl
								label={sprintf(__("Package %d Badge", "ai-zippy-child"), index + 1)}
								value={pkg.badge}
								onChange={(value) => updatePackage(index, { badge: value })}
								help={__("Optional. Leave empty to hide badge.", "ai-zippy-child")}
							/>
							<ToggleControl
								label={__("Featured card", "ai-zippy-child")}
								checked={pkg.isFeatured}
								onChange={(value) => updatePackage(index, { isFeatured: value })}
							/>
							<TextControl
								label={sprintf(__("Package %d Name", "ai-zippy-child"), index + 1)}
								value={pkg.name}
								onChange={(value) => updatePackage(index, { name: value })}
							/>
							<TextControl
								label={sprintf(__("Package %d Tagline", "ai-zippy-child"), index + 1)}
								value={pkg.tagline}
								onChange={(value) => updatePackage(index, { tagline: value })}
							/>
							<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
								<TextControl
									label={__("Price prefix", "ai-zippy-child")}
									value={pkg.pricePrefix}
									onChange={(value) => updatePackage(index, { pricePrefix: value })}
								/>
								<TextControl
									label={__("Price value", "ai-zippy-child")}
									value={pkg.priceValue}
									onChange={(value) => updatePackage(index, { priceValue: value })}
								/>
							</div>
							<TextControl
								label={__("Price period", "ai-zippy-child")}
								value={pkg.pricePeriod}
								onChange={(value) => updatePackage(index, { pricePeriod: value })}
							/>
							<TextareaControl
								label={__("Features (1 line = 1 item)", "ai-zippy-child")}
								value={pkg.featuresText}
								onChange={(value) => updatePackage(index, { featuresText: value })}
							/>
							<TextControl
								label={__("Button text", "ai-zippy-child")}
								value={pkg.buttonText}
								onChange={(value) => updatePackage(index, { buttonText: value })}
							/>
							<TextControl
								label={__("Button URL", "ai-zippy-child")}
								value={pkg.buttonUrl}
								onChange={(value) => updatePackage(index, { buttonUrl: value })}
							/>
							<div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
								<Button
									variant="secondary"
									onClick={() => movePackage(index, "up")}
									disabled={index === 0}
								>
									{__("Move up", "ai-zippy-child")}
								</Button>
								<Button
									variant="secondary"
									onClick={() => movePackage(index, "down")}
									disabled={index === normalizedPackages.length - 1}
								>
									{__("Move down", "ai-zippy-child")}
								</Button>
								<Button
									variant="tertiary"
									isDestructive
									onClick={() => removePackage(index)}
									disabled={normalizedPackages.length === 1}
								>
									{__("Remove package", "ai-zippy-child")}
								</Button>
							</div>
						</div>
					))}
					<Button variant="primary" onClick={addPackage}>
						{__("Add package", "ai-zippy-child")}
					</Button>
				</PanelBody>
				<PanelBody title={__("Pricing note", "ai-zippy-child")} initialOpen={false}>
					<TextControl
						label={__("Note link URL", "ai-zippy-child")}
						value={noteLinkUrl}
						onChange={(value) => setAttributes({ noteLinkUrl: value })}
					/>
				</PanelBody>
			</InspectorControls>

			<section {...blockProps}>
				<div className="calla-pricing-packages__inner">
					<div className="calla-pricing-packages__intro">
						<RichText
							tagName="p"
							className="calla-pricing-packages__intro-line1"
							value={introLine1}
							onChange={(value) => setAttributes({ introLine1: value })}
							placeholder={__("Intro line 1", "ai-zippy-child")}
						/>
						<RichText
							tagName="p"
							className="calla-pricing-packages__intro-line2"
							value={introLine2}
							onChange={(value) => setAttributes({ introLine2: value })}
							placeholder={__("Intro line 2", "ai-zippy-child")}
						/>
					</div>

					<div className="calla-pricing-packages__grid">
						{normalizedPackages.map((pkg, index) => {
							const features = splitFeatures(pkg.featuresText);
							const cardClass = `calla-pricing-packages__card${pkg.isFeatured ? " is-featured" : ""}`;

							return (
								<div className={cardClass} key={`package-preview-${index}`}>
									{pkg.badge ? (
										<span className="calla-pricing-packages__badge">{pkg.badge}</span>
									) : null}
									{pkg.eyebrow ? (
										<span className="calla-pricing-packages__eyebrow">{pkg.eyebrow}</span>
									) : null}
									{pkg.name ? <h3 className="calla-pricing-packages__name">{pkg.name}</h3> : null}
									{pkg.tagline ? (
										<p className="calla-pricing-packages__tagline">{pkg.tagline}</p>
									) : null}
									<div className="calla-pricing-packages__price-wrap">
										<p className="calla-pricing-packages__price">
											<sup>{pkg.pricePrefix}</sup>
											{pkg.priceValue}
										</p>
									</div>
									{pkg.pricePeriod ? (
										<p className="calla-pricing-packages__period">{pkg.pricePeriod}</p>
									) : null}
									<div className="calla-pricing-packages__divider" />
									<ul className="calla-pricing-packages__items">
										{features.map((feature, featureIndex) => (
											<li className="calla-pricing-packages__item" key={`${feature}-${featureIndex}`}>
												<svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
													<polyline points="20 6 9 17 4 12" />
												</svg>
												<span>{feature}</span>
											</li>
										))}
									</ul>
									<div className="calla-pricing-packages__button-wrap">
										<span className="calla-pricing-packages__button-text">{pkg.buttonText}</span>
									</div>
								</div>
							);
						})}
					</div>

					<p className="calla-pricing-packages__note">
						<RichText
							tagName="span"
							value={noteText}
							onChange={(value) => setAttributes({ noteText: value })}
							placeholder={__("Note text", "ai-zippy-child")}
						/>
						{" "}
						<RichText
							tagName="span"
							className="calla-pricing-packages__note-link"
							value={noteLinkText}
							onChange={(value) => setAttributes({ noteLinkText: value })}
							placeholder={__("Link text", "ai-zippy-child")}
						/>
					</p>
				</div>
			</section>
		</>
	);
}
