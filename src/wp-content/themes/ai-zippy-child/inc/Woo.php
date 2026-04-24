<?php

namespace AiZippyChild;

defined('ABSPATH') || exit;

final class Woo
{
    public static function register(): void
    {
        add_filter('get_the_archive_title', [self::class, 'filterShopArchiveTitle']);
    }

    public static function filterShopArchiveTitle(string $title): string
    {
        if (!function_exists('is_shop') || !is_shop()) {
            return $title;
        }

        if (function_exists('woocommerce_page_title')) {
            $shop_title = woocommerce_page_title(false);

            if (is_string($shop_title) && trim($shop_title) !== '') {
                return $shop_title;
            }
        }

        return preg_replace('/^Archives:\s*/i', '', $title) ?: $title;
    }
}
