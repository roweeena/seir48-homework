// Returns a object with a count of each nucleotide in a given DNA strand
const countNucleotides = function (dna) {
  const nucleotides = {
    'A': 0,
    'C': 0,
    'G': 0,
    'T': 0
  };

  for (let n of dna) {
    nucleotides[n]++;
  }

  return nucleotides;
};

// Generates a random 46-chromosome dna strand
const generateDna = function () {
  let dna = ''
  while (dna.length < 46) {
    const nucleotides = [ 'A', 'C', 'G', 'T' ];
    dna += nucleotides[ Math.floor( Math.random() * nucleotides.length) ];
  }
  return dna;
}

// To test:
console.log( countNucleotides( generateDna() ) );
