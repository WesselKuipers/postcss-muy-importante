const postcss = require('postcss');

module.exports = postcss.plugin('postcss-muy-importante', () => {
    return (css) => {
        css.walkDecls(decl => {
            if (decl.value.indexOf('!muy-importante') >= 0) {
                decl.value = decl.value.replace(/\s*!muy-importante\s*/, '');
                decl.important = true;
            }
        });

    };
});
