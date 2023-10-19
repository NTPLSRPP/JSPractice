function wave(str) {
    var result = [];
    for (var i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            var waveStr = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);
            result.push(waveStr);
        }
    }
    return result;
}
//---------------------------------------------------
  function wave(str){
    let newArr = [];
    for (let i = 0; i < str.length; i++) {
      let copy = str.split('');
      if(copy[i] !== ' ') {
      copy[i] = copy[i].toUpperCase()
      newArr.push(copy.join(''))
      }
    }
    return newArr
  }
//---------------------------------------------------
  const wave = str => 
	[...str].map((s, i) => 
      str.slice(0, i) + s.toUpperCase() + str.slice(i + 1) 
  ).filter(x => x != str);