const gulp = require("gulp");
// const server = require('gulp-server-livereload');
const sass = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const browserSync = require("browser-sync").create();
const express = require("express");
const app = express();
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');

// Configurar puerto para el localhost

app.use(express.static("./public"));

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})

// Función para compilar sass y concatenar en css

function styles() {
    return gulp.src("./src/scss/**/*.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(concat("styles.css"))
        .pipe(gulp.dest("./public/css"))
        .pipe(browserSync.stream());
}

// Funcion para compilar JavaScript 

function script() {
    return gulp.src("./src/js/**/*.js")
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ["@babel/env"]
        }))
        .pipe(uglify())
        .pipe(concat("main.js"))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("./public/js"))
}

// Función para lanzar el proyecto como local

function serve() {
    browserSync.init({
        server: {
            baseDir: "./public"
        }
    });
    gulp.watch("./src/scss/**/*.scss", styles);
    gulp.watch("./src/js/**/*.js", script);
    gulp.watch("./public/*.html").on("change", browserSync.reload);
}

exports.default = gulp.series(styles, script, serve);