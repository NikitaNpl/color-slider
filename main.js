
$(function () {
  const init = () => {
    const refreshColor = getRefreshFunction();

    $(".red, .green, .blue").slider({
      orientation: "horizontal",
      range: "min",
      max: 255,
      value: 127,
      slide: refreshColor,
      change: refreshColor
    });


    $(".red").slider("value", 255);
    $(".green").slider("value", 140);
    $(".blue").slider("value", 60);
    $("input").checkboxradio({
      icon: false
    });
  }

  let isSelectedBackgroundColor = $("input:radio:checked").attr("id") === "bgColor";

  const getRefreshFunction = (() => {
    const refreshColor = (prop) => () => {
      const red = $(".red").slider("value"),
          green = $(".green").slider("value"),
                blue = $(".blue").slider("value");
      $("#text-block").css(prop, `rgb(${red}, ${green}, ${blue})`);
    }

    const refreshBackgroundColor = refreshColor("background-color");
    const refreshTextColor = refreshColor("color");
    return () => isSelectedBackgroundColor ? refreshBackgroundColor : refreshTextColor;
  })();

  $("input").on("change", function(){
    isSelectedBackgroundColor = !isSelectedBackgroundColor;
    const refreshColor = getRefreshFunction();

    $(".red, .green, .blue").slider({
      slide: refreshColor,
      change: refreshColor
    });
  });

  init();
  
});


