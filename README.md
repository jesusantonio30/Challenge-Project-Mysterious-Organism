** DNA Simulator **
This project simulates DNA strands and provides various functions for manipulating and comparing them. It uses JavaScript to generate random DNA bases, mutate DNA strands, compare DNA similarities between different specimens, and determine whether a specimen is likely to survive based on its DNA composition.

* Features *
  1. Random DNA Base Generation: The returnRandBase() function generates random DNA bases from a set of four options (A, T, C, G).
  2. DNA Strand Creation: The mockUpStrand() function generates a random DNA strand consisting of 15 bases.
  3. DNA Mutation: The mutate() method on a specimen object allows random mutation of a single base in the DNA strand.
  4. DNA Comparison: The compareDNA() method compares the DNA strands of two specimens and calculates the percentage of similarity.
  5. Survival Likelihood: The willLikelySurvive() method determines whether a specimen is likely to survive based on the percentage of Cytosine (C) and Guanine (G) bases in its DNA strand.

* Usage *
Here are some examples of how to use the provided functions:

1. Creating a new specimen:
You can create a new specimen with a unique ID and a random DNA strand by calling the pAequorFactory() function:
  - const specimen1 = pAequorFactory(1, mockUpStrand());
  - console.log(specimen1);

2. Mutating a specimen's DNA:
You can mutate the DNA of a specimen using the mutate() method:
  - specimen1.mutate();
  - console.log(specimen1.dna);  // Mutated DNA

3. Comparing DNA between two specimens:
You can compare the DNA of two specimens to see how similar they are:
  - const specimen2 = pAequorFactory(2, mockUpStrand());
  - specimen1.compareDNA(specimen2);

4. Checking if a specimen is likely to survive:
The willLikelySurvive() method checks if a specimen's DNA composition indicates it is likely to survive:
  - const survivalStatus = specimen1.willLikelySurvive();
  - console.log(survivalStatus ? 'Specimen will likely survive' : 'Specimen will likely not survive');

5. Generating multiple survivors:
You can generate an array of specimens that are likely to survive by calling the pAequorSurvivors() function:
  - const survivors = pAequorSurvivors(30);
  - console.log(survivors);  // Array of surviving specimens

** Technologies Used **

Language: JavaScript (ES6+)

Date: 02/14/2025
