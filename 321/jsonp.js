//json + padding
function jsonp(url,data,callback,succ){
		//fnName主要是为了随机函数名。
		var fnName = '_js'+Math.random();
		fnName = fnName.replace('.','');
		//给json加一个cb为fnName的名字，这样就可以随机函数名。
		//data.cb = fnName;
		data[callback] = fnName;//总的来说，是给数据拼接的。
		//console.log(fnName)
		var oHead = document.getElementsByTagName('head')[0];
		
		//让定义的回调函数名字随机，通过window[fnName]就可以实现
		window[fnName] = function(json){
			//如果有回调函数就执行回调函数，并且把获取的数据传到外面使用。
			console.log(1)
			succ&&succ(json);
			//当数据请求完成之后，将script给删除。
			oHead.removeChild(oS);
		}
		
		var oS = document.createElement('script');
		//申明一个数组，主要为了将函数的第二个参数（json）转化拼接成需求中的字符串连接。
		var arr = [];
		
		//wd=w&json=1&p=3&cb=fn1
		for(var key in data){
			arr.push(key+'='+data[key]);
		}
		var str = arr.join('&');
		//将src给拼接出来。
		oS.src = url+'?'+str;
		oHead.appendChild(oS);
	}