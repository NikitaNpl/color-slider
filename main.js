
$(function () {
  let isSelectedBackgorundColor = true;

  $("input").checkboxradio({
    icon: false
  });

  $("input").on("change", function(){
    isSelectedBackgorundColor = !isSelectedBackgorundColor
    $(".red, .green, .blue").slider({
      slide: isSelectedBackgorundColor ? refreshBackgroundColor : refreshColor,
      change: isSelectedBackgorundColor ? refreshBackgroundColor : refreshColor
    });
  });


  function hexFromRGB(r, g, b) {
    var hex = [
      r.toString(16),
      g.toString(16),
      b.toString(16)
    ];
    $.each(hex, function (nr, val) {
      if (val.length === 1) {
        hex[nr] = "0" + val;
      }
    });
    return hex.join("").toUpperCase();
  }

  function refreshBackgroundColor() {
    var red = $(".red").slider("value"),
      green = $(".green").slider("value"),
      blue = $(".blue").slider("value"),
      hex = hexFromRGB(red, green, blue);
    $("#text-block").css("background-color", "#" + hex);
  }

  function refreshColor() {
    var red = $(".red").slider("value"),
      green = $(".green").slider("value"),
      blue = $(".blue").slider("value"),
      hex = hexFromRGB(red, green, blue);
    $("#text-block").css("color", "#" + hex);
  }

  $(".red, .green, .blue").slider({
    orientation: "horizontal",
    range: "min",
    max: 255,
    value: 127,
    slide: isSelectedBackgorundColor ? refreshBackgroundColor : refreshColor,
    change: isSelectedBackgorundColor ? refreshBackgroundColor : refreshColor
  });

  $(".red").slider("value", 255);
  $(".green").slider("value", 140);
  $(".blue").slider("value", 60);
});


