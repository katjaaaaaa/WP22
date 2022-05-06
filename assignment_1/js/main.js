window.addEventListener('DOMContentLoaded', function () {
    console.log('Document Object Model has been loaded.')
    main()
});

function getArticle(){
    let art_tag = document.createElement("article");

    let h1_tag = document.createElement("h1");
    let text = document.createTextNode("This is my first added article");
    h1_tag.appendChild(text);

    let p_tag = document.createElement("p");
    text = document.createTextNode("I am really proud of this one, it took" +
        " me way too much time and effort to make it work");
    p_tag.appendChild(text);

    art_tag.appendChild(h1_tag);
    art_tag.appendChild(p_tag);

    let el = document.getElementsByClassName("col-md-12")[0];
    el.appendChild(art_tag);
}

function getLink(){
    let links_div = document.getElementById('links');
    let ul_tag = links_div.getElementsByTagName("a")[2];
    // adding a new href
    ul_tag.setAttribute('href', 'https://google.com');
    // adding a target attribute
    ul_tag.setAttribute('target', '_blank');
}

function main(){
    let page_title = document.getElementsByTagName("title")[0];

    /*
    location.pathname gives the part(domain not included) of the page url.
    To get only the filename you have to extaract it using substring method.
    */
    let file_name = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
    if (file_name === "index.html"){
        // Changing title
        page_title.textContent = "Webprogramming (LIX018P05) - Index";
        // Adding new element article to index.html
        getArticle();
        getLink()
    }
    else {
        page_title.textContent = " Webprogramming (LIX018P05) - Second";
    }
}


