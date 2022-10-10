// unwrap and run !!

// jawaban 2 a

const kalimat = "Saat meng*ecat tembok, Agung dib_antu oleh Raihan.";
const hitung = kalimat.split(" ");

let total = hitung.length;

for (let i = 0; i < hitung.length; i++) {
  if (
    hitung[i].includes("*") ||
    hitung[i].includes("_") ||
    hitung[i].includes("[") ||
    hitung[i].includes("(") ||
    hitung[i].includes("!") ||
    hitung[i].includes("=") ||
    hitung[i].includes("&")
  ) {
    total--;
  }
}

console.log(total);

// ================================================================================================================

// jawaban 2 b

// const kalimat = "Berapa u(mur minimal[ untuk !mengurus ktp?"
// const hitung = kalimat.split(' ')

//     let total = hitung.length

//     for (let i=0; i<hitung.length; i++){
//         if(hitung[i].includes("*") || hitung[i].includes("_") ||  hitung[i].includes("[") ||  hitung[i].includes("(") ||  hitung[i].includes("!") ||  hitung[i].includes("=") ||  hitung[i].includes("&")) {
//             total--;
//         }
//     }

//   console.log(total)

// =====================================================================================================================

// jawaban 2 c
// const kalimat = "Masing-masing anak mendap(atkan uang jajan ya=ng be&rbeda"
// const hitung = kalimat.split(' ')

//     let total = hitung.length

//     for (let i=0; i<hitung.length; i++){
//         if(hitung[i].includes("*") || hitung[i].includes("_") ||  hitung[i].includes("[") ||  hitung[i].includes("(") ||  hitung[i].includes("!") ||  hitung[i].includes("=") ||  hitung[i].includes("&")) {
//             total--;
//         }
//     }

//   console.log(total)
