<?php

defined('ABSPATH') || exit;

$eyebrow = $attributes['eyebrow'] ?? '';
$title = $attributes['title'] ?? '';
$description = $attributes['description'] ?? '';
$button_text = $attributes['buttonText'] ?? '';
$button_url = $attributes['buttonUrl'] ?? '#';
$image_url = $attributes['imageUrl'] ?? '';
$image_alt = $attributes['imageAlt'] ?? '';
$button_label = trim(wp_strip_all_tags($button_text));
$button_href = trim($button_url) !== '' ? $button_url : '#';

$wrapper = get_block_wrapper_attributes(['class' => 'calla-hero']);
?>
<section <?php echo $wrapper; ?>>
	<div class="calla-hero__inner">
		<div class="calla-hero__media-wrap">
			<?php if ($image_url) : ?>
				<img class="calla-hero__media" src="<?php echo esc_url($image_url); ?>" alt="<?php echo esc_attr($image_alt); ?>" loading="eager" />
			<?php else : ?>
				<div class="calla-hero__media calla-hero__media--placeholder" aria-hidden="true"></div>
			<?php endif; ?>

			<div class="calla-hero__overlay">
				<?php if ($eyebrow) : ?>
					<p class="calla-hero__eyebrow"><?php echo esc_html($eyebrow); ?></p>
				<?php endif; ?>

				<?php if ($title) : ?>
					<h1 class="calla-hero__title"><?php echo wp_kses_post($title); ?></h1>
				<?php endif; ?>

				<?php if ($description) : ?>
					<p class="calla-hero__description"><?php echo wp_kses_post($description); ?></p>
				<?php endif; ?>

				<?php if ($button_label !== '') : ?>
					<div class="calla-hero__actions">
						<a class="calla-outline-button" href="<?php echo esc_url($button_href); ?>">
							<?php echo esc_html($button_label); ?>
						</a>
					</div>
				<?php endif; ?>
			</div>
		</div>
	</div>
</section>
