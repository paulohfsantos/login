const { src, dest, parallel } = require('gulp')
const rename = require('gulp-rename')
const minifyJs = require('gulp-uglify')
const minifyCSS = require('gulp-uglifycss')

//carrega arquivo > minifica > renomea > salva no caminho especificado

function javascript(){
    return src('src/js/*.js')
        .pipe(minifyJs())
        .pipe(rename({extname:'.min.js'}))
        .pipe(dest('public/js/'))
}
function css(){
    return src('src/css/*.css')
        .pipe(minifyCSS())
        .pipe(rename({extname:'.min.css'}))
        .pipe(dest('public/css/'))
}

exports.default = parallel(javascript, css)