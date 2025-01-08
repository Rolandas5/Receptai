// 1. Pasirenkam receptą paspausdami ant jo
// 2. Atvaizduojame recepto sudėtį
// 3. Kai įvedu porciju skaičių ir mygtuku paspaudziu pateikti apskaiciuoju porcijų skaickių

// Receptų masyvas
const receptai = [
  {
    name: 'Vištiena su salotom',
    ingredients: {
      Vištiena: 100,
      Brokoliai: 200,
      Pomidorai: 100,
      Salotos: 150,
      Druska: 20,
      Aliejus: 15,
      Citrina: 1,
    },
  },
  {
    name: 'Tortas su mėlynėmis',
    ingredients: {
      Miltai: 250,
      Kiaušiniai: 1,
      Mėlynės: 100,
      Cukrus: 50,
    },
  },
  {
    name: 'Makaronai su mėsa',
    ingredients: {
      Mėsa: 300,
      Makaronai: 700,
      Sūris: 200,
      Druska: 20,
      Grietinė: 100,
    },
  },
];

let activeRecipe = null;
let amount = 1;

function hideAll() {
  document.getElementById('svg1').classList.add('hide');
  document.getElementById('svg2').classList.add('hide');
  document.getElementById('svg3').classList.add('hide');
}

document.getElementById('1').addEventListener('click', () => {
  hideAll();
  document.getElementById('svg1').classList.remove('hide');
  activeRecipe = 0;
  displayRecipe(activeRecipe);
});

document.getElementById('2').addEventListener('click', () => {
  hideAll();
  document.getElementById('svg2').classList.remove('hide');
  activeRecipe = 1;
  displayRecipe(activeRecipe);
});

document.getElementById('3').addEventListener('click', () => {
  hideAll();
  document.getElementById('svg3').classList.remove('hide');
  activeRecipe = 2;
  displayRecipe(activeRecipe);
});

function displayRecipe(recipe) {
  let displayString = `<h3>${receptai[recipe].name}</h3>`;

  for (let item in receptai[recipe].ingredients) {
    displayString += `${item}: <strong>${receptai[recipe].ingredients[item]}</strong><br>`;
  }

  document.getElementById('displayScreen').innerHTML = displayString;
}
