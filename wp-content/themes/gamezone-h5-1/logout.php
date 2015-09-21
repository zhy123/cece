<?php
session_start();
unset($_SESSION['nickname']);
?>
<script language="javascript">
<?php if(empty($_GET['p'])) { ?>
location.href = "http://cece.appgame.com";
<?php } else { 
echo "location.href = 'http://cece.appgame.com/?p=".$_GET['p']."'";	
} ?>
</script>