var ws=require('nodejs-websocket');
var fs=require('fs');
var nbt=require('nbt');
var request=require('request');
var colors=require('./rgb.js');
var schematic=require('mc-schematic')('1.8');
var say=true;
var says=[];

var boxc=[];   
var boxc1=[]; 
var boxa;
var times=false;

var timecmd=true;


var xyz=[0,0,0];
var get=false;
var NBT=[];

var func=false;
var xname=false;

var Gear=100; //Gear开关
var Gears=true;
//------
var Repexe=0;
var Rep=''


var Strname={};
//--------------
var osip=require('os');
var d=new Date()
console.log(d)
if(osip.networkInterfaces().rmnet_data0==undefined)
{if(osip.networkInterfaces().wlan0==undefined)
{var ip="127.0.0.1"}
else {var ip=osip.networkInterfaces().wlan0[0].address}}
else {var ip=osip.networkInterfaces().rmnet_data0[0].address}
console.log('云端已启动')	               
var sever=ws.createServer(function(x){
console.log('新增连接')
//--------------
				
//-------------------------			
	 x.sendText(JSON.stringify({
 
	"body": {"eventName": "PlayerMessage"},
	"header": {
		"requestId": "00000000-0000-0000-0000-000000000000",
		"messagePurpose": "subscribe","version": 1,
		"messageType": "commandRequest"
}}));
//---------------------  
   x.sendText(JSON.stringify({
 
	"body": {"eventName": "PlayerMessage"},
	"header": {
		"requestId": "00000000-0000-0000-0000-000000000000",
		"messagePurpose": "subscribe","version": 1,
		"messageType": "commandRequest"
}}));
//----------------------

//---------------------  
setTimeout(function(){
   x.sendText(JSON.stringify({
 
	"body": {"eventName": "PlayerMessage"},
	"header": {
		"requestId": "00000000-0000-0000-0000-000000000000",
		"messagePurpose": "subscribe","version": 1,
		"messageType": "commandRequest"
}}));
},1000)
//----------------------
	function command(cmd){
	x.sendText(JSON.stringify({
 "body": {
 "origin": { "type": "player"},
 "commandLine":cmd,
 "version": 1
 },
 "header": {
 "requestId": "00000000-0000-0000-0000-900000000001",
 "messagePurpose": "commandRequest",
 "version": 1,
 "messageType": "commandRequest"
 }}))};	

function command2(cmd){
	x.sendText(JSON.stringify({
 "body": {
 "origin": {"type": "player"},
 "commandLine":cmd,
 "version": 1
 },
 "header": {
 "requestId": "00000000-0000-0000-0000-990000000001",
 "messagePurpose": "commandRequest",
 "version": 1,
 "messageType": "commandRequest"
 }}))};	




function setblock(d){
boxc=d
  boxa=boxc;
  if(Gear>boxc.length){command('tell @s §4错误§e:同执行数量与指令数量差距过大！')}
  else{
  //------
  command('tell @s §e指令数量:'+boxc.length+'§4/'+Gear+'执行速度')
  for(let i=0;i<Gear;i++){
  
  
  
 setTimeout(function(){
 boxc1.push(i);
  x.sendText(JSON.stringify({
  "body": {
 "origin": {
 "type": "player"
 },
 "commandLine": Rep+boxc[i],
 "version": 1
 },
 "header": {
 "requestId": ('00000000-0000-0000-0000-'+(Number("00000000-0000-0000-0000-100000000001".split('-')[4])+i+'').replace('1','0')),
 "messagePurpose": "commandRequest",
 "version": 1,
 "messageType": "commandRequest"
 }
 }));
},(2*i)); 
 
  };//for
  //-----------
  
 }//else
  }//fun







 	
    
	command('tell @s §e云端已连接 若无反应发送 §6reset §e重启')
	setTimeout(function(){
	command('testforblock ~ ~ ~ air')
	command('testforblock ~ ~ ~ air')
	get=true;
	},2066)
	setTimeout(function(){
	command('testfor @s')
	xname=true;
	},1666)
	setTimeout(function(){
	command('')
	},2600);
	
	x.on('text',function(str){
	var me=JSON.parse(str);	
   
   if(me.header){
   //每一次返回把uuid和类型包装到变量里
   var messagePurpose=me.header.messagePurpose
   var requestId=me.header.requestId
   }

	
		
				
//console.log(me)



if(messagePurpose=='event'&&requestId=='00000000-0000-0000-0000-000000000000'&&say==true){
//-------接受say返回









if(me.body.properties.Sender==xname){//是否是管理员说话

if(me.body.properties.Message=='天气'&&me.body.properties.MessageType=='chat'){ 	 	 		  		 	
天气预报(me.body.properties.Message.substr(2),(string)=>{
	command('tell @s §b\n'+string)
	})


};



if(me.body.properties.Message.substr(0,2)=='$ '&&me.body.properties.MessageType=='chat'){ 		 	 		  		 	
图灵(me.body.properties.Message.substr(2),(string)=>{
	command('tell @s §b\n'+string)
	})


};

if(me.body.properties.Message.substr(0,2)=='# '&&me.body.properties.MessageType=='chat'){
聊天室(me.body.properties.Message.substr(2),(string)=>{
	command('tell @s §b\n'+string)
	})


};


if(me.body.properties.Message=='loca block'&&me.body.properties.MessageType=='chat'){ 		 	 		  		 	
Repexe+=1;
if(Repexe==2){Repexe=0;};
if(Repexe==0){Rep='';command('tell @s §e定点执行已关闭:§4false§b'+xyz);};
if(Repexe==1){command('tell @s §e定点执行已开启:§4true§b'+xyz);Rep='execute @s '+xyz[0]+' '+xyz[1]+' '+xyz[2]+' ';};

};

  
  
 if(me.body.properties.Message=='-help'&&me.body.properties.MessageType=='chat'){ 		 	 		  		 	
//help帮助
  command('tell @s §l§f§e\n帮助\n'+
   '§6function -t 文件路径  执行function文件\n'+
   '§6cmd -c 指令           执行指令\n'+
   '§6loca tion             确定生成地点\n'+
   '§6-xyz                  显示生成坐标\n'+
   '§6loca block            指定function文件执行位置\n'+
   '§6nbt -t 文件路径       导入NBT建筑\n'+
   '§6sch -t 文件路径       导入SCH建筑\n'+  
   '§6天气                  查看天气预报\n'+  
   '§6# 你想发送的消息内容  发送消息'
   )//-----
  
  }
  

  if(me.body.properties.Message=='-BUG'&&me.body.properties.MessageType=='chat'){ 		 	 		  		 	
command('tell @s §e如有BUG请联系管理员')
};

 if(me.body.properties.Message=='reset'&&me.body.properties.MessageType=='chat'){ 		 	 		  		 	
command('tell @s §e重启中...')
command('tell @s §e操作员:§6'+xname)
command('testforblock ~ ~ ~ air ')
command('tell @s §e读取坐标中...');
command('tell @s §e重启成功');
get=true;

};
  

if(me.body.properties.Message.substr(0,7)=='cmd -c '&&me.body.properties.MessageType=='chat'){ 		 	 		  		 	
command(me.body.properties.Message.substr(7))
};//执行-c后面指令
 //-----_---__-_-_-_--_--__--_--_--_--__--_
 if(me.body.properties.Message.substr(0,12)=='function -t '&&me.body.properties.MessageType=='chat'){ 		 	 		  		 	
//读取路径里的指令，塞到数组里，重置进度条数组，开启锁，发一次指令包
  fs.readFile(me.body.properties.Message.substr(12),'utf8',(e,d)=>{if(e){command('tell @s §4错误:路径错误')};   
  if(!e){

  setblock(d.split('\n'));  
  
} //e
})
}


if(me.body.properties.Message.substr(0,7)=='sch -t '&&me.body.properties.MessageType=='chat'){ 		 	 		  		 	
command('tell @s §e正在读取数据...'+me.body.properties.Message.substr(7))

fs.readFile(me.body.properties.Message.substr(7),(错误, data)=>{
if(错误){command('tell @s §4错误:§e文件不存在')}
else{
schematic.parse(data,(err, block)=>{
if(err){command('tell @s §4错误:§e文件格式错误')}
else{
if(me.body.properties.Message.substr(7).indexOf('.schematic')>=0){
var sche=new Array();
    for(xs=0;xs<block.width;xs++){
    for(y=0;y<block.height;y++){
    for(z=0;z<block.length;z++){
    if(block.getBlock(xs,y,z).name!='air'&&block.getBlock(xs,y,z).name!=''){
   sche.push('setblock ' +(xs+xyz[0])+' '+(y+xyz[1])+' '+(z+xyz[2])+' '+block.getBlock(xs,y,z).name+' '+block.getBlock(xs,y,z).metadata);
    }
    }}}
command('tell @s §a生成指令完毕 -数量：'+sche.length)  

/*
var num=sche.length;

back(sche,35000)//撤回指令生成


sche=shifts(sche)

command('tell @s §b合并优化后-数量: '+sche.length)
command('tell @s §b优化比例：'+((sche.length/num)*100)+'%')
*/
setblock(sche)
}else{command('tell @s §4错误:§e文件格式错误')}

}/*else*/})/*sch*/}/*else*/})




    
};

//---------------------
if(me.body.properties.Message=='loca tion'&&me.body.properties.MessageType=='chat'){
command('testforblock ~ ~ ~ air ')
command('tell @s §e读取坐标中...');
get=true;
};
if(me.body.properties.Message=='-xyz'&&me.body.properties.MessageType=='chat'){
command('tell @s §e生成坐标'+'§6 X:§e'+x1+'§6 Y:§e'+y2+'§6 Z:§e'+z3)
}; 
//-------------------------------------

if(me.body.properties.Message.substr(0,7)=='NBT -t '&&me.body.properties.MessageType=='chat'){ 		 	 		  		 	
fs.readFile(me.body.properties.Message.substr(7),(错误,data)=>{
if(错误){command('tell @s §4错误:§e文件不存在或格式错误')}
else {
command('tell @s §e已锁定文件')
nbt.parse(data,(nbt错误,nbtdata)=>{

if(me.body.properties.Message.substr(7).indexOf('.nbt')>=0){
for(i=0;i<nbtdata.value.blocks.value.value.length;i++){
var x=nbtdata.value.blocks.value.value[i].pos.value.value[0]//x
var y=nbtdata.value.blocks.value.value[i].pos.value.value[1]//y
var z=nbtdata.value.blocks.value.value[i].pos.value.value[2]//z
var blockname=nbtdata.value.palette.value.value[nbtdata.value.blocks.value.value[i].state.value].Name.value
blockname=blockname.replace('minecraft:','')
if(blockname!=='air'){
NBT.push('setblock '+' '+(xyz[0]+x)+' '+(xyz[1]+y)+' '+(xyz[2]+z)+' '+blockname)
}//if
}//for

setblock(NBT);
}else{command('tell @s §4错误:§e文件格式错误')}


})//nbt
}//else
})// fs
};//if
//-----------)


if(me.body.properties.Message.substr(0,8)=='pixe -t '&&me.body.properties.MessageType=='chat'){
var pixey=8;
if(me.body.properties.Message.substr(8,3)=='-y '){
pixey=11
}
if(me.body.properties.Message.substr(pixey).indexOf('.png')>=0||me.body.properties.Message.substr(8).indexOf('.jpg')>=0){command('tell @s §a§l读取中...\n§s'+me.body.properties.Message.substr(pixey))}
else{command('tell @s §4错误:§e图片格式错误')}
//getPixels
 require("get-pixels")(me.body.properties.Message.substr(pixey), function(err, pixels) {
  if(err) {command('tell @s §4错误:§e文件不存在')}
  else{
  	var data= pixels.data;
  var rgb = [];
  var datas = [];
  for (var i = 0; i < data.length; i++) {
  datas.push(data[i]);
   if (i != 0 && (i + 1) % 4 == 0) {
   rgb.push(datas);datas=[];
  }
  }//for
  var rgbs=[];
  var rgbx=0;
  for (var xs = 0; xs <pixels.shape[1]; xs++) {
  	for (var z = 0; z <pixels.shape[0]; z++){
  	if(pixey==11){rgbs.push([[0,-xs,-z],[rgb[rgbx][0],rgb[rgbx][1],rgb[rgbx][2]]])}
    else{rgbs.push([[z,0,xs],[rgb[rgbx][0],rgb[rgbx][1],rgb[rgbx][2]]])}
  		if(rgb[rgbx][3]==0){rgbs.pop()}
  		rgbx++
  		}}
  		rgb=[]


for(var c=0;c<rgbs.length;c++){

//var rsgsbs=['stone',255,255,255];
var rsgsbsb=[];
for(var is=0;is<colors.length;is++){

var r=Math.abs(rgbs[c][1][0]-colors[is][0])
var g=Math.abs(rgbs[c][1][1]-colors[is][1])
var b=Math.abs(rgbs[c][1][2]-colors[is][2])



 rsgsbsb.push((r*r)+(g*g)+(b*b));
};
//console.log(rsgsbsb)
 rgbs[c][1]=colors[rsgsbsb.indexOf(Math.min.apply(null, rsgsbsb))][3]
 



rgb.push('setblock '+(xyz[0]+rgbs[c][0][0])+' '+(xyz[1]+rgbs[c][0][1])+' '+(xyz[2]+rgbs[c][0][2])+' '+rgbs[c][1])
};


setblock(rgb)
rgb=[];
}/*else*/})//getPixels

};//pixe







};//管理员锁

say=false;
setTimeout(function(){say=true},300)

// 
 };//say区------------------__________--------
 
 
 
 
 
 
 
 
 
 
 
 

/*
header: 
   { messagePurpose: '错误',
     requestId: '00000000-0000-0000-0000-000000000001',
     version: 1 } }
     */

function cmdF(Purpose,requestId){

if(Purpose=='错误'&&requestId.indexOf('00000000-0000-0000-0000-')>=0){
if(requestId=="00000000-0000-0000-0000-000000000000"||requestId=="00000000-0000-0000-0000-900000000001"||requestId=="00000000-0000-0000-0000-990000000001"){ 
//发现错误发一次然后跳过这错误
}else{

if(boxc.length>0){
command2('/title @s actionbar §4错误:§e'+boxc[boxc1[Number(requestId.split('-')[4])-1]]+'- -'+boxc1[Number(requestId.split('-')[4])-1]+'\n'+requestId+'\n~~~'+JSON.stringify(me.body)+' ')

	x.sendText(JSON.stringify({
  "body": {
 "origin": {"type": "player"},
 "commandLine": Rep+boxc[boxc1[Number(requestId.split('-')[4])-1]],
 "version": 1
 },
 "header": {
 "requestId": requestId,
 "messagePurpose": "commandRequest",
 "version": 1,
 "messageType": "commandRequest"
 }
 }));
}//if 

};//else
};//if
/*





















*/
if(Purpose=='commandResponse'&&requestId.indexOf('00000000-0000-0000-0000-')>=0){

if(requestId=="00000000-0000-0000-0000-000000000000"||requestId=="00000000-0000-0000-0000-900000000001"||requestId=="00000000-0000-0000-0000-990000000001"){ 

//接包然后储存包信息给box
}else{


if(boxc.length>0){

//if(boxc1[Number(requestId.split('-')[4]-1)]>=boxc.length){cmds=boxc=[];boxc1=[];command('title @s actionbar §e指令执行完毕');};




boxc1[Number(requestId.split('-')[4])-1]+=Gear;
if(timecmd==true){
setTimeout(function(){
command2('title @s actionbar §e§l总:§a'+boxc.length+'§4/§e§l度'+boxc1[boxc1.length-1]+'  \n欢迎使用')
timecmd=true;
	},3000)
	};
timecmd=false;
	x.sendText(JSON.stringify({
  "body": {
 "origin": {"type": "player"},
 "commandLine": Rep+boxc[boxc1[Number(requestId.split('-')[4])-1]],
 "version": 1
 },
 "header": {
 "requestId": requestId,
 "messagePurpose": "commandRequest",
 "version": 1,
 "messageType": "commandRequest"
 }
 }));














/*












*/
 
 if(boxc1[Number(requestId.split('-')[4]-1)]>=boxc.length){cmds=boxc=[];boxc1=[];Repfalse=false;command('title @s actionbar §e指令执行完毕\n§4true');};
 
 
}//if 


 
};//else 

}};

cmdF(messagePurpose,requestId)

  






if(messagePurpose=='commandResponse'&&requestId=='00000000-0000-0000-0000-900000000001'){



 
//-------------
if(get==true){
//开启后如果有返回的信息有坐标信息，则储存
if(me.body.matches==true){
x1=me.body.position.x
y2=me.body.position.y
z3=me.body.position.z
xyz[0]=me.body.position.x
xyz[1]=me.body.position.y
xyz[2]=me.body.position.z
command('tell @s §e当前坐标'+'§6 X:§e'+x1+'§6 Y:§e'+y2+'§6 Z:§e'+z3)
setTimeout(function(){
command('')
	},3000)
get=false
}
}
//----------

//----------
//func//开启后把me.bod的信息say出来

//-------

//-------
if(xname==true){
if(me.body.victim){
 xname=me.body.victim[0]
 command('tell @s §e操作员:§6'+xname)

 }
}




};//cmd



									
	
//---------				
		


			
		
		
		
		
		
		
		
		})
x.on('pong',(pon)=>{
console.log(pon)

})	

x.on('binary',(bin)=>{
console.log(bin)

})	 
		
	}).listen(5555)




