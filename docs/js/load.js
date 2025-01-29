function load() {
    let loaders = document.getElementsByClassName("loading");
    for (let loader of loaders) {
        loader.hidden = true;
    }
    let mains = document.getElementsByClassName("main");
    for (let main of mains) {
        main.hidden = false;
    }
    console.log("loaded");
}
setTimeout(load, 5000);
