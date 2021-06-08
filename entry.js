const app = require('express')()
const { loadNuxt, build } = require('nuxt')

var morgan = require('morgan')
app.use(morgan('combined'))

const doLoadNuxt = async () => {
    const isDev = process.env.NODE_ENV !== 'production'
    const nuxt = await loadNuxt(isDev ? 'dev' : 'start')
    app.use(nuxt.render)

    // Build only in dev mode with hot-reloading
    if (isDev) {
        build(nuxt)
    }
}

module.exports = {doLoadNuxt, app}