function ButtonInfoModule(options) {
    if (options) {
        this.buttonText = options.buttonText || "#";
        this.infoBody = options.infoBody || "";
        this.id = options.id || "";
    }
}

ButtonInfoModule.prototype.html = "<div id='{{id}}' class='button-info-module-container'> " +
    "<div class='info-container'>" +
    "<div class='info-body'>{{infoBody}}</div>" +
    "<div class='button-container'><button class='info-button'>{{buttonText}}</button></div>" +
    "</div>" +
    "</div>";

ButtonInfoModule.prototype.getHtml = function () {
    this.html = this.html.replace(/{{buttonText}}/g, this.buttonText)
        .replace(/{{infoBody}}/g, this.infoBody)
        .replace(/{{id}}/g, this.id);
    return this.html;
}
