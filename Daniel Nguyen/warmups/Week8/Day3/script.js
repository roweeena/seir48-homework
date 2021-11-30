const cleanUp = (ph) => {
  // Remove all non-numerals
  ph = ph.replace(/\D/g,'');

  // Removes a leading 1 from an eleven-digit number
  if (ph.length === 11 && ph[0] === '1') {
    ph = ph.slice(1);
  }

  if (ph.length === 10) {
    return ph;
  } else {
    return '0000000000';
  }
};

const format = (ph) => {
  ph = cleanUp(ph);

  return [
    '(',
    ph.slice(0,3),
    ') ',
    ph.slice(3,6),
    '-',
    ph.slice(6)
  ].join('');
}

// TODO: Write tests
