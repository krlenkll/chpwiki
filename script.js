function toggleSidebar() {
    const sidebar = document.querySelector(".sidebar");

    sidebar.classList.toggle("open");
}


const search = document.getElementById("search");

if (search) {

    search.addEventListener("input", function () {

        const query =
            this.value.toLowerCase().trim();

        const cards =
            document.querySelectorAll(".document-card");

        cards.forEach(function (card) {

            const text =
                card.textContent.toLowerCase();

            if (text.includes(query)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }

        });

    });

}