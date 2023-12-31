const cart = []; // для нового масиву
const arrNew = [];

const products = [
    {
        id: 1,
        img: 'img/gold_fish.jpg',
        title: 'Золота рибка Комета',
        description: 'Комета - це найбільш простий і невибагливий різновид золотої рибки невеликих розмірів з довгим стрічкоподібним (часто роздвоєним) хвостом, що перевершує довжину тіла.',
        price: '70'
    },

    {
        id: 2,
        img: 'img/danio.jpg',
        title: 'Даніо Глофіш',
        description: 'Даніо глофіш – миролюбна рибка, яка відмінно підійде для загальних акваріумів із дрібними тропічними видами. Рибки відрізняються тим, що плавають переважно у верхніх шарах акваріума.',
        price: '15'
    },

    {
        id: 3,
        img: 'img/hupi.jpg',
        title: 'Гупі',
        description: 'Гупі — найневибагливіший з акваріумних рибок. Їх без побоювання можна утримувати у загальному акваріумі, рибки незалежно від кольору луски та форми плавників відмінно уживаються одна з одною. ',
        price: '20'
    },

    {
        id: 4,
        img: 'img/terneciya.jpg',
        title: 'Тернеція',
        description: 'Тернеція — прісноводна тропічна рибка. Цікава форма тіла і плавників тернеції роблять цю рибку надзвичайно привабливою для утримання в акваріумах аматорів.',
        price: '30'
    },

    {
        id: 5,
        img: 'img/neon.jpeg',
        title: 'Неон',
        description: 'Неони – одні з найпопулярніших акваріумних мешканців із родини Харацинові. Свою незвичайну назву рибки отримали за характерну повздовжню смужку на тілі, яка у відбитому світлі спалахує настільки яскравими відблисками, що нагадує неонові рекламні вивіски у містах.',
        price: '15'
    },

    {
        id: 6,
        img: 'img/krapchastyi-somyk.jpg',
        title: 'Коридорас крапчастий',
        description: 'Крапчастий сомик – прісноводна рибка з родини Панцирних сомів. Один з найпоширеніших і найвідоміших акваріумних вихованців. Важко знайти тропічний акваріум, де не жили б ці непосидючі створіння.',
        price: '15'
    },

    {
        id: 7,
        img: 'img/ancystrus.jpg',
        title: 'Анциструс',
        description: 'Анциструс - маленький трудівник.  Адже основою харчування даного сомика є наліт водоростей, що часто виникає на стінках акваріума і декораціях. Таким чином, рибка допомагає підтримувати чистоту в акваріумі.',
        price: '15'
    }
]

console.log(products.length);


