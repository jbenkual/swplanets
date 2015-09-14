module.exports = {
    entry: "./src/js/main.js",
    output: {
        path: __dirname,
        filename: "./src/js/bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.js/, excluse: /node_modules/, loader: "babel-loader"}
        ]
    }
};