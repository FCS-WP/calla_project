<?php

defined('ABSPATH') || exit;

$image_url = $attributes['imageUrl'] ?? '';
$image_alt = $attributes['imageAlt'] ?? '';
$stars = $attributes['stars'] ?? '';
$quote = $attributes['quote'] ?? '';
$author = $attributes['author'] ?? '';

$wrapper = get_block_wrapper_attributes(['class' => 'calla-about-review']);
?>
<section <?php echo $wrapper; ?>>
	<div class="calla-about-review__inner">
		<div class="calla-about-review__media">
			<?php if (!empty($image_url)) : ?>
				<img src="<?php echo esc_url($image_url); ?>" alt="<?php echo esc_attr($image_alt); ?>" loading="lazy" />
			<?php else : ?>
				<span><?php esc_html_e('Image from Google Review', 'ai-zippy-child'); ?></span>
			<?php endif; ?>
		</div>
		<div class="calla-about-review__card">
			<?php if (!empty($stars)) : ?>
				<p class="calla-about-review__stars"><?php echo wp_kses_post($stars); ?></p>
			<?php endif; ?>
			<?php if (!empty($quote)) : ?>
				<p class="calla-about-review__quote"><?php echo wp_kses_post($quote); ?></p>
			<?php endif; ?>
			<?php if (!empty($author)) : ?>
				<p class="calla-about-review__author"><?php echo wp_kses_post($author); ?></p>
			<?php endif; ?>
		</div>
	</div>
</section>
