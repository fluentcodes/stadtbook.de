let stadtbook = {};
stadtbook.search = function (searchText) {
    document.location.href='https://bing.com?q=site:stadtbook.de+' + searchText;
}

stadtbook.show = async function (fileName, target) {
      let element = document.getElementById(target);
      let content = await (await fetch(fileName)).text();
      element.innerHTML = content;
}

stadtbook.nav = function() {
    this.show('Nav.html', 'body-content-select');
}

// banner positions
function adjustStartBanner() {
    let positionBanner = document.getElementById('top').offsetHeight;
    document.getElementById('info-day').style.marginTop = positionBanner + 20;
}

stadtbook.adjustStartBanner = function() {
    let positionBanner = document.getElementById('top').offsetHeight;
    document.getElementById('body').style.marginTop = positionBanner;
}

stadtbook.hideMenue = function() {

}

stadtbook.showMenue = function() {
}

stadtbook.DayNav = function(actual){
    if (actual === undefined) {
        this.actual = new Date();
    }
    else {
        this.actual = actual;
    }

    if (document.location.href.includes('2022')) {
        this.dayFlag = true;
    }
    else  {
       this.dayFlag = false;
    }

    this.screenWidth = window.innerWidth;
    this.actualMonthString = this.actual.toLocaleString('de',{month:'long'});
    this.html = '';
    this.addDays = function(date, days) {
       let result = new Date(date);
       result.setDate(result.getDate() + days);
       return result;
     }
    if (this.screenWidth>900) {
        let actualMonth = this.actual.getMonth();
        let actualYear = this.actual.getFullYear();

        this.start = new Date(Date.UTC(actualYear, actualMonth, 1));
        let previousDay = this.addDays(this.start, -1);
        let prevMonth = previousDay.getMonth();
        let prevYear = previousDay.getFullYear();
        this.prev = new Date(Date.UTC(prevYear, prevMonth, 1));
        this.next = new Date(Date.UTC(actualYear, actualMonth + 1, 1));
    }
    else {
        this.start = new Date(this.actual);
        this.prev = this.addDays(this.start, -8);
        this.next = this.addDays(this.start, 8);
    }

    this.display = function() {
        if (this.dayFlag && this.screenWidth>900) {
            return;
        }
        this.createHTML();
        document.getElementById('day-link-box').innerHTML = this.html;
    }

    this.deriveClass = function(startDate) {
        if (startDate.getDate() == this.actual.getDate()) {
            return 'sb-day-actual';
        }
        else if (startDate.getDay() == 0 || startDate.getDay() == 6) {
            return 'sb-day-link-weekend';
        }
        return 'sb-day-link';
    }

    this.createHTML = function() {
        this.createPrevHTML();
        let actual = new Date(this.start);
        while (actual < this.next) {
            this.html += '<a ' +
                this.createPageLink(actual) +
                ' class="' +
                this.deriveClass(actual) +
                '" >' +
                actual.getDate() +
                '</a>';
            if (actual.getDay()==0) {
                this.html += ' ';
            }
            else {
                this.html +=  '&nbsp;';
             }
             actual = this.addDays(actual, 1);
        }
        this.createNextHTML();
    }

    this.createPrevHTML = function() {
        if(!this.dayFlag) {
            this.html += this.actualMonthString + ' ';
            return;
        }
        this.html += '<a ' +
                 this.createPageLink(this.prev) +
                 ' class="sb-day-link" ><i class="fa-solid fa-angles-left"></i></a>&nbsp;&nbsp;&nbsp;';
    }

    this.createNextHTML = function() {
        if(!this.dayFlag) {
            return;
        }
        this.html += '&nbsp;&nbsp;&nbsp;<a ' +
              this.createPageLink(this.next) +
              ' class="sb-day-link" ><i class="fa-solid fa-angles-right"></i></a>';
    }
        this.createPageLink = function(date) {
            return 'href="../days/munich-' +
                date.toISOString().split('T')[0] +
                '.html"';
        }
    }