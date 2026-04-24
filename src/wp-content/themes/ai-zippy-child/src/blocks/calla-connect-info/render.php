<?php

defined('ABSPATH') || exit;

$address_heading = $attributes['addressHeading'] ?? 'Our Address';
$address = $attributes['address'] ?? '';
$map_link_text = $attributes['mapLinkText'] ?? 'View on Google Maps';
$map_link_url = $attributes['mapLinkUrl'] ?? '#map';
$hours_heading = $attributes['hoursHeading'] ?? 'Opening Hours';
$map_href = trim($map_link_url) !== '' ? $map_link_url : '#';
$hours_rows = [
	['day' => $attributes['hoursDay1'] ?? '', 'time' => $attributes['hoursTime1'] ?? ''],
	['day' => $attributes['hoursDay2'] ?? '', 'time' => $attributes['hoursTime2'] ?? ''],
	['day' => $attributes['hoursDay3'] ?? '', 'time' => $attributes['hoursTime3'] ?? ''],
	['day' => $attributes['hoursDay4'] ?? '', 'time' => $attributes['hoursTime4'] ?? ''],
];

$wrapper = get_block_wrapper_attributes(['class' => 'calla-connect-info']);
?>
<section <?php echo $wrapper; ?>>
	<div class="calla-connect-info__band">
		<div class="calla-connect-info__cell">
			<?php if ($address_heading) : ?>
				<h3><?php echo wp_kses_post($address_heading); ?></h3>
			<?php endif; ?>
			<?php if ($address) : ?>
				<address><?php echo wp_kses_post($address); ?></address>
			<?php endif; ?>
			<?php if ($map_link_text) : ?>
				<a class="calla-connect-info__map-link" href="<?php echo esc_url($map_href); ?>">
					<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true" focusable="false"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
					<span><?php echo esc_html($map_link_text); ?></span>
				</a>
			<?php endif; ?>
		</div>

		<div class="calla-connect-info__cell">
			<?php if ($hours_heading) : ?>
				<h3><?php echo wp_kses_post($hours_heading); ?></h3>
			<?php endif; ?>
			<div class="calla-connect-info__hours">
				<?php foreach ($hours_rows as $row) : ?>
					<?php if (!empty($row['day']) || !empty($row['time'])) : ?>
						<div class="calla-connect-info__hours-row">
							<span><?php echo esc_html($row['day']); ?></span>
							<span><?php echo esc_html($row['time']); ?></span>
						</div>
					<?php endif; ?>
				<?php endforeach; ?>
			</div>
		</div>
	</div>
</section>
