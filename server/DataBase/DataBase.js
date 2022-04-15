const db = {
    photos: [
        {
            id: 1,
            title: 'Это я!', 
            description: 'Мой ник LooleyLov, добавляйтесь в друзья :зз', 
            tag: 'AnimalCrossing', 
            url: 'https://i.ibb.co/JkrgPh6/IMG-0839.png',
        },
        {
            id: 2,
            title: 'Уже устал ждать', 
            description: 'Зверушки такие медленные', 
            tag: 'AnimalCrossing', 
            url: 'https://i.ibb.co/60FWb4Y/IMG-0950.png',  
        }
    ],
    comments: [
        {
            id: 1,
            comment: 'Очень красивая шапочка))'
        },
        {
            id:1,
            comment: 'Полностью согласен'
        }
    ]
}

module.exports = {
	db
}