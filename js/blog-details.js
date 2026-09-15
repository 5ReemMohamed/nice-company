
document.addEventListener("DOMContentLoaded", function () {

  AOS.init({
    duration: 900,
    once: true,
    offset: 80,
    easing: "ease-out-cubic"
  });


  const backTop = document.getElementById("pvcBackTop");

  if (backTop) {

    window.addEventListener("scroll", function () {

      if (window.scrollY > 350) {
        backTop.classList.add("show");
      } else {
        backTop.classList.remove("show");
      }

    });

    backTop.addEventListener("click", function () {

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    });

  }


  const searchForm = document.getElementById("pvcSearchForm");

  const searchInput = document.getElementById("pvcSearchInput");

  if (searchForm && searchInput) {

    searchForm.addEventListener("submit", function (event) {

      event.preventDefault();

      const searchValue = searchInput.value.trim();

      if (!searchValue) {
        searchInput.focus();
        return;
      }

      window.location.href =
        "articles.html?search=" +
        encodeURIComponent(searchValue);

    });

  }


  const shareLinks = document.querySelectorAll(".pvc-share-links a");

  shareLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

      event.preventDefault();

      const currentUrl = window.location.href;

      const currentTitle =
        document.title;

      if (link.getAttribute("aria-label") === "WhatsApp") {

        window.open(
          "https://wa.me/?text=" +
          encodeURIComponent(currentTitle + "\n" + currentUrl),
          "_blank"
        );

      }

      if (link.getAttribute("aria-label") === "Facebook") {

        window.open(
          "https://www.facebook.com/sharer/sharer.php?u=" +
          encodeURIComponent(currentUrl),
          "_blank"
        );

      }

      if (link.getAttribute("aria-label") === "X") {

        window.open(
          "https://twitter.com/intent/tweet?text=" +
          encodeURIComponent(currentTitle) +
          "&url=" +
          encodeURIComponent(currentUrl),
          "_blank"
        );

      }

    });

  });

});