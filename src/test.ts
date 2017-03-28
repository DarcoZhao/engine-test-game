window.onload = () => {

    let canvas = document.getElementById("app") as HTMLCanvasElement;
    let stage = engine.run(canvas);
    let bitmap = new engine.Bitmap();
    let image = document.createElement("img");
    image.src = "Blue.JPG";
    bitmap.image = image;
    stage.addChild(bitmap);

}