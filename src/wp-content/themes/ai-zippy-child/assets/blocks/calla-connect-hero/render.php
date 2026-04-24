<?php

defined('ABSPATH') || exit;

$breadcrumb_home_label = $attributes['breadcrumbHomeLabel'] ?? 'Home';
$breadcrumb_home_url = $attributes['breadcrumbHomeUrl'] ?? '/';
$breadcrumb_current_label = $attributes['breadcrumbCurrentLabel'] ?? 'Connect';
$title = $attributes['title'] ?? 'Connect';
$background_image_url = $attributes['backgroundImageUrl'] ?? '';
$home_href = trim($breadcrumb_home_url) !== '' ? $breadcrumb_home_url : '#';
$bg_style = trim($background_image_url) !== '' ? sprintf(' style="background-image:url(%s)"', esc_url($background_image_url)) : '';

$wrapper = get_block_wrapper_attributes(['class' => 'calla-connect-hero']);
?>
<section <?php echo $wrapper; ?>>
	<div class="calla-connect-hero__bg"<?php echo $bg_style; ?>></div>
	<div class="calla-connect-hero__content">
		<p class="calla-connect-hero__breadcrumb">
			<a href="<?php echo esc_url($home_href); ?>"><?php echo esc_html($breadcrumb_home_label); ?></a>
			<span aria-hidden="true">›</span>
			<span><?php echo esc_html($breadcrumb_current_label); ?></span>
		</p>
		<h1 class="calla-connect-hero__title"><?php echo wp_kses_post($title); ?></h1>
	</div>
</section>
