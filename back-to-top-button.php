<?php
/**
 * Plugin Name: Back to Top Button with Circular Scroll Indicator
 * Description: Adds a "Back to Top" button with a circular scroll indicator and centered arrow.
 * Version: 1.0
 * Author: Iqbal Mahmud
 */

// Enqueue styles and scripts
function back_to_top_enqueue_scripts() {
    wp_enqueue_style('back-to-top-style', plugin_dir_url(__FILE__) . 'css/style.css');
    wp_enqueue_script('back-to-top-script', plugin_dir_url(__FILE__) . 'js/script.js', array('jquery'), null, true);
}
add_action('wp_enqueue_scripts', 'back_to_top_enqueue_scripts');

// Add Back to Top button HTML to footer
function back_to_top_button_html() {
    echo '
    <div id="backToTop">
        <svg class="progress-ring" width="60" height="60">
            <circle class="progress-ring-bg" cx="30" cy="30" r="28"></circle>
            <circle class="progress-ring-circle" cx="30" cy="30" r="28"></circle>
        </svg>
        <span class="arrow">&#x2191;</span>
    </div>';
}
add_action('wp_footer', 'back_to_top_button_html');