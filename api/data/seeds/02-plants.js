// eslint-disable-next-line no-unused-vars
exports.seed = function(knex, Promise) {
    return knex('plants').insert([
    {
        nickname: 'floral',
        species: 'flower',
        h2oFrequency: 5,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTmztfsDgSsAVuYWPMhODRmsP5hjOEH8yTzQ&usqp=CAU'
    },
    {
        nickname: 'cacti',
        species: 'cactus',
        h2oFrequency: 3,
        image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.britannica.com%2F40%2F193840-050-1E71F6FD%2FSaguaro-cacti-landscape-Sonoran-Desert-Arizona-National.jpg&imgrefurl=https%3A%2F%2Fwww.britannica.com%2Fstory%2Fcan-you-drink-water-from-a-cactus&tbnid=UgfrTkN4jP93zM&vet=12ahUKEwjpjtPI3pDzAhWRuZ4KHa8DAu0QMygQegUIARDLAg..i&docid=xLOYDTSz8EGZTM&w=1600&h=1068&q=cactus&ved=2ahUKEwjpjtPI3pDzAhWRuZ4KHa8DAu0QMygQegUIARDLAg'
    },
    {
        nickname: 'fruity',
        species: 'tree',
        h2oFrequency: 7,
        image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.gardeningknowhow.com%2Fedible%2Ffruits%2Foranges%2Fgrowing-an-orange-tree.htm&psig=AOvVaw0anNlLQ-LtGeUDnXnLXTbW&ust=1632336902827000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLDEiYDfkPMCFQAAAAAdAAAAABAD'
    },
    {
        nickname: 'grassy',
        species: 'grass',
        h2oFrequency: 10,
        image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.gardeningknowhow.com%2Fwp-content%2Fuploads%2F2021%2F02%2Flush-green-grass.jpg&imgrefurl=https%3A%2F%2Fwww.gardeningknowhow.com%2Fornamental%2Ffoliage%2Flomandra%2Fgrowing-lomandra-grass.htm&tbnid=tRZAjtcrBu0lXM&vet=12ahUKEwi32_2V35DzAhUKpJ4KHeQ3CpAQMygDegUIARDWAQ..i&docid=aY-Kx_Y_cSxlWM&w=1600&h=1200&q=grass&ved=2ahUKEwi32_2V35DzAhUKpJ4KHeQ3CpAQMygDegUIARDWAQ'
    }

    ])
}