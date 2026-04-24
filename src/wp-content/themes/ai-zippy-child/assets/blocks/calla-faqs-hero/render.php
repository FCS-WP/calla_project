<?php

defined('ABSPATH') || exit;

$title = $attributes['title'] ?? 'Our FAQs';
$background_image_url = $attributes['backgroundImageUrl'] ?? '';
$bg_style = trim($background_image_url) !== '' ? sprintf(' style="background-image:url(%s)"', esc_url($background_image_url)) : '';

$wrapper = get_block_wrapper_attributes(['class' => 'calla-faqs-hero']);
?>
<section <?php echo $wrapper; ?>>
	<div class="calla-faqs-hero__bg"<?php echo $bg_style; ?>></div>
	<div class="calla-faqs-hero__content">
		<?php if ($title) : ?><h1 class="calla-faqs-hero__title"><?php echo wp_kses_post($title); ?></h1><?php endif; ?>
	</div>
</section>
