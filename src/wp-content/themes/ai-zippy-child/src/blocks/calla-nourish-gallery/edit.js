import { __, sprintf } from "@wordpress/i18n";
import { useEffect, useMemo } from "@wordpress/element";
import {
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
	useBlockProps,
} from "@wordpress/block-editor";
import { Button, PanelBody, TextControl } from "@wordpress/components";

const DEFAULT_IMAGES = [
	{ id: 0, url: "", alt: "" },
	{ id: 0, url: "", alt: "" },
	{ id: 0, url: "", alt: "" },
	{ id: 0, url: "", alt: "" },
	{ id: 0, url: "", alt: "" },
];

function cloneDefaultImages() {
	return DEFAULT_IMAGES.map((image) => ({ ...image }));
}

function normalizeGalleryImage(image = {}) {
	return {
		id: Number(image?.id) || 0,
		url: typeof image?.url === "string" ? image.url : "",
		alt: typeof image?.alt === "string" ? image.alt : "",
	};
}

function ImageControl({ label, imageId, imageUrl, onSelect, onRemove }) {
	return (
		<div style={{ marginBottom: "8px" }}>
			<p style={{ marginBottom: "4px", fontWeight: 600 }}>{label}</p>
			{imageUrl ? (
				<img
					src={imageUrl}
					alt=""
					style={{ width: "100%", borderRadius: "8px", marginBottom: "8px" }}
				/>
			) : null}
			<MediaUploadCheck>
				<MediaUpload
					allowedTypes={["image"]}
					value={imageId}
					onSelect={onSelect}
					render={({ open }) => (
						<Button variant="secondary" onClick={open}>
							{imageUrl
								? __("Replace image", "ai-zippy-child")
								: __("Select image", "ai-zippy-child")}
						</Button>
					)}
				/>
			</MediaUploadCheck>
			{imageUrl ? (
				<Button variant="link" isDestructive onClick={onRemove}>
					{__("Clear image", "ai-zippy-child")}
				</Button>
			) : null}
		</div>
	);
}

function GalleryItem({ url, alt, className }) {
	return url ? (
		<img className={className} src={url} alt={alt} />
	) : (
		<div className={`${className} ${className}--placeholder`} aria-hidden="true" />
	);
}

function buildLegacyImages(attributes) {
	const legacyImages = [1, 2, 3, 4, 5].map((index) =>
		normalizeGalleryImage({
			id: attributes[`image${index}Id`],
			url: attributes[`image${index}Url`],
			alt: attributes[`image${index}Alt`],
		}),
	);

	const hasLegacyData = legacyImages.some(
		(image) => image.id > 0 || image.url !== "" || image.alt !== "",
	);

	return hasLegacyData ? legacyImages : [];
}

