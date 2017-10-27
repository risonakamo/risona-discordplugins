//META{"name":"toggleChannel"}*//

var toggleChannel=function(){};

var attached=0;

toggleChannel.prototype.start=function()
{

};

toggleChannel.prototype.load=function()
{
    $(".channels-wrap").addClass("channels-wrap-hide")
    var tthis=this;
    $(".guild").on("click",function(){
        setTimeout(function(){tthis.insertButton()},300);
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
    this.insertButton();
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
    return "1";
};

toggleChannel.prototype.getAuthor=function()
{
    return "rishona";
};

toggleChannel.prototype.insertButton=function()
{
    if ($(".title-wrap").length==0)
    {
        attached=0;
        return;
    }

    if (attached==1)
    {
        return;
    }
    
    attached=1;
    var hookButton=$(".header-toolbar button:nth-of-type(3)");

    hookButton.off("contextmenu");
    hookButton.on("contextmenu",function(e){
        console.log("aa");
        $(".channels-wrap").toggleClass("channels-wrap-hide")
    });
    
};
