let calender={}

calender.init = function(currentParent) {
    if (!currentParent) {
        return;
    }
    currentParentId = currentParent.replace('?','');
    //alert(currentParent);
    var currentElement = document.getElementById(currentParentId);

    if ( currentElement == undefined) {
        alert('not found' + currentParent);
        return;
    }
    currentElement.style.fontWeight = 800;
    currentElement.style.color = 'black';
    currentElement.parentElement.style.backgroundColor = '#666666';
}