export default function Edit({ attributes, setAttributes }) {
	const {
		images,
		image1Id,
		image1Url,
		image1Alt,
		image2Id,
		image2Url,
		image2Alt,
		image3Id,
		image3Url,
		image3Alt,
		image4Id,
		image4Url,
		image4Alt,
		image5Id,
		image5Url,
		image5Alt,
	} = attributes;

	const blockProps = useBlockProps({ className: "calla-nourish-gallery" });

	const legacyImages = useMemo(
		() =>
			buildLegacyImages({
				image1Id,
				image1Url,
				image1Alt,
				image2Id,
				image2Url,
				image2Alt,
				image3Id,
				image3Url,
				image3Alt,
				image4Id,
				image4Url,
				image4Alt,
				image5Id,
				image5Url,
				image5Alt,
			}),
		[
			image1Id,
			image1Url,
			image1Alt,
			image2Id,
			image2Url,
			image2Alt,
			image3Id,
			image3Url,
			image3Alt,
			image4Id,
			image4Url,
			image4Alt,
			image5Id,
			image5Url,
			image5Alt,
		],
	);

	const galleryImages = useMemo(() => {
		if (Array.isArray(images) && images.length > 0) {
			return images.map((image) => normalizeGalleryImage(image));
		}

		if (legacyImages.length > 0) {
			return legacyImages;
		}

		return cloneDefaultImages();
	}, [images, legacyImages]);

	useEffect(() => {
		if (!Array.isArray(images) || images.length === 0) {
			setAttributes({
				images: legacyImages.length > 0 ? legacyImages : cloneDefaultImages(),
			});
		}
	}, [images, legacyImages, setAttributes]);

	const setGalleryImages = (nextImages) => {
		const normalized = nextImages.map((image) => normalizeGalleryImage(image));
		setAttributes({
			images: normalized.length > 0 ? normalized : [{ id: 0, url: "", alt: "" }],
		});
	};

	const updateImage = (index, patch) => {
		setGalleryImages(
			galleryImages.map((image, itemIndex) =>
				itemIndex === index ? { ...image, ...patch } : image,
			),
		);
	};

	const addImage = () => {
		setGalleryImages([...galleryImages, { id: 0, url: "", alt: "" }]);
	};

	const removeImageItem = (index) => {
		setGalleryImages(galleryImages.filter((_, itemIndex) => itemIndex !== index));
	};

	const moveImage = (index, direction) => {
		const targetIndex = direction === "up" ? index - 1 : index + 1;

		if (targetIndex < 0 || targetIndex >= galleryImages.length) {
			return;
		}

		const nextImages = [...galleryImages];
		[nextImages[index], nextImages[targetIndex]] = [nextImages[targetIndex], nextImages[index]];
		setGalleryImages(nextImages);
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Gallery repeat items", "ai-zippy-child")} initialOpen={true}>
					{galleryImages.map((image, index) => (
						<div
							key={`gallery-image-${index}`}
							style={{
								marginBottom: "16px",
								paddingBottom: "16px",
								borderBottom: "1px solid #e2e2e2",
							}}
						>
							<ImageControl
								label={
									index === 0
										? __("Image 1 (feature)", "ai-zippy-child")
										: sprintf(__("Image %d", "ai-zippy-child"), index + 1)
								}
								imageId={image.id}
								imageUrl={image.url}
								onSelect={(media) =>
									updateImage(index, {
										id: media?.id || 0,
										url: media?.url || "",
										alt: media?.alt || "",
									})
								}
								onRemove={() => updateImage(index, { id: 0, url: "", alt: "" })}
							/>
							<TextControl
								label={__("Alt text", "ai-zippy-child")}
								value={image.alt}
								onChange={(value) => updateImage(index, { alt: value })}
							/>
							<div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
								<Button
									variant="secondary"
									onClick={() => moveImage(index, "up")}
									disabled={index === 0}
								>
									{__("Move up", "ai-zippy-child")}
								</Button>
								<Button
									variant="secondary"
									onClick={() => moveImage(index, "down")}
									disabled={index === galleryImages.length - 1}
								>
									{__("Move down", "ai-zippy-child")}
								</Button>
								<Button
									variant="tertiary"
									isDestructive
									onClick={() => removeImageItem(index)}
									disabled={galleryImages.length === 1}
								>
									{__("Remove item", "ai-zippy-child")}
								</Button>
							</div>
						</div>
					))}

					<Button variant="primary" onClick={addImage}>
						{__("Add image", "ai-zippy-child")}
					</Button>
				</PanelBody>
			</InspectorControls>

			<section {...blockProps}>
				<div className="calla-nourish-gallery__inner">
					<div className="calla-nourish-gallery__grid">
						{galleryImages.map((image, index) => (
							<div
								key={`gallery-preview-${index}`}
								className={`calla-nourish-gallery__item${
									index === 0 ? " calla-nourish-gallery__item--feature" : ""
								}`}
							>
								<GalleryItem
									url={image.url}
									alt={image.alt}
									className="calla-nourish-gallery__media"
								/>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
