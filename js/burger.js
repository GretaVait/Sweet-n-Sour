const burger = { 
    classic: {
        title: 'Classic', 
        price: '$15.00', 
        ingredients: 'beef patty, tomato, lettuce, pickles, onion, cocktail sauce'
    },
    classicCheese: {
        title: 'Classic Cheese',
        price: '$16.00',
        ingredients: 'beef patty, cheddar cheese, tomato, lettuce, pickles, onion, cocktail sauce'
    },
    classicDouble: {
        title: 'Classic Double',
        price: '$19.00',
        ingredients: 'double beef, tomato, lettuce, pickles, onion, cocktail sauce'
    },
    classicDoubleCheese: {
        title: 'Classic Double Cheese',
        price: '$20.00',
        ingredients: 'double beef, double cheese, lettuce, pickles, tomato, onion, cocktail sauce'
    },
    italianStyle: {
        title: 'Italian Style',
        price: '$19.00',
        ingredients: 'beef patty, fresh mozzarella, onion, italian salami, tomato'
    },
    mozzarellaSoft: {
        title: 'Mozzarella Soft',
        price: '$17.00',
        ingredients: 'beef patty, fresh mozzarella, tomato, balsamic'
    },
    blueCheese: {
        title: 'Blue Cheese',
        price: '$16.00',
        ingredients: 'beef patty, blue cheese, french sauce, rucola'
    },
    baconCheddarCheese: {
        title: 'Bacon & Cheddar Cheese',
        price: '$16.00',
        ingredients: 'beef patty, bacon, cheddar cheese, tomato, lettuce, onions'
    },
    swissCheese: {
        title: 'Swiss Cheese',
        price: '$17.00',
        ingredients: 'beef patty, swiss cheese, grilled mushrooms, onion, tomato, lettuce'
    },
    grilledChicken: {
        title: 'Grilled Chicken',
        price: '$14.00',
        ingredients: 'grilled chicken breast, cheddar cheese, tomato, white oregano'
    },
    pepperChesse: {
        title: 'Pepper Cheese',
        price: '$17.00',
        ingredients: 'beef patty, cheddar cheese, tomato, onion, pickles, black & red pepper'
    },
    bbqGrilledChicken: {
        title: 'BBQ Grilled Chicken',
        price: '$15.00',
        ingredients: 'grilled chicken breast, rucola and barbecue sauce'
    },
    veggie: {
        title: 'Veggie',
        price: '$13.00',
        ingredients: 'fresh grilled vegetables, broccoli, tomato, lettuce, onion, fresh cucumber'
    },
    pepperSteak: {
        title: 'Pepper Steak',
        price: '$20.00',
        ingredients: 'cognac and pepper sauce, grilled bell pepper, tomato, onion, cheddar cheese'
    },
    tuscanStyle: {
        title: 'Tuscan Style',
        price: '$20.00',
        ingredients: 'tomato, rucola, figs, prosciutto'
    },
    frenchCheese: {
        title: 'French Cheese',
        price: '$19.00',
        ingredients: 'brie cheese, rucola, dried tomatoes, caramelised onion'
    }
};

menuList = document.querySelector('.menu__list');
const burgerArray = Object.values(burger);

for (let i = 0; i < burgerArray.length; i++) {
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

    menuTitle.innerHTML = burgerArray[i].title;
    menuPrice.innerHTML = burgerArray[i].price;
    menuText.innerHTML = burgerArray[i].ingredients;

}