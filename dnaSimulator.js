// Returns a random DNA base ('A', 'T', 'C', or 'G')
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  // Randomly selects a DNA base from the array and returns it
  return dnaBases[Math.floor(Math.random() * 4)];
}

// Returns a mock single strand of DNA containing 15 randomly chosen bases
const mockUpStrand = () => {
  const newStrand = [];
  // Loops 15 times to generate a DNA strand with 15 bases
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
}

// Factory function to create a pAequor object with a unique specimen number and DNA strand
const pAequorFactory = (num, arr) => {
  return {
    specimenNum: num, // Specimen number identifier
    dna: arr, // DNA strand of the specimen
    // Method to mutate a random base in the DNA strand
    mutate() {
      const randBase = Math.floor(Math.random() * this.dna.length); // Randomly selects an index in the DNA strand
      let currBase = this.dna[randBase]; // Stores the current base at the selected index
      
      let newBase;
      // Keeps generating a new base until it's different from the current base
      do {
        newBase = returnRandBase();
      } while (currBase === newBase);
      
      this.dna[randBase] = newBase; // Replaces the base at the selected index with the new base
      return this.dna;
    },
    // Method to compare the DNA of two pAequor specimens and calculate the percentage of similarity
    compareDNA(pAequor) {
      let currentDNA = this.dna;
      let passedInDNA = pAequor.dna;
      let count = 0;

      // Loops through both DNA strands to compare bases at each position
      for (let i = 0; i < currentDNA.length; i++) {
        let OG = currentDNA[i]; // Original base in current DNA
        let compare = passedInDNA[i]; // Base in the compared specimen's DNA
        
        if (OG === compare) {
          count++; // Increments count for matching bases
        }
      };

      // Calculates the percentage of matching bases and logs the result
      let total = ((count / currentDNA.length) * 100).toFixed(0);
      console.log(`Specimen #${this.specimenNum} and specimen #${pAequor.specimenNum} have ${total}% in common.`);
    },
    // Method to determine whether the pAequor specimen is likely to survive based on its DNA
    willLikelySurvive() {
      const dnaStrand = this.dna;
      let cBase = 0; // Count of 'C' bases
      let gBase = 0; // Count of 'G' bases

      // Loops through the DNA strand to count occurrences of 'C' and 'G'
      for (let i = 0; i < dnaStrand.length; i++) {
        let currIter = dnaStrand[i];
        if (currIter === 'C') {
          cBase++;
        }
        if (currIter === 'G') {
          gBase++;
        }
      };

      // Calculates the percentage of 'C' and 'G' bases in the DNA strand
      let cBasePerc = Math.floor((cBase / dnaStrand.length) * 100);
      let gBasePerc = Math.floor((gBase / dnaStrand.length) * 100);

      // If either 'C' or 'G' is greater than or equal to 60%, the pAequor is likely to survive
      if (cBasePerc >= 60 || gBasePerc >= 60) {
        return true;
      } else {
        return false;
      };
    }
  }
};

// Generates an array of pAequor specimens that are likely to survive
const pAequorSurvivors = (num) => {
  const pAequorArr = []; // Array to hold the surviving pAequor specimens
  let specimenNum = 1; // Starts with specimen number 1

  // Loop to generate the specified number of surviving specimens
  while (pAequorArr.length < num) {
    const pAequorGenerator = pAequorFactory(specimenNum, mockUpStrand());

    // If the specimen is likely to survive, add it to the survivors array
    if (pAequorGenerator.willLikelySurvive()) {
      pAequorArr.push(pAequorGenerator);
    };
    specimenNum++; // Increment the specimen number for the next one
  };

  return pAequorArr; // Returns the array of surviving pAequor specimens
};

// First example of pAequorFactory function being used
let ex1 = pAequorFactory(1, mockUpStrand());

console.log(pAequorSurvivors(30)); // Logs an array of 30 surviving pAequor specimens
