<?php

namespace AiZippyChild;

defined('ABSPATH') || exit;

final class Assets
{
    private const FANCYBOX_VERSION = '3.5.7';
    private const FANCYBOX_CSS = 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.css';
    private const FANCYBOX_JS = 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js';
    private const THEME_FONTS_CSS = 'https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700&family=Montserrat:wght@400;500;600;700&display=swap';

    public static function register(): void
    {
        add_action('wp_enqueue_scripts', [self::class, 'enqueueStyles'], 20);
        add_action('wp_enqueue_scripts', [self::class, 'enqueueFrontendScripts'], 20);
        add_action('enqueue_block_assets', [self::class, 'enqueueEditorPreviewStyles'], 20);
    }

    public static function enqueueStyles(): void
    {
        if (is_admin()) {
            return;
        }

        self::enqueueStyleAssets();
        self::enqueueFrontendTypographyStyles();
    }

    private static function enqueueStyleAssets(): void
    {
        $child_css = AI_ZIPPY_CHILD_THEME_DIR . '/assets/dist/css/style.css';
        $block_reset_css = AI_ZIPPY_CHILD_THEME_DIR . '/assets/css/block-reset.css';
        $components_css = AI_ZIPPY_CHILD_THEME_DIR . '/assets/css/components.css';
        $header_css = AI_ZIPPY_CHILD_THEME_DIR . '/assets/css/header.css';
        $footer_css = AI_ZIPPY_CHILD_THEME_DIR . '/assets/css/footer.css';
        $theme_overrides_css = AI_ZIPPY_CHILD_THEME_DIR . '/style.css';
        $base_deps = wp_style_is('ai-zippy-theme-css-0', 'registered') ? ['ai-zippy-theme-css-0'] : [];

        self::enqueueThemeFonts();

        if (file_exists($child_css)) {
            wp_enqueue_style(
                'ai-zippy-child-style',
                AI_ZIPPY_CHILD_THEME_URI . '/assets/dist/css/style.css',
                array_merge($base_deps, ['ai-zippy-child-theme-fonts']),
                filemtime($child_css)
            );
        }

        if (file_exists($block_reset_css)) {
            $reset_deps = $base_deps;

            if (file_exists($child_css)) {
                $reset_deps[] = 'ai-zippy-child-style';
            } else {
                $reset_deps[] = 'ai-zippy-child-theme-fonts';
            }

            wp_enqueue_style(
                'ai-zippy-child-block-reset',
                AI_ZIPPY_CHILD_THEME_URI . '/assets/css/block-reset.css',
                $reset_deps,
                filemtime($block_reset_css)
            );
        }

        if (file_exists($components_css)) {
            $components_deps = $base_deps;

            if (file_exists($block_reset_css)) {
                $components_deps = ['ai-zippy-child-block-reset'];
            } elseif (file_exists($child_css)) {
                $components_deps = ['ai-zippy-child-style'];
            }

            wp_enqueue_style(
                'ai-zippy-child-components',
                AI_ZIPPY_CHILD_THEME_URI . '/assets/css/components.css',
                $components_deps,
                filemtime($components_css)
            );
        }

        if (file_exists($header_css)) {
            $header_deps = $base_deps;

            if (file_exists($components_css)) {
                $header_deps = ['ai-zippy-child-components'];
            } elseif (file_exists($block_reset_css)) {
                $header_deps = ['ai-zippy-child-block-reset'];
            } elseif (file_exists($child_css)) {
                $header_deps = ['ai-zippy-child-style'];
            }

            wp_enqueue_style(
                'ai-zippy-child-header',
                AI_ZIPPY_CHILD_THEME_URI . '/assets/css/header.css',
                $header_deps,
                filemtime($header_css)
            );
        }

        if (file_exists($footer_css)) {
            $footer_deps = $base_deps;

            if (file_exists($header_css)) {
                $footer_deps = ['ai-zippy-child-header'];
            } elseif (file_exists($components_css)) {
                $footer_deps = ['ai-zippy-child-components'];
            } elseif (file_exists($block_reset_css)) {
                $footer_deps = ['ai-zippy-child-block-reset'];
            } elseif (file_exists($child_css)) {
                $footer_deps = ['ai-zippy-child-style'];
            }

            wp_enqueue_style(
                'ai-zippy-child-footer',
                AI_ZIPPY_CHILD_THEME_URI . '/assets/css/footer.css',
                $footer_deps,
                filemtime($footer_css)
            );
        }

        if (file_exists($theme_overrides_css)) {
            $theme_override_deps = $base_deps;

            if (file_exists($footer_css)) {
                $theme_override_deps = ['ai-zippy-child-footer'];
            } elseif (file_exists($header_css)) {
                $theme_override_deps = ['ai-zippy-child-header'];
            } elseif (file_exists($components_css)) {
                $theme_override_deps = ['ai-zippy-child-components'];
            } elseif (file_exists($block_reset_css)) {
                $theme_override_deps = ['ai-zippy-child-block-reset'];
            } elseif (file_exists($child_css)) {
                $theme_override_deps = ['ai-zippy-child-style'];
            }

            wp_enqueue_style(
                'ai-zippy-child-theme-overrides',
                AI_ZIPPY_CHILD_THEME_URI . '/style.css',
                $theme_override_deps,
                filemtime($theme_overrides_css)
            );
        }
    }

