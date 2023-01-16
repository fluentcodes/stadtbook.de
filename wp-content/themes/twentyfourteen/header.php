<?php
/**
 * The Header for our theme
 *
 * Displays all of the <head> section and everything up till <div id="main">
 *
 * @package WordPress
 * @subpackage Twenty_Fourteen
 * @since Twenty Fourteen 1.0
 */
?><!DOCTYPE html>
<!--[if IE 7]>
<html class="ie ie7" <?php language_attributes(); ?>>
<![endif]-->
<!--[if IE 8]>
<html class="ie ie8" <?php language_attributes(); ?>>
<![endif]-->
<!--[if !(IE 7) & !(IE 8)]><!-->
<html <?php language_attributes(); ?>>
<!--<![endif]-->
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width">
	<title><?php wp_title( '|', true, 'right' ); ?></title>
	<link rel="profile" href="https://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php echo esc_url( get_bloginfo( 'pingback_url' ) ); ?>">
	<link rel="stylesheet" href="./css/Day13.css?v=1.0" type="text/css"/>
	<script src="./js/StadtbookTS.js" defer></script>
	<!--[if lt IE 9]>
	<script src="<?php echo esc_url( get_template_directory_uri() ); ?>/js/html5.js?ver=3.7.0"></script>
	<![endif]-->
	<?php if ($_SERVER['REQUEST_URI'] == "/kalender") :
	    $timestamp = time();
	    $date = date('Y-m-d', $timestamp);?>
	<meta http-equiv="refresh" content="0;URL='/days/munich-<?php print($date); ?>.html' " />;
    <?php
	    endif;
    ?>
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open( ); ?>
<!--?php print ("TEST" . $_SERVER['REQUEST_URI']); ?-->
<div id="page" class="hfeed site">
	<?php if ( get_header_image() ) : ?>
	<div id="site-header">
		<a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
			<img src="<?php header_image(); ?>" width="<?php echo get_custom_header()->width; ?>" height="<?php echo get_custom_header()->height; ?>" alt="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" />
		</a>
	</div>
	<?php endif; ?>

	<header id="masthead" class="site-header">
		<div class="header-main">
			<h1 class="site-title" style="display:inline; white-space: nowrap;">
			<a href="index.html" style="display:inline;"><img src="/img/stadtbook.jpeg" width="40" height="40" alt="Ein Stadtkalender für München" title="Zum Kalender" onclick="document.location.href='index.html';"/></a>
			&nbsp;&nbsp;&nbsp;
			<a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home" style="display:inline;">
			<?php bloginfo( 'name' ); ?></a></h1>
			<div class="search-toggle">
				<a href="#search-container" class="screen-reader-text" aria-expanded="false" aria-controls="search-container"><?php _e( 'Search', 'twentyfourteen' ); ?></a>
			</div>

			<nav id="primary-navigation" class="site-navigation primary-navigation">
				<button class="menu-toggle"><?php _e( 'Primary Menu', 'twentyfourteen' ); ?></button>
				<a class="screen-reader-text skip-link" href="#content"><?php _e( 'Skip to content', 'twentyfourteen' ); ?></a>
				<?php
				wp_nav_menu(
					array(
						'theme_location' => 'primary',
						'menu_class'     => 'nav-menu',
						'menu_id'        => 'primary-menu',
					)
				);
				?>
			</nav>
		</div>

		<div id="search-container" class="search-box-wrapper hide">
			<div class="search-box">
				<?php get_search_form(); ?>
			</div>
		</div>
	<div class="sb-day-link-box" id="day-link-box"></div>
	</header><!-- #masthead -->

	<div id="main" class="site-main">