<?php
/**
 * @file
 * Default theme implementation to format an HTML mail.
 *
 * Copy this file in your default theme folder to create a custom themed mail.
 * Rename it to mimemail-message--[mailkey].tpl.php to override it for a
 * specific mail.
 *
 * Available variables:
 * - $subject: The message subject.
 * - $body: The message body in HTML format.
 * - $mailkey: The message identifier.
 * - $recipient: An email address or user object who is receiving the message.
 * - $css: Internal style sheets.
 *
 * @see template_preprocess_mimemail_message()
 */
global $base_url;

?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title><?php print $subject ?></title>
<?php if ($css): ?>
<style type="text/css">
  <!--
  <?php print $css ?>
  -->
</style>
<?php endif; ?>
</head>
<body style="color: #666666;font-family: Arial, Helvetica, 'Nimbus Sans L', sans-serif;font-size: 14px;">
<table border="0" cellpadding="0" cellspacing="0" width="100%" id="wrapper">
<tr>
  <td align="center" valign="top" >
    <table border="0" cellpadding="0" cellspacing="0" width="620">
    <tr>
      <td align="center" valign="top" height="126" bgcolor="#fff" >
        <table border="0" cellpadding="0" cellspacing="0" >
        <tr>
          <td width="620" height="90">
            <a href="<?php print $base_url; ?>" title="<?php print t('Home'); ?>" rel="home" id="logo"><img src="<?php print $base_url .'/'. path_to_theme();?>/images/logo-for-newsletter.png" alt="<?php print t('Home'); ?>" /></a>
          </td>
        </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td align="center" valign="top">
        <table border="0" cellpadding="0" cellspacing="0" width="620" id="content" style="margin-left:20px;">
        <tr>
          <td valign="top" class="bodycontent"><?php print $body ?></td>
        </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td valign="top" height="30" >&nbsp;</td>
    </tr>
    <tr>
      <td align="center" valign="top">
        <table border="0" cellpadding="10" cellspacing="0" width="620" >
        <tr>
          <td valign="top" bgcolor="#00B27A" ><a href="/" style="color: #fff;font-size:11px;font-family:arial;text-decoration:none;">Hospiten</a></td>
        </tr>
        </table>
      </td>
    </tr>
    </table>
  </td>
</tr>
</table>
</body>
</html>
