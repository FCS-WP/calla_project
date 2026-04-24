<?php

defined('ABSPATH') || exit;

$intro_line_1 = $attributes['introLine1'] ?? '';
$intro_line_2 = $attributes['introLine2'] ?? '';
$note_text = $attributes['noteText'] ?? '';
$note_link_text = $attributes['noteLinkText'] ?? '';
$note_link_url = $attributes['noteLinkUrl'] ?? '#';
$note_link_href = trim($note_link_url) !== '' ? $note_link_url : '#';

$packages = [];
if (!empty($attributes['packages']) && is_array($attributes['packages'])) {
	foreach ($attributes['packages'] as $package) {
		if (!is_array($package)) {
			continue;
		}

		$features_text = isset($package['featuresText']) ? (string) $package['featuresText'] : '';
		$features = array_values(
			array_filter(
				array_map(
					static fn($line): string => trim((string) $line),
					explode("\n", $features_text)
				),
				static fn(string $line): bool => $line !== ''
			)
		);

		$packages[] = [
			'eyebrow' => isset($package['eyebrow']) ? (string) $package['eyebrow'] : '',
			'badge' => isset($package['badge']) ? (string) $package['badge'] : '',
			'name' => isset($package['name']) ? (string) $package['name'] : '',
			'tagline' => isset($package['tagline']) ? (string) $package['tagline'] : '',
			'price_prefix' => isset($package['pricePrefix']) ? (string) $package['pricePrefix'] : '$',
			'price_value' => isset($package['priceValue']) ? (string) $package['priceValue'] : '',
			'price_period' => isset($package['pricePeriod']) ? (string) $package['pricePeriod'] : '',
			'features' => $features,
			'button_text' => isset($package['buttonText']) ? (string) $package['buttonText'] : '',
			'button_url' => isset($package['buttonUrl']) ? (string) $package['buttonUrl'] : '#',
			'is_featured' => !empty($package['isFeatured']),
		];
	}
}

$wrapper = get_block_wrapper_attributes(['class' => 'calla-pricing-packages']);
?>
<section <?php echo $wrapper; ?>>
	<div class="calla-pricing-packages__inner">
		<div class="calla-pricing-packages__intro">
			<?php if ($intro_line_1 !== '') : ?>
				<p class="calla-pricing-packages__intro-line1"><?php echo wp_kses_post($intro_line_1); ?></p>
			<?php endif; ?>
			<?php if ($intro_line_2 !== '') : ?>
				<p class="calla-pricing-packages__intro-line2"><?php echo wp_kses_post($intro_line_2); ?></p>
			<?php endif; ?>
		</div>

		<?php if (!empty($packages)) : ?>
			<div class="calla-pricing-packages__grid">
				<?php foreach ($packages as $package) : ?>
					<article class="calla-pricing-packages__card<?php echo $package['is_featured'] ? ' is-featured' : ''; ?>">
						<?php if ($package['badge'] !== '') : ?>
							<span class="calla-pricing-packages__badge"><?php echo esc_html($package['badge']); ?></span>
						<?php endif; ?>
						<?php if ($package['eyebrow'] !== '') : ?>
							<span class="calla-pricing-packages__eyebrow"><?php echo esc_html($package['eyebrow']); ?></span>
						<?php endif; ?>
						<?php if ($package['name'] !== '') : ?>
							<h3 class="calla-pricing-packages__name"><?php echo esc_html($package['name']); ?></h3>
						<?php endif; ?>
						<?php if ($package['tagline'] !== '') : ?>
							<p class="calla-pricing-packages__tagline"><?php echo esc_html($package['tagline']); ?></p>
						<?php endif; ?>

						<div class="calla-pricing-packages__price-wrap">
							<p class="calla-pricing-packages__price">
								<sup><?php echo esc_html($package['price_prefix']); ?></sup>
								<?php echo esc_html($package['price_value']); ?>
							</p>
						</div>
						<?php if ($package['price_period'] !== '') : ?>
							<p class="calla-pricing-packages__period"><?php echo esc_html($package['price_period']); ?></p>
						<?php endif; ?>
						<div class="calla-pricing-packages__divider" aria-hidden="true"></div>

						<?php if (!empty($package['features'])) : ?>
							<ul class="calla-pricing-packages__items">
								<?php foreach ($package['features'] as $feature) : ?>
									<li class="calla-pricing-packages__item">
										<svg viewBox="0 0 24 24" fill="none" stroke-width="2" aria-hidden="true" focusable="false">
											<polyline points="20 6 9 17 4 12"></polyline>
										</svg>
										<span><?php echo esc_html($feature); ?></span>
									</li>
								<?php endforeach; ?>
							</ul>
						<?php endif; ?>

						<?php if ($package['button_text'] !== '') : ?>
							<?php $button_href = trim($package['button_url']) !== '' ? $package['button_url'] : '#'; ?>
							<a class="calla-pricing-packages__button" href="<?php echo esc_url($button_href); ?>">
								<?php echo esc_html($package['button_text']); ?>
								<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" focusable="false">
									<line x1="3" y1="10" x2="17" y2="10"></line>
									<polyline points="12 5 17 10 12 15"></polyline>
								</svg>
							</a>
						<?php endif; ?>
					</article>
				<?php endforeach; ?>
			</div>
		<?php endif; ?>

		<?php if ($note_text !== '' || $note_link_text !== '') : ?>
			<p class="calla-pricing-packages__note">
				<?php if ($note_text !== '') : ?>
					<span><?php echo wp_kses_post($note_text); ?></span>
				<?php endif; ?>
				<?php if ($note_link_text !== '') : ?>
					<a class="calla-pricing-packages__note-link" href="<?php echo esc_url($note_link_href); ?>"><?php echo esc_html($note_link_text); ?></a>
				<?php endif; ?>
			</p>
		<?php endif; ?>
	</div>
</section>
