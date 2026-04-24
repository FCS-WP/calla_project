<?php

defined('ABSPATH') || exit;

$map_src = $attributes['mapSrc'] ?? '';
$title = $attributes['title'] ?? 'The Calla Project location';
$height = isset($attributes['height']) ? absint($attributes['height']) : 420;
$style = $height > 0 ? sprintf('--calla-connect-map-height:%dpx;', $height) : '';

$wrapper = get_block_wrapper_attributes([
	'class' => 'calla-connect-map',
	'style' => $style,
]);
?>
<div <?php echo $wrapper; ?> id="map">
	<?php if ($map_src) : ?>
		<iframe
			src="<?php echo esc_url($map_src); ?>"
			allowfullscreen
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"
			title="<?php echo esc_attr($title); ?>">
		</iframe>
	<?php endif; ?>
	<div class="calla-connect-map__overlay" aria-hidden="true"></div>
</div>
