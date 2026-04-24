<?php

defined('ABSPATH') || exit;

$tagline_primary = $attributes['taglinePrimary'] ?? 'Interested? Drop us a text!';
$tagline_secondary = $attributes['taglineSecondary'] ?? 'Check out our upcoming events and past events here.';
$all_label = $attributes['allLabel'] ?? 'All Events';
$upcoming_label = $attributes['upcomingLabel'] ?? 'Upcoming';
$past_label = $attributes['pastLabel'] ?? 'Past Events';
$empty_text = $attributes['emptyText'] ?? 'No events found.';
$events = $attributes['events'] ?? [];

if (!is_array($events) || empty($events)) {
	$events = [];
}

$wrapper = get_block_wrapper_attributes(['class' => 'calla-events-listings']);
?>
<section <?php echo $wrapper; ?>>
	<div class="calla-events-listings__inner">
		<div class="calla-events-listings__tagline">
			<?php if ($tagline_primary) : ?><p><?php echo wp_kses_post($tagline_primary); ?></p><?php endif; ?>
			<?php if ($tagline_secondary) : ?><p><?php echo wp_kses_post($tagline_secondary); ?></p><?php endif; ?>
		</div>

		<div class="calla-events-listings__tabs">
			<button class="calla-events-listings__tab is-active" type="button" data-filter="all"><?php echo esc_html($all_label); ?></button>
			<button class="calla-events-listings__tab" type="button" data-filter="upcoming"><?php echo esc_html($upcoming_label); ?></button>
			<button class="calla-events-listings__tab" type="button" data-filter="past"><?php echo esc_html($past_label); ?></button>
		</div>

		<div class="calla-events-listings__grid">
			<?php foreach ($events as $event) : ?>
				<?php
				if (!is_array($event)) {
					continue;
				}

				$status = ($event['status'] ?? 'upcoming') === 'past' ? 'past' : 'upcoming';
				$badge = $status === 'past' ? __('Past', 'ai-zippy-child') : __('Upcoming', 'ai-zippy-child');
				$link_url = trim($event['linkUrl'] ?? '') !== '' ? $event['linkUrl'] : '#';
				$image_url = $event['imageUrl'] ?? '';
				$image_alt = $event['imageAlt'] ?? '';
				$date = $event['date'] ?? '';
				$title = $event['title'] ?? '';
				$description = $event['description'] ?? '';
				$instructor = $event['instructor'] ?? '';
				$action_text = $event['actionText'] ?? ($status === 'past' ? __('View recap', 'ai-zippy-child') : __('Learn more', 'ai-zippy-child'));
				?>
				<a class="calla-events-listings__card" href="<?php echo esc_url($link_url); ?>" data-status="<?php echo esc_attr($status); ?>">
					<div class="calla-events-listings__image">
						<?php if ($image_url) : ?>
							<img src="<?php echo esc_url($image_url); ?>" alt="<?php echo esc_attr($image_alt); ?>">
						<?php else : ?>
							<span class="calla-events-listings__image-placeholder"><?php esc_html_e('Event Image', 'ai-zippy-child'); ?></span>
						<?php endif; ?>
						<span class="calla-events-listings__badge calla-events-listings__badge--<?php echo esc_attr($status); ?>"><?php echo esc_html($badge); ?></span>
					</div>
					<div class="calla-events-listings__body">
						<?php if ($date) : ?>
							<div class="calla-events-listings__date">
								<svg viewBox="0 0 24 24" fill="none" stroke-width="1.6" aria-hidden="true" focusable="false"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="16" y1="2" x2="16" y2="6"/></svg>
								<span><?php echo esc_html($date); ?></span>
							</div>
						<?php endif; ?>
						<?php if ($title) : ?><h3><?php echo wp_kses_post($title); ?></h3><?php endif; ?>
						<?php if ($description) : ?><p><?php echo wp_kses_post($description); ?></p><?php endif; ?>
						<?php if ($instructor) : ?>
							<div class="calla-events-listings__meta">
								<svg viewBox="0 0 24 24" fill="none" stroke-width="1.6" aria-hidden="true" focusable="false"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
								<span><?php echo esc_html($instructor); ?></span>
							</div>
						<?php endif; ?>
						<?php if ($action_text) : ?>
							<span class="calla-events-listings__arrow">
								<?php echo esc_html($action_text); ?>
								<svg viewBox="0 0 20 20" fill="none" stroke-width="1.5" aria-hidden="true" focusable="false"><line x1="3" y1="10" x2="17" y2="10"/><polyline points="12 5 17 10 12 15"/></svg>
							</span>
						<?php endif; ?>
					</div>
				</a>
			<?php endforeach; ?>
			<div class="calla-events-listings__empty" hidden><?php echo esc_html($empty_text); ?></div>
		</div>
	</div>
</section>
