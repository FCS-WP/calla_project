<?php

defined('ABSPATH') || exit;

$title = $attributes['title'] ?? '';
$description = $attributes['description'] ?? '';
$image_url = $attributes['imageUrl'] ?? '';
$image_alt = $attributes['imageAlt'] ?? '';

$wrapper = get_block_wrapper_attributes(['class' => 'calla-recharge']);
?>
<section <?php echo $wrapper; ?>>
	<div class="calla-recharge__inner">
		<div class="calla-recharge__content">
			<?php if ($title) : ?>
				<h2 class="calla-recharge__title"><?php echo wp_kses_post($title); ?></h2>
			<?php endif; ?>
			<?php if ($description) : ?>
				<p class="calla-recharge__description"><?php echo wp_kses_post($description); ?></p>
			<?php endif; ?>
		</div>
		<div class="calla-recharge__media-wrap">
			<?php if ($image_url) : ?>
				<img class="calla-recharge__media" src="<?php echo esc_url($image_url); ?>" alt="<?php echo esc_attr($image_alt); ?>" loading="lazy" />
			<?php else : ?>
				<div class="calla-recharge__media calla-recharge__media--placeholder" aria-hidden="true"></div>
			<?php endif; ?>
		</div>
	</div>
</section>
