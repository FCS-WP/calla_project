<?php

defined('ABSPATH') || exit;

$eyebrow = $attributes['eyebrow'] ?? '';
$heading = $attributes['heading'] ?? '';
$description = $attributes['description'] ?? '';
$hours_title = $attributes['hoursTitle'] ?? '';
$menu_title = $attributes['menuTitle'] ?? '';
$menu_description = $attributes['menuDescription'] ?? '';
$menu_button_text = $attributes['menuButtonText'] ?? '';
$menu_button_url = $attributes['menuButtonUrl'] ?? '#';
$menu_href = trim($menu_button_url) !== '' ? $menu_button_url : '#';

$hours_rows = [
	[
		'day' => $attributes['hoursDay1'] ?? '',
		'time' => $attributes['hoursTime1'] ?? '',
	],
	[
		'day' => $attributes['hoursDay2'] ?? '',
		'time' => $attributes['hoursTime2'] ?? '',
	],
	[
		'day' => $attributes['hoursDay3'] ?? '',
		'time' => $attributes['hoursTime3'] ?? '',
	],
	[
		'day' => $attributes['hoursDay4'] ?? '',
		'time' => $attributes['hoursTime4'] ?? '',
	],
];

$wrapper = get_block_wrapper_attributes(['class' => 'calla-nourish-info']);
?>
<section <?php echo $wrapper; ?>>
	<div class="calla-nourish-info__inner">
		<div class="calla-nourish-info__writeup">
			<?php if ($eyebrow) : ?>
				<span class="calla-nourish-info__eyebrow"><?php echo wp_kses_post($eyebrow); ?></span>
			<?php endif; ?>
			<?php if ($heading) : ?>
				<h2 class="calla-nourish-info__heading"><?php echo wp_kses_post($heading); ?></h2>
			<?php endif; ?>
			<?php if ($description) : ?>
				<p class="calla-nourish-info__description"><?php echo wp_kses_post($description); ?></p>
			<?php endif; ?>
		</div>

		<div class="calla-nourish-info__hours-card">
			<?php if ($hours_title) : ?>
				<h3 class="calla-nourish-info__hours-title"><?php echo wp_kses_post($hours_title); ?></h3>
			<?php endif; ?>

			<table class="calla-nourish-info__hours-table">
				<tbody>
					<?php foreach ($hours_rows as $row) : ?>
						<?php if (!empty($row['day']) || !empty($row['time'])) : ?>
							<tr>
								<td><?php echo esc_html($row['day']); ?></td>
								<td><?php echo esc_html($row['time']); ?></td>
							</tr>
						<?php endif; ?>
					<?php endforeach; ?>
				</tbody>
			</table>

			<div class="calla-nourish-info__divider" aria-hidden="true"></div>

			<div class="calla-nourish-info__menu">
				<?php if ($menu_title) : ?>
					<h3 class="calla-nourish-info__menu-title"><?php echo wp_kses_post($menu_title); ?></h3>
				<?php endif; ?>
				<?php if ($menu_description) : ?>
					<p class="calla-nourish-info__menu-description"><?php echo wp_kses_post($menu_description); ?></p>
				<?php endif; ?>
				<?php if ($menu_button_text) : ?>
					<a class="calla-nourish-info__button" href="<?php echo esc_url($menu_href); ?>">
						<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" focusable="false">
							<path d="M10 3v10M6 9l4 4 4-4" />
							<line x1="3" y1="17" x2="17" y2="17" />
						</svg>
						<span><?php echo esc_html($menu_button_text); ?></span>
					</a>
				<?php endif; ?>
			</div>
		</div>
	</div>
</section>
