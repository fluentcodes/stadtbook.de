function TypeAnchors(search) {
const ANCHOR_STATUS_MAP = {
              "Ausflüge":{"id":true},
              "DIY":{"id":true},
              "Essen":{"id":true},
              "Fest":{"id":true},
              "Film":{"id":true},
              "Foto":{"id":true},
              "Frauen":{"id":true},
              "Führungen":{"id":true},
              "Geld":{"id":true},
              "Gesellschaft":{"id":true},
              "Geschichte":{"id":true},
              "Gesundheit":{"id":true},
              "IT":{"id":true},
              "Kabarett":{"id":true},
              "Kinder":{"id":true},
              "Kino":{"id":true},
              "Kunst":{"id":true},
              "Lernen":{"id":true},
              "Literatur":{"id":true},
              "Links":{"id":true},
              "Märkte":{"id":true},
              "Mode":{"id":true},
              "Musik":{"id":true},
              "Nachhaltigkeit":{"id":true},
              "Natur":{"id":true},
              "Party":{"id":true},
              "Philosophie":{"id":true},
              "Politik":{"id":true},
              "Reisen":{"id":true},
              "Senioren":{"id":true},
              "Show":{"id":true},
              "Soziales":{"id":true},
              "Spiritualität":{"id":true},
              "Sonstiges":{"id":true},
              "Sprache":{"id":true},
              "Sport":{"id":true},
              "StartUp":{"id":true},
              "Tanzen":{"id":true},
              "Technik":{"id":true},
              "Theater":{"id":true},
              "Treffen":{"id":true},
              "Wirtschaft":{"id":true}
              };

this.storage = 'stadtbookAnchorIds';
this.search = search;

this.statusMap = {};
this.interactiveMap = {};
this.eventViewMap = {};

this.getInteractive = function(type) {
    if (this.interactiveMap[type]) {
        return this.interactiveMap[type];
    }
    let eventElement = document.getElementById('Img-' + type);
    if (!eventElement) {
        return;
    }
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
    this.interactiveMap[type] = eventElement;
    return this.interactiveMap[type];
}

this.getEventView = function(type) {
    if (this.eventViewMap[type]) {
        return this.eventViewMap[type];
    }
    let eventElement = document.getElementById('Events-' + type);
    if (!eventElement) {
        return;
    }
    this.eventViewMap[type] = eventElement;
    return this.eventViewMap[type];
}

this.readStatusMap = function() {
    let storedStatusMap = localStorage.getItem(this.storage);
    if (!storedStatusMap) {
        this.initStatusMap();
        return;
    }
    try {
        this.statusMap = JSON.parse(storedStatusMap);
    }
    catch (e ) {
        this.initStatusMap();
    }
}

this.storeStatusMap = function() {
    localStorage.setItem(this.storage, JSON.stringify(this.statusMap));
}

this.clearStatusMap = function() {
    localStorage.setItem(this.storage, null);
}

this.initStatusMap = function() {
    this.statusMap = ANCHOR_STATUS_MAP;
    this.storeStatusMap();
}


this.hide = function(type, toggle) {
    let status = this.statusMap[type];
    if (status == undefined) {
        return;
    }
    if (status.id && toggle==undefined) {
        return;
    }
    var collapsable = this.getEventView(type);

    if (collapsable == undefined) {
        //console.log('Could not find Event-' + type);
        return;
    }
    collapsable.style.display = 'none';
    // change image
    if (toggle == undefined) {
        return;
    }
    var collapsableImage = this.getInteractive(type);
    if (collapsableImage == undefined) {
        //console.log('Could not find Img-' + type);
        return;
    }
    collapsableImage.innerHTML = '&#x2795;';
}


this.show = function(type, toggle) {
    let status = this.statusMap[type];
    if (status == undefined) {
        return;
    }
    var collapsable = this.getEventView(type);
    if (collapsable == undefined) {
        //console.log('Could not find Event-' + type);
        return;
    }
    collapsable.style.display = 'block';
    if (toggle == undefined) {
        return;
    }
    var collapsableImage = this.getInteractive(type);
    if (collapsableImage == undefined) {
        //console.log('Could not find Img-' + type);
        return;
    }
    collapsableImage.innerHTML = '&#x2796;';
}

this.flagAndShow = function(type) {
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

this.initElements = function() {
    for (var status in this.statusMap) {
        let show = this.statusMap[status].id;
        if (show) {
            this.show(status, true);
        }
        else {
            this.hide(status, true);
        }
    }
    }

    // main...
if (this.search == undefined || this.search != '?clear') {
    this.readStatusMap();
}
else {
    this.initStatusMap();
}
let latestType = this.statusMap['Treffen'];
if (latestType == undefined) {
    this.initStatusMap();
}


 this.initElements();}

