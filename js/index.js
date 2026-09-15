const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileSidebar = document.getElementById("mobileSidebar");
const sidebarClose = document.getElementById("sidebarClose");
const sidebarOverlay = document.getElementById("sidebarOverlay");
const sidebarLinks = document.querySelectorAll(".sidebar-link");

function openSidebar() {
    mobileSidebar.classList.add("active");
    sidebarOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeSidebar() {
    mobileSidebar.classList.remove("active");
    sidebarOverlay.classList.remove("active");
    document.body.style.overflow = "";
}

mobileMenuBtn.addEventListener("click", openSidebar);

sidebarClose.addEventListener("click", closeSidebar);

sidebarOverlay.addEventListener("click", closeSidebar);

sidebarLinks.forEach(function (link) {
    link.addEventListener("click", closeSidebar);
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeSidebar();
    }
});


window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".main-navbar");

    if (window.scrollY > 50) {
        navbar.style.background = "rgba(15, 15, 15, 0.94)";
    } else {
        navbar.style.background = "rgba(0, 0, 0, 0.16)";
    }

});

const floatingBackTop = document.getElementById("floatingBackTop");

if (floatingBackTop) {

  window.addEventListener("scroll", function () {

    if (window.scrollY > 350) {

      floatingBackTop.classList.add("show");

    } else {

      floatingBackTop.classList.remove("show");

    }

  });

  floatingBackTop.addEventListener("click", function () {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });

}
AOS.init({
  duration: 900,
  once: true
});

    const tabs = document.querySelectorAll(".works-tab");
    const cards = document.querySelectorAll(".work-card");
    const emptyMessage = document.getElementById("worksEmpty");


    tabs.forEach(function (tab) {

        tab.addEventListener("click", function () {

            tabs.forEach(function (item) {
                item.classList.remove("active");
            });

            tab.classList.add("active");

            const category = tab.dataset.category;

            let visibleCards = 0;

            cards.forEach(function (card) {

                const cardCategory = card.dataset.category;

                if (category === "all" || cardCategory === category) {

                    card.style.display = "block";
                    visibleCards++;

                    card.style.animation = "none";

                    requestAnimationFrame(function () {
                        card.style.animation = "worksFadeIn 0.5s ease forwards";
                    });

                } else {

                    card.style.display = "none";

                }

            });

            if (visibleCards === 0) {
                emptyMessage.classList.add("show");
            } else {
                emptyMessage.classList.remove("show");
            }

            AOS.refresh();

        });

    });


    const modal = document.getElementById("worksModal");
    const modalImage = document.getElementById("worksModalImage");
    const modalTitle = document.getElementById("worksModalTitle");
    const modalClose = document.getElementById("worksModalClose");
    const viewButtons = document.querySelectorAll(".work-view-btn");


    viewButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const image = button.dataset.image;
            const title = button.dataset.title;

            modalImage.src = image;
            modalImage.alt = title;
            modalTitle.textContent = title;

            modal.classList.add("show");

            document.body.style.overflow = "hidden";

        });

    });


    function closeModal() {

        modal.classList.remove("show");

        document.body.style.overflow = "";

    }


    modalClose.addEventListener("click", closeModal);


    modal.addEventListener("click", function (event) {

        if (event.target === modal) {
            closeModal();
        }

    });


    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {
            closeModal();
        }

    });


    const backTop = document.getElementById("worksBackTop");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 400) {
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