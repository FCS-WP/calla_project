<?php

defined('ABSPATH') || exit;

$breadcrumb_home_label = $attributes['breadcrumbHomeLabel'] ?? 'Home';
$breadcrumb_home_url = $attributes['breadcrumbHomeUrl'] ?? '/';
$breadcrumb_current_label = $attributes['breadcrumbCurrentLabel'] ?? 'Our Story';
$title = $attributes['title'] ?? 'Our Story';
$home_href = trim($breadcrumb_home_url) !== '' ? $breadcrumb_home_url : '#';

$wrapper = get_block_wrapper_attributes(['class' => 'calla-about-hero']);
?>
<section <?php echo $wrapper; ?>>
	<div class="calla-about-hero__inner">
		<p class="calla-about-hero__breadcrumb">
			<a href="<?php echo esc_url($home_href); ?>"><?php echo esc_html($breadcrumb_home_label); ?></a>
			<span class="calla-about-hero__separator" aria-hidden="true">/</span>
			<span><?php echo esc_html($breadcrumb_current_label); ?></span>
		</p>
		<h1 class="calla-about-hero__title"><?php echo wp_kses_post($title); ?></h1>
	</div>
</section>
