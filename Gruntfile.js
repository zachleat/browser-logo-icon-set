module.exports = function(grunt) {
	require( 'matchdep' ).filterDev( 'grunt-*' ).forEach( grunt.loadNpmTasks );

	// Project configuration.
	grunt.initConfig({
		pkg: '<json:package.json>',

		meta: {
			banner: '/*! zachleat/browser-logo-icons - v<%= pkg.version %> - ' +
				'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
				'* Copyright (c) <%= grunt.template.today("yyyy") %> */'
		},

		grunticon: {
			"64-png": { // just PNG sources
				files: [{
					expand: true,
					cwd: 'lib/alrra-browser-logos/',
					src: [
						"android/android_64x64.png",
						"chrome/chrome_64x64.png",
						"edge/edge_64x64.png",
						"edge-tile/edge-tile_64x64.png",
						"firefox/firefox_64x64.png",
						"internet-explorer/internet-explorer_64x64.png",
						"internet-explorer-tile/internet-explorer-tile_64x64.png",
						"opera/opera_64x64.png",
						"opera-mini/opera-mini_64x64.png",
						"safari/safari_64x64.png",
						"safari-ios/safari-ios_64x64.png"
					],
					dest: "64-png/"
				}],
				options: {
					cssprefix: '.browserlogo-',
					customselectors: {
						"android_64x64": [ ".browserlogo-android" ],
						"chrome_64x64": [ ".browserlogo-chrome" ],
						"edge_64x64": [ ".browserlogo-edge" ],
						"edge-tile_64x64": [ ".browserlogo-edge-tile" ],
						"firefox_64x64": [ ".browserlogo-firefox" ],
						"internet-explorer_64x64": [ ".browserlogo-internet-explorer" ],
						"internet-explorer-tile_64x64": [ ".browserlogo-internet-explorer-tile" ],
						"opera_64x64": [ ".browserlogo-opera" ],
						"opera-mini_64x64": [ ".browserlogo-opera-mini" ],
						"safari_64x64": [ ".browserlogo-safari" ],
						"safari-ios_64x64": [ ".browserlogo-safari-ios" ]
					},
					template: "src/grunt-template.hbs"
				}
			},
			"64": { // mix of SVG and PNG sources
				files: [{
					expand: true,
					cwd: 'lib/alrra-browser-logos/',
					src: [
						"android/android_64x64.png",
						"chrome/chrome.svg",
						"edge/edge.svg",
						"edge-tile/edge-tile.svg",
						"firefox/firefox.svg",
						"internet-explorer/internet-explorer_64x64.png",
						"internet-explorer-tile/internet-explorer-tile.svg",
						"opera/opera_64x64.png",
						"opera-mini/opera-mini_64x64.png",
						"safari/safari_64x64.png",
						"safari-ios/safari-ios.svg"
					],
					dest: "64/"
				}],
				options: {
					cssprefix: '.browserlogo-',
					customselectors: {
						"android_64x64": [ ".browserlogo-android" ],
						"internet-explorer_64x64": [ ".browserlogo-internet-explorer" ],
						"opera_64x64": [ ".browserlogo-opera" ],
						"opera-mini_64x64": [ ".browserlogo-opera-mini" ],
						"safari_64x64": [ ".browserlogo-safari" ],
					},
					template: "src/grunt-template.hbs"
				}
			},
			"128-png": { // just PNG sources
				files: [{
					expand: true,
					cwd: 'lib/alrra-browser-logos/',
					src: [
						"android/android_128x128.png",
						"chrome/chrome_128x128.png",
						"edge/edge_128x128.png",
						"edge-tile/edge-tile_128x128.png",
						"firefox/firefox_128x128.png",
						"internet-explorer/internet-explorer_128x128.png",
						"internet-explorer-tile/internet-explorer-tile_128x128.png",
						"opera/opera_128x128.png",
						"opera-mini/opera-mini_128x128.png",
						"safari/safari_128x128.png",
						"safari-ios/safari-ios_128x128.png"
					],
					dest: "128-png/"
				}],
				options: {
					cssprefix: '.browserlogo-',
					customselectors: {
						"android_128x128": [ ".browserlogo-android" ],
						"chrome_128x128": [ ".browserlogo-chrome" ],
						"edge_128x128": [ ".browserlogo-edge" ],
						"edge-tile_128x128": [ ".browserlogo-edge-tile" ],
						"firefox_128x128": [ ".browserlogo-firefox" ],
						"internet-explorer_128x128": [ ".browserlogo-internet-explorer" ],
						"internet-explorer-tile_128x128": [ ".browserlogo-internet-explorer-tile" ],
						"opera_128x128": [ ".browserlogo-opera" ],
						"opera-mini_128x128": [ ".browserlogo-opera-mini" ],
						"safari_128x128": [ ".browserlogo-safari" ],
						"safari-ios_128x128": [ ".browserlogo-safari-ios" ]
					},
					template: "src/grunt-template.hbs"
				}
			},
			"128": { // mix of SVG and PNG sources
				files: [{
					expand: true,
					cwd: 'lib/alrra-browser-logos/',
					src: [
						"android/android_128x128.png",
						"chrome/chrome.svg",
						"edge/edge.svg",
						"edge-tile/edge-tile.svg",
						"firefox/firefox.svg",
						"internet-explorer/internet-explorer_128x128.png",
						"internet-explorer-tile/internet-explorer-tile.svg",
						"opera/opera_128x128.png",
						"opera-mini/opera-mini_128x128.png",
						"safari/safari_128x128.png",
						"safari-ios/safari-ios.svg"
					],
					dest: "128/"
				}],
				options: {
					cssprefix: '.browserlogo-',
					customselectors: {
						"android_128x128": [ ".browserlogo-android" ],
						"internet-explorer_128x128": [ ".browserlogo-internet-explorer" ],
						"opera_128x128": [ ".browserlogo-opera" ],
						"opera-mini_128x128": [ ".browserlogo-opera-mini" ],
						"safari_128x128": [ ".browserlogo-safari" ],
					},
					template: "src/grunt-template.hbs"
				}
			},
		}
	});

	grunt.registerTask( 'default', [ 'grunticon' ] );
};