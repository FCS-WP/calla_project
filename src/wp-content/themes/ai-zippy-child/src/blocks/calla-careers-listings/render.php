<?php

defined('ABSPATH') || exit;

$contact_eyebrow = $attributes['contactEyebrow'] ?? 'Get in touch';
$contact_heading = $attributes['contactHeading'] ?? 'Interested in joining us?';
$address_label = $attributes['addressLabel'] ?? 'Our Address';
$address_text = $attributes['addressText'] ?? '';
$hours_label = $attributes['hoursLabel'] ?? 'Our Operating Hours';
$hours_text = $attributes['hoursText'] ?? '';
$email_label = $attributes['emailLabel'] ?? 'Our Email';
$email_text = $attributes['emailText'] ?? 'hello@thecallaproject.sg';
$email_url = $attributes['emailUrl'] ?? 'mailto:hello@thecallaproject.sg';
$phone_label = $attributes['phoneLabel'] ?? 'Our Contact Number';
$phone_text = $attributes['phoneText'] ?? '+65 0000 0000';
$phone_url = $attributes['phoneUrl'] ?? 'tel:+6500000000';
$empty_text = $attributes['emptyText'] ?? 'No openings at the moment. Please check back soon.';
$jobs = $attributes['jobs'] ?? [];

if (!is_array($jobs)) {
	$jobs = [];
}

$wrapper = get_block_wrapper_attributes(['class' => 'calla-careers-listings']);
?>
<section <?php echo $wrapper; ?>>
	<div class="calla-careers-listings__inner">
		<?php if (!empty($jobs)) : ?>
			<div class="calla-careers-listings__jobs">
				<?php foreach ($jobs as $job) : ?>
					<?php
					if (!is_array($job)) {
						continue;
					}

					$tag = $job['tag'] ?? '';
					$title = $job['title'] ?? '';
					$description = $job['description'] ?? '';
					$employment_type = $job['employmentType'] ?? '';
					$work_mode = $job['workMode'] ?? '';
					$apply_text = $job['applyText'] ?? 'Apply now';
					$apply_url = trim($job['applyUrl'] ?? '') !== '' ? $job['applyUrl'] : '#';
					$image_url = $job['imageUrl'] ?? '';
					$image_alt = $job['imageAlt'] ?? '';
					$image_placeholder = $job['imagePlaceholder'] ?? 'Image';
					?>
					<div class="calla-careers-listings__row">
						<div class="calla-careers-listings__image">
							<?php if ($image_url) : ?>
								<img src="<?php echo esc_url($image_url); ?>" alt="<?php echo esc_attr($image_alt); ?>">
							<?php else : ?>
								<span><?php echo esc_html($image_placeholder); ?></span>
							<?php endif; ?>
						</div>
						<a class="calla-careers-listings__job-card" href="<?php echo esc_url($apply_url); ?>">
							<?php if ($tag) : ?><span class="calla-careers-listings__job-tag"><?php echo esc_html($tag); ?></span><?php endif; ?>
							<?php if ($title) : ?><h3><?php echo wp_kses_post($title); ?></h3><?php endif; ?>
							<?php if ($description) : ?><p><?php echo wp_kses_post($description); ?></p><?php endif; ?>
							<div class="calla-careers-listings__job-meta">
								<?php if ($employment_type) : ?>
									<span class="calla-careers-listings__job-meta-item">
										<svg viewBox="0 0 24 24" fill="none" stroke-width="1.6" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
										<span><?php echo esc_html($employment_type); ?></span>
									</span>
								<?php endif; ?>
								<?php if ($work_mode) : ?>
									<span class="calla-careers-listings__job-meta-item">
										<svg viewBox="0 0 24 24" fill="none" stroke-width="1.6" aria-hidden="true" focusable="false"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
										<span><?php echo esc_html($work_mode); ?></span>
									</span>
								<?php endif; ?>
							</div>
							<?php if ($apply_text) : ?>
								<span class="calla-careers-listings__job-apply">
									<span><?php echo esc_html($apply_text); ?></span>
									<svg viewBox="0 0 20 20" fill="none" stroke-width="1.5" aria-hidden="true" focusable="false"><line x1="3" y1="10" x2="17" y2="10"/><polyline points="12 5 17 10 12 15"/></svg>
								</span>
							<?php endif; ?>
						</a>
					</div>
				<?php endforeach; ?>
			</div>

			<div class="calla-careers-listings__contact-card">
				<div>
					<?php if ($contact_eyebrow) : ?><span class="calla-careers-listings__contact-eyebrow"><?php echo wp_kses_post($contact_eyebrow); ?></span><?php endif; ?>
					<?php if ($contact_heading) : ?><h3 class="calla-careers-listings__contact-heading"><?php echo wp_kses_post($contact_heading); ?></h3><?php endif; ?>
				</div>

				<div class="calla-careers-listings__contact-divider"></div>

				<div class="calla-careers-listings__contact-block">
					<?php if ($address_label) : ?><label><?php echo wp_kses_post($address_label); ?></label><?php endif; ?>
					<?php if ($address_text) : ?><p><?php echo wp_kses_post($address_text); ?></p><?php endif; ?>
				</div>

				<div class="calla-careers-listings__contact-block">
					<?php if ($hours_label) : ?><label><?php echo wp_kses_post($hours_label); ?></label><?php endif; ?>
					<?php if ($hours_text) : ?><p><?php echo wp_kses_post($hours_text); ?></p><?php endif; ?>
				</div>

				<div class="calla-careers-listings__contact-block">
					<?php if ($email_label) : ?><label><?php echo wp_kses_post($email_label); ?></label><?php endif; ?>
					<?php if ($email_text) : ?><a href="<?php echo esc_url($email_url ?: '#'); ?>"><?php echo esc_html($email_text); ?></a><?php endif; ?>
				</div>

				<div class="calla-careers-listings__contact-block">
					<?php if ($phone_label) : ?><label><?php echo wp_kses_post($phone_label); ?></label><?php endif; ?>
					<?php if ($phone_text) : ?><a href="<?php echo esc_url($phone_url ?: '#'); ?>"><?php echo esc_html($phone_text); ?></a><?php endif; ?>
				</div>
			</div>
		<?php else : ?>
			<div class="calla-careers-listings__empty"><?php echo esc_html($empty_text); ?></div>
		<?php endif; ?>
	</div>
</section>
