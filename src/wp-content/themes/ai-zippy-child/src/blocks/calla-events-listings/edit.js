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
	SelectControl,
	TextControl,
	TextareaControl,
} from "@wordpress/components";

const CalendarIcon = () => (
	<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" aria-hidden="true">
		<rect x="3" y="4" width="18" height="18" rx="2" />
		<line x1="3" y1="9" x2="21" y2="9" />
		<line x1="8" y1="2" x2="8" y2="6" />
		<line x1="16" y1="2" x2="16" y2="6" />
	</svg>
);

const PersonIcon = () => (
	<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" aria-hidden="true">
		<circle cx="12" cy="8" r="4" />
		<path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
	</svg>
);

const ArrowIcon = () => (
	<svg viewBox="0 0 20 20" fill="none" strokeWidth="1.5" aria-hidden="true">
		<line x1="3" y1="10" x2="17" y2="10" />
		<polyline points="12 5 17 10 12 15" />
	</svg>
);

const defaultEvent = {
	status: "upcoming",
	imageId: 0,
	imageUrl: "",
	imageAlt: "",
	date: "1 January 2026, 6:00 pm - 8:00 pm",
	title: "Event Name",
	description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
	instructor: "Instructor: The Calla Project",
	linkUrl: "event-detail.html",
	actionText: "Learn more",
};

const normalizeEvents = (events = []) => (Array.isArray(events) && events.length ? events : [defaultEvent]);

