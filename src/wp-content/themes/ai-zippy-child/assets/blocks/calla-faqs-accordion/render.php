<?php

defined('ABSPATH') || exit;

$intro_heading = $attributes['introHeading'] ?? 'Have questions?';
$intro_text = $attributes['introText'] ?? 'Below are some of our FAQs to help get you started!';
$cta_heading = $attributes['ctaHeading'] ?? 'Still have questions?';
$cta_text = $attributes['ctaText'] ?? 'We\'d love to hear from you.';
$cta_button_text = $attributes['ctaButtonText'] ?? 'Get in touch';
$cta_button_url = $attributes['ctaButtonUrl'] ?? 'connect.html';
$faqs = $attributes['faqs'] ?? [];

if (!is_array($faqs) || empty($faqs)) {
	$faqs = [
		[
			'question' => 'Question 1',
			'answer' => 'Answer 1',
		],
	];
}

$wrapper = get_block_wrapper_attributes(['class' => 'calla-faqs-accordion']);
?>
<section <?php echo $wrapper; ?>>
	<div class="calla-faqs-accordion__inner">
		<div class="calla-faqs-accordion__intro">
			<?php if ($intro_heading) : ?><h2><?php echo wp_kses_post($intro_heading); ?></h2><?php endif; ?>
			<?php if ($intro_text) : ?><p><?php echo wp_kses_post($intro_text); ?></p><?php endif; ?>
		</div>

		<div class="calla-faqs-accordion__list">
			<?php foreach ($faqs as $index => $faq) : ?>
				<?php
				if (!is_array($faq)) {
					continue;
				}

				$question = $faq['question'] ?? '';
				$answer = $faq['answer'] ?? '';
				$is_open = $index === 0;
				?>
				<div class="calla-faqs-accordion__item<?php echo $is_open ? ' is-open' : ''; ?>">
					<button class="calla-faqs-accordion__question" type="button" aria-expanded="<?php echo $is_open ? 'true' : 'false'; ?>">
						<span><?php echo wp_kses_post($question); ?></span>
						<svg class="calla-faqs-accordion__chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true" focusable="false"><polyline points="6 9 12 15 18 9"/></svg>
					</button>
					<div class="calla-faqs-accordion__answer"<?php echo $is_open ? '' : ' hidden'; ?>>
						<div class="calla-faqs-accordion__answer-inner">
							<?php echo wp_kses_post(wpautop($answer)); ?>
						</div>
					</div>
				</div>
			<?php endforeach; ?>
		</div>

		<div class="calla-faqs-accordion__cta">
			<p class="calla-faqs-accordion__cta-copy">
				<?php if ($cta_heading) : ?><strong><?php echo wp_kses_post($cta_heading); ?></strong><?php endif; ?>
				<?php if ($cta_heading && $cta_text) : ?><br><?php endif; ?>
				<?php if ($cta_text) : ?><span><?php echo wp_kses_post($cta_text); ?></span><?php endif; ?>
			</p>
			<?php if ($cta_button_text) : ?>
				<a class="calla-faqs-accordion__btn" href="<?php echo esc_url($cta_button_url ?: '#'); ?>">
					<span><?php echo wp_kses_post($cta_button_text); ?></span>
					<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" focusable="false"><line x1="3" y1="10" x2="17" y2="10"/><polyline points="12 5 17 10 12 15"/></svg>
				</a>
			<?php endif; ?>
		</div>
	</div>
</section>
