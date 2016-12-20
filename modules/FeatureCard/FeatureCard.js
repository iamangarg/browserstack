function FeatureCard(options) {
    if (options) {
        this.featureImage = options.featureImage || "#";
        this.featureCardTitle = options.featureCardTitle || "";
        this.featureCardBody = options.featureCardBody || "";
        this.id = options.id || "";
    }
}

FeatureCard.prototype.html = "<div id='{{id}}' class='feature-card'> " +
    "<div class='image-container'>" +
    "<img class='feature-image' src='{{featureImage}}'/>" +
    "<div class='feature-card-content'> " +
    "<div class='feature-card-title'>{{featureCardTitle}}</div>" +
    "<div class='feature-card-body'>{{featureCardBody}}</div>" +
    "</div>" +
    "</div>" +
    "</div>";

FeatureCard.prototype.getHtml = function () {
    this.html = this.html.replace(/{{featureImage}}/g, this.featureImage)
        .replace(/{{featureCardTitle}}/g, this.featureCardTitle)
        .replace(/{{featureCardBody}}/g, this.featureCardBody)
        .replace(/{{id}}/g, this.id);
    return this.html;
}
