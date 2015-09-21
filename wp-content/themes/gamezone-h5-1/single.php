<?php
/**
 * The Template for displaying all single posts.
 *
 * @package WordPress
 * @subpackage Twenty_Eleven
 * @since Twenty Eleven 1.0
 */

get_header(); ?>

  <div class="content">
  
    <div class="body">
    
    <?php while ( have_posts() ) : the_post(); ?>
    <div class="content-top">
      <script src=<?php echo get_template_directory_uri()."/js/question_json.js";?>></script>
      <?php $json = json_decode(get_the_content());?>
      <div id="content-top-common" class="content-top-common cf">
        <?php //echo '<img src='.$json->img.' /><p class="content-top-common-title">'.$json->title.'</p><span>'.$json->intro.'</span>';?>
      </div>
      <div class="content-top-question" id="content-top-question">      
      </div>  
      <div id='results'></div>
      <div id="shareWap">
        <script type="text/javascript">
        (function(){
        var p = {
        url:location.href,
        showcount:'0',/*是否显示分享总数,显示：'1'，不显示：'0' */
        desc:'',/*默认分享理由(可选)*/
        summary:'<?php echo $json->intro ?>',/*分享摘要(可选)*/
        title:'',/*分享标题(可选)*/
        site:'',/*分享来源 如：腾讯网(可选)*/
        pics:'<?php echo $json->img ?>', /*分享图片的路径(可选)*/
        style:'101',
        width:120,
        height:24
        };
        var s = [];
        for(var i in p){
        s.push(i + '=' + encodeURIComponent(p[i]||''));
        }
        document.write(['<a version="1.0" class="qzOpenerDiv" href="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?',s.join('&'),'" target="_blank">分享</a>'].join(''));
        })();
      </script>
      <script src="http://qzonestyle.gtimg.cn/qzone/app/qzlike/qzopensl.js#jsdate=20111201" charset="utf-8"></script>
      </div>
      <script><?php echo "showHtml(".json_encode(get_the_content()).")"; ?></script>
    </div>
  
    
    <?php endwhile; // end of the loop. ?>

<div class="clear"></div>
  </div>
  <!-- #content --> 
</div>
<!-- #primary -->
<?php get_sidebar(); ?>
<?php get_footer(); ?>