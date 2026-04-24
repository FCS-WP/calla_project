import { __ } from "@wordpress/i18n";
import {
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
	RichText,
	useBlockProps,
} from "@wordpress/block-editor";
import {
	Button,
	PanelBody,
	TextControl,
	TextareaControl,
} from "@wordpress/components";

const ClockIcon = () => (
	<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" aria-hidden="true">
		<circle cx="12" cy="12" r="10" />
		<polyline points="12 6 12 12 16 14" />
	</svg>
);

const LocationIcon = () => (
	<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" aria-hidden="true">
		<path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
		<circle cx="12" cy="10" r="3" />
	</svg>
);

const ArrowIcon = () => (
	<svg viewBox="0 0 20 20" fill="none" strokeWidth="1.5" aria-hidden="true">
		<line x1="3" y1="10" x2="17" y2="10" />
		<polyline points="12 5 17 10 12 15" />
	</svg>
);

const defaultJob = {
	tag: "Full-time · Singapore",
	title: "Job Title",
	description:
		"Description of the role, responsibilities, and what makes working at The Calla Project unique.",
	employmentType: "Full-time",
	workMode: "On-site",
	applyText: "Apply now",
	applyUrl: "mailto:hello@thecallaproject.sg",
	imageId: 0,
	imageUrl: "",
	imageAlt: "",
	imagePlaceholder: "Job image",
};

const normalizeJobs = (jobs = []) =>
	Array.isArray(jobs) && jobs.length ? jobs : [{ ...defaultJob }];

