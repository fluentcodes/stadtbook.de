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
    document.getElementById('body').style.marginTop = positionBanner + 20;
}

stadtbook.adjustStartBanner = function() {
    let positionBanner = document.getElementById('top').offsetHeight;
    document.getElementById('body').style.marginTop = positionBanner;
}

stadtbook.hideMenue = function() {

}

stadtbook.showMenue = function() {
}

stadtbook.createPageLink = function(date) {
    return 'href="../days/munich-' +
        date.toISOString().split('T')[0] +
        '.html"';
}

stadtbook.createDayNav = function() {
    let dayNav = '';
    let today = new Date();
    let todayMonthString = today.toLocaleString('de',{month:'long'});
    let todayMonth = today.getMonth();
    let todayYear = today.getFullYear();

    // prevDate
    let prevDate = new Date(Date.UTC(todayYear, todayMonth, 1));
    prevDate.setDate(prevDate.getDate() - 1);
    dayNav += '<a ' +
     this.createPageLink(prevDate) +
     ' class="sb-day-link" ><i class="fa-solid fa-angles-left"></i></a> &nbsp; &nbsp; &nbsp;\n';

    dayNav += '<span  class="sb-day-actual" > ' + todayMonthString + '</span> ';

    // startDate
    let toDate = new Date(Date.UTC(todayYear, todayMonth, 1));
    let startDate = new Date(Date.UTC(todayYear, todayMonth, 1));

    // lastDate
    let lastDate = new Date(Date.UTC(todayYear, todayMonth+1, 1));

    while (startDate < lastDate) {
    if (startDate.getDate()==today.getDate()) {
       dayNav += '<a ' +
            this.createPageLink(startDate) +
            ' class="sb-day-actual" >' + startDate.getDate() + '</a>';
    }
    else if (startDate.getDay() == 0 || startDate.getDay() == 6) {
           dayNav += '<a ' +
                this.createPageLink(startDate) +
                ' class="sb-day-link-weekend" >' + startDate.getDate() + '</a>';
                if (startDate.getDay()==0) {
                    dayNav += ' ';
                }
    }
    else {
       dayNav += '<a ' +
            this.createPageLink(startDate) +
            ' class="sb-day-link" >' + startDate.getDate() + '</a>';
     }
     dayNav += '&nbsp;'
     startDate.setDate(startDate.getDate() + 1);
    }
    // lastDate

    dayNav += ' &nbsp; &nbsp; &nbsp;<a ' +
        this.createPageLink(lastDate) +
        ' class="sb-day-link" ><i class="fa-solid fa-angles-right"></i></a>\n';
    console.log(dayNav);
    document.getElementById('day-link-box').innerHTML = dayNav;
    //alert (prevDate + " ---- " +  startDate + " -  " + lastDate);
 }