module.exports = function(grunt) {
	// load all grunt tasks matching the `grunt-*` pattern
	require('load-grunt-tasks')(grunt);
	
	// task configuration
	grunt.initConfig({		
		watch: {		
			sass: {
				options: {livereload:true},
				files: ['../assets/scss/*.{scss,sass}', '../assets/scss/**/*.{scss,sass}'],
				tasks: ['sass']
			}
		},	
		sass: {		
			dist: {
				files: {
					'../assets/css/main.min.css': '../assets/scss/main.scss'
				},
				options: {
					style: 'compressed',
					unixNewlines: true,
					sourcemap: true,
					compass:true
				}
			}
		}		
	});			
	grunt.registerTask('default', ['watch:sass']);
};
