jQuery(document).ready(function($){
    var size=688;
    var number_of_normal_tabs=jQuery(".quicktabs-wrapper ul.quicktabs-tabs li").not(".active").length;
    size=size-183;
    size=size-(number_of_normal_tabs*40);
    
    jQuery(".quicktabs-wrapper ul.quicktabs-tabs li").css("width",size/number_of_normal_tabs+"px");
    
    
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
})