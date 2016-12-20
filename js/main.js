var config ={};
config.featureComponents=[
    {
        "id":"native-exp-feature-card",
        "featureImage":"../img/ico-screen.png",
        "featureCardTitle":"Native experience",
        "featureCardBody":"Real browsers on real machines. Just  like a locally installed browser, with media streaming."
    },
    {
        "id":"test-environments-feature-card",
        "featureImage":"../img/ico-windows.png",
        "featureCardTitle":"Test environments",
        "featureCardBody":"Our Local Testing feature allows you  to test  development and internal websites seamlessly."
    },
    {
        "id":"desktop-browsers-feature-card",
        "featureImage":"../img/ico-wrench.png",
        "featureCardTitle":"Desktop Browsers",
        "featureCardBody":"Latest versions of IE, Edge, Safari,  Chrome, Firefox and more on a range of platforms."
    }
];
var bodyHtml = "";


function backgroundChangeFunction(){
    var backgroundPath = "../img/";
    var backgrounds = ["bg1.jpg","bg2.jpg","bg3.jpg"];
    var i = 1;
    setInterval(function(){ 
        i=i+1;
        document.getElementById("hero-unit-info-view").style["background-image"] = "url('"+backgroundPath + backgrounds[i%3]+"')";
    }, 5000);
}

function attachEventsToFeaturesView(){
    for(var i in config.featureComponents){
        (function(i){
            degrees = 0;
            document.getElementById(config.featureComponents[i].id).addEventListener("click", function(){
                degrees +=180;
                document.getElementById(config.featureComponents[i].id).getElementsByClassName("feature-image")[0].style.transform = "rotate("+degrees+"deg)";
                document.getElementById(config.featureComponents[i].id).getElementsByClassName("feature-image")[0].style["-webkit-transform"] = "rotate("+degrees+"deg)";;
                document.getElementById(config.featureComponents[i].id).getElementsByClassName("feature-image")[0].style["-moz-transform"] = "rotate("+degrees+"deg)";;
                document.getElementById(config.featureComponents[i].id).getElementsByClassName("feature-image")[0].style["-o-transform"] = "rotate("+degrees+"deg)";;
                document.getElementById(config.featureComponents[i].id).getElementsByClassName("feature-image")[0].style["-ms-transform"] = "rotate("+degrees+"deg)";;
            });
            
        })(i)
    }
}

var postRenderFunctions = [];
function createPage(){

    var header = new Header({
        "logoText":"BROWSERSTACK",
        "links":[{
            label:"LIVE",
            value:"#"
        },{
            label:"AUTOMATE",
            value:"#"
        },{
            label:"SCREENSHOTS",
            value:"#"
        },
        {
            label:"HELP",
            value:"#"
        }]
    });

    var footer = new Footer({
        "logoText":"BROWSERSTACK",
        "links":[{
            label:"Terms of Service",
            value:"#"
        },{
            label:"Privacy",
            value:"#"
        },{
            label:"Support",
            value:"#"
        }]
    });

    var featureComponents = [];
    for(var i in config.featureComponents){
        featureComponents.push(new FeatureCard(config.featureComponents[i]));
    }

    var featureInfoViewContent = new InfoViewContent({"id":"feature-info-view-content","components":featureComponents});
    var featureInfoView = new InfoView({
        "heading":"Features",
        "headingType":"h2",
        "underline":true,
        "infoModule":featureInfoViewContent,
        "id":"feature-info-view",
        "postRenderFunction":attachEventsToFeaturesView
    });


    var heroUnitInfoModule = new ButtonInfoModule({
        "id":"hero-unit-info-module",
        "buttonText":"SIGN UP",
        "infoBody":"Instant access to all real mobile and desktop browsers. Easiest way to test websites.<br/> Say goodbye to your lab of devices and virtual machines."
    });

    var heroUnitInfoView = new InfoView({
        "id":"hero-unit-info-view",
        "heading":"Live, Web-Based, REAL Browser Testing",
        "headingType":"h1",
        "underline":true,
        "infoModule":new InfoViewContent({"components":[heroUnitInfoModule]}),
        "postRenderFunction":backgroundChangeFunction
    });

    var testEnvironmentsInfoModule = new ButtonInfoModule({
        "id":"test-environments-info-module",
        "buttonText":"GET STARTED!",
        "infoBody":"Our Local Testing feature allows you to test development and internal websites seamlessly, without setup or configuration. Real browsers on real machines.Just like a locally installed browser, with media streaming."
    });

    var testEnvironmentsInfoView = new InfoView({
        "id":"test-environments-info-view",
        "heading":"Test dev environments",
        "headingType":"h2",
        "underline":true,
        "infoModule":new InfoViewContent({"components":[testEnvironmentsInfoModule]})
    });

    var freeTrialInfoModule = new ButtonInfoModule({
        "id":"free-trial-info-module",
        "buttonText":"SIGN UP"
    });

    var freeTrialInfoView = new InfoView({
        "id":"free-trial-info-view",
        "heading":"Sign up for a free trial",
        "headingType":"h2",
        "infoModule":new InfoViewContent({"components":[freeTrialInfoModule]})
    });

    postRenderFunctions.push(heroUnitInfoView.postRenderFunction);
    postRenderFunctions.push(featureInfoView.postRenderFunction);

    bodyHtml = header.getHtml() + heroUnitInfoView.getHtml() + testEnvironmentsInfoView.getHtml() + featureInfoView.getHtml() + freeTrialInfoView.getHtml() + footer.getHtml();
}

document.addEventListener("DOMContentLoaded", function(event) {
    createPage();
    document.getElementById("main-container").innerHTML = bodyHtml;
    for(var i in postRenderFunctions){
        postRenderFunctions[i]();
    }
});

