function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('div#nested .target')
}

function deepestChild() {
  return document.querySelector('div#grand-node div div div div')
//  var first = document.querySelector('div#grand-node')
//  for (var i = 0; i < first.length; i++) {
//    if first[i].children
//  }

}

function increaseRankBy(n) {
  var increase = document.querySelectorAll('.ranked-list')
  for (var i = 0; i < increase.length; i++) {
      var list = increase[i].children
      for (var j = 0; j < list.length; j++) {
        list[j].innerHTML = parseInt(list[j].innerHTML,10) + n
      }
  }
}
