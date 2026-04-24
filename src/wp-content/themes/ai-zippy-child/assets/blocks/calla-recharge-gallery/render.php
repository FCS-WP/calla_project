<?php

defined('ABSPATH') || exit;

$images = [];

if (!empty($attributes['images']) && is_array($attributes['images'])) {
	foreach ($attributes['images'] as $image) {
		if (!is_array($image)) {
			continue;
		}

		$images[] = [
			'url' => isset($image['url']) ? (string) $image['url'] : '',
			'alt' => isset($image['alt']) ? (string) $image['alt'] : '',
		];
	}
}

if (empty($images)) {
	$images = [
		['url' => '', 'alt' => ''],
		['url' => '', 'alt' => ''],
		['url' => '', 'alt' => ''],
		['url' => '', 'alt' => ''],
		['url' => '', 'alt' => ''],
	];
}

$gallery_id = wp_unique_id('calla-recharge-gallery-');
$wrapper = get_block_wrapper_attributes(['class' => 'calla-recharge-gallery']);
?>
<section <?php echo $wrapper; ?>>
	<div class="calla-recharge-gallery__inner">
		<div class="calla-recharge-gallery__grid">
			<?php foreach ($images as $index => $image) : ?>
				<div class="calla-recharge-gallery__item<?php echo $index === 0 ? ' calla-recharge-gallery__item--feature' : ''; ?>">
					<?php if (!empty($image['url'])) : ?>
						<a
							class="calla-recharge-gallery__link"
							href="<?php echo esc_url($image['url']); ?>"
							data-fancybox="<?php echo esc_attr($gallery_id); ?>"
							data-type="image"
							data-caption="<?php echo esc_attr($image['alt']); ?>"
							data-thumb="<?php echo esc_url($image['url']); ?>"
						>
							<img class="calla-recharge-gallery__media" src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" loading="lazy" />
							<span class="calla-recharge-gallery__overlay" aria-hidden="true">
								<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3">
									<circle cx="11" cy="11" r="7"></circle>
									<line x1="16.5" y1="16.5" x2="22" y2="22"></line>
									<line x1="8" y1="11" x2="14" y2="11"></line>
									<line x1="11" y1="8" x2="11" y2="14"></line>
								</svg>
							</span>
						</a>
					<?php else : ?>
						<div class="calla-recharge-gallery__media calla-recharge-gallery__media--placeholder" aria-hidden="true"></div>
					<?php endif; ?>
				</div>
			<?php endforeach; ?>
		</div>
	</div>
</section>
