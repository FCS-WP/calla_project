<?php

namespace AiZippyChild;

defined('ABSPATH') || exit;

final class Blocks
{
    /**
     * @var array<int, array{slug: string, title: string, icon: string}>
     */
    private static array $custom_categories = [
        [
            'slug' => 'calla-home',
            'title' => 'Calla Home',
            'icon' => 'layout',
        ],
        [
            'slug' => 'calla-nourish',
            'title' => 'Calla Nourish',
            'icon' => 'carrot',
        ],
        [
            'slug' => 'calla-recharge',
            'title' => 'Calla Recharge',
            'icon' => 'performance',
        ],
        [
            'slug' => 'calla-pricing',
            'title' => 'Calla Pricing',
            'icon' => 'money-alt',
        ],
        [
            'slug' => 'calla-about',
            'title' => 'Calla About',
            'icon' => 'groups',
        ],
        [
            'slug' => 'calla-connect',
            'title' => 'Calla Connect',
            'icon' => 'email',
        ],
        [
            'slug' => 'calla-events-page',
            'title' => 'Calla Events',
            'icon' => 'calendar-alt',
        ],
        [
            'slug' => 'calla-first-time',
            'title' => 'Calla First Time',
            'icon' => 'star-half',
        ],
        [
            'slug' => 'calla-faqs',
            'title' => 'Calla FAQs',
            'icon' => 'editor-help',
        ],
        [
            'slug' => 'calla-careers',
            'title' => 'Calla Careers',
            'icon' => 'businessperson',
        ],
    ];

    public static function register(): void
    {
        add_action('init', [self::class, 'registerBuiltBlocks']);
        add_filter('block_categories_all', [self::class, 'registerBlockCategories']);
    }

    public static function registerBuiltBlocks(): void
    {
        $blocks_dir = AI_ZIPPY_CHILD_THEME_DIR . '/assets/blocks';

        if (!is_dir($blocks_dir)) {
            return;
        }

        foreach (glob($blocks_dir . '/*/block.json') as $block_json) {
            register_block_type(dirname($block_json));
        }
    }

    /**
     * @param array<int, array<string, mixed>> $categories
     * @return array<int, array<string, mixed>>
     */
    public static function registerBlockCategories(array $categories): array
    {
        $custom_slugs = array_column(self::$custom_categories, 'slug');

        $categories = array_values(
            array_filter(
                $categories,
                static function (array $category) use ($custom_slugs): bool {
                    $slug = $category['slug'] ?? '';
                    return !in_array($slug, $custom_slugs, true);
                }
            )
        );

        $localized_custom = array_map(
            static function (array $category): array {
                return [
                    'slug' => $category['slug'],
                    'title' => __($category['title'], 'ai-zippy-child'),
                    'icon' => $category['icon'],
                ];
            },
            self::$custom_categories
        );

        return array_merge($localized_custom, $categories);
    }
}
