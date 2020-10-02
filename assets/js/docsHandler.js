function setPage(section, page) {
    // Declare Element Variables
    var container = document.getElementById("docsContainer");
    var breadcrumb = document.getElementById("breadcrumb");
    var show = document.getElementById("docs");

    // Adding .md to the end of 'page' and fixing the filepath
    var pageMD = '/docs/pages/' + section + '/' + page + '.md'

    // Changing the src attribute value
    show.setAttribute("src", pageMD);

    // Reloading the Page Container
    var content = container.innerHTML
    container.innerHTML = content;

    // Set Breadcrumb
    var location = '<a href="/">Home</a> / <a href="/docs">Documentation</a> / ' + section + ' / ' + page
    breadcrumb.innerHTML = location;
}

function setPageC(path, page) {
    // Declare Element Variables
    var container = document.getElementById("docsContainer");
    var breadcrumb = document.getElementById("breadcrumb");
    var show = document.getElementById("docs");

    // Adding .md to the end of 'page' and fixing the filepath
    var pageMD = path + page + '.md'

    // Changing the src attribute value
    show.setAttribute("src", pageMD);

    // Reloading the Page Container
    var content = container.innerHTML
    container.innerHTML = content;

    // Set Breadcrumb
    var location = '<a href="/">Home</a> / <a href="/docs">Documentation</a> ' + path + ' ' + page
    breadcrumb.innerHTML = location;
}