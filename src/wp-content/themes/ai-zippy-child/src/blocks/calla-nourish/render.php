<?php

defined('ABSPATH') || exit;

$title = $attributes['title'] ?? '';
$description = $attributes['description'] ?? '';
$image_url = $attributes['imageUrl'] ?? '';
$image_alt = $attributes['imageAlt'] ?? '';

$wrapper = get_block_wrapper_attributes(['class' => 'calla-nourish']);
?>
<section <?php echo $wrapper; ?>>
	<div class="calla-nourish__inner">
		<div class="calla-nourish__media-wrap">
			<?php if ($image_url) : ?>
				<img class="calla-nourish__media" src="<?php echo esc_url($image_url); ?>" alt="<?php echo esc_attr($image_alt); ?>" loading="lazy" />
			<?php else : ?>
				<div class="calla-nourish__media calla-nourish__media--placeholder" aria-hidden="true"></div>
			<?php endif; ?>
		</div>
		<div class="calla-nourish__content">
			<?php if ($title) : ?>
				<h2 class="calla-nourish__title"><?php echo wp_kses_post($title); ?></h2>
			<?php endif; ?>
			<?php if ($description) : ?>
				<p class="calla-nourish__description"><?php echo wp_kses_post($description); ?></p>
			<?php endif; ?>
		</div>
	</div>
</section>
