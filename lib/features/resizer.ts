import { ResizerKeyType } from '../types'

/**
 * 
 * @param target The wrapped HTMLElement. Is the parent element where the resizer will occure.
 * @param resizerType The resizer type is a string cointain the position of the resizer.
 * @return {void}
 */
export const resizeHandler = (target: HTMLElement, resizerType: ResizerKeyType) => {
  const initResize = (event: MouseEvent) => {
    if (event.button === 0) {
      window.addEventListener('mousemove', Resize, false)
      window.addEventListener('mouseup', stopResize, false)
    }
  }
  
  const stopResize = () => {
    window.removeEventListener('mousemove', Resize, false)
    window.removeEventListener('mouseup', stopResize, false)
  }
  
  const resizer: HTMLElement = document.createElement('div')
  resizer.classList.add('one-resize', `one-resize--${resizerType}`)
  target.appendChild(resizer)
  resizer.addEventListener('mousedown', initResize, false)

  const Resize = (event: MouseEvent) => {
    switch (resizerType) {
      case 'e':
        target.style.width = (event.clientX - target.offsetLeft) + 'px'
        break;
      case 'w':
        target.style.width = (target.offsetLeft - event.clientX + target.offsetWidth) + 'px'
        break;
      case 'n':
        target.style.height = (target.offsetTop - event.clientY + target.offsetHeight) + 'px';
        break;
      case 's':
        target.style.height = (event.clientY - target.offsetTop) + 'px';
        break;
    }
  }
}
