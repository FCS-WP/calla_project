<?php

defined('ABSPATH') || exit;

$eyebrow = $attributes['eyebrow'] ?? '';
$heading = $attributes['heading'] ?? '';
$description = $attributes['description'] ?? '';
$description2 = $attributes['description2'] ?? '';
$pricing_title = $attributes['pricingTitle'] ?? '';
$pricing_note = $attributes['pricingNote'] ?? '';
$button_text = $attributes['buttonText'] ?? '';
$button_url = $attributes['buttonUrl'] ?? '#';
$button_href = trim($button_url) !== '' ? $button_url : '#';

$pricing_rows = [];
if (!empty($attributes['pricingRows']) && is_array($attributes['pricingRows'])) {
	foreach ($attributes['pricingRows'] as $row) {
		if (!is_array($row)) {
			continue;
		}
		$pricing_rows[] = [
			'label' => isset($row['label']) ? (string) $row['label'] : '',
			'description' => isset($row['description']) ? (string) $row['description'] : '',
			'amount' => isset($row['amount']) ? (string) $row['amount'] : '',
			'suffix' => isset($row['suffix']) ? (string) $row['suffix'] : '',
		];
	}
}

if (empty($pricing_rows)) {
	$pricing_rows = [
		[
			'label' => 'Single Session',
			'description' => '90-minute access - All facilities',
			'amount' => '$XX',
			'suffix' => '/ session',
		],
		[
			'label' => 'Day Pass',
			'description' => 'Full day access - All facilities',
			'amount' => '$XX',
			'suffix' => '/ day',
		],
		[
			'label' => 'Monthly Membership',
			'description' => 'Unlimited sessions - Priority booking',
			'amount' => '$XX',
			'suffix' => '/ mo',
		],
		[
			'label' => '10-Session Pack',
			'description' => 'Valid 3 months - Shareable with a friend',
			'amount' => '$XX',
			'suffix' => '/ pack',
		],
	];
}

$wrapper = get_block_wrapper_attributes(['class' => 'calla-recharge-info']);
?>
<section <?php echo $wrapper; ?>>
	<div class="calla-recharge-info__inner">
		<div class="calla-recharge-info__writeup">
			<?php if ($eyebrow) : ?>
				<span class="calla-recharge-info__eyebrow"><?php echo wp_kses_post($eyebrow); ?></span>
			<?php endif; ?>
			<?php if ($heading) : ?>
				<h2 class="calla-recharge-info__heading"><?php echo wp_kses_post($heading); ?></h2>
			<?php endif; ?>
			<?php if ($description) : ?>
				<p class="calla-recharge-info__description"><?php echo wp_kses_post($description); ?></p>
			<?php endif; ?>
			<?php if ($description2) : ?>
				<p class="calla-recharge-info__description2"><?php echo wp_kses_post($description2); ?></p>
			<?php endif; ?>
		</div>

		<div class="calla-recharge-info__pricing-card">
			<?php if ($pricing_title) : ?>
				<h3 class="calla-recharge-info__pricing-title"><?php echo wp_kses_post($pricing_title); ?></h3>
			<?php endif; ?>

			<?php foreach ($pricing_rows as $index => $row) : ?>
				<div class="calla-recharge-info__price-row">
					<div>
						<?php if ($row['label'] !== '') : ?>
							<p class="calla-recharge-info__price-label"><?php echo esc_html($row['label']); ?></p>
						<?php endif; ?>
						<?php if ($row['description'] !== '') : ?>
							<p class="calla-recharge-info__price-desc"><?php echo esc_html($row['description']); ?></p>
						<?php endif; ?>
					</div>
					<?php if ($row['amount'] !== '' || $row['suffix'] !== '') : ?>
						<p class="calla-recharge-info__price-amount">
							<?php echo esc_html($row['amount']); ?>
							<?php if ($row['suffix'] !== '') : ?>
								<small><?php echo esc_html($row['suffix']); ?></small>
							<?php endif; ?>
						</p>
					<?php endif; ?>
				</div>
				<?php if ($index === 1 && count($pricing_rows) > 2) : ?>
					<div class="calla-recharge-info__divider" aria-hidden="true"></div>
				<?php endif; ?>
			<?php endforeach; ?>

			<?php if ($pricing_note) : ?>
				<p class="calla-recharge-info__pricing-note"><?php echo wp_kses_post($pricing_note); ?></p>
			<?php endif; ?>

			<?php if (trim($button_text) !== '') : ?>
				<a class="calla-recharge-info__button" href="<?php echo esc_url($button_href); ?>">
					<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" focusable="false">
						<rect x="3" y="4" width="14" height="14" rx="2" />
						<line x1="8" y1="2" x2="8" y2="6" />
						<line x1="12" y1="2" x2="12" y2="6" />
						<line x1="3" y1="9" x2="17" y2="9" />
					</svg>
					<span><?php echo esc_html($button_text); ?></span>
				</a>
			<?php endif; ?>
		</div>
	</div>
</section>
