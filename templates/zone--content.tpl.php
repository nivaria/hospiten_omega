<?php if ($wrapper): ?><div<?php print $attributes; ?>><?php endif; ?>  
  <div<?php print $content_attributes; ?>>    
    <?php if ($breadcrumb): ?>
      <div id="breadcrumb" class="grid-<?php print $columns; ?>"><div id="breadcrumb_icon"></div><?php print $breadcrumb; ?></div>      
    <?php endif; ?>
    <?
      $banner=null;
      
      if ( isset($_REQUEST["q"]) && $_REQUEST["q"]!=null ){
        if ( $_REQUEST["q"]=="es/especialidades-y-servicios" ){
          $banner = "/sites/default/files/especialidades-y-servicios-medicos.png";
        }
        if ( $_REQUEST["q"]=="es/hospitales-y-centros" ){
          $banner = "/sites/default/files/centros-y-hospitales.png";
        }
        if ( $_REQUEST["q"]=="es/content/grupo-hospiten" ){
          $banner = "/sites/default/files/grupo-hospiten.png";
        }
        if ( $_REQUEST["q"]=="es/nuestros-profesionales" ){
          $banner = "/sites/default/files/nuestros-profesionales.png";
        }
      }
      
      if ( $banner!=null ){
    ?>
        <div id="inner_page_banner">
          <img src=<? echo $banner; ?> alt="">
        </div>
    <?
      }
    ?>
    <?php if ($messages): ?>
      <div id="messages" class="grid-<?php print $columns; ?>"><?php print $messages; ?></div>
    <?php endif; ?>
    <?php print $content; ?>
  </div>
<?php if ($wrapper): ?></div><?php endif; ?>