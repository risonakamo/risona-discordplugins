//META{"name":"toggleChannel"}*//

var toggleChannel=function(){};

toggleChannel.prototype.start=function()
{

};

toggleChannel.prototype.load=function()
{
    var this1=this;
    this1.hookButton();

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
    return "2.1";
};

toggleChannel.prototype.getAuthor=function()
{
    return "rishona";
};

toggleChannel.prototype.hookButton=function()
{
    var hookButton=$(".icon-mr9wAc");

    if (hookButton.length!=5)
    {
        setTimeout(this.hookButton,100);
        return;
    }

    hookButton=hookButton.eq(2);

    hookButton.off("contextmenu");
    hookButton.on("contextmenu",function(e){
        $(".channels-3g2vYe").toggleClass("channels-wrap-hide");
    });

};
