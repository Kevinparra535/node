const gulp = require("gulp");
const server = require("gulp-server-livereload");

// Cuando ejecutemos el callback le estaremos indicando que la tarea se ha completado
gulp.task("build", function (cb, err) {
  console.log("build...");
  setTimeout(cb, 1200);
});

// Esta tarea nos inica un server
gulp.task("serve", function (cb, err) {
  console.log("server...");
  gulp.src("www").pipe(
    server({
      livereload: true,
      open: true,
    })
  );
});

// Esta tarea nos la crea por default
gulp.task("default", gulp.series("build", "serve"));