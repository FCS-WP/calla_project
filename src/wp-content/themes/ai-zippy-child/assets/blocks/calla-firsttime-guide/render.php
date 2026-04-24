<?php

defined('ABSPATH') || exit;

$short_eyebrow = $attributes['shortEyebrow'] ?? 'Welcome';
$short_heading = $attributes['shortHeading'] ?? 'A space made for you';
$short_description = $attributes['shortDescription'] ?? '';
$image_url = $attributes['imageUrl'] ?? '';
$image_alt = $attributes['imageAlt'] ?? '';
$image_placeholder = $attributes['imagePlaceholder'] ?? 'Image';
$guide_eyebrow = $attributes['guideEyebrow'] ?? 'What to expect';
$guide_heading = $attributes['guideHeading'] ?? 'Your first visit, step by step';
$primary_button_text = $attributes['primaryButtonText'] ?? 'Book Now';
$primary_button_url = trim($attributes['primaryButtonUrl'] ?? '') !== '' ? $attributes['primaryButtonUrl'] : '#';
$secondary_button_text = $attributes['secondaryButtonText'] ?? 'FAQs';
$secondary_button_url = trim($attributes['secondaryButtonUrl'] ?? '') !== '' ? $attributes['secondaryButtonUrl'] : '#';

$steps = [];
for ($i = 1; $i <= 5; $i++) {
	$steps[] = [
		'title' => $attributes["step{$i}Title"] ?? '',
		'text' => $attributes["step{$i}Text"] ?? '',
	];
}

$wrapper = get_block_wrapper_attributes(['class' => 'calla-firsttime-guide']);
?>
<section <?php echo $wrapper; ?>>
	<div class="calla-firsttime-guide__inner">
		<div class="calla-firsttime-guide__grid">
			<div class="calla-firsttime-guide__short">
				<?php if ($short_eyebrow) : ?><span class="calla-firsttime-guide__eyebrow"><?php echo wp_kses_post($short_eyebrow); ?></span><?php endif; ?>
				<?php if ($short_heading) : ?><h2 class="calla-firsttime-guide__short-heading"><?php echo wp_kses_post($short_heading); ?></h2><?php endif; ?>
				<?php if ($short_description) : ?><p class="calla-firsttime-guide__short-description"><?php echo wp_kses_post($short_description); ?></p><?php endif; ?>
			</div>

			<div class="calla-firsttime-guide__image-card">
				<?php if ($image_url) : ?>
					<img src="<?php echo esc_url($image_url); ?>" alt="<?php echo esc_attr($image_alt); ?>">
				<?php else : ?>
					<span><?php echo esc_html($image_placeholder); ?></span>
				<?php endif; ?>
			</div>

			<div class="calla-firsttime-guide__writeup">
				<?php if ($guide_eyebrow) : ?><span class="calla-firsttime-guide__eyebrow"><?php echo wp_kses_post($guide_eyebrow); ?></span><?php endif; ?>
				<?php if ($guide_heading) : ?><h3 class="calla-firsttime-guide__guide-heading"><?php echo wp_kses_post($guide_heading); ?></h3><?php endif; ?>

				<ul class="calla-firsttime-guide__steps">
					<?php foreach ($steps as $index => $step) : ?>
						<?php if (!empty($step['title']) || !empty($step['text'])) : ?>
							<li class="calla-firsttime-guide__step">
								<span class="calla-firsttime-guide__step-num"><?php echo esc_html((string) ($index + 1)); ?></span>
								<div class="calla-firsttime-guide__step-body">
									<?php if (!empty($step['title'])) : ?><strong><?php echo wp_kses_post($step['title']); ?></strong><?php endif; ?>
									<?php if (!empty($step['text'])) : ?><span><?php echo wp_kses_post($step['text']); ?></span><?php endif; ?>
								</div>
							</li>
						<?php endif; ?>
					<?php endforeach; ?>
				</ul>
			</div>
		</div>

		<div class="calla-firsttime-guide__cta-row">
			<?php if ($primary_button_text) : ?>
				<a class="calla-firsttime-guide__cta calla-firsttime-guide__cta--primary" href="<?php echo esc_url($primary_button_url); ?>" target="_blank" rel="noopener">
					<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.528 5.855L0 24l6.335-1.51A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.368l-.36-.214-3.727.977.995-3.635-.235-.374A9.818 9.818 0 1112 21.818z"/></svg>
					<span><?php echo esc_html($primary_button_text); ?></span>
				</a>
			<?php endif; ?>
			<?php if ($secondary_button_text) : ?>
				<a class="calla-firsttime-guide__cta calla-firsttime-guide__cta--secondary" href="<?php echo esc_url($secondary_button_url); ?>">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17" stroke-width="2"/></svg>
					<span><?php echo esc_html($secondary_button_text); ?></span>
				</a>
			<?php endif; ?>
		</div>
	</div>
</section>
