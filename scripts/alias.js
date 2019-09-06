const { dirname, resolve, join } = require('path')

const vueSrc = join(dirname(require.resolve('vue/package.json')))
const resolveVue = p => resolve(vueSrc, p)
console.log(resolveVue('src/platforms/web/entry-runtime-with-compiler'))
module.exports = {
  vue: resolveVue('src/platforms/web/entry-runtime-with-compiler'),
  compiler: resolveVue('src/compiler'),
  core: resolveVue('src/core'),
  shared: resolveVue('src/shared'),
  web: resolve(__dirname, '../src/web'),
  weex: resolveVue('src/platforms/weex'),
  server: resolveVue('src/server'),
  sfc: resolveVue('src/sfc')
}