function 聊天室(name,fun){
    var options = {
	headers: {"Connection": "close"},
    url: 'https://app.qun.qq.com/cgi-bin/api/hookrobot_send?key=d5b2f8960f0aefa41491f9f96c659332ebc5595c',
    method: 'POST',
    json:true,
    body: {"content": [ {"type":0,"data":(xname)+":"+(name) }]}
};

    function callback(error, response, data) {
    if (!error && response.statusCode == 200) {
        console.log('----info------',data);
    }
}

request(options, callback);
   	fun('§6发送成功')
   

       
       
    
    };



function 天气预报(name,fun){
	name=encodeURI(name)
	const https = require('https')
var url =`https://tianqiapi.com/api?version=v6&appid=19362569&appsecret=R5t9hYGY`
https.get(url, function(res){
var body = '';
res.on('data', function(chunk){
body += chunk;
});
res.on('end', function(){
  var fbResponse = JSON.parse(body);
   console.log(fbResponse)

   	var str='';
   	var 时间=fbResponse.date;
   	var 城市=fbResponse.city;
   	var 温度=fbResponse.tem
   	var 风向=fbResponse.win
   	var 低温=fbResponse.tem2
   	var 天气=fbResponse.wea
   var 风级=fbResponse.win_speed
   	var 温馨提示=fbResponse.air_tips
   	//fbResponse.data.forecast
   	fun('§6天气信息'+'\n§e城市:§6'+城市+'\n§e日期:§6'+时间+'\n§e温度:§6'+温度+'\n§e最低温度:§6'+低温+'\n§e风向:§6'+
   		风向+'\n§e天气:§6'+天气+'\n§e风级:§6'+风级+
   			'\n§e小提示:§6'+温馨提示
   		)
   

       
       
    
    });


}).on('错误', function(e){
      console.log("错误: ", e);
});
}










function 发送(String){
}


function 请求(url,fun){
}//每日一言


