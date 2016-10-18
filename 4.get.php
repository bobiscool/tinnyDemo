<?php
$whitch = $_GET['whitch'];
$whole = $_GET['whole'];
$num = $_GET['pn'];
$content = file_get_contents('http://image.baidu.com/channel/listjson?pn='.$num.'&rn=100&tag1='.$whitch.'&tag2='.$whole.'&ie=utf8');
echo $content;