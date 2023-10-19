snail = function(array) {
    const result = [];
      
      while (array.length) {
          
          result.push(...array.shift());
          
          for (let i = 0; i < array.length; i++) {
              if (array[i].length > 0) {
                  result.push(array[i].pop());
              }
          }
          
          if (array.length) {
              result.push(...array.pop().reverse());
          }
          
          for (let i = array.length - 1; i >= 0; i--) {
              if (array[i].length > 0) {
                  result.push(array[i].shift());
              }
          }
      }
      
      return result;
  }
//---------------------------------------------------
  snail = function(array) {
    var size = array.length;
    
    if (size == 0)
      return [];
  
    if (size == 1)
      return array[0];
    
    var top    = array[0].slice(0, -1);
    var right  = array.slice(0, -1).map(a => a[size - 1]);
    var bottom = array[size -1].slice(1).reverse();
    var left   = array.slice(1).map(a => a[0]).reverse();
    var inner  = array.slice(1, -1).map(a => a.slice(1, -1));
  
    return [].concat(top, right, bottom, left, snail(inner));
  }
  //---------------------------------------------------
  const snail = function(array) {
    const list = [];
  
    while(array.length) {
      list.push(...array.shift(), ...array.map(row => row.pop()));
      
       array.reverse().map(row => row.reverse());
    }
  
    return list;
  }