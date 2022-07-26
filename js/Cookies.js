function Cookies(search) {
    this.version = 'V0.1';
    this.storage = 'stadtbookCookies';
    this.search = search;
    this.element = document.getElementById("cookie-box");
    this.cookiesMap = {};
    this.cookiesMap.version = this.version;


    this.readCookiesMap = function() {
        let storedStatusMap = localStorage.getItem(this.storage);
        try {
            this.cookiesMap = JSON.parse(storedStatusMap);
        }
        catch (e ) {
            this.initCookiesMap();
        }
    }

    this.storeCookiesMap = function() {
        localStorage.setItem(this.storage, JSON.stringify(this.cookiesMap));
    }

    this.clearCookiesMap = function() {
        localStorage.setItem(this.storage, null);
    }

    this.initCookiesMap = function() {
        this.cookiesMap = {};
        this.storeCookiesMap();
    }

    this.accept = function () {
      this.cookiesMap.accepted = Date.now();
      this.cookiesMap.version = this.version;
      this.storeCookiesMap();
      this.element.innerHTML = '';
      this.element.style.display = 'none';
    }



    this.showOrHide = function() {
        if (!this.element) {
            this.element = document.getElementById("cookie-box");
        }
        if (this.ok()) {
            this.hide();
        }
        else {
            this.show();
        }
    }

    this.hide = function() {
        this.element.style.display = 'none';
    }

    this.show = async function () {
      let content = await (await fetch('../pages/Cookie.html')).text();
      this.element.innerHTML = content;
      this.element.style.display = 'block';
    }

    this.ok = function() {
        return this.cookiesMap.accepted && this.cookiesMap.version && this.cookiesMap.version == this.version
    }

    this.initElements = function() {
        if (this.search == undefined || this.search != '?clear') {
            this.readCookiesMap();
            if (!this.cookiesMap) {
                this.initCookiesMap();
            }
        }
        else {
            this.initCookiesMap();
        }
     }
    this.initElements();
}
