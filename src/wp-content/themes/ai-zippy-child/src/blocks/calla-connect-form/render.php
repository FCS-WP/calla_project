<?php

defined('ABSPATH') || exit;

$eyebrow = $attributes['eyebrow'] ?? 'Get in touch';
$heading = $attributes['heading'] ?? 'Have any questions?';
$button_text = $attributes['buttonText'] ?? 'Send Message';
$success_heading = $attributes['successHeading'] ?? 'Message sent!';
$success_message = $attributes['successMessage'] ?? '';
$email_heading = $attributes['emailHeading'] ?? 'Email us';
$email = $attributes['email'] ?? '';
$social_heading = $attributes['socialHeading'] ?? 'Follow along';
$social1_text = $attributes['social1Text'] ?? '';
$social1_url = trim($attributes['social1Url'] ?? '') !== '' ? $attributes['social1Url'] : '#';
$social2_text = $attributes['social2Text'] ?? '';
$social2_url = trim($attributes['social2Url'] ?? '') !== '' ? $attributes['social2Url'] : '#';
$visit_heading = $attributes['visitHeading'] ?? 'Visit us';
$visit_text = $attributes['visitText'] ?? '';
$email_href = $email ? 'mailto:' . sanitize_email($email) : '#';

$wrapper = get_block_wrapper_attributes(['class' => 'calla-connect-form']);
?>
<section <?php echo $wrapper; ?>>
	<div class="calla-connect-form__inner">
		<div class="calla-connect-form__header">
			<?php if ($eyebrow) : ?><p><?php echo wp_kses_post($eyebrow); ?></p><?php endif; ?>
			<?php if ($heading) : ?><h2><?php echo wp_kses_post($heading); ?></h2><?php endif; ?>
		</div>

		<div class="calla-connect-form__layout">
			<div>
				<form class="calla-connect-form__form" novalidate>
					<div class="calla-connect-form__field-row">
						<div class="calla-connect-form__field">
							<label for="calla-connect-name"><?php esc_html_e('Name', 'ai-zippy-child'); ?></label>
							<input type="text" id="calla-connect-name" name="name" placeholder="<?php esc_attr_e('Your full name', 'ai-zippy-child'); ?>" required>
						</div>
						<div class="calla-connect-form__field">
							<label for="calla-connect-phone"><?php esc_html_e('Phone Number', 'ai-zippy-child'); ?></label>
							<input type="tel" id="calla-connect-phone" name="phone" placeholder="+65 9000 0000">
						</div>
					</div>

					<div class="calla-connect-form__field">
						<label for="calla-connect-email"><?php esc_html_e('Email', 'ai-zippy-child'); ?></label>
						<input type="email" id="calla-connect-email" name="email" placeholder="hello@email.com" required>
					</div>

					<div class="calla-connect-form__field">
						<label for="calla-connect-message"><?php esc_html_e('Leave your message here', 'ai-zippy-child'); ?></label>
						<textarea id="calla-connect-message" name="message" placeholder="<?php esc_attr_e('Tell us how we can help...', 'ai-zippy-child'); ?>" required></textarea>
					</div>

					<button type="submit" class="calla-connect-form__button">
						<span><?php echo esc_html($button_text); ?></span>
						<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" focusable="false"><line x1="3" y1="10" x2="17" y2="10"/><polyline points="12 5 17 10 12 15"/></svg>
					</button>
				</form>

				<div class="calla-connect-form__success">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="10"/><polyline points="20 6 9 17 4 12"/></svg>
					<?php if ($success_heading) : ?><h3><?php echo wp_kses_post($success_heading); ?></h3><?php endif; ?>
					<?php if ($success_message) : ?><p><?php echo wp_kses_post($success_message); ?></p><?php endif; ?>
				</div>
			</div>

			<div class="calla-connect-form__aside">
				<div class="calla-connect-form__aside-block">
					<?php if ($email_heading) : ?><h4><?php echo wp_kses_post($email_heading); ?></h4><?php endif; ?>
					<?php if ($email) : ?><a href="<?php echo esc_url($email_href); ?>"><?php echo esc_html($email); ?></a><?php endif; ?>
				</div>
				<div class="calla-connect-form__aside-divider" aria-hidden="true"></div>
				<div class="calla-connect-form__aside-block">
					<?php if ($social_heading) : ?><h4><?php echo wp_kses_post($social_heading); ?></h4><?php endif; ?>
					<?php if ($social1_text) : ?><a href="<?php echo esc_url($social1_url); ?>"><?php echo esc_html($social1_text); ?></a><?php endif; ?>
					<?php if ($social2_text) : ?><a href="<?php echo esc_url($social2_url); ?>"><?php echo esc_html($social2_text); ?></a><?php endif; ?>
				</div>
				<div class="calla-connect-form__aside-divider" aria-hidden="true"></div>
				<div class="calla-connect-form__aside-block">
					<?php if ($visit_heading) : ?><h4><?php echo wp_kses_post($visit_heading); ?></h4><?php endif; ?>
					<?php if ($visit_text) : ?><p><?php echo wp_kses_post($visit_text); ?></p><?php endif; ?>
				</div>
			</div>
		</div>
	</div>
</section>
