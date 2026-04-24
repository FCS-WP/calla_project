<?php

/**
 * Child Theme Bootstrap
 *
 * Keep functions.php minimal and load modules from inc/.
 */

defined('ABSPATH') || exit;

require_once AI_ZIPPY_CHILD_THEME_DIR . '/inc/Assets.php';
require_once AI_ZIPPY_CHILD_THEME_DIR . '/inc/Blocks.php';
require_once AI_ZIPPY_CHILD_THEME_DIR . '/inc/Woo.php';

\AiZippyChild\Assets::register();
\AiZippyChild\Blocks::register();
\AiZippyChild\Woo::register();
