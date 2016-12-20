function InfoView(options){
    if(options){
        this.heading = options.heading || "";
        this.headingType = options.headingType || "h2";
        if(options.infoModule){
            this.infoModule = options.infoModule;
        }
        this.id = options.id || "";
        this.underline = options.underline || false;
        this.postRenderFunction = options.postRenderFunction;
        this.underlineDiv = '<div class="line-tag"></div>';
    }
}


InfoView.prototype.html = '<div id="{{id}}" class="info-view">\
<div class="heading-container">\
    <{{headingType}}>\
{{headingContent}}\
</{{headingType}}>\
</div>\
{{underlineDiv}}\
<div class="content-container">\
{{contentHtml}}\
    </div>\
    </div>';

InfoView.prototype.getHtml = function(){
    this.html = this.html.replace(/{{headingType}}/g,this.headingType).
                        replace(/{{headingContent}}/g,this.heading).
                        replace(/{{id}}/g, this.id);
    if(this.infoModule){
        this.html = this.html.replace(/{{contentHtml}}/g,this.infoModule.getHtml());
    }
    if(this.underline){
         this.html = this.html.replace(/{{underlineDiv}}/g,this.underlineDiv);
    }
    else
    {
        this.html = this.html.replace(/{{underlineDiv}}/g,"");
    }
    return this.html;
}
