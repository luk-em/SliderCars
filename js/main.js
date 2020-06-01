let activeElement = 0;
const timeChange = 4000;
setInterval(changeElement, timeChange)

const colorImgHtml = document.querySelector('.color');
const grayImgHtml = document.querySelector('.gray');
const h1Html = document.querySelector('.model h1');
const h2Html = document.querySelector('.model h2');

const colorImages = ['img/Porsche356.png', 'img/CadillacConvertibleCoupe.png', 'img/LamborghiniCountach.png'];
const grayImages = ['img/Porsche356a.png', 'img/CadillacConvertibleCoupea.png', 'img/LamborghiniCountacha.png'];
const names = ['Porsche', 'Cadillac', 'Lamborghini'];
const professions = ['356',
    'Convertible Coupe', 'Countach'
];

function changeElement() {
    activeElement++;
    if (activeElement == 3) {
        activeElement = 0;
    }
    colorImgHtml.src = colorImages[activeElement];
    grayImgHtml.src = grayImages[activeElement];
    h1Html.textContent = names[activeElement];
    h2Html.textContent = professions[activeElement];
}