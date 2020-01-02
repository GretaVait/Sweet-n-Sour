const coctail = {
    blackAngus: {
        title: 'Black Angus', 
        price: '$25.00', 
        ingredients: 'vodka, gin, juice, red bull, syrup'
    },
    longIsland: {
        title: 'Long Island', 
        price: '$23.00', 
        ingredients: 'vodka, gin, tequila, cointreau, rum, lemon fresh, cocacola'
    },
    cosmopolitan: {
        title: 'Cosmopolitan', 
        price: '$17.00', 
        ingredients: 'vodka, cointreau, juice, lemon fresh'
    },
    margarita: {
        title: 'Margarita', 
        price: '$25.00', 
        ingredients: 'tequila, cointreau, lemon juice'
    },
    cubaLibre: {
        title: 'Cuba Libre', 
        price: '$19.00', 
        ingredients: 'rum, lemon juice, cocacola'
    },
    ginTonic: {
        title: 'Gin Tonic', 
        price: '$15.00', 
        ingredients: 'gin, tonic, water'
    },
    bloodyMary: {
        title: 'Bloody Mary', 
        price: '$14.00', 
        ingredients: 'vodka, tomato juice, lemon juice, salt, pepper, tabasco'
    },
    daiquiri: {
        title: 'Daiquiri', 
        price: '$14.00', 
        ingredients: 'rum, lemon juice, sugar'
    },
    screwdriver: {
        title: 'Screwdriver', 
        price: '$14.00', 
        ingredients: 'vodka, orange juice'
    }
}

const beer = {
    corona: {
        title: 'Corona', 
        price: '$12.00'
    },
    heineken: {
        title: 'Heineken', 
        price: '$12.00'
    },
    kozelDark: {
        title: 'Kozel Dark', 
        price: '$15.00'
    },
    pilsner: {
        title: 'Pilsner', 
        price: '$15.00'
    }
}

menuList = document.querySelector('.menu__list');
const coctailArray = Object.values(coctail);

for (let i = 0; i < coctailArray.length; i++) {
    const menuItem = document.createElement('LI');
    menuList.appendChild(menuItem);
    menuItem.classList.add('menu__item');

    const menuTitle = document.createElement('SPAN');
    menuItem.appendChild(menuTitle);
    menuTitle.classList.add('menu__title');

    const menuPrice = document.createElement('SPAN');
    menuItem.appendChild(menuPrice);
    menuPrice.classList.add('menu__price');

    const menuText = document.createElement('P');
    menuItem.appendChild(menuText);
    menuText.classList.add('menu__text');

    menuTitle.innerHTML = coctailArray[i].title;
    menuPrice.innerHTML = coctailArray[i].price;
    menuText.innerHTML = coctailArray[i].ingredients;
}

const beerArray = Object.values(beer);

for (let i = 0; i < beerArray.length; i++) {
    const menuItem = document.createElement('LI');
    menuList.appendChild(menuItem);
    menuItem.classList.add('menu__item');

    const menuTitle = document.createElement('SPAN');
    menuItem.appendChild(menuTitle);
    menuTitle.classList.add('menu__title');

    const menuPrice = document.createElement('SPAN');
    menuItem.appendChild(menuPrice);
    menuPrice.classList.add('menu__price');

    const menuText = document.createElement('P');
    menuItem.appendChild(menuText);
    menuText.classList.add('menu__text');

    menuTitle.innerHTML = beerArray[i].title;
    menuPrice.innerHTML = beerArray[i].price;
}
