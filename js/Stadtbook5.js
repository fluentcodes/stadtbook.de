let stadtbook = {};

stadtbook.Teaser = function() {
    this.fileName = "../data/TeaserList.json";
    this.id = 'info-teaser';
    this.display = function() {
        fetch(this.fileName)
        .then((response) => response.json())
        .then((data) => this.render(data))
        .catch(console.error);
    }
    this.render = function(data) {
        let length = data.length;
        let selected =  Math.floor(Math.random() * length);
        let teaser = data[selected];
        document.getElementById(this.id).innerHTML = teaser + ' ... ';
   }
}

stadtbook.show = async function (fileName, target) {
      let element = document.getElementById(target);
      let content = await (await fetch(fileName)).text();
      element.innerHTML = content;
}

stadtbook.nav = function() {
    this.show('Nav.html', 'body-content-select');
    new stadtbook.Recommendations().display();
    new stadtbook.Teaser().display();
}

stadtbook.adjustStartBanner = function() {
    let positionBanner = document.getElementById('top').offsetHeight;
    document.getElementById('info').style.marginTop = positionBanner + 10;
}

stadtbook.hideMenue = function() {
}
stadtbook.showMenue = function() {
}

stadtbook.recommendations = [];
stadtbook.Recommendation = function(json){

        this.type = json.type;
        if (json.startDate) {
            this.startDate = new Date(json.startDate);
        }
        if (json.stopDate) {
            this.stopDate = new Date(json.stopDate);
        }
        if (json.eventDate) {
            this.eventDate = new Date(json.eventDate);
        }
        this.location = json.location;
        this.locationPage = json.locationPage;
        this.title = json.title;
        this.href = json.href;
        this.img = json.img;
        this.showFlag = false;

    this.show = function() {
        this.actualDate = new Date();
        if (this.startDate === undefined) {
           if (this.stopDate === undefined) {
            if (this.eventDate !== undefined && this.eventDate>this.actualDate) {
                this.showFlag = true;
                return;
            }
           }
           if (this.stopDate < this.actualDate) {
               return;
           }
           else {
               this.showFlag = true;
               return;
           }
        }
        if (this.stopDate === undefined) {
            if (this.startDate > this.actualDate) {
               return;
            }
            else {
                showFlag = true;
                return;
            }
        }
        if (this.startDate < this.actualDate && this.stopDate > this.actualDate) {
            this.showFlag = true;
        }
        else if (this.eventDate !== undefined && this.eventDate > this.actualDate) {
            this.showFlag = true;
        }
    }


    this.show();
    if (this.showFlag) {
        stadtbook.recommendations.push(this);
    }

    this.displayYear = function(myDate) {
        return myDate.getFullYear() - 2000;
    }

    this.displayMonth = function(myDate) {
        let value = myDate.getMonth() + 1;
        if (value>9) {
            return value;
        }
        return '0' + value;
    }



    this.displayMin = function(myDate) {
        let value = myDate.getMinutes();
        if (value>10) {
            return value;
        }
        return '0' + value;
    }

    this.displayHour = function(myDate) {
        if (myDate.getHours() == 0) {
            return '00';
        }
        let value = myDate.getHours()-1;
        if (value>10) {
            return value;
        }
        return '0' + value;
    }

    this.displayTime = function(myDate) {
        let value = myDate.getUTCHours()-1;
        if (value==0) {
            return '';
        }
    }

    this.displayDay = function(myDate) {
        let value = myDate.getDate();
        if (value>9) {
            return value;
        }
        return '0' + value;
    }

    this.displayDate = function(myDate) {
        let date =  this.displayDay(myDate)  + "." + this.displayMonth(myDate) + "." + this.displayYear(myDate);
        let utcHours = myDate.getUTCHours()
        if (utcHours === 0) {
            return date;
        }
        return date + " " + this.displayHour(myDate) + ":" + this.displayMin(myDate);
    }



    this.showStartDate = function() {
        if (this.startDate===undefined) {
            return "";
        }
        return "von " + this.displayDate(this.startDate);
    }

    this.showStopDate = function() {
        if (this.stopDate===undefined) {
            return "";
        }
        return " bis " + this.displayDate(this.stopDate);
    }

    this.showEventDate = function() {
        if (this.eventDate===undefined) {
            return "";
        }
        return " " + this.displayDate(this.eventDate);
    }

    this.showDate = function() {
        return this.showStartDate() + this.showStopDate() + this.showEventDate();
    }

    this.createHTML = function() {
        let html = '<div class="sb-teaser-entry">';
        html += '<div  class="sb-teaser-type-startdate">';
        html += '<div class="sb-teaser-type">';
        html += '<a href="../types/' + this.type + '.html" class="sb-teaser-type-link">' + this.type + '</a>';
        html += '</div>';
        html += '<div class="sb-teaser-startdate">'+ this.showDate() + '</div>';
        html += '</div>';
        html += '<div class="sb-teaser-box">';
        html += '<div class="sb-teaser-location">';
        if (this.locationPage) {
            html += '<a href="../locations/' + this.locationPage + '.html" class="sb-teaser-location-link">' + this.location + '</a>';
        }
        else {
            html += this.location;
        }
        html += '<a href="' + this.href + '" target="extern">';
        html += '<h4 class="sb-teaser-h4" >'+ this.title + '</h4></a>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
        return html;
    }
};


stadtbook.Recommendations = function() {
    this.fileName = "../data/Recommendations.json";
    this.id = 'Events-Empfehlung';
    this.display = function() {
        fetch(this.fileName)
        .then((response) => response.json())
        .then((data) => this.render(data, 3))
        .catch(console.error);
    }

    this.render = function (data, maxDisplay) {
        let html = '';
        let recommendationCount = data.length;
        if (recommendationCount<maxDisplay) {
            for (i = 0; i<recommendationCount; i++) {
                let recommendation = new stadtbook.Recommendation(data[i]);
                html += recommendation.createHTML();
            }
        }
        else {
            let foundCounter = 0;
            let view = ',';
            while(foundCounter < maxDisplay) {
                let i = Math.floor(Math.random()*recommendationCount);
                if (view.includes(',' + i + ',')) {
                    continue;
                }
                let recommendation = new stadtbook.Recommendation(data[i]);
                view += i + ','
                html += recommendation.createHTML();
                foundCounter++;
            }
        }
        document.getElementById('Events-Empfehlung').innerHTML = html;
    }
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
    this.actualMonthString = this.actual.toLocaleString('de',{month:'short'}).toUpperCase();
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
    else if (this.screenWidth>599) {
        this.start = new Date(this.actual);
        this.prev = this.addDays(this.start, -15);
        this.next = this.addDays(this.start, 15);
    }
    else {
        this.start = new Date(this.actual);
        this.prev = this.addDays(this.start, -8);
        this.next = this.addDays(this.start, 8);
    }

    this.display = function() {
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
        this.html += this.actualMonthString + ' &nbsp;  &nbsp; ';
        if (this.prev<new Date('2022-06-01')) {
            return;
        }
        this.html += '<a ' +
                 this.createPageLink(this.prev) +
                 ' class="sb-day-link" ><i class="fa-solid fa-angles-left"></i></a>&nbsp;&nbsp;&nbsp;';
    }

    this.createNextHTML = function() {
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