const { startServer } = require("maishu-node-mvc")
const path = require("path")

let server = startServer({
    port: 46235,
    websiteDirectory: path.join(__dirname, "../demo/build"),
    urlRewrite: (rawUrl) => {

        let extname = path.extname(rawUrl)
        if (extname)
            return rawUrl

        return "/index.html"
    }
})

server.websiteDirectory.setPath("/static", path.join(__dirname, "../demo/build"))




