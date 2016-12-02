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
			"64": { // mix of SVG and PNG sources
				files: [{
					expand: true,
					src: [
						"lib/alrra-browser-logos/android/android_64x64.png",
						"lib/alrra-browser-logos/chrome/chrome.svg",
						"lib/alrra-browser-logos/edge/edge.svg",
						"lib/alrra-browser-logos/edge-tile/edge-tile.svg",
						"lib/alrra-browser-logos/firefox/firefox_64x64.png", // has an svg, it’s just too large
						"src/svg/internet-explorer.svg",
						"lib/alrra-browser-logos/internet-explorer-tile/internet-explorer-tile.svg",
						"src/svg/opera.svg",
						"lib/alrra-browser-logos/opera-mini/opera-mini_64x64.png",
						"src/svg/safari.svg",
						"lib/alrra-browser-logos/safari-ios/safari-ios.svg"
					],
					dest: "64/"
				}],
				options: {
					cssprefix: '.browserlogo-',
					customselectors: {
						"android_64x64": [ ".browserlogo-android" ],
						"firefox_64x64": [ ".browserlogo-firefox" ],
						"opera-mini_64x64": [ ".browserlogo-opera-mini" ]
					},
					template: "src/grunt-template.hbs"
				}
			},
			"128": { // mix of SVG and PNG sources
				files: [{
					expand: true,
					src: [
						"lib/alrra-browser-logos/android/android_128x128.png",
						"lib/alrra-browser-logos/chrome/chrome.svg",
						"lib/alrra-browser-logos/edge/edge.svg",
						"lib/alrra-browser-logos/edge-tile/edge-tile.svg",
						"lib/alrra-browser-logos/firefox/firefox_128x128.png", // has an svg, it’s just too large
						"src/svg/internet-explorer.svg",
						"lib/alrra-browser-logos/internet-explorer-tile/internet-explorer-tile.svg",
						"src/svg/opera.svg",
						"lib/alrra-browser-logos/opera-mini/opera-mini_128x128.png",
						"src/svg/safari.svg",
						"lib/alrra-browser-logos/safari-ios/safari-ios.svg"
					],
					dest: "128/"
				}],
				options: {
					cssprefix: '.browserlogo-',
					customselectors: {
						"android_128x128": [ ".browserlogo-android" ],
						"firefox_128x128": [ ".browserlogo-firefox" ],
						"opera-mini_128x128": [ ".browserlogo-opera-mini" ]
					},
					template: "src/grunt-template.hbs"
				}
			}
		}
	});

	grunt.registerTask( 'default', [ 'grunticon' ] );
};