export default function Edit({ attributes, setAttributes }) {
	const {
		taglinePrimary,
		taglineSecondary,
		allLabel,
		upcomingLabel,
		pastLabel,
		emptyText,
	} = attributes;
	const events = normalizeEvents(attributes.events);
	const blockProps = useBlockProps({ className: "calla-events-listings" });

	const updateEvent = (index, patch) => {
		const nextEvents = events.map((event, eventIndex) =>
			eventIndex === index ? { ...event, ...patch } : event,
		);
		setAttributes({ events: nextEvents });
	};

	const addEvent = () => {
		setAttributes({ events: [...events, { ...defaultEvent }] });
	};

	const removeEvent = (index) => {
		setAttributes({ events: events.filter((_, eventIndex) => eventIndex !== index) });
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Filter labels", "ai-zippy-child")} initialOpen={true}>
					<TextControl
						label={__("All label", "ai-zippy-child")}
						value={allLabel}
						onChange={(value) => setAttributes({ allLabel: value })}
					/>
					<TextControl
						label={__("Upcoming label", "ai-zippy-child")}
						value={upcomingLabel}
						onChange={(value) => setAttributes({ upcomingLabel: value })}
					/>
					<TextControl
						label={__("Past label", "ai-zippy-child")}
						value={pastLabel}
						onChange={(value) => setAttributes({ pastLabel: value })}
					/>
					<TextControl
						label={__("Empty state text", "ai-zippy-child")}
						value={emptyText}
						onChange={(value) => setAttributes({ emptyText: value })}
					/>
				</PanelBody>
				{events.map((event, index) => (
					<PanelBody
						key={index}
						title={__(`Event ${index + 1}`, "ai-zippy-child")}
						initialOpen={index === 0}
					>
						<SelectControl
							label={__("Status", "ai-zippy-child")}
							value={event.status}
							options={[
								{ label: __("Upcoming", "ai-zippy-child"), value: "upcoming" },
								{ label: __("Past", "ai-zippy-child"), value: "past" },
							]}
							onChange={(value) => updateEvent(index, { status: value })}
						/>
						<TextControl
							label={__("Date", "ai-zippy-child")}
							value={event.date}
							onChange={(value) => updateEvent(index, { date: value })}
						/>
						<TextControl
							label={__("Title", "ai-zippy-child")}
							value={event.title}
							onChange={(value) => updateEvent(index, { title: value })}
						/>
						<TextareaControl
							label={__("Description", "ai-zippy-child")}
							value={event.description}
							onChange={(value) => updateEvent(index, { description: value })}
						/>
						<TextControl
							label={__("Instructor", "ai-zippy-child")}
							value={event.instructor}
							onChange={(value) => updateEvent(index, { instructor: value })}
						/>
						<TextControl
							label={__("Link URL", "ai-zippy-child")}
							value={event.linkUrl}
							onChange={(value) => updateEvent(index, { linkUrl: value })}
						/>
						<TextControl
							label={__("Action text", "ai-zippy-child")}
							value={event.actionText}
							onChange={(value) => updateEvent(index, { actionText: value })}
						/>
						<MediaUploadCheck>
							<MediaUpload
								allowedTypes={["image"]}
								value={event.imageId}
								onSelect={(media) =>
									updateEvent(index, {
										imageId: media?.id || 0,
										imageUrl: media?.url || "",
										imageAlt: media?.alt || "",
									})
								}
								render={({ open }) => (
									<div>
										{event.imageUrl ? (
											<img
												src={event.imageUrl}
												alt=""
												style={{ width: "100%", marginBottom: "8px" }}
											/>
										) : null}
										<Button variant="secondary" onClick={open}>
											{event.imageUrl
												? __("Replace image", "ai-zippy-child")
												: __("Select image", "ai-zippy-child")}
										</Button>
										{event.imageUrl ? (
											<Button
												variant="link"
												isDestructive
												onClick={() =>
													updateEvent(index, { imageId: 0, imageUrl: "", imageAlt: "" })
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
							onClick={() => removeEvent(index)}
							disabled={events.length <= 1}
						>
							{__("Remove event", "ai-zippy-child")}
						</Button>
					</PanelBody>
				))}
				<PanelBody title={__("Add event", "ai-zippy-child")} initialOpen={false}>
					<Button variant="primary" onClick={addEvent}>
						{__("Add event card", "ai-zippy-child")}
					</Button>
				</PanelBody>
			</InspectorControls>

			<section {...blockProps}>
				<div className="calla-events-listings__inner">
					<div className="calla-events-listings__tagline">
						<RichText
							tagName="p"
							value={taglinePrimary}
							onChange={(value) => setAttributes({ taglinePrimary: value })}
						/>
						<RichText
							tagName="p"
							value={taglineSecondary}
							onChange={(value) => setAttributes({ taglineSecondary: value })}
						/>
					</div>

					<div className="calla-events-listings__tabs">
						<button type="button" className="calla-events-listings__tab is-active">{allLabel}</button>
						<button type="button" className="calla-events-listings__tab">{upcomingLabel}</button>
						<button type="button" className="calla-events-listings__tab">{pastLabel}</button>
					</div>

					<div className="calla-events-listings__grid">
						{events.map((event, index) => (
							<a
								key={index}
								className="calla-events-listings__card"
								href={event.linkUrl || "#"}
								data-status={event.status || "upcoming"}
							>
								<div className="calla-events-listings__image">
									{event.imageUrl ? (
										<img src={event.imageUrl} alt={event.imageAlt || ""} />
									) : (
										<span className="calla-events-listings__image-placeholder">Event Image</span>
									)}
									<span className={`calla-events-listings__badge calla-events-listings__badge--${event.status || "upcoming"}`}>
										{event.status === "past" ? "Past" : "Upcoming"}
									</span>
								</div>
								<div className="calla-events-listings__body">
									<div className="calla-events-listings__date">
										<CalendarIcon />
										<span>{event.date}</span>
									</div>
									<h3>{event.title}</h3>
									<p>{event.description}</p>
									<div className="calla-events-listings__meta">
										<PersonIcon />
										<span>{event.instructor}</span>
									</div>
									<span className="calla-events-listings__arrow">
										{event.actionText}
										<ArrowIcon />
									</span>
								</div>
							</a>
						))}
						<div className="calla-events-listings__empty" hidden>{emptyText}</div>
					</div>
				</div>
			</section>
		</>
	);
}
