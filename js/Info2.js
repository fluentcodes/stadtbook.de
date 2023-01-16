let info = {};
info.Sunrise = function(actual) {
    this.actual = actual;
    this.latitude   = 48.1372;
    this.longitude   = 11.5755;
    this.sunDown = 24.0;
    this.sunRise = 0.0;

    this.computeTimeDifference = function (daysOfYear) {
      let declination = 0.40954*Math.sin(0.0172*(daysOfYear - 79.35));
      let h = -(50/60) * Math.PI / 180;
      let hSin = Math.sin(h);
      let latitudeDegree = this.latitude * Math.PI / 180;
      return 12.0*Math.acos((hSin - Math.sin(latitudeDegree) * Math.sin(declination)) / (Math.cos(latitudeDegree)*Math.cos(declination)))/Math.PI;
      }

    this.zeitgleichung = function (T) {
      return -0.1752*Math.sin(0.033430 * T + 0.5474) - 0.1340*Math.sin(0.018234*T - 0.1939);
      }

    this.displaySunRise = function() {
        return this.printTime(this.sunRise);
    }

    this.computeDays = function (dateTime) {
        let start = new Date(dateTime.getFullYear(), 0, 0);
        let diff = dateTime - start;
        return Math.floor(diff / (1000 * 60 * 60 * 24)) - 4;
    }

    this.displaySunDown = function() {
        return this.printTime(this.sunDown);
    }

    this.displayDayDuration = function() {
        return this.printTime(this.sunDown - this.sunRise);
    }

    this.displayNightDuration = function() {
        return this.printTime(24 + this.sunRise - this.sunDown);
    }

    this.leadingZero= function(intValue) {
        return intValue>9?intValue:"0"+intValue;
    }

    this.printTime = function(decimalTime) {
        let hour = Math.floor(decimalTime);
        let minutes = Math.floor((decimalTime-hour)*60)
        return this.leadingZero(hour) + ":" + this.leadingZero(minutes);
    }

    this.compute = function() {
      let daysOfYear           = this.computeDays(this.actual);
      let timeDifference = this.computeTimeDifference(daysOfYear);
      let zeit1 = this.zeitgleichung(daysOfYear);
      timeZone = 2;
      if (this.actual>new Date('2022-10-29')) {
        timeZone=1;
      }
      let correctionLongitude = timeZone - this.longitude / 15.0;
      this.sunDown = 12 + timeDifference - zeit1 + correctionLongitude;
      this.sunRise = 12 - timeDifference - zeit1 + correctionLongitude;
    }

    this.display = function() {
        this.compute();
            document.getElementById('info-day').innerHTML = 'Sonnenaufgang: <strong>' + this.displaySunRise() + '</strong> - Sonnenuntergang: <strong>' + this.displaySunDown() + '</strong> - Tagesdauer: <strong>' + this.displayDayDuration() + '</strong>';
    }
}
let cite = {};
cite.list=[];
cite.add = function(author, text) {
    let pos = this.list.length;
    this.list[pos] = {};
    this.list[pos].author = author;
    this.list[pos].text = text;
}
cite.add('Mark Twain', 'Die beiden wichtigsten Tage deines Lebens sind der Tag an dem du geboren wurdest, und der Tag, an dem du herausfindest, WARUM!');
cite.add('Sokrates','Ein starker Geist diskutiert Ideen. Ein durschnittlicher Geist diskutiert Ereignisse. Ein schwacher Geist diskutiert Leute.');
cite.add('Giacomo Casanova','Man sollte sich vor Menschen hüten, die nur ein Buch gelesen haben.');
cite.add('Sinnspruch','Nicht der Weg ist das Ziel, das Ziel ist im Weg.');
cite.add('Albert Einstein', 'Ziel des Lebens ist es nicht, ein erfolgreicher Mensch zu sein, sondern ein wertvoller.');
cite.add('Mark Twain','Gib jedem Tag die Chance, der schönste deines Lebens zu werden. ');
cite.add('Peter Ustinov','Was der Sinn des Lebens ist, weiß keiner genau. Jedenfalls hat es wenig Sinn, der reichste Mann auf dem Friedhof zu sein.');
cite.add('Charly Chaplin','An den Scheidewegen des Lebens stehen keine Wegweiser. ');
cite.add('Samuel Butler','Alle Lebewesen außer den Menschen wissen, dass der Hauptzweck des Lebens darin besteht, es zu genießen. ');
cite.add('Wilhelm von Humboldt','Im Grunde sind es doch Verbindungen mit Menschen, die dem Leben seinen Wert geben.');
cite.add('Albert Einstein','Jeder ist ein Genie! Aber wenn Du einen Fisch danach beurteilst, ob er auf einen Baum klettern kann, wird er sein ganzes Leben glauben, dass er dumm ist.');
cite.add('Aristoteles','Glück ist Selbstgenügsamkeit. ');
cite.add('Herman Hesse','Glück ist Liebe, nichts anderes. Wer lieben kann, ist glücklich.');
cite.add('Arthur Schopenhauer','Jeder Tag ist ein kleines Leben  – jedes Erwachen und Aufstehen eine kleine Geburt,  jeder frische Morgen eine kleine Jugend, und jedes zu Bett gehen und Einschlafen ein kleiner Tod. ');
cite.add('Oscar Wilde','Leben, das ist das Allerseltenste in der Welt  – die meisten Menschen existieren nur.');
cite.add('Epiktet','Es geht nicht darum,  was dir im Leben passiert, sondern wie du darauf reagierst');
cite.add('Voltaire','Die Liebe ist ein Stoff, den die Natur gewebt und die Fantasie bestickt hat.');
cite.add('Wilhelm Busch','Das Schönste aber hier auf Erden ist lieben und geliebt zu werden.');
cite.add('Wilhelm Busch','Die Summe unseres Lebens sind die Stunden, in denen wir liebten.');
cite.add('Rudolf Augstein','Die Welt ist so groß, dass alle Irrtümer darin Platz haben.');
cite.add('Coco Chanel','Alter schützt vor Liebe nicht, aber Liebe vor dem Altern.');
cite.add('Victor Borge','Ein Lächeln ist die kürzeste Entfernung zwischen Menschen.');
cite.add('Dr. Hermann Josef Abs','Die Zukunft ist auch nicht mehr was sie war.');
cite.add('Woody Allen','Zukunft passiert, auch wenn wir uns etwas ganz anderes vorgenommen haben.');
cite.add('Hans Christian Andersen','Das Zufällige ist die Blume der Poesie auf dem Alltagsbaum.');
cite.add('Aristoteles','Der Glaube, das, was man wünscht, zu erreichen, ist immer lustvoll.');
cite.add('Hans Arndt','Höhepunkte leben von Anläufen.');
cite.add('Peter Bamm','Fleiß für die falschen Ziele ist noch schädlicher als Faulheit für die richtigen.');
cite.add('Charles Baudelaire','Je mehr man will, desto besser will man.');
cite.add('Charles Baudelaire','Nichts existiert ohne Ziel.');
cite.add('Franz Beckenbauer','Es gibt nur eine Möglichkeit: Sieg, Unentschieden oder Niederlage!');
cite.add('Elazar Benyoetz','Man hat nichts zu suchen, wo man nichts verloren hat.');
cite.add('Georges Bernanos','Die gefährlichsten Berechnungen, die wir anstellen, nennen sich Illusionen.');
cite.add('Georges Bernanos','Die kleinen Alltäglichkeiten sehen nach nichts aus, aber sie geben Frieden.');
cite.add('Georges Bernanos','Die Macht kann sich leicht den Anschein des Rechts geben, da sie reich genug ist, sich genügend Advokaten zu leisten.');
cite.add('Georges Bernanos','Das Fieber der Jugend hält den Rest der Welt auf Normaltemperatur.');
cite.add('Georges Bernanos','Eine Welt, die der Technik alles opfert, ist für die Freiheit verloren.');
cite.add('Georges Bernanos','Freiheit ist kein Privileg, sondern eine Aufgabe.');
cite.add('Georges Bernanos','Irgendwie hat jedes Bekenntnis etwas Lächerliches.');
cite.add('Georges Bernanos','Keine Freundschaft vermag der Langeweile zu widerstehen.');
cite.add('Georges Bernanos','Nicht die Diktatoren schaffen Diktaturen, sondern die Herden.');
cite.add('Georges Bernanos','Mit der Wahrheit spielt man ebensowenig wie mit dem Feuer.');
cite.add('Georges Bernanos','Nichts lieben, das ist die Hölle.');
cite.add('Georges Bernanos','Dem totalitären Betrüger ist es keineswegs darum zu tun, den Massen - wäre es auch aus reinem Interesse - die Wohltat irgendeines Glaubens zu geben, sondern er will ihnen jeden Glauben und schließlich ihre Ungläubigkeit selbst verleiden.');
cite.add('Mario Adorf','Ein erfolgreicher Mann ist ein Mann, der mehr verdient, als seine Frau ausgeben kann.');
cite.add('Peter Alexander','Glück allein kann\'s nicht sein, denn wer sich nur auf\'s Glück verlässt, fällt auf die Schnauze.');
cite.add('Carl Amery','Risiko ist die Bugwelle des Erfolges.');
cite.add('James Baldwin','Die Karriere ist ein Pferd, das bisweilen auch gute Reiter abwirft.');
cite.add('Peter Bamm','Auch im Wörterbuch kommt "Anstrengung" vor "Erfolg".');
cite.add('Horst Evers aus "Wer alles Weiss hat keine Ahnung"','Donald Trump und seine Anhänger oder wie wir Berliner sagen: "Weisse mit Schuss".');

info.Citation = function() {
    this.display = function() {
        let rand = Math.random();
        let randomSelect = Math.floor(rand * cite.list.length);
        let randomCite = cite.list[randomSelect];
        document.getElementById('info-cite').innerHTML = randomCite.text + ' <strong>(' +  randomCite.author + ')</strong>';
    }
}