export default function Edit({ attributes, setAttributes }) {
	const {
		contactEyebrow,
		contactHeading,
		addressLabel,
		addressText,
		hoursLabel,
		hoursText,
		emailLabel,
		emailText,
		emailUrl,
		phoneLabel,
		phoneText,
		phoneUrl,
		emptyText,
	} = attributes;
	const jobs = normalizeJobs(attributes.jobs);
	const blockProps = useBlockProps({ className: "calla-careers-listings" });

	const updateJob = (index, patch) => {
		const nextJobs = jobs.map((job, jobIndex) =>
			jobIndex === index ? { ...job, ...patch } : job,
		);
		setAttributes({ jobs: nextJobs });
	};

	const addJob = () => {
		setAttributes({ jobs: [...jobs, { ...defaultJob }] });
	};

	const removeJob = (index) => {
		setAttributes({ jobs: jobs.filter((_, jobIndex) => jobIndex !== index) });
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Contact links", "ai-zippy-child")} initialOpen={true}>
					<TextControl
						label={__("Email text", "ai-zippy-child")}
						value={emailText}
						onChange={(value) => setAttributes({ emailText: value })}
					/>
					<TextControl
						label={__("Email URL", "ai-zippy-child")}
						value={emailUrl}
						onChange={(value) => setAttributes({ emailUrl: value })}
					/>
					<TextControl
						label={__("Phone text", "ai-zippy-child")}
						value={phoneText}
						onChange={(value) => setAttributes({ phoneText: value })}
					/>
					<TextControl
						label={__("Phone URL", "ai-zippy-child")}
						value={phoneUrl}
						onChange={(value) => setAttributes({ phoneUrl: value })}
					/>
					<TextControl
						label={__("Empty state text", "ai-zippy-child")}
						value={emptyText}
						onChange={(value) => setAttributes({ emptyText: value })}
					/>
				</PanelBody>
				{jobs.map((job, index) => (
					<PanelBody
						key={index}
						title={__(`Job ${index + 1}`, "ai-zippy-child")}
						initialOpen={index === 0}
					>
						<TextControl
							label={__("Tag", "ai-zippy-child")}
							value={job.tag}
							onChange={(value) => updateJob(index, { tag: value })}
						/>
						<TextControl
							label={__("Title", "ai-zippy-child")}
							value={job.title}
							onChange={(value) => updateJob(index, { title: value })}
						/>
						<TextareaControl
							label={__("Description", "ai-zippy-child")}
							value={job.description}
							onChange={(value) => updateJob(index, { description: value })}
						/>
						<TextControl
							label={__("Employment type", "ai-zippy-child")}
							value={job.employmentType}
							onChange={(value) => updateJob(index, { employmentType: value })}
						/>
						<TextControl
							label={__("Work mode", "ai-zippy-child")}
							value={job.workMode}
							onChange={(value) => updateJob(index, { workMode: value })}
						/>
						<TextControl
							label={__("Apply text", "ai-zippy-child")}
							value={job.applyText}
							onChange={(value) => updateJob(index, { applyText: value })}
						/>
						<TextControl
							label={__("Apply URL", "ai-zippy-child")}
							value={job.applyUrl}
							onChange={(value) => updateJob(index, { applyUrl: value })}
						/>
						<TextControl
							label={__("Image placeholder", "ai-zippy-child")}
							value={job.imagePlaceholder}
							onChange={(value) => updateJob(index, { imagePlaceholder: value })}
						/>
						<MediaUploadCheck>
							<MediaUpload
								allowedTypes={["image"]}
								value={job.imageId}
								onSelect={(media) =>
									updateJob(index, {
										imageId: media?.id || 0,
										imageUrl: media?.url || "",
										imageAlt: media?.alt || "",
									})
								}
								render={({ open }) => (
									<div>
										{job.imageUrl ? (
											<img
												src={job.imageUrl}
												alt=""
												style={{ width: "100%", marginBottom: "8px" }}
											/>
										) : null}
										<Button variant="secondary" onClick={open}>
											{job.imageUrl
												? __("Replace image", "ai-zippy-child")
												: __("Select image", "ai-zippy-child")}
										</Button>
										{job.imageUrl ? (
											<Button
												variant="link"
												isDestructive
												onClick={() =>
													updateJob(index, {
														imageId: 0,
														imageUrl: "",
														imageAlt: "",
													})
												}
											>
												{__("Remove image", "ai-zippy-child")}
											</Button>
										) : null}
									</div>
								)}
							/>
						</MediaUploadCheck>
						<Button
							variant="link"
							isDestructive
							onClick={() => removeJob(index)}
							disabled={jobs.length <= 1}
						>
							{__("Remove job", "ai-zippy-child")}
						</Button>
					</PanelBody>
				))}
				<PanelBody title={__("Add job", "ai-zippy-child")} initialOpen={false}>
					<Button variant="primary" onClick={addJob}>
						{__("Add job card", "ai-zippy-child")}
					</Button>
				</PanelBody>
			</InspectorControls>

			<section {...blockProps}>
				<div className="calla-careers-listings__inner">
					{jobs.length ? (
						<>
							<div className="calla-careers-listings__jobs">
								{jobs.map((job, index) => (
									<div className="calla-careers-listings__row" key={index}>
										<div className="calla-careers-listings__image">
											{job.imageUrl ? (
												<img src={job.imageUrl} alt={job.imageAlt || ""} />
											) : (
												<span>{job.imagePlaceholder || __("Image", "ai-zippy-child")}</span>
											)}
										</div>
										<a className="calla-careers-listings__job-card" href={job.applyUrl || "#"}>
											{job.tag ? (
												<span className="calla-careers-listings__job-tag">{job.tag}</span>
											) : null}
											{job.title ? <h3>{job.title}</h3> : null}
											{job.description ? <p>{job.description}</p> : null}
											<div className="calla-careers-listings__job-meta">
												{job.employmentType ? (
													<span className="calla-careers-listings__job-meta-item">
														<ClockIcon />
														<span>{job.employmentType}</span>
													</span>
												) : null}
												{job.workMode ? (
													<span className="calla-careers-listings__job-meta-item">
														<LocationIcon />
														<span>{job.workMode}</span>
													</span>
												) : null}
											</div>
											{job.applyText ? (
												<span className="calla-careers-listings__job-apply">
													<span>{job.applyText}</span>
													<ArrowIcon />
												</span>
											) : null}
										</a>
									</div>
								))}
							</div>

							<div className="calla-careers-listings__contact-card">
								<div>
									<RichText
										tagName="span"
										className="calla-careers-listings__contact-eyebrow"
										value={contactEyebrow}
										onChange={(value) => setAttributes({ contactEyebrow: value })}
										placeholder={__("Get in touch", "ai-zippy-child")}
									/>
									<RichText
										tagName="h3"
										className="calla-careers-listings__contact-heading"
										value={contactHeading}
										onChange={(value) => setAttributes({ contactHeading: value })}
										placeholder={__("Interested in joining us?", "ai-zippy-child")}
									/>
								</div>

								<div className="calla-careers-listings__contact-divider" />

								<div className="calla-careers-listings__contact-block">
									<RichText
										tagName="label"
										value={addressLabel}
										onChange={(value) => setAttributes({ addressLabel: value })}
									/>
									<RichText
										tagName="p"
										value={addressText}
										onChange={(value) => setAttributes({ addressText: value })}
										multiline="br"
									/>
								</div>

								<div className="calla-careers-listings__contact-block">
									<RichText
										tagName="label"
										value={hoursLabel}
										onChange={(value) => setAttributes({ hoursLabel: value })}
									/>
									<RichText
										tagName="p"
										value={hoursText}
										onChange={(value) => setAttributes({ hoursText: value })}
										multiline="br"
									/>
								</div>

								<div className="calla-careers-listings__contact-block">
									<RichText
										tagName="label"
										value={emailLabel}
										onChange={(value) => setAttributes({ emailLabel: value })}
									/>
									<a href={emailUrl || "#"}>{emailText}</a>
								</div>

								<div className="calla-careers-listings__contact-block">
									<RichText
										tagName="label"
										value={phoneLabel}
										onChange={(value) => setAttributes({ phoneLabel: value })}
									/>
									<a href={phoneUrl || "#"}>{phoneText}</a>
								</div>
							</div>
						</>
					) : (
						<div className="calla-careers-listings__empty">{emptyText}</div>
					)}
				</div>
			</section>
		</>
	);
}
