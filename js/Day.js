let stadtbook = {};
stadtbook.anchors = new TypeAnchor();
stadtbook.search = function (searchText) {
    document.location.href='https://bing.com?q=site:stadtbook.de+' + searchText;
}