let stadtbook = {};
stadtbook.anchors = {}
const ANCHOR_STATUS_MAP = {
              "Festivals":{"id":true},
              "Film":{"id":false},
              "Geschichte":{"id":false},
              "Kabarett":{"id":true},
              "Kinder":{"id":false},
              "Kunst":{"id":false},
              "Literatur":{"id":true},
              "Links":{"id":false},
              "Märkte":{"id":true},
              "Musik":{"id":true},
              "Natur":{"id":true},
              "Party":{"id":true},
              "Politik":{"id":false},
              "Sport":{"id":true},
              "Technik":{"id":false},
              "Theater":{"id":false}
              };

stadtbook.anchors.statusMap = {};
stadtbook.anchors.interactiveMap = {};
stadtbook.anchors.eventViewMap = {};

stadtbook.anchors.getInteractive = function(type) {
    if (!this.interactiveMap[type]) {
        let eventElement = document.getElementById('Img-' + type);
        if (eventElement) {
            eventElement.addEventListener("mouseleave", function(event) {
                var key = this.getAttribute('id').replace('Img-', '');
                stadtbook.anchors.hide(key);
            },500);
            eventElement.addEventListener("mouseenter", function(event) {
                var key = this.getAttribute('id').replace('Img-', '');
                stadtbook.anchors.show(key);
            },500);
            eventElement.addEventListener("click", function(event) {
                var key = this.getAttribute('id').replace('Img-', '');
                stadtbook.anchors.flagAndShow(key);
            }, 500);
        }
        this.interactiveMap[type] = eventElement;
    }
    return this.interactiveMap[type];
}

stadtbook.anchors.getEventView = function(type) {
    if (!this.eventViewMap[type]) {
        let eventElement = document.getElementById('Events-' + type);
        /*if (eventElement) {
        eventElement.addEventListener("mouseleave", function(event) {
            alert(this.);
        }
        );
        }*/
        this.eventViewMap[type] = eventElement;
    }
    return this.eventViewMap[type];
}

stadtbook.anchors.readStatusMap = function() {
    let storedStatusMap = localStorage.getItem('stadtbookAnchorIds');
    try {
        this.statusMap = JSON.parse(storedStatusMap);
    }
    catch (e ) {
        this.initStatusMap();
    }
}

stadtbook.anchors.storeStatusMap = function() {
    localStorage.setItem('stadtbookAnchorIds', JSON.stringify(this.statusMap));
}

stadtbook.anchors.clearStatusMap = function() {
    localStorage.setItem('stadtbookAnchorIds', null);
}

stadtbook.anchors.initStatusMap = function() {
    this.statusMap = ANCHOR_STATUS_MAP;
    this.storeStatusMap();
}


stadtbook.anchors.hide = function(type, toggle) {
    let status = this.statusMap[type];
    if (status == undefined) {
        return;
    }
    if (status.id && toggle==undefined) {
        return;
    }
    var collapsable = this.getEventView(type);

    if (collapsable == undefined) {
        console.log('Could not find Event-' + type);
        return;
    }
    collapsable.style.display = 'none';
    // change image
    if (toggle == undefined) {
        return;
    }
    var collapsableImage = this.getInteractive(type);
    if (collapsableImage == undefined) {
        console.log('Could not find Img-' + type);
        return;
    }
    collapsableImage.innerHTML = '&#x2795;';
}


stadtbook.anchors.show = function(type, toggle) {
    let status = this.statusMap[type];
    if (status == undefined) {
        return;
    }
    var collapsable = this.getEventView(type);
    if (collapsable == undefined) {
        console.log('Could not find Event-' + type);
        return;
    }
    collapsable.style.display = 'block';
    if (toggle == undefined) {
        return;
    }
    var collapsableImage = this.getInteractive(type);
    if (collapsableImage == undefined) {
        console.log('Could not find Img-' + type);
        return;
    }
    collapsableImage.innerHTML = '&#x2796;';
}
stadtbook.anchors.flagAndShow = function(type) {
        let status = this.statusMap[type];
        if (status == undefined) {
            return;
        }
        status.id = !status.id;
        if (status.id) {
            this.show(type, true);
        }
        else {
            this.hide(type, true);
        }
        this.storeStatusMap();
}

stadtbook.anchors.initElements = function() {
    for (var status in this.statusMap) {
        let show = this.statusMap[status].id;
        if (show) {
            this.show(status, true);
        }
        else {
            this.hide(status, true);
        }
    }}

stadtbook.anchors.init = function(clean) {
    if (clean == undefined || clean != '?clear') {
        this.readStatusMap();
    }
    else {
        this.initStatusMap();
    }
    let latestType = this.statusMap['Kunst'];
    if (latestType == undefined) {
        this.initStatusMap();
    }
    this.initElements();
}
