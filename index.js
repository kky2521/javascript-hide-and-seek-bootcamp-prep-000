function getFirstSelector(selector) {
    return document.querySelector(selector)
}

function nestedTarget() {
    return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const rankedLis = document.querySelectorAll('.ranked-list')


  for (let i = 0, l = rankedLis.length; i < l; i++) {
    let children = rankedLis[i].children


    for (let x = 0, y = children.length; x < y; x++) {
      children[x].innerHTML = parseInt(children[x].innerHTML) + n
    }
  }
}

function deepestChild() {
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]

  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }

  return node
}
