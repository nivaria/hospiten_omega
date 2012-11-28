jQuery(document).ready(function($){
    var size=688;
    var number_of_normal_tabs=jQuery(".quicktabs-wrapper ul.quicktabs-tabs li").not(".active").length;
    size=size-183;
    size=size-(number_of_normal_tabs*40);
    
    jQuery(".quicktabs-wrapper ul.quicktabs-tabs li").css("width",size/number_of_normal_tabs+"px");
})