<?php
header('content-type:text/html;charset="utf8"');
$callback = isset($_GET['callback']) ? $_GET['callback'] : 'callback';
$city_code = isset($_GET['citycode']) ? $_GET['citycode'] : '';
if (!$city_code) {
	echo '请填入一个城市的代码';
	exit;
}
$content = file_get_contents('http://www.weather.com.cn/adat/cityinfo/'.$city_code.'.html');
echo $callback . '('.$content.');';
//http://localhost/2015.10.12/321/weather.php?citycode=101010500&callback=fn