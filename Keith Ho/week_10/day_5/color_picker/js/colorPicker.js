$("document").ready(function(){
  const $body = $("body");
  const $canvas = $("#canvas").get(0);

  const ctx = $canvas.getContext("2d");

  const gradientColor = ctx.createLinearGradient(0, 0, ctx.canvas.width, 0);
  gradientColor.addColorStop(0, "rgb(255, 0, 0)");
  gradientColor.addColorStop(0.14, "rgb(255, 0, 255)");
  gradientColor.addColorStop(0.29, "rgb(128, 0, 128)");
  gradientColor.addColorStop(0.43, "rgb(0, 0, 255)");
  gradientColor.addColorStop(0.57, "rgb(0, 255, 255)");
  gradientColor.addColorStop(0.71, "rgb(0, 255, 0)");
  gradientColor.addColorStop(0.86, "rgb(255, 255, 0)");
  gradientColor.addColorStop(1, "rgb(255, 0, 0)");
  ctx.fillStyle = gradientColor;
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  const gradient = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
  gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
  gradient.addColorStop(0.5, "rgba(255, 255, 255, 0)");
  gradient.addColorStop(0.5, "rgba(0, 0, 0, 0)");
  gradient.addColorStop(1, "rgba(0, 0, 0, 1)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  $(window).on("mousemove", (event) => {
    const x = event.pageX;
    const y = event.pageY;

    const imageData = ctx.getImageData(x, y, 1, 1).data;
    const obj = `rgb(${imageData[0]}, ${imageData[1]}, ${imageData[2]})`;

    const rgb2hex = (rgb) => `#${rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(n => parseInt(n, 10).toString(16).padStart(2, '0')).join('')}`;

    $("#coordinate").css("background-color", obj);
    $("#hexCode").text(`${rgb2hex(obj)}, ${obj}`);
  });

});
