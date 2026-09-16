const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileSidebar = document.getElementById("mobileSidebar");
const sidebarClose = document.getElementById("sidebarClose");
const sidebarOverlay = document.getElementById("sidebarOverlay");
const sidebarLinks = document.querySelectorAll(".sidebar-link");

function openSidebar() {
    if (mobileSidebar) {
        mobileSidebar.classList.add("active");
    }

    if (sidebarOverlay) {
        sidebarOverlay.classList.add("active");
    }

    document.body.style.overflow = "hidden";
}

function closeSidebar() {
    if (mobileSidebar) {
        mobileSidebar.classList.remove("active");
    }

    if (sidebarOverlay) {
        sidebarOverlay.classList.remove("active");
    }

    document.body.style.overflow = "";
}

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", openSidebar);
}

if (sidebarClose) {
    sidebarClose.addEventListener("click", closeSidebar);
}

if (sidebarOverlay) {
    sidebarOverlay.addEventListener("click", closeSidebar);
}

sidebarLinks.forEach(function (link) {
    link.addEventListener("click", closeSidebar);
});

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
        closeSidebar();
    }

});


const navbar = document.querySelector(".main-navbar");

if (navbar) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 50) {

            navbar.style.background = "rgba(15, 15, 15, 0.94)";

        } else {

            navbar.style.background = "rgba(0, 0, 0, 0.16)";

        }

    });

}


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


if (typeof AOS !== "undefined") {

    AOS.init({
        duration: 900,
        once: true
    });

}


const tabs = document.querySelectorAll(".works-tab");
const cards = document.querySelectorAll(".work-card");
const emptyMessage = document.getElementById("worksEmpty");


if (tabs.length > 0) {

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

                if (
                    category === "all" ||
                    cardCategory === category
                ) {

                    card.style.display = "block";

                    visibleCards++;

                    card.style.animation = "none";

                    requestAnimationFrame(function () {

                        card.style.animation =
                            "worksFadeIn 0.5s ease forwards";

                    });

                } else {

                    card.style.display = "none";

                }

            });


            if (emptyMessage) {

                if (visibleCards === 0) {

                    emptyMessage.classList.add("show");

                } else {

                    emptyMessage.classList.remove("show");

                }

            }


            if (typeof AOS !== "undefined") {
                AOS.refresh();
            }

        });

    });

}


const modal = document.getElementById("worksModal");
const modalImage = document.getElementById("worksModalImage");
const modalVideo = document.getElementById("worksModalVideo");
const modalVideoSource = document.getElementById("worksModalVideoSource");
const modalTitle = document.getElementById("worksModalTitle");
const modalClose = document.getElementById("worksModalClose");
const viewButtons = document.querySelectorAll(".work-view-btn");


if (
    modal &&
    modalImage &&
    modalVideo &&
    modalVideoSource &&
    modalTitle
) {

    viewButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const type = button.dataset.type || "image";
            const title = button.dataset.title || "";

            modalTitle.textContent = title;


            if (type === "video") {

                const video = button.dataset.video;

                if (!video) {
                    return;
                }

                modalImage.style.display = "none";

                modalVideo.style.display = "block";

                modalVideoSource.src = video;

                modalVideo.load();

                modalVideo.play().catch(function () {});


            } else {

                const image = button.dataset.image;

                if (!image) {
                    return;
                }

                modalVideo.pause();

                modalVideo.currentTime = 0;

                modalVideoSource.src = "";

                modalVideo.load();

                modalVideo.style.display = "none";

                modalImage.style.display = "block";

                modalImage.src = image;

                modalImage.alt = title;

            }


            modal.classList.add("show");

            document.body.style.overflow = "hidden";

        });

    });


    function closeModal() {

        modal.classList.remove("show");

        modalVideo.pause();

        modalVideo.currentTime = 0;

        modalVideoSource.src = "";

        modalVideo.load();

        modalImage.src = "";

        document.body.style.overflow = "";

    }


    if (modalClose) {

        modalClose.addEventListener("click", closeModal);

    }


    modal.addEventListener("click", function (event) {

        if (event.target === modal) {

            closeModal();

        }

    });


    document.addEventListener("keydown", function (event) {

        if (
            event.key === "Escape" &&
            modal.classList.contains("show")
        ) {

            closeModal();

        }

    });

}


const backTop = document.getElementById("worksBackTop");


if (backTop) {

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

}


const floatingPhoneBtn = document.getElementById("floatingPhoneBtn");
const phoneOptions = document.getElementById("phoneOptions");

if (floatingPhoneBtn && phoneOptions) {
    floatingPhoneBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        phoneOptions.classList.toggle("active");
    });

    document.addEventListener("click", function () {
        phoneOptions.classList.remove("active");
    });

    phoneOptions.addEventListener("click", function (e) {
        e.stopPropagation();
    });
}
