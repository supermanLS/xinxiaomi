//  通过类名获取元素
function getClass(classname,obj){
	obj=obj||document
	if(document.getElementsByClassName){
		//  支持
		return obj.getElementsByClassName(classname);
	}else{
		//  不支持
		var arr=[];
		var allElm=obj.getElementsByTagName('*');
		for(var i=0;i<allElm.length;i++){
			if(checkbox(allElm[i].className,classname)){
				arr.push(allElm[i]);
			}
		}
		return arr;
	}
}
function checkbox(newclass,oldclass){ //多个类名时执行
	var arr=newclass.split(" ");
	for(i=0;i<arr.length;i++){
		if(arr[i]==oldclass){
		   return true;
		}else{
			return false;
		}
	}
}


//  获取内容
function getText(obj,val){
	if(val==undefined){  // 获取 当val没有传参时，值为undefined；
		if(obj.textContent==undefined){ // 条件为真,执行的代码
			alert(1)
			return obj.innerText; // 将结果返回
		}else{ // 不满足条件执行的代码
			alert(2)
			return  obj.textContent;
	    }
	}else{ // 设置；传了val值，执行的代码
		if(obj.textConten==undefined){
			obj.innerText=val;
		}else{
			obj.textContent=val;
	    }
	}
}


//  获取行内样式和外部样式
function getStyle(obj,arrt){
	if(obj.currentStyle){
		return obj.currentStyle[arrt];
	}else{
		return getComputedStyle(obj,null)[arrt];
	}
}

 // 简化元素
 function $(selector,context){
 	if(typeof selector=="string"){
 		var context=context||document;
 		if(selector.charAt(0)=="#"){
 			return document.getElementById(selector.substring(1));
 		}else if(selector.charAt(0)=="."){
 			return getClass(selector.substring(1),context);
 		}else if(/^[a-zA-Z][a-zA-Z1-6]*$/.test(selector)){
 			return context.getElementsByTagName(selector);
 		}else if(/^<[a-zA-Z][a-zA-Z1-6]{0,10}>$/.test(selector)){
 			return document.createElement(selector.slice(1,-1));
 		}
 	}
 	if(typeof selector=="function"){
 		// window.onload=function(){
 		// 	selector();
 		// }	
 		on(window,'load',selector)
 	}
}


 //  获取所有子节点
function getChild(obj,type){
	var type=type||'b'
 	var child=obj.childNodes; 
 	var newarr=[]; //声明一个新数组
 	if(type=='b'){  //只获取标签节点
 		for(var i=0;i<child.length;i++){
	 		if(child[i].nodeType==1){
	 			newarr.push(child[i]);//满足条件节点放入新数组
	 		}
	 	}
 	}else if(type=='a'){  // 获取文本节点  标签节点
 		for(var i=0;i<child.length;i++){
	 		if(child[i].nodeType==1||(child[i].nodeType==3&&trim(child[i].nodeValue)!='')){
	 			newarr.push(child[i]);
	 		}
	 	}
 	}
 	return newarr;
}
       // 清除空格
function trim(str,type){  
	/* a 清除所有空格   l 清除左空格  
	   r 清除右空格    lr清除左右两边空格 */
	type=type||'lr';  // 默认值为lr
	if(type=='a'){
		return str.replace(/\s*/g,'');
	}
	if(type=='l'){
		return str.replace(/^\s*/g,'');
	}
	if(type=='r'){
		return str.replace(/\s*$/g,'');
	}
	if(type=='lr'){
		return str.replace(/^\s*|\s*$/g,'');
	}
}

// 获取第一个子节点
function getFirst(obj,type){
	return getChild(obj,type)[0];
}
// 获取最后一个子节点
function getLast(obj,type){
	var last=getChild(obj,type);
	return last[last.length-1];
}
//获取任意一个
function getNum(obj,type){
	return getChild(obj)[type];
}

// 获取下一个兄弟节点
function getNext(obj){
	var next=obj.nextSibling;
	if(next==null){
		return false; // 与父元素没有空格
	}
	while(next.nodeType==8||(next.nodeType==3&&trim(next.nodeValue)=='')){
		next=next.nextSibling;
		if(next==null){
			return false;  // 没有下个兄弟元素
		}
	}
	return next;
}

// 获取上一个兄弟节点
function getPre(obj){
	var pre=obj.previousSibling;
	if(pre==null){
		return false;
	}
	while(pre.nodeType==8||(pre.nodeType==3&&trim(pre.nodeValue)=='')){
		pre=pre.previousSibling;
		if(pre==null){
			return false;
		}
	}
	return pre;
}

// 插入到之前
/* obj 要插入的对象
   afterobj 之前的对象  */
function insertAfter(obj,afterobj){
	var next=getNext(afterobj);
	if(next==false){
		afterobj.parentNode.appendChild(obj); 
	}else{
		afterobj.parentNode.insertBefore(obj,next); 
	}
}
   /*同一个事件绑定多个处理程序
    on(对象，事件，处理程序)*/
 function on(obj,event,fn){
 	if(obj.addEventListener){
 		obj.addEventListener(event,fn,false);
 	}else{
 		obj.attachEvent('on'+event,fn);
 	}
 }
   /*同一个事件删除多个处理程序
    off(对象，事件，处理程序)*/
 function off(obj,event,fn){
 	if(obj.removeEventListener){
 		obj.removeEventListener(event,fn,false);
 	}else{
 		obj.detachEvent('on'+event,fn);
 	}
 }