var gulp = require("gulp");
var browserify = require("browserify");
var watchify = require("watchify");
var uglify = require("gulp-uglify");
var babel = require("gulp-babel");
var source = require("vinyl-source-stream");
var buffer = require("vinyl-buffer");
var sourcemaps = require("gulp-sourcemaps");
var gutil = require("gulp-util");

var b = browserify({
	entries: ["./_js/main.js"],
	debug: true,
	cache: {},
	packageCache: {}
});

gulp.task("watch", function(){
	b.plugin(watchify);
	b.on("update", bundle);
	bundle();
});

gulp.task("default", function(){
	bundle();
});

function bundle(){
	b.bundle()
		.pipe(source("./main.js"))
		.pipe(buffer())
		.pipe(sourcemaps.init({loadMaps: true}))
			.pipe(babel({
				presets: ["es2015"]
			}))
			.pipe(uglify())
			.on("error", gutil.log)
		.pipe(sourcemaps.write("./"))
		.pipe(gulp.dest("./js/"));
}
