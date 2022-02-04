module.exports = (region) => {

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=", initial-scale=1.0">
        <link rel="stylesheet" href="/styles.css" />
        <title>${region.region}</title>
    </head>
    <body>
        <nav>
            <h1>${region.region}</h1>
        
        </nav>
        <div class='region-photo' style='background: url(${region.photo}); background-repeat: no-repeat'> 
            <div class='info'>
                <p>${region.information}</p>
            </div>
        </div>
        
        
    </body>
    </html>`
}
