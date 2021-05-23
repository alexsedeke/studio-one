/**
 * 
 */
class Classlist {
  list: string[]

  constructor(classes: string[] = []) {
    this.list = classes
  }
  /**
   * Remove class name from list if present.
   * @param className 
   * @return {void}
   */
  removeClass(className: string) {
    const indexOfOccurrence = this.list.indexOf(className)
    if (indexOfOccurrence >= 0) {
      this.list.splice(indexOfOccurrence, 1)
    }
  }
  /**
   * Add class name to list if not present.
   * @param className 
   * @return {void}
   */
  addClass(className: string) {
    if (!this.list.includes(className)) {
      this.list.push(className)
    }
  }
  /**
   * The join() method creates and returns a new string by concatenating all of the elements in an array.
   * @param seperator Specifies a string to separate each pair of adjacent elements of the array. 
   *                  If omitted, the array elements are separated with space (" "). If separator
   *                  is an empty string, all elements are joined without any characters in between them.
   * @return {void}
   */
  join(seperator: string = ' ') {
    return this.list.join(seperator)
  }
}

export { Classlist as default }

