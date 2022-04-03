const projectFolder = 'dist';
const rootFolder = 'src';

const path = {
    build: {
        html: projectFolder + '/',
        css: projectFolder + '/css',
        img: projectFolder + '/images'
    },
    src: {
        html: rootFolder + '/*.html',
        css: rootFolder + '/scss/style.scss',
        img: rootFolder + '/images/*'
    },
    watch: {
        html: rootFolder + '/index.html',
        css: rootFolder + '/scss/style.scss',
        img: rootFolder + '/images'
    },
    clean: './' + projectFolder + '/'
}

let { src, dest } = require('gulp'),
    gulp = require('gulp'),
    browsersync = require('browser-sync').create(),
    del = require('del'),
    scss = require('gulp-sass')(require('sass'))

function browserSync(params) {
    browsersync.init({
        server: {
            baseDir: './' + projectFolder +'/'
        },
        port: 3000,
        notify: false
    })
}

function watchFiles(params) {
    gulp.watch([path.watch.html], html);
    gulp.watch([path.watch.css], css);
    gulp.watch([path.watch.img], images)
}

function clean (params) {
    return del(path.clean);
}

function html() {
    return src(path.src.html)
        .pipe(dest(path.build.html))
        .pipe(browsersync.stream())
}

function css() {
    return src(path.src.css)
        .pipe(
            scss({
                outputStyle: 'expanded'
            })
        )
        .pipe(dest(path.build.css))
        .pipe(browsersync.stream())
}

function images() {
    return src(path.src.img)
        .pipe(dest(path.build.img))
        .pipe(browsersync.stream())
}

let build = gulp.series(clean, gulp.parallel(html, css, images));
let watch = gulp.parallel(build, watchFiles, browserSync);


exports.images = images;
exports.css = css;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;
    