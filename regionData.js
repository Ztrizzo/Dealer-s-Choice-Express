

const regionData = [
    {region: 'Kenya', flavorNotes: ['Syrup', 'Berry', 'Floral', 'Black Currant'], acidity: 5, information: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus vel facilisis volutpat est velit egestas dui id. Id nibh tortor id aliquet lectus proin nibh nisl. Scelerisque eu ultrices vitae auctor eu augue ut lectus. Ut consequat semper viverra nam libero. Iaculis at erat pellentesque adipiscing commodo. At elementum eu facilisis sed odio morbi quis commodo. Molestie at elementum eu facilisis sed odio morbi quis. Lectus sit amet est placerat in egestas erat.', photo: '/kenyan-coffee.webp', map: '/Kenya.png'},
    {region: 'Mexico (Chipas)', flavorNotes: ['Brown Sugar', 'Pear', 'Cashew', 'Chocolate'], acidity: 4, information: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus vel facilisis volutpat est velit egestas dui id. Id nibh tortor id aliquet lectus proin nibh nisl. Scelerisque eu ultrices vitae auctor eu augue ut lectus. Ut consequat semper viverra nam libero. Iaculis at erat pellentesque adipiscing commodo. At elementum eu facilisis sed odio morbi quis commodo. Molestie at elementum eu facilisis sed odio morbi quis. Lectus sit amet est placerat in egestas erat.', photo: '/coffee-route-chiapas-1.jpeg', map: '/Chipas.png'}, 
    {region: 'Papua New Guinea', flavorNotes: ['Earthy', 'Mango', 'Apple Cider', 'Papaya'], acidity: 3, information: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus vel facilisis volutpat est velit egestas dui id. Id nibh tortor id aliquet lectus proin nibh nisl. Scelerisque eu ultrices vitae auctor eu augue ut lectus. Ut consequat semper viverra nam libero. Iaculis at erat pellentesque adipiscing commodo. At elementum eu facilisis sed odio morbi quis commodo. Molestie at elementum eu facilisis sed odio morbi quis. Lectus sit amet est placerat in egestas erat.', photo: '/papau-new-guinea-coffee.jpeg', map: '/Papua-New-Guinea.png'}
]

const dataList = () => [...regionData];

const findRegionByName = (name) => {
    const data = regionData.find((elem) => elem.region.toLocaleLowerCase() === name.toLowerCase())

    console.log(name.toLowerCase());
    return {...data}

}

module.exports = {dataList, findRegionByName};