const productRouter = require('./products.router')
const categoriesRouter = require('./categories.router')


function routerApi(app) {
  app.use('/products', productRouter)
  app.use('/categories', categoriesRouter)
}






module.exports = routerApi
