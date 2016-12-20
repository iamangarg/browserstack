function InfoViewContent(options){
    if(options){
        this.components = options.components || [];
        this.id = options.id || "";

    }
}

InfoViewContent.prototype.html = '<div id="{{id}}"" class="info-view-content">\
{{infoViewContent}}\
    </div>';

InfoViewContent.prototype.getHtml = function(){
    var infoComponentHtml = "";
    for(var i in this.components){
        infoComponentHtml = infoComponentHtml + this.components[i].getHtml();
    }
    this.html = this.html.replace(/{{id}}/g, this.id)
    .replace(/{{infoViewContent}}/g,infoComponentHtml);
    return this.html;
}
