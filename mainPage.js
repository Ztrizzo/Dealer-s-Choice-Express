module.exports = (regionData) => {


    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="/styles.css" />
        <title>Coffee from Around the World</title>
    </head>
    <body>
        <nav>
            <h1>Coffee Regions</h1>

        </nav>
        
        <img id='cover' src='/Coffee_Berries.jpeg'/>
        <section id='region-list'>
            ${regionData.map((elem) => 
                `<div class='region'>
                    <a href='/region/${elem.region}'>${elem.region}</a>
                    <img src='${elem.map}'/>
                </div>`
            ).join('')}
        </section>
    </body>
    </html>`
}

