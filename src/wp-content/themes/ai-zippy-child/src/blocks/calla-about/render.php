<?php

defined('ABSPATH') || exit;

$title = $attributes['title'] ?? '';
$description = $attributes['description'] ?? '';
$button_text = $attributes['buttonText'] ?? '';
$button_url = $attributes['buttonUrl'] ?? '#';
$button_label = trim(wp_strip_all_tags($button_text));
$button_href = trim($button_url) !== '' ? $button_url : '#';

$image_candidates = [
	[
		'url' => $attributes['image1Url'] ?? '',
		'alt' => $attributes['image1Alt'] ?? '',
	],
	[
		'url' => $attributes['image2Url'] ?? '',
		'alt' => $attributes['image2Alt'] ?? '',
	],
	[
		'url' => $attributes['image3Url'] ?? '',
		'alt' => $attributes['image3Alt'] ?? '',
	],
];

$image = ['url' => '', 'alt' => ''];

foreach ($image_candidates as $candidate) {
	if (!empty($candidate['url'])) {
		$image = $candidate;
		break;
	}
}

$wrapper = get_block_wrapper_attributes(['class' => 'calla-about']);
?>
<section <?php echo $wrapper; ?>>
	<div class="calla-about__inner">
		<div class="calla-about__content">
			<?php if ($title) : ?>
				<h2 class="calla-about__title"><?php echo wp_kses_post($title); ?></h2>
			<?php endif; ?>
			<?php if ($description) : ?>
				<p class="calla-about__description"><?php echo wp_kses_post($description); ?></p>
			<?php endif; ?>
		</div>

		<div class="calla-about__collage">
			<?php if (!empty($image['url'])) : ?>
				<img class="calla-about__image" src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" loading="lazy" />
			<?php else : ?>
				<div class="calla-about__image calla-about__image--placeholder" aria-hidden="true"></div>
			<?php endif; ?>
		</div>
	</div>

	<?php if ($button_label !== '') : ?>
		<div class="calla-about__actions">
			<a class="calla-outline-button" href="<?php echo esc_url($button_href); ?>">
				<?php echo esc_html($button_label); ?>
			</a>
		</div>
	<?php endif; ?>
</section>
