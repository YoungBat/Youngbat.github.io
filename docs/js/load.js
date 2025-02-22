function load(language) {
    if (language === 'zh-cn') {
        addScript('/js/jquery-3.7.1.min.js',function() {
            $('#head').load('/zh-cn/static/head.html');
            $('#footer').load('/zh-cn/static/footer.html');
        });
    }
    else if (language === 'en-us') {
        addScript('/js/jquery-3.7.1.min.js',function() {
            $('#head').load('/en-us/static/head.html');
            $('#footer').load('/en-us/static/footer.html');
        });
    }
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
load(param);