    private static function enqueueFrontendTypographyStyles(): void
    {
        $frontend_typography_css = AI_ZIPPY_CHILD_THEME_DIR . '/assets/css/frontend-typography.css';

        if (!file_exists($frontend_typography_css)) {
            return;
        }

        $deps = [];

        if (wp_style_is('ai-zippy-child-theme-overrides', 'enqueued')) {
            $deps[] = 'ai-zippy-child-theme-overrides';
        } elseif (wp_style_is('ai-zippy-child-footer', 'enqueued')) {
            $deps[] = 'ai-zippy-child-footer';
        } elseif (wp_style_is('ai-zippy-child-header', 'enqueued')) {
            $deps[] = 'ai-zippy-child-header';
        }

        wp_enqueue_style(
            'ai-zippy-child-frontend-typography',
            AI_ZIPPY_CHILD_THEME_URI . '/assets/css/frontend-typography.css',
            $deps,
            filemtime($frontend_typography_css)
        );
    }

    public static function enqueueEditorPreviewStyles(): void
    {
        if (!is_admin()) {
            return;
        }

        self::enqueueThemeFonts();

        $block_reset_css = AI_ZIPPY_CHILD_THEME_DIR . '/assets/css/block-reset.css';
        $components_css = AI_ZIPPY_CHILD_THEME_DIR . '/assets/css/components.css';
        $header_css = AI_ZIPPY_CHILD_THEME_DIR . '/assets/css/header.css';
        $footer_css = AI_ZIPPY_CHILD_THEME_DIR . '/assets/css/footer.css';

        if (file_exists($block_reset_css)) {
            wp_enqueue_style(
                'ai-zippy-child-editor-block-reset',
                AI_ZIPPY_CHILD_THEME_URI . '/assets/css/block-reset.css',
                ['ai-zippy-child-theme-fonts'],
                filemtime($block_reset_css)
            );
        }

        if (file_exists($components_css)) {
            $components_deps = wp_style_is('ai-zippy-child-editor-block-reset', 'enqueued')
                ? ['ai-zippy-child-editor-block-reset']
                : ['ai-zippy-child-theme-fonts'];

            wp_enqueue_style(
                'ai-zippy-child-editor-components',
                AI_ZIPPY_CHILD_THEME_URI . '/assets/css/components.css',
                $components_deps,
                filemtime($components_css)
            );
        }

        if (file_exists($header_css)) {
            $header_deps = wp_style_is('ai-zippy-child-editor-components', 'enqueued')
                ? ['ai-zippy-child-editor-components']
                : ['ai-zippy-child-theme-fonts'];

            wp_enqueue_style(
                'ai-zippy-child-editor-header',
                AI_ZIPPY_CHILD_THEME_URI . '/assets/css/header.css',
                $header_deps,
                filemtime($header_css)
            );
        }

        if (file_exists($footer_css)) {
            $footer_deps = wp_style_is('ai-zippy-child-editor-header', 'enqueued')
                ? ['ai-zippy-child-editor-header']
                : ['ai-zippy-child-theme-fonts'];

            wp_enqueue_style(
                'ai-zippy-child-editor-footer',
                AI_ZIPPY_CHILD_THEME_URI . '/assets/css/footer.css',
                $footer_deps,
                filemtime($footer_css)
            );
        }
    }

    public static function enqueueFrontendScripts(): void
    {
        if (is_admin()) {
            return;
        }

        $header_search_js = AI_ZIPPY_CHILD_THEME_DIR . '/assets/js/header-search-toggle.js';
        $fancybox_init_js = AI_ZIPPY_CHILD_THEME_DIR . '/assets/js/fancybox-init.js';
        $fancybox_custom_css = AI_ZIPPY_CHILD_THEME_DIR . '/assets/css/fancybox-custom.css';

        if (file_exists($header_search_js)) {
            wp_enqueue_script(
                'ai-zippy-child-header-search-toggle',
                AI_ZIPPY_CHILD_THEME_URI . '/assets/js/header-search-toggle.js',
                [],
                filemtime($header_search_js),
                true
            );
        }

        wp_enqueue_style(
            'ai-zippy-child-fancybox',
            self::FANCYBOX_CSS,
            [],
            self::FANCYBOX_VERSION
        );

        if (file_exists($fancybox_custom_css)) {
            wp_enqueue_style(
                'ai-zippy-child-fancybox-custom',
                AI_ZIPPY_CHILD_THEME_URI . '/assets/css/fancybox-custom.css',
                ['ai-zippy-child-fancybox'],
                filemtime($fancybox_custom_css)
            );
        }

        wp_enqueue_script(
            'ai-zippy-child-fancybox',
            self::FANCYBOX_JS,
            [],
            self::FANCYBOX_VERSION,
            true
        );

        if (file_exists($fancybox_init_js)) {
            wp_enqueue_script(
                'ai-zippy-child-fancybox-init',
                AI_ZIPPY_CHILD_THEME_URI . '/assets/js/fancybox-init.js',
                ['jquery', 'ai-zippy-child-fancybox'],
                filemtime($fancybox_init_js),
                true
            );
        }
    }

    private static function enqueueThemeFonts(): void
    {
        wp_enqueue_style(
            'ai-zippy-child-theme-fonts',
            self::THEME_FONTS_CSS,
            [],
            null
        );
    }
}
