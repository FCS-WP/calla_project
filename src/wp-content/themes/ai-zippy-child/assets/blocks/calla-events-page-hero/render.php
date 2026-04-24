<?php

defined('ABSPATH') || exit;

$title = $attributes['title'] ?? 'Events';
$background_image_url = $attributes['backgroundImageUrl'] ?? '';
$bg_style = trim($background_image_url) !== '' ? sprintf(' style="background-image:url(%s)"', esc_url($background_image_url)) : '';

$wrapper = get_block_wrapper_attributes(['class' => 'calla-events-page-hero']);
?>
<section <?php echo $wrapper; ?>>
	<div class="calla-events-page-hero__bg"<?php echo $bg_style; ?>></div>
	<div class="calla-events-page-hero__content">
		<h1 class="calla-events-page-hero__title"><?php echo wp_kses_post($title); ?></h1>
	</div>
</section>
