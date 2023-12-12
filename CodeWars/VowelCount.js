function getCount(str) {
    return (str.match(/[aeiou]/gi) || []).length;
  }
  // case insensitive
  const getCount = (str) => (str.match(/[aeiou]/gi) || []).length

  // case sensitive
  const getCount = (str) => (str.match(/[aeiou]/g) || []).length