import { __, sprintf } from "@wordpress/i18n";
import { useEffect, useMemo } from "@wordpress/element";
import {
	InspectorControls,
	RichText,
	useBlockProps,
} from "@wordpress/block-editor";
import { Button, PanelBody, TextControl } from "@wordpress/components";

const DEFAULT_PRICING_ROWS = [
	{
		label: "Single Session",
		description: "90-minute access - All facilities",
		amount: "$XX",
		suffix: "/ session",
	},
	{
		label: "Day Pass",
		description: "Full day access - All facilities",
		amount: "$XX",
		suffix: "/ day",
	},
	{
		label: "Monthly Membership",
		description: "Unlimited sessions - Priority booking",
		amount: "$XX",
		suffix: "/ mo",
	},
	{
		label: "10-Session Pack",
		description: "Valid 3 months - Shareable with a friend",
		amount: "$XX",
		suffix: "/ pack",
	},
];

function cloneDefaultRows() {
	return DEFAULT_PRICING_ROWS.map((item) => ({ ...item }));
}

function normalizeRow(row = {}) {
	return {
		label: typeof row?.label === "string" ? row.label : "",
		description: typeof row?.description === "string" ? row.description : "",
		amount: typeof row?.amount === "string" ? row.amount : "",
		suffix: typeof row?.suffix === "string" ? row.suffix : "",
	};
}

