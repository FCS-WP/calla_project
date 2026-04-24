<?php

defined('ABSPATH') || exit;

$heading = $attributes['heading'] ?? '';
$feature_image_url = $attributes['featureImageUrl'] ?? '';
$feature_image_alt = $attributes['featureImageAlt'] ?? '';
$more_text = $attributes['moreText'] ?? '';
$more_url = $attributes['moreUrl'] ?? '#';
$more_label = trim(wp_strip_all_tags($more_text));
$more_href = trim($more_url) !== '' ? $more_url : '#';

$events = [
	[
		'title' => $attributes['event1Title'] ?? '',
		'body' => $attributes['event1Body'] ?? '',
		'schedule' => $attributes['event1Schedule'] ?? ($attributes['event1Meta'] ?? ''),
		'host' => $attributes['event1Host'] ?? '',
	],
	[
		'title' => $attributes['event2Title'] ?? '',
		'body' => $attributes['event2Body'] ?? '',
		'schedule' => $attributes['event2Schedule'] ?? ($attributes['event2Meta'] ?? ''),
		'host' => $attributes['event2Host'] ?? '',
	],
	[
		'title' => $attributes['event3Title'] ?? '',
		'body' => $attributes['event3Body'] ?? '',
		'schedule' => $attributes['event3Schedule'] ?? ($attributes['event3Meta'] ?? ''),
		'host' => $attributes['event3Host'] ?? '',
	],
];

$wrapper = get_block_wrapper_attributes(['class' => 'calla-events']);
?>
<section <?php echo $wrapper; ?>>
	<div class="calla-events__inner">
		<?php if ($heading) : ?>
			<h2 class="calla-events__heading"><?php echo wp_kses_post($heading); ?></h2>
		<?php endif; ?>

		<div class="calla-events__grid">
			<div class="calla-events__feature-wrap">
				<?php if ($feature_image_url) : ?>
					<img class="calla-events__feature" src="<?php echo esc_url($feature_image_url); ?>" alt="<?php echo esc_attr($feature_image_alt); ?>" loading="lazy" />
				<?php else : ?>
					<div class="calla-events__feature calla-events__feature--placeholder" aria-hidden="true"></div>
				<?php endif; ?>
			</div>

			<div class="calla-events__cards">
				<?php foreach ($events as $event) : ?>
					<article class="calla-events__card">
						<?php if (!empty($event['title'])) : ?>
							<h3 class="calla-events__card-title"><?php echo wp_kses_post($event['title']); ?></h3>
						<?php endif; ?>
						<?php if (!empty($event['body'])) : ?>
							<p class="calla-events__card-body"><?php echo wp_kses_post($event['body']); ?></p>
						<?php endif; ?>
						<div class="calla-events__meta">
							<?php if (!empty($event['schedule'])) : ?>
								<p class="calla-events__meta-item">
									<span class="calla-events__meta-icon" aria-hidden="true">📅</span>
									<span class="calla-events__meta-text"><?php echo wp_kses_post($event['schedule']); ?></span>
								</p>
							<?php endif; ?>
							<?php if (!empty($event['host'])) : ?>
								<p class="calla-events__meta-item">
									<span class="calla-events__meta-icon" aria-hidden="true">👤</span>
									<span class="calla-events__meta-text"><?php echo wp_kses_post($event['host']); ?></span>
								</p>
							<?php endif; ?>
						</div>
					</article>
				<?php endforeach; ?>
			</div>
		</div>

		<?php if ($more_label !== '') : ?>
			<div class="calla-events__more-wrap">
				<a class="calla-outline-button" href="<?php echo esc_url($more_href); ?>">
					<?php echo esc_html($more_label); ?>
				</a>
			</div>
		<?php endif; ?>
	</div>
</section>
