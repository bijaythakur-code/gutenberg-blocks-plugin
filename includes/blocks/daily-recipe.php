<?php

function up_daily_recipe_cb()
{
  ob_start();
?>

  <?php

  $output = ob_get_clean();
  ob_end_clean();

  return $output;
}