export default function Edit({ attributes, setAttributes }) {
	const {
		eyebrow,
		heading,
		description,
		description2,
		pricingTitle,
		pricingRows,
		pricingNote,
		buttonText,
		buttonUrl,
	} = attributes;

	const blockProps = useBlockProps({ className: "calla-recharge-info" });

	const rows = useMemo(() => {
		if (Array.isArray(pricingRows) && pricingRows.length > 0) {
			return pricingRows.map((item) => normalizeRow(item));
		}
		return cloneDefaultRows();
	}, [pricingRows]);

	useEffect(() => {
		if (!Array.isArray(pricingRows) || pricingRows.length === 0) {
			setAttributes({ pricingRows: cloneDefaultRows() });
		}
	}, [pricingRows, setAttributes]);

	const setRows = (nextRows) => {
		const normalized = nextRows.map((item) => normalizeRow(item));
		setAttributes({
			pricingRows:
				normalized.length > 0
					? normalized
					: [{ label: "", description: "", amount: "", suffix: "" }],
		});
	};

	const updateRow = (index, patch) => {
		setRows(rows.map((item, itemIndex) => (itemIndex === index ? { ...item, ...patch } : item)));
	};

	const addRow = () => {
		setRows([...rows, { label: "", description: "", amount: "", suffix: "" }]);
	};

	const removeRow = (index) => {
		setRows(rows.filter((_, itemIndex) => itemIndex !== index));
	};

	const moveRow = (index, direction) => {
		const targetIndex = direction === "up" ? index - 1 : index + 1;
		if (targetIndex < 0 || targetIndex >= rows.length) {
			return;
		}

		const nextRows = [...rows];
		[nextRows[index], nextRows[targetIndex]] = [nextRows[targetIndex], nextRows[index]];
		setRows(nextRows);
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Pricing rows", "ai-zippy-child")} initialOpen={true}>
					{rows.map((row, index) => (
						<div
							key={`pricing-row-${index}`}
							style={{
								marginBottom: "16px",
								paddingBottom: "16px",
								borderBottom: "1px solid #e2e2e2",
							}}
						>
							<TextControl
								label={sprintf(__("Row %d label", "ai-zippy-child"), index + 1)}
								value={row.label}
								onChange={(value) => updateRow(index, { label: value })}
							/>
							<TextControl
								label={sprintf(__("Row %d description", "ai-zippy-child"), index + 1)}
								value={row.description}
								onChange={(value) => updateRow(index, { description: value })}
							/>
							<TextControl
								label={sprintf(__("Row %d amount", "ai-zippy-child"), index + 1)}
								value={row.amount}
								onChange={(value) => updateRow(index, { amount: value })}
							/>
							<TextControl
								label={sprintf(__("Row %d suffix", "ai-zippy-child"), index + 1)}
								value={row.suffix}
								onChange={(value) => updateRow(index, { suffix: value })}
							/>
							<div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
								<Button
									variant="secondary"
									onClick={() => moveRow(index, "up")}
									disabled={index === 0}
								>
									{__("Move up", "ai-zippy-child")}
								</Button>
								<Button
									variant="secondary"
									onClick={() => moveRow(index, "down")}
									disabled={index === rows.length - 1}
								>
									{__("Move down", "ai-zippy-child")}
								</Button>
								<Button
									variant="tertiary"
									isDestructive
									onClick={() => removeRow(index)}
									disabled={rows.length === 1}
								>
									{__("Remove row", "ai-zippy-child")}
								</Button>
							</div>
						</div>
					))}
					<Button variant="primary" onClick={addRow}>
						{__("Add pricing row", "ai-zippy-child")}
					</Button>
				</PanelBody>
				<PanelBody title={__("Booking button", "ai-zippy-child")} initialOpen={false}>
					<TextControl
						label={__("Button URL", "ai-zippy-child")}
						value={buttonUrl}
						onChange={(value) => setAttributes({ buttonUrl: value })}
					/>
				</PanelBody>
			</InspectorControls>

			<section {...blockProps}>
				<div className="calla-recharge-info__inner">
					<div className="calla-recharge-info__writeup">
						<RichText
							tagName="span"
							className="calla-recharge-info__eyebrow"
							value={eyebrow}
							onChange={(value) => setAttributes({ eyebrow: value })}
							placeholder={__("Eyebrow text", "ai-zippy-child")}
						/>
						<RichText
							tagName="h2"
							className="calla-recharge-info__heading"
							value={heading}
							onChange={(value) => setAttributes({ heading: value })}
							placeholder={__("Write-up heading", "ai-zippy-child")}
						/>
						<RichText
							tagName="p"
							className="calla-recharge-info__description"
							value={description}
							onChange={(value) => setAttributes({ description: value })}
							placeholder={__("Write-up description", "ai-zippy-child")}
						/>
						<RichText
							tagName="p"
							className="calla-recharge-info__description2"
							value={description2}
							onChange={(value) => setAttributes({ description2: value })}
							placeholder={__("Write-up second description", "ai-zippy-child")}
						/>
					</div>

					<div className="calla-recharge-info__pricing-card">
						<RichText
							tagName="h3"
							className="calla-recharge-info__pricing-title"
							value={pricingTitle}
							onChange={(value) => setAttributes({ pricingTitle: value })}
							placeholder={__("Pricing title", "ai-zippy-child")}
						/>

						{rows.map((row, index) => (
							<div key={`price-preview-${index}`}>
								<div className="calla-recharge-info__price-row">
									<div>
										<p className="calla-recharge-info__price-label">{row.label}</p>
										{row.description ? (
											<p className="calla-recharge-info__price-desc">{row.description}</p>
										) : null}
									</div>
									<p className="calla-recharge-info__price-amount">
										{row.amount}
										{row.suffix ? <small>{row.suffix}</small> : null}
									</p>
								</div>
								{index === 1 && rows.length > 2 ? (
									<div className="calla-recharge-info__divider" />
								) : null}
							</div>
						))}

						<RichText
							tagName="p"
							className="calla-recharge-info__pricing-note"
							value={pricingNote}
							onChange={(value) => setAttributes({ pricingNote: value })}
							placeholder={__("Pricing note", "ai-zippy-child")}
						/>

						<div className="calla-recharge-info__button-wrap">
							<RichText
								tagName="span"
								className="calla-recharge-info__button-text"
								value={buttonText}
								onChange={(value) => setAttributes({ buttonText: value })}
								placeholder={__("Button text", "ai-zippy-child")}
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
