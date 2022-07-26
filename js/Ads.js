function Ads(search) {
    this.slogans=["...für Stadtentdecker", "Ein Tag. Eine Seite."];
    this.search = search;
    let element = document.getElementById('slogan');
    let randomValue = Math.floor(Math.random()*2);
    let slogan = this.slogans[randomValue];
    if (element) {
         element.innerHTMl=slogan;
    }
}
