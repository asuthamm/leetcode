const addr = "1.1.1.1"
var defangIPaddr = function(address) {
    // return address.split('.').join('[.]')
    
    let strAddr = ''
    for (el of address) {
      if (el === '.') strAddr += '[.]'
      else strAddr += el
    }
    return strAddr
};

defangIPaddr(addr)