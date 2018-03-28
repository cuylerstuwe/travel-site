const path = require('path');

module.exports = {
    // entry: "./app/assets/scripts/app.js",
    entry: {
        App: "./app/assets/scripts/app.js",
        Vendor: "./app/assets/scripts/Vendor.js"
    },
    output: {
        path: path.resolve(__dirname, "./app/temp/scripts"),
        // filename: "app.js"
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                loader: "babel-loader",
                query: {
                    presets: ['es2015']
                },
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    }
};