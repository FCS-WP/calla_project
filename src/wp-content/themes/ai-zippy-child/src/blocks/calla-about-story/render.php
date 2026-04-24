<?php

defined('ABSPATH') || exit;

$heading = $attributes['heading'] ?? 'Our Story';
$body = $attributes['body'] ?? '';
$image_url = $attributes['imageUrl'] ?? '';
$image_alt = $attributes['imageAlt'] ?? '';

$wrapper = get_block_wrapper_attributes(['class' => 'calla-about-story']);
?>
<section <?php echo $wrapper; ?>>
	<div class="calla-about-story__inner">
		<div class="calla-about-story__media">
			<?php if (!empty($image_url)) : ?>
				<img src="<?php echo esc_url($image_url); ?>" alt="<?php echo esc_attr($image_alt); ?>" loading="lazy" />
			<?php else : ?>
				<span><?php esc_html_e('Story Image', 'ai-zippy-child'); ?></span>
			<?php endif; ?>
		</div>
		<div class="calla-about-story__copy">
			<?php if (!empty($heading)) : ?>
				<h2 class="calla-about-story__heading"><?php echo wp_kses_post($heading); ?></h2>
			<?php endif; ?>
			<?php if (!empty($body)) : ?>
				<p class="calla-about-story__body"><?php echo wp_kses_post($body); ?></p>
			<?php endif; ?>
		</div>
	</div>
</section>
