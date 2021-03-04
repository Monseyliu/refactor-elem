const path = require("path");
const resolve = dir => path.join(__dirname, dir);

module.exports = {
    devServer: {
       
    },
    chainWebpack: config => {
        config.resolve.alias
            .set('api', resolve('src/api'))
            .set('style', resolve('src/assets/style'))
            .set('base', resolve('src/components/base'))
            .set('common', resolve('src/components/common'))
            .set('config', resolve('src/config'))
            .set('pages', resolve('src/pages'))
            .set('images', resolve('src/assets/images'))
    }
}