$(document).ready(function () {
  var set = true;

  $(".amount-item").on("click", function () {
    $(this).parent().children().removeClass("amount-item-active");
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

  $(".overflow-scroll").on("scroll", _.throttle(lazyLoad, 1000));

  function lazyLoad() {
    console.log("called");
    if (
      $(this).scrollTop() + $(this).innerHeight() + 24 >=
      $(this)[0].scrollHeight
    ) {
      $(".loadingcontent").remove();
      
      console.log(set);

      if (set) {
        set = !set;
        $(".overflow-scroll").append(
          '<div class="allocation-item"><div class="allocation-image" style="background-image: url(img/studyAbroad.jpg);"></div><div class="allocation-text"><div><strong>Study Abroad Fund</strong><p>For many students, their study abroad trip is one of the most transformational and eye-opening experiences of their college career. SUNY Cortland puts a strong emphasis on providing students with the opportunity to undertake these life-changing journeys, and it is our hope that we can provide this for all SUNY students. Donations to the Study Abroad Fund will go directly to funding students study abroad experiences, which will have a massive positive impact on these individual students as well as the Red Dragon family as a whole.</p></div><div class="gift-btn">Gift: $250</div></div></div><div class="allocation-item"><div class="allocation-image"style="background-image: url(img/lake.jpg)"></div><div class="allocation-text"><div><strong>Raquette Lake - Facilities Rennovation</strong><p>Some of students most memorable SUNY Cortland experiences take place at our outdoor education facilities at Raquette Lake, which is located in the heart of the Adirondack Mountains. This location is the only National Historic Landmark in the SUNY system, and its facilities offer unique and exciting experiences for all Red Dragons.</p></div><div class="gift-btn">Gift: $250</div></div></div><div class="allocation-item"><div class="allocation-image"style="background-image: url(img/lynne.jpg)"></div><div class="allocation-text"><div><strong>Lynne Parks 68 Alumni House Capital Restoration Fund</strong><p>The Lynne Parks Alumni House, noted for its elegant rooms, exquisite d??cor and warm hospitality, serves as an impressive bed and breakfast as well as an elegant wedding and special event facility. Started in 2009, the Alumni House Restoration Fund has been essential to the survival and success of the historic location. The Board of Directors has identified several priorities for capital projects, including a variety of restorations and upgrades, and donors will have their name(s) listed on a plaque that recognizes the "Alumni House Charter Patrons." Furthermore, donors have the opportunity to purchase naming rights to certain areas/facilities of the Alumni House.</p></div><div class="gift-btn">Gift: $250</div></div></div><div class="loadingcontent"><div class="spinner"></div></div>'
        );
      } else if(set === false) {
        set = !set;
        $(".overflow-scroll").append(
          '<div class="allocation-item"><div class="allocation-image" style="background-image: url(img/wrestling.png);"></div><div class="allocation-text"><div><strong>Wrestling Fund</strong><p>The wrestling team needs funds to give scholarships to hardworking athletes who need help. These scholarships will be used to offset tuition and food costs. They also are looking to upgrade their mat which is 5 years old.</p></div><div class="gift-btn">Gift: $250</div></div></div><div class="allocation-item"><div class="allocation-image"style="background-image: url(img/jones.png)"></div><div class="allocation-text"><div><strong>Professor Jones???s Scholarship</strong><p>This scholarship will honor the late Professor Jones???s legacy. The scholarship will go to first generation business administration students who would not be able to attend SUNY without it.</p></div><div class="gift-btn">Gift: $250</div></div></div><div class="allocation-item"><div class="allocation-image"style="background-image: url(img/cortlandCup.jpg)"></div><div class="allocation-text"><div><strong>The Cortland Cup - Reunion Giving Competition</strong><p>Each year, alumni class groups with reunions in that year are entered into The Cortland Cup, a friendly competition aimed at adding a little extra fun to a crucial source of funds for the school that benefit current SUNY students. The class/group with the largest total reunion gift will be awarded the Cortland Cup, and be crowned the winners for that year. No matter who wins the awards, the real winners are the current Red Dragons.</p></div><div class="gift-btn">Gift: $250</div></div></div><div class="loadingcontent"><div class="spinner"></div></div>'
        );
      }
    }
  }
});
