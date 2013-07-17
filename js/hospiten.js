jQuery(document).ready(function($){
    
    jQuery("#edit-search-api-views-fulltext").bind("click",function(){
       jQuery(this).val(""); 
    });
    var size=688;
    var number_of_normal_tabs=jQuery(".quicktabs-wrapper ul.quicktabs-tabs li").not(".active").length;
    size=size-183;
    /*size=size-(number_of_normal_tabs*40);*/
    
    jQuery(".quicktabs-wrapper ul.quicktabs-tabs li").css("width",size/number_of_normal_tabs+"px");
    jQuery(".quicktabs-wrapper ul.quicktabs-tabs li a").each( function(index,element){
        jQuery(this).append( jQuery("<span class='tab_icon tab_icon_"+index+"' ></span>") );
    });
    jQuery(".view-centros .views-row.views-row-odd").each( function(){
        var current=jQuery(this);
        var next=current.next();
        
        if(current.height()>next.height()){
            next.css("height",current.height()+"px");
        } else {
            current.css("height",next.height()+"px");
        }
    });
    jQuery("body.node-type-especialidades .pruebas_especialidad h3 span").bind("click",function(){
        jQuery("body.node-type-especialidades .pruebas_especialidad .field-name-field-pru-ser-especialidades").toggle();
    });

    jQuery('.contenido_oferta').attr('style', "display:none");
    jQuery('.show_oferta').click(function(){
        if (jQuery(this).attr('class').indexOf('hide_oferta')==-1) {
            jQuery(this).parent().parent().next().next().children().children().attr('style', "display:block");
            jQuery(this).addClass("hide_oferta");
            jQuery(this).html("ocultar información");
        } else {
            jQuery(this).parent().parent().next().next().children().children().attr('style', "display:none");
            jQuery(this).removeClass("hide_oferta");
            jQuery(this).html("más información");
        }
    });
    jQuery('div.pruebas_especialidad > div').attr('style', 'display:none');
    var elem = jQuery('div.pruebas_especialidad > h3');
    if (elem) {
        elem.append('<span class="show_pruebas" style="float:right;cursor:pointer">X</span>');
    }
    jQuery('.show_pruebas').click(function(){
        if (jQuery(this).attr('class').indexOf('hide_pruebas')==-1) {
            jQuery(this).parent().next().attr('style', "display:block");
            jQuery(this).addClass("hide_pruebas");
            jQuery(this).removeClass("show_pruebas");
        } else {
            jQuery(this).parent().next().attr('style', "display:none");
            jQuery(this).addClass("show_pruebas");
            jQuery(this).removeClass("hide_pruebas");
        }
    });
    jQuery(".facetapi-active").each( function(){
       jQuery(this).parent().addClass("facetapi-active-holder");
       jQuery(this).height( (jQuery(this).next().height()+11)+"px" );
    });
    jQuery("body.node-type-profesionales .node-profesionales > .group-right").height( jQuery("body.node-type-profesionales .node-profesionales > .group-left").height()+"px" );
    
    if( jQuery("body.page-especialidades-y-servicios #zone-content .view.especialidades .view-content li.views-row").length >0 ){
        var i=1;
        var j=jQuery("body.page-especialidades-y-servicios #zone-content .view.especialidades .view-content li.views-row").length;
        while(i<j){
            jQuery("body.page-especialidades-y-servicios #zone-content .view.especialidades .view-content li.views-row:nth-child("+i+")").css("background-color","#F9F9F9");
            i=i+1;
            jQuery("body.page-especialidades-y-servicios #zone-content .view.especialidades .view-content li.views-row:nth-child("+i+")").css("background-color","#F9F9F9"); 
            i=i+3;
        }
    }
    
    if( jQuery("body.node-type-hospitales #page #block-views-especialidades-node-index-block .view-content li.views-row").length >0 ){
        var i=1;
        var j=jQuery("body.node-type-hospitales #page #block-views-especialidades-node-index-block .view-content li.views-row").length;
        while(i<j){
            jQuery("body.node-type-hospitales #page #block-views-especialidades-node-index-block .view-content li.views-row:nth-child("+i+")").css("background-color","#F9F9F9");
            i=i+1;
            jQuery("body.node-type-hospitales #page #block-views-especialidades-node-index-block .view-content li.views-row:nth-child("+i+")").css("background-color","#F9F9F9"); 
            i=i+3;
        }
    }
    jQuery("body.node-type-hospitales #page #block-views-especialidades-node-index-block .view-content li.views-row-odd").each( function(){
        var current=jQuery(this);
        var next=current.next();
        
        if(current.height()>next.height()){
            next.css("height",current.height()+"px");
        } else {
            current.css("height",next.height()+"px");
        }
    });
    
    jQuery("body.page-especialidades-y-servicios #zone-content .view.especialidades .view-header h2").addClass("page-title");
    jQuery("body.page-especialidades-y-servicios h1").after( jQuery("body.page-especialidades-y-servicios #zone-content .view.especialidades .view-header h2") );
    jQuery("#block-locale-language .language-switcher-locale-url li").removeClass("first");
    jQuery("#block-menu-menu-menu-superior ul").append( jQuery("#block-locale-language .language-switcher-locale-url li").not(".active") );
    jQuery("#block-locale-language").remove();
    jQuery(".pager-last.last a").text("»");
    jQuery(".pager-first.first a").text("«");
    
    $(".views-field-field-imagen-slideshow-portada,#region-sidebar-second .block-views .views-row,#region-sidebar-second .block-nodeblock, body.front #region-postscript-third .block").hover(
    function() {
    $(this).find("img").stop().animate({"opacity": "0.5"}, "slow");
    $(this).find("a").css("text-decoration","underline");
    },
    function() {
    $(this).find("img").stop().animate({"opacity": "1"}, "slow");
    $(this).find("a").css("text-decoration","none");
    });
})
