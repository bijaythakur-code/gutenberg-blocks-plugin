<?php

function up_recipe_summary_render_cb()
{
  ob_start();
?>

  <?php

  $output = ob_get_clean();
  ob_end_clean();

  return $output;
}
