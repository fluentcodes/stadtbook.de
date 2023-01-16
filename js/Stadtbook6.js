let stadtbook = {};

stadtbook.show = async function (fileName, target) {
      let element = document.getElementById(target);
      let content = await (await fetch(fileName)).text();
      element.innerHTML = content;
}

stadtbook.nav = function() {
}
