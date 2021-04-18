const http = require('http')
const server = http.createServer(function (request, response) {
  if (request.url === '/') {
    response.end(
      '<h1>Homepage</h1>' +
      '<h2>hi!</h2>' +
      '<ul>' +
      '<li><a href="/random-joke">Jokes</a></li>' +
      '<li><a href="/cuteness">Cuteness</a></li>' +
      '</ul>'
    )
  } else if (request.url === '/random-joke') {
    const choices = Math.random()
    if (choices < 0.34) {
      response.end(
        '<h1>Joke1</h1>' +
        '<h2>Knock, knock! <br> Who\'s there? <br>Butt.<br>' +
        'Butt who? <br> pffffffffff..... </h2>' +
        '<a href="/">Homepage</a>'
      )
    } else if (choices < 0.67) {
      response.end(
        '<h1>Joke2</h1>' +
        '<h2>Knock, knock! <br> Your beloved grandma. <br>' +
        'Your beloved grandma who? <br> Ungrateful brat!</h2>' +
        '<a href="/">Homepage</a>'
      )
    } else {
      response.end(
        '<h1>Joke3</h1>' +
        '<h2>Knock, knock! <br> Who\'s there? <br> Notfunny.<br>' +
        'Notfunny who? <br> Notfunny at all. </h2>' +
        '<a href="/">Homepage</a>'
      )
    }
  } else if (request.url === '/cuteness') {
    response.end(
      '<h1>Cuteness</h1>' +
      '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR3jkj85thBPevXw4B3x8Gxwi_fbpcvMAC-A&usqp=CAU" alt="pic">' + '<br>' +
      '<a href="/">Homepage</a>'
    )
  } else {
    response.end(
      '<h1>404.Page Not Found</h1>' +
      '<p> The requested URL' + request.url +
      ' was not found on this server. </p>' +
      '<a href="/">Homepage</a>'
    )
  }
})

const port = process.env.PORT || 8080
server.listen(port)
console.log('Server running at http://localhost:' + port + '/')
