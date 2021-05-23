/**
 * 
 * @param text {string}
 */
export const copyToClipboard = (text: string) => {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(function() {
      console.log('Async: Copying to clipboard was successful!')
    }, function(clipboardError) {
      console.error('Async: Could not copy text: ', clipboardError)
    })
  }
}
