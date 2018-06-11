let smoothScrolling = document.documentElement.style.hasOwnProperty('scrollBehavior') ? true : false




export const executeScroll = (selector) => {
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
