

var products;

var display_per_page = 10;

var total_pages;

var page = 0;

var first_page_item;

var last_page_item;

fetch("/products").then(request => {
    return request.json();
}).then(response => {
    products = response.length;
	total_pages = Math.round(products / display_per_page);
    // check
    console.log("products:\t" + products);
    console.log("total_pages:\t" + total_pages);
    document.querySelector("#pagination-total-pages").innerHTML = total_pages;
}).catch(err=> {
    console.log(err);
});


function update_display_per_item (e) {
    return display_per_page = e.value;
}

function next_page (e) {
    if (page < total_pages) {
        page++;
        return update_page();
    }
    else if (page >= total_pages) {
        page = total_pages;
        return update_page();
    }
}

function previous_page (e) {
    if (page > 0) {
        page--;
        return update_page();
    }
    else if (page <= 0) {
        page = 0;
        return update_page();
    }
}

async function update_page () {
    var requests = await fetch("/products");
    var response = await requests.json();
    if (page < total_pages) {
        first_page_item = page * display_per_page;
        last_page_item += first_page_item + display_per_page;
        // next map through request only for these specified datas
    }
    else if (page >= total_pages) {
        first_page_item = total_pages * display_per_page;
        last_page_item = first_page_item + display_per_page;
    }
}

function update_page_by_page_button () {

}

function update_page_button_views (e) {
    var page_buttons = document.getElementsByClassName("");
    if (e.id === "first-btn") {

    }

    else if (e.id === "last-btn") {

    }
}