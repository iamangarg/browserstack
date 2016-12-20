function Header(options) {
    if (options) {
        this.logoImg = options.logoImg || "";
        this.logoText = options.logoText || "";
        this.links = options.links || [];
        this.linksDiv = ""
    }

}

Header.prototype.html = "<div class='header-container'> " +
    "<div class='logo-container'>" +
    "<div class='logo-body'>{{logoText}}</div> </div>"+
    "{{linksDiv}}"+
    "</div>";

Header.prototype.createLinksDiv = function () {
    this.linksDiv = "<div class='header-links'>";
    for(var i in this.links){
        this.linksDiv += "<a class='header-link' href="+this.links[i].value+">"+this.links[i].label+"</a>"
    }
    this.linksDiv += "</div>";
}

Header.prototype.getHtml = function () {
    if(this.links.length > 0){
        this.createLinksDiv();
    }
    else
        this.linksDiv = "";
    this.html = this.html.replace(/{{logoText}}/g, this.logoText)
        .replace(/{{infoBody}}/g, this.infoBody)
        .replace(/{{linksDiv}}/g, this.linksDiv);
    return this.html;
}
