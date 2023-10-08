 // Contoh program javascript menggunakan if...else
 var tb = 160;

 if (tb >= 150) {
     console.log("Anda Tinggi.");
 } else {
     console.log("Anda Pendek.");
 }

// Contoh program javascript menggunakan nested if
var nilai1 = 80;
var nilai2 = 70;

if (nilai1 >= 70) {
    if (nilai2 >= 70) {
        console.log("Anda lulus kedua ujian.");
    } else {
        console.log("Anda hanya lulus ujian pertama.");
    }
} else {
    console.log("Anda tidak lulus ujian pertama.");
}

// Contoh program javascript menggunakan switch case
grade = 90;

switch (grade) {
    case 100:
        console.log("Excellent!");
        break;
    case 90:
        console.log("Good Job!");
        break;
    case 80:
        console.log("Study Harder!");
        break;
    case 70:
        console.log("Give Your Best!");
        break;
    default:
        console.log("Sorry, You Failed!");
        break;
}

// Contoh program javascript menggunakan for statement
for (let i = 0; i <= 5; i++) {
    console.log("Perulangan ke-" + i );
}

// Contoh program javascript menggunakan while
var i=0;
while (i<8)
{
   console.log("Ini adalah tugas membuat program javascript");
   i++;
}

// Contoh program javascript menggunakan do while
var i=1;
do
{
   console.log("Web Development");
   i++;
}
while (i<=10)

// Contoh program javascript menggunakan function
function ApakahAngkaIniGenap(num) {
    let cekNumber = num % 2 == 0;
    console.log(cekNumber);
  }
   
  ApakahAngkaIniGenap(1); // false
  ApakahAngkaIniGenap(2); // true