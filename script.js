function searchWiki() {

    const search =
        document.getElementById("search").value.toLowerCase();

    const links =
        document.querySelectorAll(".sidebar a");

    links.forEach(function(link) {

        const text =
            link.textContent.toLowerCase();

        if (text.includes(search)) {

            link.style.display = "block";

        } else {

            link.style.display = "none";

        }

    });

}