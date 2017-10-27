//META{"name":"toggleChannel"}*//

var toggleChannel=function(){};

toggleChannel.prototype.start=function()
{

};

toggleChannel.prototype.load=function()
{
    var this1=this;
    $(".guild").on("click",function(e){
        this1.hookButton();
    });    
};

toggleChannel.prototype.unload=function()
{

};

toggleChannel.prototype.stop=function()
{
    
};

toggleChannel.prototype.onMessage=function()
{

};

toggleChannel.prototype.onSwitch=function()
{
    // this.hookButton();
};

toggleChannel.prototype.observer=function (e)
{
    //raw MutationObserver event for each mutation
};

toggleChannel.prototype.getSettingsPanel=function()
{

};

toggleChannel.prototype.getName=function()
{
    return "toggleChannel";
};

toggleChannel.prototype.getDescription=function()
{
    return "right click member list button to hide channel list";
};

toggleChannel.prototype.getVersion=function()
{
    return "2";
};

toggleChannel.prototype.getAuthor=function()
{
    return "rishona";
};

toggleChannel.prototype.hookButton=function()
{
    var hookButton=$(".header-toolbar button").eq(2);

    hookButton.off("contextmenu");
    hookButton.on("contextmenu",function(e){
        console.log("aa");
        $(".channels-wrap").toggleClass("channels-wrap-hide");
    });
    
};
