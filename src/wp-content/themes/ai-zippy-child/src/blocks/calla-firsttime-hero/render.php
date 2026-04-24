<?php

defined('ABSPATH') || exit;

$title = $attributes['title'] ?? 'First Time?';
$description = $attributes['description'] ?? '';
$background_image_url = $attributes['backgroundImageUrl'] ?? '';
$bg_style = trim($background_image_url) !== '' ? sprintf(' style="background-image:url(%s)"', esc_url($background_image_url)) : '';

$wrapper = get_block_wrapper_attributes(['class' => 'calla-firsttime-hero']);
?>
<section <?php echo $wrapper; ?>>
	<div class="calla-firsttime-hero__bg"<?php echo $bg_style; ?>></div>
	<div class="calla-firsttime-hero__content">
		<?php if ($title) : ?><h1 class="calla-firsttime-hero__title"><?php echo wp_kses_post($title); ?></h1><?php endif; ?>
		<?php if ($description) : ?><p class="calla-firsttime-hero__description"><?php echo wp_kses_post($description); ?></p><?php endif; ?>
	</div>
</section>
