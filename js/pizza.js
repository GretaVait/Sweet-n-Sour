const pizza = {
    blackAngusStyle: {
        title: 'Black Angus',
        price: '$25.00',
        ingredients: 'mignon steak,rucola, bell pepper, cherry tomatoes, green and black olives, mozzarella'
    },
    margherita: {
        title: 'Margherita',
        price: '$15.00',
        ingredients: 'mozzarella & parmigiano cheese, tomato, basil'
    },
    quattroStagioni: {
        title: 'Quattro Stagioni',
        price: '$25.00',
        ingredients: 'salami, mozzarella cheese, mushrooms, tomato, black & green olives'
    },
    bianca: {
        title: 'Bianca',
        price: '$20.00',
        ingredients: 'mozzarella, ricotta, parmigiano cheese, rosemary leaves, cherry tomatoes'
    },
    quattroFormaggi: {
        title: 'Quattro Formaggi',
        price: '$25.00',
        ingredients: 'mozzarella, ricotta, gorgonzola & parmigiano cheese, fresh herbs'
    },
    capricciosa: {
        title: 'Capricciosa',
        price: '$25.00',
        ingredients: 'ham, mozzarella, mushrooms, black & green olives'
    },
    pepperoni: {
        title: 'Pepperoni',
        price: '$20.00',
        ingredients: 'italian salami, mozzarella'
    },
    vegetarianStyle: {
        title: 'Vegetarian Style',
        price: '$20.00',
        ingredients: 'dried tomatoes, mushrooms, broccoli, bell pepper, olives'
    }
}

menuList = document.querySelector('.menu__list');
const pizzaArray = Object.values(pizza);

for (let i = 0; i < pizzaArray.length; i++) {
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

    menuTitle.innerHTML = pizzaArray[i].title;
    menuPrice.innerHTML = pizzaArray[i].price;
    menuText.innerHTML = pizzaArray[i].ingredients;

}