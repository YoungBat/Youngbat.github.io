function load() {
    addScript('/js/jquery-3.7.1.min.js',function() {
        $('#head').load('/static/head.html');
        $('#footer').load('/static/footer.html');
    });
    setTimeout(function (){
        let loaders = document.getElementsByClassName("loading");
        for (let loader of loaders) {
            loader.hidden = true;
        }
        let mains = document.getElementsByClassName("main");
        for (let main of mains) {
            main.hidden = false;
        }
    }, 5000);
    console.log("loaded");
}
function addScript(url,callback) {
    const script = document.createElement('script');
    script.setAttribute('type','text/javascript');
    script.setAttribute('src',url);
    script.onload = callback;
    document.getElementsByTagName('head')[0].appendChild(script);
}
load();
