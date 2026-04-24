<?php

defined('ABSPATH') || exit;

$breadcrumb_home_label = $attributes['breadcrumbHomeLabel'] ?? 'Home';
$breadcrumb_home_url = $attributes['breadcrumbHomeUrl'] ?? '/';
$breadcrumb_current_label = $attributes['breadcrumbCurrentLabel'] ?? 'Recharge';
$title = $attributes['title'] ?? 'Recharge';
$background_image_url = $attributes['backgroundImageUrl'] ?? '';
$home_href = trim($breadcrumb_home_url) !== '' ? $breadcrumb_home_url : '#';

$background_style = $background_image_url !== ''
	? sprintf('background-image:url(%s);', esc_url($background_image_url))
	: '';

$wrapper = get_block_wrapper_attributes(['class' => 'calla-recharge-hero']);
?>
<section <?php echo $wrapper; ?>>
	<div class="calla-recharge-hero__bg" style="<?php echo esc_attr($background_style); ?>" aria-hidden="true"></div>
	<div class="calla-recharge-hero__inner">
		<p class="calla-recharge-hero__breadcrumb">
			<a href="<?php echo esc_url($home_href); ?>"><?php echo esc_html($breadcrumb_home_label); ?></a>
			<span class="calla-recharge-hero__separator" aria-hidden="true">/</span>
			<span><?php echo esc_html($breadcrumb_current_label); ?></span>
		</p>
		<h1 class="calla-recharge-hero__title"><?php echo wp_kses_post($title); ?></h1>
	</div>
</section>
