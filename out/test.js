window.onload = function () {
    var canvas = document.getElementById("app");
    var stage = engine.run(canvas);
    var bitmap = new engine.Bitmap();
    var image = document.createElement("img");
    image.src = "wander-icon.jpg";
    bitmap.image = image;
    stage.addChild(bitmap);
};
