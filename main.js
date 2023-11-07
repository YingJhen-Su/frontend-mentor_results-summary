$.ajax({
    url: "./data.json",
    type: "GET",
})
.done((json) => {
    const summaryItems = $(".summary__items");

    json.forEach((s) => {
        const item = $(`<div class="summary__item ${s.category.toLowerCase()}"></div>`);
        const title = $('<div class="summary__title"></div>');
        const score = $('<div class="summary__score"></div>');

        $("<img>")
            .attr("src", s.icon)
            .attr("alt", `${s.category} icon`)
            .appendTo(title);
        $('<span class="summary__category"></span>')
            .text(s.category)
            .appendTo(title);

        $('<span class="score"></span>')
            .text(s.score)
            .appendTo(score);
        $("<span></span>")
            .text("/ 100")
            .appendTo(score);

        title.appendTo(item);
        score.appendTo(item);
        item.appendTo(summaryItems);
    });
})
.fail((xhr, status, err) => {
    const summary = $(".summary");
    summary.empty();
    $("<p>Oops, something went wrong!</p>").appendTo(summary);
});
