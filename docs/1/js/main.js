window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOMContentLoaded!!');
    const author = 'ytyaru';
    van.add(document.querySelector('main'), 
        van.tags.h1(van.tags.a({href:`https://github.com/${author}/JS.Clipboard.Fallback.20250311094605/`}, 'Clipboard.Fallback')),
        van.tags.p('navigator.clipboard + document.execCommand'),
//        van.tags.p('I'm not sure what to do. Cip boar + Dokumen T. Oh oh oh d'),
    );
    van.add(document.querySelector('footer'),  new Footer('ytyaru', '../').make());

    const a = new Assertion();
    a.t(true);
    a.f(false);
    a.e(TypeError, `msg`, ()=>{throw new TypeError(`msg`)});
    a.t(!!Clipboard)
    a.fin();
    document.querySelector(`#copy`).addEventListener('click', async(e)=>{
        await Clipboard.write(document.querySelector(`#text`).value);
    });
    document.querySelector(`#paste`).addEventListener('click', async(e)=>{
        document.querySelector(`#text`).value = await Clipboard.read();
    });
});
window.addEventListener('beforeunload', (event) => {
    console.log('beforeunload!!');
});

