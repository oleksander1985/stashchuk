//"object объекты"

const myCity = {
    city: 'dnipro', //порядок записания свойств без разници
    popular: true,
    country: 'Ukr'
}
console.log(myCity.city);
console.log(myCity.country);
myCity.city = 'oleksandriya' //поменяли city
console.log(myCity.city);
myCity.street = 'sobornui' //добавили street
console.log(myCity);

const myStatus = {
    city: 'dnipro',
    popular: true,
    country: 'Ukr'
}
console.log(myStatus);
delete myStatus.popular //можно удалить одно из свойств объекта
console.log(myStatus);
myStatus['street'] = 'dementeva'//скобочная запись. вместо точечой записис, используется, кода названия переменных могут повторятся
console.log(myStatus);

const myCountry = {
    city: 'dnipro',
    info: {// вложенные свойства
        isPopular: true,
        contry: 'Ukr'
    }
}
console.log(myCountry.info.isPopular);//вложенное свойство, точечная запись
delete myCountry.info['isPopular']//вложенные свойства, скобочная запись
console.log(myCountry);

const name = 'Oleksander'
const postsQty = 37;
const userProfile = {// использование переменных
    name: name,
    postsQty: postsQty,
    hasSignedAgreement: false
}
const userProfile2 = {//сокращенная запись использования переменных
    name,
    postsQty,
    hasSignedAgreement: false
}

//"глобальные объекты window(в браузере) global(node.js)"
/*
globalThis //унифицированный глобальный объект 
//свойства гл.объектов:
console
window.console.log
global.console.log
*/