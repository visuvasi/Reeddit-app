(function($){var xhrs=[function(){return new XMLHttpRequest}],_xhrf=null;var hasOwnProperty=Object.prototype.hasOwnProperty,nativeForEach=Array.prototype.forEach;var _each=function(o,fn,ctx){if(o==null)return;if(nativeForEach&&o.forEach===nativeForEach)o.forEach(fn,ctx);else if(o.length===+o.length)for(var i=0,l=o.length;i<l;i++){if(i in o&&fn.call(ctx,o[i],i,o)===breaker)return}else for(var key in o)if(hasOwnProperty.call(o,key))if(fn.call(ctx,o[key],key,o)===breaker)return};var _extend=function(o){_each(Array.prototype.slice.call(arguments,
1),function(a){for(var p in a)if(a[p]!==void 0)o[p]=a[p]});return o};$.xhr=function(){if(_xhrf!=null)return _xhrf();var f=xhrs[0],req=f();if(req!=null){_xhrf=f;return req}return function(){}};$._xhrResp=function(xhr){switch(xhr.getResponseHeader("Content-Type").split(";")[0]){case "application/json":case "text/javascript":case "application/javascript":case "application/x-javascript":return JSON.parse(xhr.responseText);default:return xhr.responseText}};$.ajax=function(o){var xhr=$.xhr(),timer,n=0;
o=_extend({userAgent:"XMLHttpRequest",lang:"en",type:"GET",data:null,dataType:"application/x-www-form-urlencoded"},o);if(o.timeout)timer=setTimeout(function(){xhr.abort();if(o.timeoutFn)o.timeoutFn(o.url)},o.timeout);xhr.onreadystatechange=function(){if(xhr.readyState==4){if(timer)clearTimeout(timer);if(xhr.status<300){if(o.dataType.indexOf("json")>=0)xhr.responseJSON=JSON.parse(xhr.responseText);if(o.success)o.success($._xhrResp(xhr),"success",xhr)}else if(o.error)o.error(xhr,xhr.status,xhr.statusText);
if(o.complete)o.complete(xhr,xhr.statusText)}else if(o.progress)o.progress(++n)};var url=o.url,data=null;xhr.open(o.type,url);xhr.send(data)}})(window);