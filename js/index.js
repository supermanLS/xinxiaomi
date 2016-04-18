
window.onload=function(){
	// var as=getClass('bannerimg')[0].getElementsByTagName('a');
	// var btns=getClass('btn')[0].getElementsByTagName('li');
	// var index=0;
	// var t=setInterval(aa,2000);
	// function aa(){
	// 	index++;
	// 	if(index>as.length-1){
	// 	index=0
	//    };
	//    for (var i = 0; i < as.length; i++) {
	//    	//as[i].style.zIndex="0";
	//    	btns[i].style.background='';
	//    	animate(as[i],{opacity:0});
	//    };
	//    //as[index].style.zIndex="99"
	//    btns[index].style.background='yellow';
	//    animate(as[index],{opacity:1});
	// }
	// for (var i = 0; i < btns.length; i++) {
	// 	btns[i].index=i;
	// 	btns[i].onclick=function(){
	// 		for(var j=0;j<as.length;j++){
	// 			//as[j].style.zIndex='0'
	// 			btns[j].style.background="";
	// 			animate(as[j],{opacity:0});
	// 		}
	// 		//as[this.index].style.zIndex="99";
	// 		this.style.background="yellow";
	// 		animate(as[this.index],{opacity:1});

	// 	}
	
	// };
 //    var boxs=getClass('banner')[0];
 //    boxs.onmouseover=function(){
 //         clearInterval(t);
 //    }
 //    boxs.onmouseout=function(){
 //    	t=setInterval(aa,2000);
 //    }
	
 //    var left=getClass('btnleft')[0];
 //    var right=getClass('btnright')[0];
 //    left.onclick=function(){
 //    	index--;
	// 	if(index==-1){
	// 	index=as.length-1;
	//    };
	//    for (var i = 0; i < as.length; i++) {
	//    	//as[i].style.zIndex="0";
	//    	btns[i].style.background='';
	//    	animate(as[i],{opacity:0});
	//    };
	//    //as[index].style.zIndex="99"
	//    btns[index].style.background='yellow';
	//    animate(as[index],{opacity:1});
 //    }
 //    right.onclick=function(){
 //    	aa()
 //    };


    
    
    // banner动画
    var box=getClass('bannerimg')[0];
	var as=box.getElementsByTagName('a');
	// var aw=parseInt(getStyle(as[0],'width'));
	// 
	var btn=getClass('btn')[0];
	var btns=btn.getElementsByTagName('li')
	// box.style.width=as.length*aw+'px';

	var index=0;
	var t=setInterval(aa,2000);
	function aa(){
         index++;
         if(index==as.length){
         	index=0;
         }
         for (var i = 0; i < btns.length; i++) {
         	btns[i].className='';
         	animate(as[i],{opacity:0});
         	
         };
           btns[index].className='btnli';
         animate(as[index],{opacity:1});
	}
	for (var i = 0; i < btns.length; i++) {
		btns[i].index=i;
		btns[i].onclick=function(){
			for (var j = 0; j < as.length; j++) {
				btns[j].className='';
				animate(as[j],{opacity:0},500);
			};
			this.className='btnli';
			animate(as[this.index],{opacity:1},500);
			index=this.index;

			
			
		}

	};

	var boxs=getClass('banner')[0];
	boxs.onmouseover=function(){
		clearInterval(t);
	}
	boxs.onmouseout=function(){
		t=setInterval(aa,2000);
	}
	var right=getClass('btnright')[0];
	right.onclick=function(){
		aa();
	}
	var left=getClass('btnleft')[0];
	left.onclick=function(){
		index--;
         if(index==-1){
         	index=as.length-1;
         }
         for (var i = 0; i < btns.length; i++) {
         	btns[i].className='';
         	animate(as[i],{opacity:0});
         };
           btns[index].className='btnli';
         animate(as[index],{opacity:1});
	}
	
	// 小米明星单品
	    var boxqq=$('.xiaomi')[0]
		var img=$(".xiaomimx")

		var iw=parseInt(getStyle(img[0],'width'));
		boxqq.style.width=img.length*iw+'px';
		
      
		var cc=0;
		setInterval(dd,5000)
		function dd(){
            cc++;

            if(cc==img.length){
            	cc=0;
            }
            animate(boxqq,{marginLeft:-cc*iw});
		}
		var bntright=getClass('bntright')[0];
	bntright.onclick=function(){
		dd();
	}
	var bntleft=getClass('bntleft')[0];
	bntleft.onclick=function(){
		cc--;
         if(cc==-1){
         	cc=img.length-1;
         }
          animate(boxqq,{marginLeft:-cc*iw});
          
        
	}
    
   // 选项卡
	var btnbox=getClass('xuanxiang')[0].getElementsByTagName('li');
	var nr=getClass('liso')[0];
	var divs=getClass('znyjright',nr);
	tab(btnbox,divs);
	function tab(link,li){
			for (var i = 0; i < link.length; i++) {
				link[i].aa=i;

				link[i].onmouseover=function(){
					for(var j=0;j<li.length;j++){
						li[j].style.zIndex='0';
						
					}
					li[this.aa].style.zIndex='55';
					
				}
		};
	}
	
	var zxr=getClass('xuanxiang1')[0].getElementsByTagName('li');
	var lz=getClass('dpright')[0];
	var lxr=getClass('pjright',lz);
	tab(zxr,lxr);
    var wer=getClass('xuanxiang1')[1].getElementsByTagName('li');
	var ert=getClass('zbbox')[0];
	var rty=getClass('zbright',ert);
	tab(wer,rty);
//内容


var nra=$('.nr_a')[0];
var nr_b=$('.nr_b',nra);
// console.log(nr_b)
var nr_bb=parseInt(getStyle(nr_b[0],'width'));
 nra.style.width=nr_b.length*nr_bb+'px';
var nrbtn=$('.nrbtn')[0]
var nrbtns=$('li',nrbtn);
for (var i = 0; i < nrbtns.length; i++) {
  	nrbtns[i].index=i
  	nrbtns[i].onclick=function(){
  		for (var j = 0; j < nr_b.length; j++) {
  			nrbtns[j].className='';
  		};
  		this.className='nrbtn1';
  		animate(nra,{marginLeft:-this.index*nr_bb})
  	}
  }; 

// 图片按序加载
var fls=$('.fl');
// console.log(fls)
var arr=[];
var lh=document.documentElement.clientHeight;
for (var i = 0; i < fls.length; i++) {
	arr.push(fls[i].offsetTop)
};
// console.log(arr)
window.onscroll=function(){
	var dc=document.body.scrollTop||document.documentElement.scrollTop;
		for (var i = 0; i < arr.length; i++) {
			if(arr[i]<dc+lh){
				imgs(i)
			}
		};
}
function imgs(i){
			var imgs=$('img',fls[i])
			for (var j = 0; j < imgs.length; j++) {
				imgs[j].src=imgs[j].getAttribute('asrc');
			};
		}


}