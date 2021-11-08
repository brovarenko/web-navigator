const backPages = new Stack()
const nextPages = new Stack()
let currentPage = "Start page"

showCurrentPage = () => {
  let nextP
  let backP
  if (!backPages.peek()){
    backP = ""
  } else {
    backP = backPages.peek()
  }
  if (!nextPages.peek()){
    nextP = ""
  } else {
    nextP = nextPages.peek()
  }
  document.getElementById("current-page").innerHTML = `Current page: ${currentPage}`
  document.getElementById("back-page").innerHTML = `Back page: ${backP}`
  document.getElementById("next-page").innerHTML = `Next page: ${nextP}`
  
  if (backPages.peek() != null) {
    backBtn.disabled = false
    
  } else {
      backBtn.disabled = true
    }
  
    if (nextPages.peek() != null) {
      nextBtn.disabled = false
  } else {
      nextBtn.disabled = true
    }
}

newPage = () => {
  let page = document.getElementById('page').value  
  backPages.push(currentPage)
  let div = document.createElement('div')
  div.innerHTML = currentPage
  document.getElementById('back-page-stack').prepend(div)
  currentPage = page
  while (!nextPages.isEmpty()) {
    document.getElementById('next-page-stack').firstChild.remove()
    nextPages.pop()
  }
 
  showCurrentPage()
}

backPage = () => {
    let div = document.createElement('div')
    div.innerHTML = currentPage
    document.getElementById('next-page-stack').prepend(div)
    nextPages.push(currentPage)
    currentPage = backPages.pop()
    document.getElementById('back-page-stack').firstChild.remove()
    showCurrentPage()
  }

nextPage = () =>  {
    let div = document.createElement('div')
    div.innerHTML = currentPage
    document.getElementById('back-page-stack').prepend(div)
    backPages.push(currentPage)
    currentPage = nextPages.pop()
    document.getElementById('next-page-stack').firstChild.remove()
    showCurrentPage()
  }


const backBtn = document.getElementById('back')
const nextBtn = document.getElementById('next')
const pageBtn = document.getElementById('page-btn')

pageBtn.onclick = newPage
nextBtn.onclick = nextPage
backBtn.onclick = backPage

showCurrentPage()
