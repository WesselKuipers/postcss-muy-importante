const postcss = require('postcss');

const plugin = require('./');

function run(input, output, opts) {
    return postcss([ plugin(opts) ]).process(input)
        .then(result => {
            expect(result.css).toEqual(output);
            expect(result.warnings().length).toBe(0);
        });
}

it('converts !muy-importante to !important', () => {
    return run(
        'a{ color: red !muy-importante; }',
        'a{ color: red !important; }',
        { }
    );
});

