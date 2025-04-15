
const arrayDestructuring = <T>(
  array: T[] | T,
  defaultValue: T,
  initialPosition: number = 0
) => {
  // Check if the array is valid and has at least one element
  try {
  /**
   * Check if the array is valid and has at least one element
   * and return the first element if it is valid or the default value
   */
    if (Array.isArray(array)) {
      return array[initialPosition];
    }
    return defaultValue;
  } catch {
    // Return the default value if the array is not valid
    return defaultValue;
  }
};

export default arrayDestructuring;
