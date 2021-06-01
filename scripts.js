$(document).ready(function () {
  $(".amount-item").on("click", function () {
    $(".amount-item").removeClass("amount-item-active");
    $(this).addClass("amount-item-active");
    $(".how-much").removeClass("how-much-active");
    if ($(this).attr("id") == "custom-amount") {
      $(".how-much").toggleClass("how-much-active");
    }
  });

  $(".memory-honor").on("click", function () {
    $(this).toggleClass("memory-honor-active");
  });

  $(".toggle").on("click", function () {
    $(this).toggleClass("toggle-active");
  });

  $("#filter-byCollege").on("click", function () {
    $(this).children("i").toggleClass("fa-angle-down fa-angle-up");
    $(".filter-dropdown").toggleClass("filter-dropdown-active");
  });

  var called = 0;

  /* $('.overflow-scroll').scroll(function() {
                setTimeout(() => {
                    if($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
                        called++;
                        console.log("Called "+called+" times");
                        $(".loadingcontent").remove();
                        $('.overflow-scroll').append('<div class="allocation-item"><div class="allocation-image" style="background-image: url(img/wrestling.png);"></div><div class="allocation-text"><div><strong>Wrestling Fund</strong><p>The wrestling team needs funds to give scholarships to hardworking athletes who need help. These scholarships will be used to offset tuition and food costs. They also are looking to upgrade their mat which is 5 years old.</p></div><div class="gift-btn">Gift: $250</div></div></div><div class="allocation-item"><div class="allocation-image"style="background-image: url(img/jones.png)"></div><div class="allocation-text"><div><strong>Professor Jones’s Scholarship</strong><p>This scholarship will honor the late Professor Jones’s legacy. The scholarship will go to first generation business administration students who would not be able to attend SUNY without it.</p></div><div class="gift-btn">Gift: $250</div></div></div><div class="allocation-item"><div class="allocation-image"style="background-image: url(img/hockey.png)"></div><div class="allocation-text"><div><strong>Club Sports - Field Hockey</strong><p><span style="color:red">COPY NEEDS TO BE UPDATED </span>This scholarship will honor the late Professor Jones’s legacy. The scholarship will go to first generation business administration students who would not be able to attend SUNY without it.</p></div><div class="gift-btn">Gift: $250</div></div></div><div class="loadingcontent"><div class="spinner"></div></div>');
                    }
                }, 2000);
            }
    ); */

  $(".overflow-scroll").on("scroll", _.throttle(lazyLoad, 1000));

  function lazyLoad() {
    if (
      $(this).scrollTop() + $(this).innerHeight() >=
      $(this)[0].scrollHeight
    ) {
      called++;
      console.log("Called " + called + " times");
      $(".loadingcontent").remove();
      $(".overflow-scroll").append(
        '<div class="allocation-item"><div class="allocation-image" style="background-image: url(img/wrestling.png);"></div><div class="allocation-text"><div><strong>Wrestling Fund</strong><p>The wrestling team needs funds to give scholarships to hardworking athletes who need help. These scholarships will be used to offset tuition and food costs. They also are looking to upgrade their mat which is 5 years old.</p></div><div class="gift-btn">Gift: $250</div></div></div><div class="allocation-item"><div class="allocation-image"style="background-image: url(img/jones.png)"></div><div class="allocation-text"><div><strong>Professor Jones’s Scholarship</strong><p>This scholarship will honor the late Professor Jones’s legacy. The scholarship will go to first generation business administration students who would not be able to attend SUNY without it.</p></div><div class="gift-btn">Gift: $250</div></div></div><div class="allocation-item"><div class="allocation-image"style="background-image: url(img/hockey.png)"></div><div class="allocation-text"><div><strong>Club Sports - Field Hockey</strong><p><span style="color:red">COPY NEEDS TO BE UPDATED </span>This scholarship will honor the late Professor Jones’s legacy. The scholarship will go to first generation business administration students who would not be able to attend SUNY without it.</p></div><div class="gift-btn">Gift: $250</div></div></div><div class="loadingcontent"><div class="spinner"></div></div>'
      );
    }
  }
});
