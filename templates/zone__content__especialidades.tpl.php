<?php if ($wrapper): ?><div<?php print $attributes; ?>><?php endif; ?>  
  <div<?php print $content_attributes; ?>>    
    <?php if ($breadcrumb): ?>
      <div id="breadcrumb" class="grid-<?php print $columns; ?>"><div id="breadcrumb_icon"></div><?php print $breadcrumb; ?></div>      
    <?php endif; ?>
        <div id="inner_page_banner">
          <img src="/sites/default/files/especialidades-y-servicios-medicos.png" alt="">
        </div>
    <?php if ($messages): ?>
      <div id="messages" class="grid-<?php print $columns; ?>"><?php print $messages; ?></div>
    <?php endif; ?>
    <?php print $content; ?>
  </div>
<?php if ($wrapper): ?></div><?php endif; ?>