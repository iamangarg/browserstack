function Component(options){
    if(options){
        this.html = options.html;
    }
}

Component.prototype.getHtml = function(){
    return this.html;
}
