let smoothScrolling = document.documentElement.style.hasOwnProperty('scrollBehavior') ? true : false




export const executeScroll = (selector) => {
  console.log(smoothScrolling)
  if(selector){
    if(smoothScrolling){
      selector.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
    else{
      selector.scrollIntoView()
    }
  }
}

export default {
  executeScroll
}
