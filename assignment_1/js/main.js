window.addEventListener('DOMContentLoaded', function () {
    console.log('Document Object Model has been loaded.');
    main();
});

function getArticle(){
    let art_tag = document.createElement("article");

    let h1_tag = document.createElement("h1");
    let text = document.createTextNode("This is my first added article");
    h1_tag.appendChild(text);
    art_tag.appendChild(h1_tag);

    let p_tag = document.createElement("p");
    text = document.createTextNode("I am really proud of this one, it took" +
        " me way too much time and effort to make it work");
    p_tag.appendChild(text);

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

function changeTextColor(){
    let elements = document.querySelectorAll('.nav-item a');
    for (let i = 0; i < elements.length; i++)
    {
        elements[i].style.color = "red";
    }
}

function addSchedule(){
    const schedule_arr = {
        'Week 1': 'Assignment 1',
        'Week 2': 'Assignment 1',
        'Week 3': 'Assignment 2',
        'Week 4': 'Assignment 2',
        'Week 5': 'Assignment 3',
        'Week 6': 'Assignment 3',
        'Week 7': 'Final Project',
    }

    let el = document.getElementsByClassName("col-md-12")[0];
    let art_tag = document.createElement("article");
    let h1_tag = document.createElement("h1");
    let text = document.createTextNode("Assignments schedule");
    h1_tag.appendChild(text);
    art_tag.appendChild(h1_tag)

    let list_tag = document.createElement("ul");
    for (let i in schedule_arr)
    {
        let li_tag = document.createElement("li");
        list_tag.appendChild(li_tag);

        text = document.createTextNode(i + ": " + schedule_arr[i]);
        li_tag.appendChild(text);
    }

    art_tag.appendChild(list_tag);
    el.appendChild(art_tag);
}

function addSidebar(){
    let main_col = document.getElementsByClassName("col-md-12")[0];
    main_col.setAttribute("class", "col-md-8");

    let col_4 = document.createElement("div");
    col_4.setAttribute("class", "col-md-4");

    let row = document.getElementsByClassName("row")[0];
    let art_tag = document.createElement("article");

    let h1_tag = document.createElement("h1");
    let text = document.createTextNode("Sidebar");
    h1_tag.appendChild(text);

    let p = document.createElement("p");
    text = document.createTextNode("That's a sidebar! Have you seen such a cool" +
        " sidebar? There is no way you have seen such a cool sidebar! Sidebar!!!");
    p.appendChild(text);

    art_tag.appendChild(h1_tag);
    art_tag.appendChild(p);

    col_4.appendChild(art_tag);
    row.appendChild(col_4);
}

function main(){
    let page_title = document.getElementsByTagName("title")[0];

    let file_name = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
    if (file_name === "index.html"){
        // Changing title
        page_title.textContent = "Webprogramming (LIX018P05) - Index";
        // Adding new element article to index.html
        getArticle();
        addSchedule();
    }
    else {
        page_title.textContent = " Webprogramming (LIX018P05) - Second";
        addSidebar();
    }

    getLink();
    changeTextColor();
}


