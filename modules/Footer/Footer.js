function Footer(options) {
    if (options) {
        this.logoImg = options.logoImg || "";
        this.logoText = options.logoText || "";
        this.links = options.links || [];
        this.linksDiv = ""
    }

}

Footer.prototype.html = "<div class='footer-container'> " +
    "<div class='footer-logo-container'>" +
    "<div class='footer-logo-body'>{{logoText}}</div> </div>"+
    "{{linksDiv}}"+
    "</div>";

Footer.prototype.createLinksDiv = function () {
    this.linksDiv = "<div class='footer-links'>";
    for(var i in this.links){
        this.linksDiv += "<a class='footer-link' href="+this.links[i].value+">"+this.links[i].label+"</a>"
    }
    this.linksDiv += "</div>";
}

Footer.prototype.getHtml = function () {
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
