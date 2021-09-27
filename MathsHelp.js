//MATHSHELP1.HTML STARTS HERE
//THIS JS CODE BELONGS TO INI-OBONG OBOTTO MAKE USE OF THIS CODE, EMAIL: INIOBONGOBOT@GMAIL.COM
function getMean(){	var one = document.getElementById('mean').value;	var two = one.split(',');	var three=0;	for (var i = 0; i < two.length; i++) {		three=parseFloat(two[i])+three;	}	var four = three/two.length;	return "The mean is the sum of all of the data values <b style='color:blue'>["+two.slice(0,4)+"...]</b> divided by the size of the data set <b style='color:blue'>["+two.length+"]</b> which would equal: <b style='color:blue'>"+four+"</b></br>"}function getPOPStdev(){	var one = document.getElementById('mean').value;	var two = one.split(',');	var three=0;	for (var i = 0; i < two.length; i++) {		three=parseFloat(two[i])+three;	}	var four = three/two.length;	var five=0;	for (var i = 0; i < two.length; i++) {		five=((parseFloat(two[i])-four)**2)+five;	}	var six = five/two.length;	var seven = Math.sqrt(six);	return "<b style='color:blue'>"+seven+"</b>";}
function getSAMPStdev(){	var one = document.getElementById('mean').value;	var two = one.split(',');	var three=0;	for (var i = 0; i < two.length; i++) {		three=parseFloat(two[i])+three;	}	var four = three/two.length;	var five=0;	for (var i = 0; i < two.length; i++) {		five=((parseFloat(two[i])-four)**2)+five;	}	var six = five/(two.length-1);	var seven = Math.sqrt(six);	return "<b style='color:blue'>"+seven+"</b>";}function getPOPVar(){	var one = document.getElementById('mean').value;	var two = one.split(',');	var three=0;	for (var i = 0; i < two.length; i++) {		three=parseFloat(two[i])+three;	}	var four = three/two.length;	var five=0;	for (var i = 0; i < two.length; i++) {		five=((parseFloat(two[i])-four)**2)+five;	}	var six = five/two.length;	return "<b style='color:blue'>"+six+"</b>";}
function getSAMPVar(){	var one = document.getElementById('mean').value;	var two = one.split(',');	var three=0;	for (var i = 0; i < two.length; i++) {		three=parseFloat(two[i])+three;	}	var four = three/two.length;	var five=0;	for (var i = 0; i < two.length; i++) {		five=((parseFloat(two[i])-four)**2)+five;	}	var six = five/(two.length-1);	return "<b style='color:blue'>"+six+"</b>";}function getRange(){	var one = document.getElementById('mean').value;	var two = one.split(',');	var arr=[];	for (var i = 0; i < two.length; i++) {		var x=parseFloat(two[i]);		arr.push(x);	}	arr.sort(function (a, b) {  return a - b;  });	var four= arr[0];	var five= arr[arr.length-1];	var six=(five-four);	var eight=arr.length;	if (arr.length%2!=0) {		var nine=arr[((arr.length-1)/2)];	}	else if(arr.length%2==0){		var fou=(arr.length/2);		var nine=((arr[fou])+(arr[(fou-1)]))/2;	}	var q1 = arr[parseInt(0.25*arr.length)];	var q3 = arr[parseInt(0.75*arr.length)];	var seven=(q3-q1);		return "<b style='color:blue'>"+nine+"</b></br></br>" +"Count: <b style='color:blue'>"+eight+"</b></Br></br>5 Number Summary</br>Min: <b style='color:blue'>"+four+"</b></Br>Q1: <b style='color:blue'>"+q1+"</b></br>Q2: <b style='color:blue'>"+nine+"</b></br>Q3: <b style='color:blue'>"+q3+"</b></br>Max: <b style='color:blue'>"+five+"</b></br>Range: <b style='color:blue'>"+six+"</b></Br>IQR: <b style='color:blue'>"+seven+"</b></br>Upper Fence: <b style='color:blue'>"+(q3+1.5*seven)+"</b></br>Lower Fence <b style='color:blue'>"+(q1-1.5*seven)+"</b></br>"//THIS JS CODE BELONGS TO INI-OBONG OBOTTO MAKE USE OF THIS CODE, EMAIL: INIOBONGOBOT@GMAIL.COM
} function ReturnVal(){	var one = document.getElementById('mean').value;	let two = one.split(',');	let three = false;	for (var i =0; i < two.length; i++){		if(two[i]==""){			three= true;		}		if(two[i]>=":"){three=true}	}	if ((document.getElementById('mean').value).length <1){		var output="<b style='color:red'>	ENTER AN ARRAY OF NUMBERS</b>";	}	else if (three == true){var output = "<b style='color:red'>One or more values are missing</b>";}	else{	var output="Mean: "+getMean() +"</br>"+getRange()+"</br>Standard Deviation </br>Sample Standard Deviation: "+getSAMPStdev()+"</br>"+"Population Standard Deviation: "+getPOPStdev()+"</br>"+"Sample Variance: "+getSAMPVar()+"</br>"+"Population Variance: "+getPOPVar()+"</br>";	document.getElementById('curve_chart').style.display='block';	}	document.getElementById('answer').innerHTML=output;}
//MATHSHELP2.HTML STARTS HERE
function field1(){	var one=document.getElementById('xval').value;	var two= document.getElementById('mean').value;	var three= document.getElementById('stdev').value;	var four= document.getElementById('observation').value;	if (four == ""){	var five=(parseFloat(one)-parseFloat(two))/parseFloat(three);}	else if (four != null){	var five= (parseFloat(one)-parseFloat(two))/(parseFloat(three)/Math.sqrt(parseFloat(four)));}	if (five < -6.5){     	var sum= 0.0;	}   else if (five > 6.5){     sum = 1.0;
   }   else{   var factK = 1;   sum      = 0;   var term     = 1;   var k        = 0;   var loopStop = Math.exp(-23);   while (Math.abs(term) > loopStop) {     term = 0.3989422804 * Math.pow(-1, k) * Math.pow(five, k) / (2 * k + 1) /            Math.pow(2, k) * Math.pow(five, k + 1) / factK;     sum += term;     k++;     factK *= k;   }   sum += 0.5;	}	if (document.getElementById('xval').value ==""){		var output="<b style='color:red'>	ENTER VALUES ABOVE</b>";	}else{   var output= "Z-Score: "+five.toFixed(4)+"</br>"+"Probabilty of (X&lt;Z): "+sum.toFixed(4)+"</br>"+"probabilty of (X&gt;Z): "+(1-sum).toFixed(4); 	}	document.getElementById('answer').innerHTML=output;}//THIS JS CODE BELONGS TO INI-OBONG OBOTTO MAKE USE OF THIS CODE, EMAIL: INIOBONGOBOT@GMAIL.COM

function field2(){
	var one=document.getElementById('zscore1').value;
	var two= document.getElementById('zscore2').value;
	var three= document.getElementById('zscore3').value;
	if (two.length <1 && three==""){
		one=parseFloat(one);

		if (one < -6.5){
		console.log(1);
    	var sum= 0.0;
		}
   		else if (one > 6.5){
   		console.log(2);
    	var sum = 1.0;
    	
    	}
   		else{

   		var factK = 1;
   		var sum   = 0;
   		var term  = 1;
   		var k     = 0;
   		var loopStop = Math.exp(-23);
   		while (Math.abs(term) > loopStop) {
     	term = 0.3989422804 * Math.pow(-1, k) * Math.pow(one, k) / (2 * k + 1) /
            Math.pow(2, k) * Math.pow(one, k + 1) / factK;
    	 sum += term;
     	k++;
     	factK *= k;
   		}
   		sum += 0.5;
   		console.log(3);
   		console.log(sum);
   		}

   		var output= "Probabilty of (X&lt;Z): "+sum.toFixed(4)+"</br>"+"probabilty of (X&gt;Z): "+(1-sum).toFixed(4)+"</br>";
   		
   	}//THIS JS CODE BELONGS TO INI-OBONG OBOTTO MAKE USE OF THIS CODE, EMAIL: INIOBONGOBOT@GMAIL.COM
	else if (one.length < 1){
		two=parseFloat(two);
		three=parseFloat(three);
		if (two < -6.5){
     	var sum= 0.0;
		}
   		if (two > 6.5){
     	var sum = 1.0;
   		}
   		var factK = 1;
   		var sum      = 0;
   		var term     = 1;
   		var k        = 0;
   		var loopStop = Math.exp(-23);
   		while (Math.abs(term) > loopStop) {
     	term = 0.3989422804 * Math.pow(-1, k) * Math.pow(two, k) / (2 * k + 1) /
            Math.pow(2, k) * Math.pow(two, k + 1) / factK;
     	sum += term;
     	k++;
     	factK *= k;
   		}

   		sum += 0.5;
   		if (three < -6.5){
     	var sum2= 0.0;
		}
   		if (three > 6.5){
     	sum2 = 1.0;
   		}
   		var factK = 1;
   		sum2      = 0;
   		var term     = 1;
   		var k        = 0;
   		var loopStop = Math.exp(-23);
   		while (Math.abs(term) > loopStop) {
     	term = 0.3989422804 * Math.pow(-1, k) * Math.pow(three, k) / (2 * k + 1) /
            Math.pow(2, k) * Math.pow(three, k + 1) / factK;
     	sum2 += term;
     	k++;
     	factK *= k;
   		}
   		sum2 += 0.5;
   		var output= "Probabilty of Z-Score: "+(sum2-sum).toFixed(4)+"</br>";
 
	}
	if ((document.getElementById('zscore1').value=="") && (document.getElementById('zscore2').value=="") && (document.getElementById('zscore3').value=="")){
		var output="<b style='color:red'>	ENTER VALUES ABOVE</b>";
	};
   
	document.getElementById('answer2').innerHTML=output;
}

function field3() {
	// Originally found at: http://rangevoting.org/Qnorm.html

/** * @(#)qnorm.js * * Copyright (c) 2000 by Sundar Dorai-Raj
  * * @author Sundar Dorai-Raj
  * * Email: sdoraira@vt.edu
  * * This program is free software; you can redistribute it and/or
  * * modify it under the terms of the GNU General Public License 
  * * as published by the Free Software Foundation; either version 2 
  * * of the License, or (at your option) any later version, 
  * * provided that any use properly credits the author. 
  * * This program is distributed in the hope that it will be useful,
  * * but WITHOUT ANY WARRANTY; without even the implied warranty of
  * * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
  * * GNU General Public License for more details at http://www.gnu.org
  * * */
  // ALGORITHM AS 111, APPL.STATIST., VOL.26, 118-121, 1977.
  // Computes z = invNorm(p)
  var p = document.getElementById('Prob').value;
  p = parseFloat(p);
  var split = 0.42;

  var a0 = 2.50662823884;  var a1 = -18.61500062529;  var a2 = 41.39119773534;
  var a3 = -25.44106049637;  var b1 = -8.47351093090;  var b2 = 23.08336743743;
  var b3 = -21.06224101826;  var b4 =  3.13082909833;  var c0 = -2.78718931138;
  var c1 = -2.29796479134;  var c2 =  4.85014127135;  var c3 =  2.32121276858;
  var d1 =  3.54388924762;  var d2 =  1.63706781897;  var q = p - 0.5;  var r, ppnd;

  if (Math.abs(q) <= split) {
    r = q * q;
    ppnd = q * (((a3*r+a2)*r+a1)*r+a0)/((((b4*r+b3)*r+b2)*r+b1)*r+1);
  } else {
    r = p;
    if (q > 0) r = 1 - p;
    if (r > 0) {
      r = Math.sqrt(-Math.log(r));
      ppnd = (((c3*r+c2)*r+c1)*r+c0)/((d2*r+d1)*r+1);
      if (q < 0) ppnd = -ppnd;
    }
    else {
      ppnd = 0;
    }
  }
  if (ppnd > 0){var ppndn = "-"+ppnd + " If on the left"}else if (ppnd < 0){var ppndn = Math.abs(ppnd) + " If on the right"};
  if(document.getElementById('Prob').value!=""){
  document.getElementById('answer3').innerHTML="Z-Score: "+ppnd +" <BR>OR<BR>"+ ppndn;
}else{document.getElementById('answer3').innerHTML="<b style='color:red'>Please provide probabilty value.</BR>";
	;}
	
}

//MATHSHELP3.HTML
var confint ={"70%":	1.036,"75%":	1.150,"80%"	:1.282,"85%":	1.440,"90%"	:1.645,
"95%":	1.960,"98%":	2.326,"99%":	2.576,"99.5%":	2.807,"99.9%":	3.291,
"99.99%":	3.891,"99.999%":	4.417};

function field4(){
	var one = parseFloat(document.getElementById('samsize').value);
	var two = parseFloat(document.getElementById('mean').value);
	var three = parseFloat(document.getElementById('stdev').value);
	var four = parseFloat(confint[document.getElementById('conf').value]);
	var five = three/Math.sqrt(one);
	var six = four*five;
	var seven = (two-six).toFixed(4)+" : "+(two+six).toFixed(4);
	var output="Mean: "+two.toFixed(4)+"</br>"+
				"Standard Deviation: "+three.toFixed(4)+"</br>"+
				"Confidence Level: "+four.toFixed(4)+"</br>"+
				"Point Estimate: "+five.toFixed(4)+"</br>"+
				"Margin Of Error: "+six.toFixed(4)+"</br>"+
				"Confidence Interval: ["+seven+"]</br>"
				;
	if (document.getElementById('mean').value!=""){
	document.getElementById('answer').innerHTML=output;
}else{document.getElementById('answer').innerHTML="<b style='color:red'>MISSING PARAMETER</b>";}
}
//MATHSHELP4.HTML
//V8 3.31.1

function field5() {
	var one=document.getElementById('nnn').value;
	var two=1;
	var three=document.getElementById('rrr').value;
	three=one-three;
	var four=1;
	
   for(var i=1;i<=one;i++){
   	two=two*i;
   	
   }
   for(var i=1;i<=three;i++){
   	four=four*i;
   }
   var five = two/four;
   var output= "Permutations, <sub>n</sub>P<sub>r</sub>: "+five.toFixed(4);
if (document.getElementById('nnn').value>1){
	document.getElementById('answer').innerHTML=output;
}else{document.getElementById('answer').innerHTML="<b style='color:red'>MISSING PARAMETER</b>";}
};

function field6() {
	var one=document.getElementById('nnnn').value;
	var two=1;
	var three=document.getElementById('rrrr').value;
	var four =one-three;
	var five=1;
	var six=1;
   for(var i=1;i<=one;i++){
   	two=two*i;
   }
   for(var i=1;i<=three;i++){
   	five=five*i;
   }
   for(var i=1;i<=four;i++){
   	six=six*i;
   }
   var seven = two/(five*six);
   var output= "Combinations, <sub>n</sub>C<sub>r</sub>: "+seven;

if (document.getElementById('nnnn').value>1){
	document.getElementById('answer2').innerHTML=output;
}else{document.getElementById('answer2').innerHTML="<b style='color:red'>MISSING PARAMETER</b>";};
};

function field7() {
	var nums=document.getElementById('perm').value;
	nums=nums.split(',');
	var one =document.getElementById('permsub').value;
	console.log(typeof(one));
	if (one==""){
		var permsub=nums.length;
	}
	else{
		var permsub=parseInt(one);
	}
	console.log(typeof(permsub));
    let res = [];
    let used = {};
    let dfs = (prefix = []) => {
        if(prefix.length === permsub) {
            res.push(prefix+"</br>");
            return;
        }
        
        for(let i=0; i<nums.length; i++){
            if(!used[nums[i]]){
                used[nums[i]] = true;
                dfs(prefix.concat(nums[i]));
                used[nums[i]] = false;
            }
        }
    }
    dfs();
    if (document.getElementById('perm').value==""){
    	document.getElementById('answer3').innerHTML="<b style='color:red'>MISSING PARAMETER</b>";

    }else{
    document.getElementById('answer3').innerHTML="Permutations, <sub>n</sub>P<sub>r</sub>: "+res.length+"</br> Permutation Array:</br>"+res;
}};

const ttable={
	"99.95%":{'1':636.620,'2':31.599,'3':12.924,'4':8.610,'5':6.869,'6':5.959,'7':5.408,'8':5.041,'9':4.781,'10':4.587,'11':4.437,'12': 4.318,'13':4.221,'14':4.140,'15':4.073,'16': 4.015,'17':3.965,'18' :3.922,'19': 3.883,'20':3.850,'21':3.819,'22':3.792,'23':3.768,'24':3.745,'25' :3.725,'26':3.707,'27':3.690,'28':3.674,'29': 3.659,'30':3.646},
	"99.9%":{'1':318.310,'2':22.327,'3':10.215,'4':7.173,'5':5.893,'6': 5.208,'7':4.785,'8':4.501,'9':4.297,'10': 4.144,'11': 4.025,'12':3.930,'13':3.852,'14':3.787,'15': 3.733,'16':3.686,'17': 3.646,'18':3.610,'19': 3.579,'20': 3.552,'21': 3.527,'22':3.505,'23': 3.485,'24':3.467,'25': 3.450,'26':3.435,'27':3.421,'28':3.408,'29':3.396,'30':3.385},
	"99.5%":{'1':63.660,'2':9.925,'3':5.841,'4':4.604,'5':4.032,'6':3.707,'7':3.499,'8': 3.355,'9':3.250,'10':3.169,'11':3.106,'12':3.055,'13': 3.012,'14':2.977,'15': 2.947,'16':2.921,'17': 2.898,'18':2.878,'19':2.861,'20':2.845,'21': 2.831,'22': 2.819,'23':2.807,'24':2.797,'25':2.787,'26': 2.779,'27':2.771,'28':2.763,'29': 2.756,'30':2.750},
	"99%":{'1':31.820,'2':6.965,'3':4.541,'4':3.747,'5':3.365,'6':3.143,'7': 2.998,'8': 2.896,'9': 2.821,'10': 2.764,'11':2.718,'12': 2.681,'13':2.650,'14':2.624,'15':2.602,'16': 2.583,'17':2.567,'18':2.552,'19':2.539,'20':2.528,'21':2.518,'22':2.508,'23':2.500,'24':2.492,'25': 2.485,'26':2.479,'27': 2.473,'28':2.467,'29':2.462,'30': 2.457},
	"97.5%":{'1':12.710,'2':4.303,'3':3.182,'4':2.776,'5':2.571,'6':2.447,'7':2.365,'8':2.306,'9': 2.262,'10': 2.228,'11': 2.201,'12':2.179,'13':2.160,'14':2.145,'15': 2.131,'16':2.120,'17':2.110,'18':2.101,'19': 2.093,'20':2.086,'21':2.080,'22':2.074,'23': 2.069,'24': 2.064,'25': 2.060,'26':2.056,'27': 2.052,'28':2.048,'29':2.045,'30': 2.042},
	"95%":{'1':6.314,'2':2.920,'3':2.353,'4':2.132,'5': 2.015,'6':1.943,'7':1.895,'8':1.860,'9': 1.833,'10':1.812,'11':1.796,'12': 1.782 ,'13':1.771,'14':1.761,'15': 1.753,'16':1.746,'17':1.740,'18':1.734,'19': 1.729,'20': 1.725,'21': 1.721,'22':1.717,'23': 1.714,'24': 1.711,'25': 1.708,'26':1.706,'27':1.703,'28': 1.701,'29': 1.699,'30': 1.697},
	"90%":{'1':3.078,'2':1.886,'3':1.638,'4':1.533,'5':1.476,'6':1.440,'7':1.415,'8':1.397,'9': 1.383,'10':1.372,'11':1.363,'12':1.356 ,'13':1.350,'14':1.345,'15':1.341,'16': 1.337 ,'17': 1.333,'18':1.330,'19': 1.328,'20':1.325,'21':1.323,'22':1.321,'23': 1.319,'24':1.318,'25':1.316,'26':1.315,'27':1.314,'28': 1.313,'29': 1.311,'30':1.310},
	"85%":{'1':1.963,'2':1.386,'3':1.250,'4':1.190,'5':1.156,'6':1.134,'7':1.119,'8':1.108,'9': 1.100,'10':1.093,'11': 1.088,'12': 1.083,'13': 1.079,'14':1.076,'15': 1.074,'16':1.071,'17':1.069,'18':1.067,'19':1.066,'20':1.064,'21':1.063,'22':1.061,'23':1.060,'24':1.059,'25': 1.058,'26':1.058,'27':1.057,'28':1.056,'29':1.055,'30':1.055}
};

function field8(){
	var one=document.getElementById('prob').value;
	var two=document.getElementById('dg').value;
	
	console.log(two.length);
	if (two.length<1){
		var output="<b style='color:red'>MISSING PARAMETER</b>";
	}
	else{
		var output= one+"has a probabilty of: "+ttable[one][two];
	};
	document.getElementById('answer').innerHTML=output;
}
function field9(){
	var one=document.getElementById('xvalue').value;
	var two=document.getElementById('df').value;
	for(var key in ttable) {
    if(ttable[key][two] == one) {
        var output=key;
        
        document.getElementById('answer2').innerHTML=one+" has a Percentage of: "+key;
    }
}
	
}

function field10(){
	var one=document.getElementById('xvalue1').value;
	
	for(var key in ttable) {
		for (var key1 in key){
    if(ttable[key][key1] == one) {
        var output=key;
        console.log(key);
        document.getElementById('answer3').innerHTML=one+" has a Percentage of: "+key+" and a DF of "+key1;
    }
}
}	
}

//MATHSHELP6.HTML
function field11(){
	var one = document.getElementById('Yaxis').value;
	var two = document.getElementById('Xaxis').value;
	var yname= document.getElementById('yname').value;
	var xname = document.getElementById('xname').value;
	var prob = document.getElementById('prob').value;
	var yaxis = one.split(',');
	var xaxis = two.split(',');
	var yaxissum=0, xaxissum=0, yxaxissum=0, xsquaresum=0, ysquaresum=0, n=yaxis.length;
	for(var i=0;i<yaxis.length;i++){
		yaxissum += parseFloat(yaxis[i]);
		xaxissum += parseFloat(xaxis[i]);
		yxaxissum += (parseFloat(yaxis[i])*parseFloat(xaxis[i]));
		xsquaresum += (parseFloat(xaxis[i])**2);
		ysquaresum += (parseFloat(yaxis[i])**2);
	}
	var ystdev=0, xstdev=0;
	var ymean=yaxissum/n, xmean=xaxissum/n;
	for (var i = 0; i < n; i++) {
		ystdev+=((parseFloat(yaxis[i])-ymean)**2);
		xstdev+=((parseFloat(xaxis[i])-xmean)**2);
	}
	var ystdev2 = Math.sqrt(ystdev/(n-1)),
	xstdev2 = Math.sqrt(xstdev/(n-1));
	var a=(((yaxissum * xsquaresum) - (xaxissum * yxaxissum)) / ((n*(xsquaresum)) - (xaxissum**2)));
	var b=((n*(yxaxissum)) - (xaxissum * yaxissum)) / ((n*(xsquaresum)) - (xaxissum**2));
	var r=((n*yxaxissum)-(yaxissum * xaxissum))/Math.sqrt(((n*xsquaresum)-((xaxissum)**2))*((n*ysquaresum)-((yaxissum)**2)));
	var rsquared=r**2;
	var ssxx =xsquaresum-((xaxissum**2)/n);
	var ssxy = yxaxissum-((xaxissum*yaxissum)/n);
	var ssyy =ysquaresum-((yaxissum**2)/n);
	var sse = ssyy-(b*ssxy);
	var s= Math.sqrt(sse/(n-2));
	var asterr = s*Math.sqrt((1/n)+((xmean**2)/ssxx)),
	bsterr = s/Math.sqrt(ssxx);
	var atstat=a/asterr, btstat=b/bsterr;
	if (n<=30){
		var cv=ttable[prob][n-2];
	}else{
		var cv=confint[prob];
	};
	var al=a-(cv*asterr),au=a+(cv*asterr),bl=b-(cv*bsterr),bu=b+(cv*bsterr);
	var output=yname+" = "+a.toFixed(4) +" + "+b.toFixed(4)+"<sub>"+xname+"</sub></br> correlation coefficient,r: "+r.toFixed(4)+
	"</br>Coefficient of Determination, R<sup>2</sup>: "+rsquared.toFixed(4)+
	"</br>Mean of "+yname+": "+ymean.toFixed(4)+"</br>"+
	"Mean of "+xname+": "+xmean.toFixed(4)+"</br>"+
	"Standard Error :"+s.toFixed(4)+"</br>"+
	"Standard Deviation of "+yname+": "+ystdev2.toFixed(4)+"</br>"+
	"Standard Deviation of "+xname+": "+xstdev2.toFixed(4)+"</br>"+
	"<table><tr><th>ANOVA</th><th><em>df</em></th><th><em>SS</em></th><th><em>MS</em></th><th><em>F</em></th><th>Significance F</th></tr></br>"+
	"<tr><td>Regression</td><td>"+1+"</td><td>"+(ssyy-sse).toFixed(4)+"</td><td>"+((ssyy-sse)/1).toFixed(4)+"</td><td>"+(((ssyy-sse)/1)/(sse/(n-2)).toFixed(4)).toFixed(4)+"</td><td></td></br>"+
	"<tr><td>Residual</td><td>"+(n-2)+"</td><td>"+sse.toFixed(4)+"</td><td>"+(sse/(n-2)).toFixed(4)+"</td><td></td><td></td></br>"+
	"<tr><td>Total</td><td>"+(n-1)+"</td><td>"+ssyy.toFixed(4)+"</td><td></td><td></td><td></td></table></br>"+
	"<table><tr><th>Variable</th><th>Coefficient</th><th>Standard Error</th><th>T Stat</th><th>Lower Limit</th><th>Upper Limit</th></tr></br>"+
	"<tr><td>Intercept</td><td>"+a.toFixed(4)+"</td><td>"+asterr.toFixed(4)+"</td><td>"+atstat.toFixed(4)+"</td><td>"+al.toFixed(4)+"</td><td>"+au.toFixed(4)+"</td></br>"+
	"<tr><td>"+xname+"</td><td>"+b.toFixed(4)+"</td><td>"+bsterr.toFixed(4)+"</td><td>"+btstat.toFixed(4)+"</td><td>"+bl.toFixed(4)+"</td><td>"+bu.toFixed(4)+"</td></table></br>";
	if(yaxis.length!==xaxis.length){
	document.getElementById('answer').innerHTML="<b style='color:red'>X and Y axis must be of equal length<b>";
}else if (document.getElementById('Yaxis').value!=""){
	document.getElementById('answer').innerHTML=output;
	document.getElementById('curve_chart').style.display='block';
}
else{document.getElementById('answer').innerHTML="<b style='color:red'>MISSING PARAMETER<b>"};
	console.log(ssxx,ssxy,ssyy,sse,s);
}

function Prob1(){
	var ProbA = parseFloat(document.getElementById('ProbA').value);
	var ProbB = parseFloat(document.getElementById('ProbB').value);
	var PAnotOccur = 1-ProbA;
	var PBnotOccur = 1-ProbB;
	var PAnBbothOccur = ProbA*ProbB;
	var PAuBbothOccur = ProbA+ProbB-PAnBbothOccur;
	var PAuBbothOccurbutnotboth = ProbA+ProbB-(2*PAuBbothOccur);
	var PnotAuBOccur = 1-PAuBbothOccur;
	var PAoccurBnotOccur = ProbA*(1-ProbB);
	var PBoccurAnotOccur = ProbB*(1-ProbA);
	console.log(PAnotOccur, typeof(ProbB));
	if (document.getElementById('ProbA').value =="" ||document.getElementById('ProbB').value==""||document.getElementById('ProbB').value>='A'){
		var output = "<b style='color:red'>ENTER A DECIMAL</BR>";
	}
	else{
	var output = "P of A NOT occuring:P(A\') = "+PAnotOccur+
	"</br>P(B NOT occuring):P(B\') = "+PBnotOccur+
	"</br>P(A and B both occuring):P(A<sub>and</sub>B) = "+PAnBbothOccur.toFixed(4)+
	"</br>P(A or B or both occur): P(A<sub>or</sub>B) = "+PAuBbothOccur.toFixed(4)+
	"</br>P(A or B occurs but NOT both): = "+PAuBbothOccurbutnotboth.toFixed(4)+
	"</br>P(neither A nor B occur): = 	"+PnotAuBOccur.toFixed(4)+
	"</br>P(A occur but NOT B) = "+PAoccurBnotOccur.toFixed(4)+
	"</br>P(B occur but NOT A) = "+PBoccurAnotOccur.toFixed(4);
	};
	console.log(output);
	document.getElementById('answer').innerHTML=output;
}

function Prob2(){
	var one = document.getElementById('PbA').value;
	var two = document.getElementById('PbB').value;
	var three = document.getElementById('PnA').value;
	var four = document.getElementById('PnB').value;
	var five = document.getElementById('PAB').value;
	var six = document.getElementById('PABb').value;
	var seven = document.getElementById('PABnB').value;
	var eight = document.getElementById('PnAB').value;

	if (one != "" && four != ""){
		var ProbA = parseFloat(one);
		var PBnotOccur = parseFloat(four);
		var ProbB = 1-PBnotOccur;
		var PAnBbothOccur = ProbA*ProbB;
		var PAuBbothOccur = ProbA+ProbB-PAnBbothOccur;
		var PAuBbothOccurbutnotboth = ProbA+ProbB-(2*PAuBbothOccur);
		var PnotAuBOccur = 1-PAuBbothOccur;
		var PAoccurBnotOccur = ProbA*(1-ProbB);
		var PBoccurAnotOccur = ProbB*(1-ProbA);
		five=PAnBbothOccur;
	var output = 
	"P(A): = "+ProbA+
	"</br>P(B): = "+ProbB+
	"</br>P of A NOT occuring: = "+PAnotOccur+
	"</br>P(B NOT occuring): = "+PBnotOccur+
	"</br>P(A and B both occuring):P(A<sub>and</sub>B) = "+PAnBbothOccur.toFixed(4)+
	"</br>P(A or B or both occur): P(A<sub>or</sub>B) = "+PAuBbothOccur.toFixed(4)+
	"</br>P(A or B occurs but NOT both): = "+PAuBbothOccurbutnotboth.toFixed(4)+
	"</br>P(neither A nor B occur): = 	"+PnotAuBOccur.toFixed(4)+
	"</br>P(A occur but NOT B) = "+PAoccurBnotOccur.toFixed(4)+
	"</br>P(B occur but NOT A) = "+PBoccurAnotOccur.toFixed(4);

		document.getElementById('answer2').innerHTML=output;
	}
	else if (one != "" && five != ""){
		var ProbA = parseFloat(one);
		var PAnBbothOccur = parseFloat(five);
		var ProbB = PAnBbothOccur/ProbA;
		var PAnotOccur = 1-ProbA;
	var PBnotOccur = 1-ProbB;
		var PAuBbothOccur = ProbA+ProbB-PAnBbothOccur;
	var PAuBbothOccurbutnotboth = ProbA+ProbB-(2*PAuBbothOccur);
	var PnotAuBOccur = 1-PAuBbothOccur;
	var PAoccurBnotOccur = ProbA*(1-ProbB);
	var PBoccurAnotOccur = ProbB*(1-ProbA);
	var output = 
	"P(A): = "+ProbA+
	"</br>P(B): = "+ProbB+
	"</br>P of A NOT occuring: = "+PAnotOccur+
	"</br>P(B NOT occuring): = "+PBnotOccur+
	"</br>P(A and B both occuring):P(A<sub>and</sub>B) = "+PAnBbothOccur.toFixed(4)+
	"</br>P(A or B or both occur): P(A<sub>or</sub>B) = "+PAuBbothOccur.toFixed(4)+
	"</br>P(A or B occurs but NOT both): = "+PAuBbothOccurbutnotboth.toFixed(4)+
	"</br>P(neither A nor B occur): = 	"+PnotAuBOccur.toFixed(4)+
	"</br>P(A occur but NOT B) = "+PAoccurBnotOccur.toFixed(4)+
	"</br>P(B occur but NOT A) = "+PBoccurAnotOccur.toFixed(4);
	document.getElementById('answer2').innerHTML=output;
	}
	else if (one != "" && six != ""){
		var ProbA = parseFloat(one);
		var PAuBbothOccur = parseFloat(six);
		var ProbB = (PAuBbothOccur-ProbA)/(1-ProbA);
		var PAnotOccur = 1-ProbA;
	var PBnotOccur = 1-ProbB;
	var PAnBbothOccur = ProbA*ProbB;
		var PAuBbothOccurbutnotboth = ProbA+ProbB-(2*PAuBbothOccur);
	var PnotAuBOccur = 1-PAuBbothOccur;
	var PAoccurBnotOccur = ProbA*(1-ProbB);
	var PBoccurAnotOccur = ProbB*(1-ProbA);
	var output = 
	"P(A): = "+ProbA+
	"</br>P(B): = "+ProbB+
	"</br>P of A NOT occuring: = "+PAnotOccur+
	"</br>P(B NOT occuring): = "+PBnotOccur+
	"</br>P(A and B both occuring):P(A<sub>and</sub>B) = "+PAnBbothOccur.toFixed(4)+
	"</br>P(A or B or both occur): P(A<sub>or</sub>B) = "+PAuBbothOccur.toFixed(4)+
	"</br>P(A or B occurs but NOT both): = "+PAuBbothOccurbutnotboth.toFixed(4)+
	"</br>P(neither A nor B occur): = 	"+PnotAuBOccur.toFixed(4)+
	"</br>P(A occur but NOT B) = "+PAoccurBnotOccur.toFixed(4)+
	"</br>P(B occur but NOT A) = "+PBoccurAnotOccur.toFixed(4);
	document.getElementById('answer2').innerHTML=output;
	}
	else if (one != "" && eight != ""){
		var ProbA = parseFloat(one);
		var PnotAuBOccur = parseFloat(eight);
		var PAuBbothOccur = 1-PnotAuBOccur;
		var ProbB = (PAuBbothOccur-ProbA)/(1-ProbA);
		var PAnotOccur = 1-ProbA;
	var PBnotOccur = 1-ProbB;
	var PAnBbothOccur = ProbA*ProbB;
		var PAuBbothOccurbutnotboth = ProbA+ProbB-(2*PAuBbothOccur);
		var PAoccurBnotOccur = ProbA*(1-ProbB);
	var PBoccurAnotOccur = ProbB*(1-ProbA);
	var output = 
	"P(A): = "+ProbA+
	"</br>P(B): = "+ProbB+
	"</br>P of A NOT occuring: = "+PAnotOccur+
	"</br>P(B NOT occuring): = "+PBnotOccur+
	"</br>P(A and B both occuring):P(A<sub>and</sub>B) = "+PAnBbothOccur.toFixed(4)+
	"</br>P(A or B or both occur): P(A<sub>or</sub>B) = "+PAuBbothOccur.toFixed(4)+
	"</br>P(A or B occurs but NOT both): = "+PAuBbothOccurbutnotboth.toFixed(4)+
	"</br>P(neither A nor B occur): = 	"+PnotAuBOccur.toFixed(4)+
	"</br>P(A occur but NOT B) = "+PAoccurBnotOccur.toFixed(4)+
	"</br>P(B occur but NOT A) = "+PBoccurAnotOccur.toFixed(4);
	document.getElementById('answer2').innerHTML=output;
	}
	else if (two != "" && three != ""){
		var ProbB = parseFloat(two);
		var PAnotOccur = parseFloat(three);
		var ProbA = 1-PAnotOccur;
		var PAnBbothOccur = ProbA*ProbB;
		var PAuBbothOccur = ProbA+ProbB-PAnBbothOccur;
		var PAuBbothOccurbutnotboth = ProbA+ProbB-(2*PAuBbothOccur);
		var PnotAuBOccur = 1-PAuBbothOccur;
		var PAoccurBnotOccur = ProbA*(1-ProbB);
		var PBoccurAnotOccur = ProbB*(1-ProbA);
		var output = 
	"P(A): = "+ProbA+
	"</br>P(B): = "+ProbB+
	"</br>P of A NOT occuring: = "+PAnotOccur+
	"</br>P(B NOT occuring): = "+PBnotOccur+
	"</br>P(A and B both occuring):P(A<sub>and</sub>B) = "+PAnBbothOccur.toFixed(4)+
	"</br>P(A or B or both occur): P(A<sub>or</sub>B) = "+PAuBbothOccur.toFixed(4)+
	"</br>P(A or B occurs but NOT both): = "+PAuBbothOccurbutnotboth.toFixed(4)+
	"</br>P(neither A nor B occur): = 	"+PnotAuBOccur.toFixed(4)+
	"</br>P(A occur but NOT B) = "+PAoccurBnotOccur.toFixed(4)+
	"</br>P(B occur but NOT A) = "+PBoccurAnotOccur.toFixed(4);
		document.getElementById('answer2').innerHTML=output;
	}
	else if (two != "" && five != ""){
		var ProbB = parseFloat(two);
		var PAnBbothOccur = parseFloat(five);
		var ProbA = PAnBbothOccur/ProbB;
		var PAnotOccur = 1-ProbA;
	var PBnotOccur = 1-ProbB;
		var PAuBbothOccur = ProbA+ProbB-PAnBbothOccur;
	var PAuBbothOccurbutnotboth = ProbA+ProbB-(2*PAuBbothOccur);
	var PnotAuBOccur = 1-PAuBbothOccur;
	var PAoccurBnotOccur = ProbA*(1-ProbB);
	var PBoccurAnotOccur = ProbB*(1-ProbA);
	var output = 
	"P(A): = "+ProbA+
	"</br>P(B): = "+ProbB+
	"</br>P of A NOT occuring: = "+PAnotOccur+
	"</br>P(B NOT occuring): = "+PBnotOccur+
	"</br>P(A and B both occuring):P(A<sub>and</sub>B) = "+PAnBbothOccur.toFixed(4)+
	"</br>P(A or B or both occur): P(A<sub>or</sub>B) = "+PAuBbothOccur.toFixed(4)+
	"</br>P(A or B occurs but NOT both): = "+PAuBbothOccurbutnotboth.toFixed(4)+
	"</br>P(neither A nor B occur): = 	"+PnotAuBOccur.toFixed(4)+
	"</br>P(A occur but NOT B) = "+PAoccurBnotOccur.toFixed(4)+
	"</br>P(B occur but NOT A) = "+PBoccurAnotOccur.toFixed(4);
	document.getElementById('answer2').innerHTML=output;
	}
	else if (two != "" && six != ""){
		var ProbB = parseFloat(two);
		var PAuBbothOccur = parseFloat(six);
		var ProbA = (PAuBbothOccur-ProbB)/(1-ProbB);
		var PAnotOccur = 1-ProbA;
	var PBnotOccur = 1-ProbB;
	var PAnBbothOccur = ProbA*ProbB;
	var PAuBbothOccurbutnotboth = ProbA+ProbB-(2*PAuBbothOccur);
	var PnotAuBOccur = 1-PAuBbothOccur;
	var PAoccurBnotOccur = ProbA*(1-ProbB);
	var PBoccurAnotOccur = ProbB*(1-ProbA);
	var output = 
	"P(A): = "+ProbA+
	"</br>P(B): = "+ProbB+
	"</br>P of A NOT occuring: = "+PAnotOccur+
	"</br>P(B NOT occuring): = "+PBnotOccur+
	"</br>P(A and B both occuring):P(A<sub>and</sub>B) = "+PAnBbothOccur.toFixed(4)+
	"</br>P(A or B or both occur): P(A<sub>or</sub>B) = "+PAuBbothOccur.toFixed(4)+
	"</br>P(A or B occurs but NOT both): = "+PAuBbothOccurbutnotboth.toFixed(4)+
	"</br>P(neither A nor B occur): = 	"+PnotAuBOccur.toFixed(4)+
	"</br>P(A occur but NOT B) = "+PAoccurBnotOccur.toFixed(4)+
	"</br>P(B occur but NOT A) = "+PBoccurAnotOccur.toFixed(4);
	document.getElementById('answer2').innerHTML=output;
	}
	else if (two != "" && eight != ""){
		var ProbB = parseFloat(two);
		var PnotAuBOccur = parseFloat(eight);
		var PAuBbothOccur = 1-PnotAuBOccur;
		var ProbA = (PAuBbothOccur-ProbB)/(1-ProbB);
		var PAnotOccur = 1-ProbA;
	var PBnotOccur = 1-ProbB;
	var PAnBbothOccur = ProbA*ProbB;
	var PAuBbothOccurbutnotboth = ProbA+ProbB-(2*PAuBbothOccur);
	var PAoccurBnotOccur = ProbA*(1-ProbB);
	var PBoccurAnotOccur = ProbB*(1-ProbA);
		var output = 
	"P(A): = "+ProbA+
	"</br>P(B): = "+ProbB+
	"</br>P of A NOT occuring: = "+PAnotOccur+
	"</br>P(B NOT occuring): = "+PBnotOccur+
	"</br>P(A and B both occuring):P(A<sub>and</sub>B) = "+PAnBbothOccur.toFixed(4)+
	"</br>P(A or B or both occur): P(A<sub>or</sub>B) = "+PAuBbothOccur.toFixed(4)+
	"</br>P(A or B occurs but NOT both): = "+PAuBbothOccurbutnotboth.toFixed(4)+
	"</br>P(neither A nor B occur): = 	"+PnotAuBOccur.toFixed(4)+
	"</br>P(A occur but NOT B) = "+PAoccurBnotOccur.toFixed(4)+
	"</br>P(B occur but NOT A) = "+PBoccurAnotOccur.toFixed(4);
	document.getElementById('answer2').innerHTML=output;
	}else{var output="<b style='color:red'>Please provide any 2 values above to calculate the rest probabilities of two independent events.</BR>";
document.getElementById('answer2').innerHTML=output;};
}

function Prob3(){
	var Ea = parseFloat(document.getElementById('Ea').value);
	var rta = parseFloat(document.getElementById('rta').value)
	var Eb = parseFloat(document.getElementById('Eb').value);
	var rtb = parseFloat(document.getElementById('rtb').value);
	if (document.getElementById('Ea').value==""||document.getElementById('Eb').value==""){
		var output="<b style='color:red'>Please provide any 2 values above to calculate the probabilities of a series of events.</BR>";}
	else {
	var output = "Probability of A occuring "+rta+" times) = "+(Ea**rta).toFixed(4)+
"</br>P(A NOT occuring) = "+((1 - Ea)**rta).toFixed(4)+
"</br>P(A occuring) = "+(1 - (1 - Ea)**rta).toFixed(4)+
"</br>P(B occuring "+rtb+" times) = "+(Eb**rtb).toFixed(4)+
"</br>P(B NOT occuring) = "+((1 - Eb)**rtb).toFixed(4)+
"</br>P(B occuring) = "+((1 - (1 - Eb)**rtb)).toFixed(4)+
"</br>P(A occuring "+rta+" times and B occuring "+rtb+" times) = "+((Ea**rta) * (Eb**rtb)).toFixed(4)+
"</br>P(neither A nor B occuring) = "+((1 - Ea)**rta * ((1 - Eb)**rtb)).toFixed(4)+
"</br>P(both A and B occuring) = "+((1 - (1 - Ea)**rta) * (1 - (1 - Eb)**rtb)).toFixed(4)+
"</br>P(A occuring "+rta+" times but not B) = "+(Ea**rta * (1 - Eb)**rtb).toFixed(4)+
"</br>P(B occuring "+rtb+" times but not A) = "+((1 - Ea)**rta * Eb).toFixed(4)+
"</br>P(A occuring but not B) = "+((1 - (1 - Ea)**rta) * ((1 - Eb)**rtb)).toFixed(4)+
"</br>P(B occuring but not A) = "+((1 - Ea)**rta * (1 - (1 - Eb)**rtb)).toFixed(4);}
console.log(output);
document.getElementById('answer3').innerHTML=output;
}

function Trigonometry(){
	let sideA= document.getElementById('sideA').value;
	let sideB= document.getElementById('sideB').value;
	let sideC= document.getElementById('sideC').value;
	let angleA= document.getElementById('angleA').value;
	let angleB= document.getElementById('angleB').value;
	if (angleB == ""){
		angleB = 90-parseFloat(angleA)
	}
	else if (angleA == ""){
		angleA = 90-parseFloat(angleB);
	}
	else if (sideA>0 && sideB>0){
		angleA = RadiansToDegrees(Math.atan (sideA/sideB))
		angleB = RadiansToDegrees(Math.atan (sideB/sideA))
	}
	console.log(sideB)
	SolveForAngles(sideA,sideB,sideC,angleA,angleB);		
	SolveForSides(sideA,sideB,sideC,angleA,angleB);
	if (angleA!="" && angleB!=""){
		var sum = parseFloat(angleA) + parseFloat(angleB)
		if (sum != 90){
			alert ("You input two angles that do not add up to 90 degrees. Please input only one angle or two angles that add up to 90 degrees")
			return false
		}
	if (sideA>0 && sideB>0 && sideC>0){
		sideA=parseFloat(sideA)
		sideB=parseFloat(sideB)
		sideC=parseFloat(sideC)
		if (sideC != Math.sqrt(Math.pow(sideA,2)+Math.pow(sideB,2))){
			alert("You input three sides, but they do not make a right triangle")
			return false
		}
	}
	
return true
}
function RadiansToDegrees(valRad){
	return (360/(2*Math.PI)*valRad)
}
function DegreesToRadians(valDeg){
	return ((2*Math.PI)/360*valDeg)
}
function SolveForAngles (sideA,sideB,sideC,angleA,angleB){
	
	if (sideA>0 && sideC>0){
			angleA = RadiansToDegrees(Math.asin (sideA/sideC))
			angleB = RadiansToDegrees(Math.acos (sideA/sideC))
	}
	else if (sideB>0 && sideC>0){
			angleA = RadiansToDegrees(Math.acos (sideB/sideC))
			angleB = RadiansToDegrees(Math.asin (sideB/sideC))
	}
	if (angleA>0 && angleB>0){
		angleA=angleA
		angleB=angleB
		return true
	}
	else {
		alert ("Not enough information, you must input at least 1 side and an angle or 2 sides")
		return false
	}	
}
	
function SolveForSides (sideA,sideB,sideC,angleA,angleB)	{
	if (sideA>0){
		sideB = sideA / Math.tan(DegreesToRadians(angleA))
		sideC = sideA / Math.sin(DegreesToRadians(angleA))
	}
	else if (sideB>0){
		sideA = sideB / Math.tan(DegreesToRadians(angleB))
		sideC = sideB / Math.sin(DegreesToRadians(angleB))
	}
	
	else if (sideC>0){
		sideA = sideC * Math.sin(DegreesToRadians(angleA))
		sideB = sideC * Math.cos(DegreesToRadians(angleA))
	}
	if (sideA>0 && sideB>0 && sideC>0){
		sideA=sideA;
		sideB=sideB;
		sideC=sideC;
	}
	else {
		alert ("Not enough information, you must input at least 1 side and an angle or 2 sides")
	}	
console.log(sideC,angleA,sideB,angleB, sideA);
document.getElementById('sideA').value=parseFloat(sideA).toFixed(2);
document.getElementById('sideB').value=parseFloat(sideB).toFixed(2);
document.getElementById('sideC').value=parseFloat(sideC).toFixed(2);
document.getElementById('angleB').value=parseFloat(angleB);
document.getElementById('angleA').value=parseFloat(angleA);	
}}

function TrigFuncCalc(){
	let DegRad = document.getElementById('DegRad').value;
	let sincostan = document.getElementById('sincostan').value;
	let triginput = parseFloat(document.getElementById('triginput').value);
	if (DegRad=='Radians'){
		triginput=((Math.PI/180)*triginput);
	}
	if (sincostan=='sin'){
		document.getElementById('trigoutput').value=Math.sin(triginput);
	}
	else if (sincostan=='cos'){
		document.getElementById('trigoutput').value=Math.cos(triginput);
	}
	else if (sincostan=='tan'){
		document.getElementById('trigoutput').value=Math.tan(triginput);
	}

}

function pythagorean(){
	let legA = document.getElementById('legA').value;
	let legB = document.getElementById('legB').value;
	let legC = document.getElementById('legC').value;
	if (legA!=""&&legB!=""){
		document.getElementById('legC').value=Math.sqrt(parseFloat(legA)**2+parseFloat(legB)**2);
	}
	else if (legA!=""&&legC!=""){
		document.getElementById('legB').value=Math.sqrt(parseFloat(legC)**2-parseFloat(legA)**2);
	}
	else if (legB!=""&&legC!=""){
		document.getElementById('legA').value=Math.sqrt(parseFloat(legC)**2-parseFloat(legB)**2);
	}
}

function quadratic(){
	let Alpha = document.getElementById('Alpha').value;
	let Beta = document.getElementById('Beta').value;
	let Charlie = document.getElementById('Charlie').value;
	let output =false;
	if (Alpha == "" || Beta == "" || Charlie ==""){
		output="<b style='color:red'>Please provide the 3 parameters above to calculate the Quadratic Equation.</BR>";
	}
	else{
		Alpha = parseFloat(Alpha);
		Beta = parseFloat(Beta);
		Charlie=parseFloat(Charlie);
		let left= ((-Beta)-Math.sqrt(Beta**2-(4*Alpha*Charlie)))/(2*Alpha);
		let right= ((-Beta)+Math.sqrt(Beta**2-(4*Alpha*Charlie)))/(2*Alpha);
		if (isNaN(left) || isNaN(right)){
		output=
		Alpha+"x<sup>2</sup> + "+Beta+"x + "+Charlie+" =0</br>"+
		"Discriminant= "+(Beta**2-(4*Alpha*Charlie))+"</br>"+
		"x= (-("+Beta+")&#177 &#8730 "+(Beta**2-(4*Alpha*Charlie))+")/"+(2*Alpha);
		}
		else {
		output=
		Alpha+"x<sup>2</sup> + "+Beta+"x + "+Charlie+" =0</br>"+
		"Discriminant= "+(Beta**2-(4*Alpha*Charlie))+"</br>"+
		"x= (-("+Beta+")&#177 "+"&#8730 "+(Beta**2-(4*Alpha*Charlie))+")/"+(2*Alpha)+"</br>"+
		"x= ("+left+' , '+right+")";}
	}
	document.getElementById('answer').innerHTML=output;
}

function GrpFreq(){
	let one = document.getElementById('range').value;
	let two = document.getElementById('freq').value;
	one = one.split(',');
	two = two.split(',');
	var mid,three,sumf=0, summ=0, sumfm2=0, sumfm=0 ;
	let grofreq = "<table><tr><th>Range</th><th><em>F</em></th><th><em>X</em></th><th><em>FX</em></th><th><em>FX<sup>2</sup></em></th></tr>";
	var range =[], midarr=[];
	for (var i=0; i<one.length; i++){
		three=one[i].split('-');
		range.push(three);
		mid = (parseFloat(range[i][1])+parseFloat(range[i][0]))/2;
		midarr[i]=mid;
		var m2 = mid**2;
		var fm2 = m2*parseFloat(two[i]);
		sumf+=parseFloat(two[i]);
		summ+=mid;
		sumfm2+=fm2;
		sumfm+=(parseFloat(two[i])*mid);
	}
	for (var i=0; i<one.length; i++){
		grofreq+="<tr><td>"+one[i]+"</td><td>"+two[i]+"</td><td>"+midarr[i]+"</td><td>"+(two[i]*midarr[i])+"</td><td>"+((two[i]*midarr[i])**2)+"</td></tr>";
	};
	grofreq+="<tr><td><b>TOTAL</b></td><td><b>"+sumf+"</b></td><td><b>"+summ+"</b></td><td><b>"+sumfm+"</b></td><td><b>"+sumfm2+"</b></td></tr>";
	grofreq+="</br></table>";	
	let mean = sumfm/sumf;
	let sstdev=Math.sqrt((sumfm2-(sumf*mean**2))/(sumf-1));
	let pstdev=Math.sqrt((sumfm2-(sumf*mean**2))/sumf);
	let svar=((sumfm2-(sumf*mean**2))/(sumf-1));
	let pvar =((sumfm2-(sumf*mean**2))/sumf);
	let output=false;
	if (one.length <2 || two.length<2){
		output="<b style='color:red'>Please provide the RANGE and FREQUENCY above to Get the Values.</BR>";
	}
	else if (document.getElementById('range').value.includes("-")==false){
		output="<b style='color:red'>Please seperate each side of the RANGE with a (-) HYPHEN</BR>";
	}
	else if (one.length!=two.length){
		output="<b style='color:red'>Please ensure that both the RANGE and FREQUENCY have the same NUMBER OF OBSERVATION.</BR>";	
	}
	else{
		output="Mean: "+mean+
		"</br>Sample Standard Deviation: "+sstdev+
		"</br>Population Standard Deviation: "+pstdev+
		"</br>Sample Variance: "+svar+
		"</br>Population Variance: "+pvar+grofreq;
}
	document.getElementById('answer1').innerHTML=output;
}

function chisq(){
	let r1c1= document.getElementById('r1c1').value;	let r1c2= document.getElementById('r1c2').value;	let r1c3= document.getElementById('r1c3').value;	let r1c4= document.getElementById('r1c4').value;	let r1c5= document.getElementById('r1c5').value;
	let r2c1= document.getElementById('r2c1').value;	let r2c2= document.getElementById('r2c2').value;	let r2c3= document.getElementById('r2c3').value;	let r2c4= document.getElementById('r2c4').value;	let r2c5= document.getElementById('r2c5').value;
	let r3c1= document.getElementById('r3c1').value;	let r3c2= document.getElementById('r3c2').value;	let r3c3= document.getElementById('r3c3').value;	let r3c4= document.getElementById('r3c4').value;	let r3c5= document.getElementById('r3c5').value;
	let r4c1= document.getElementById('r4c1').value;	let r4c2= document.getElementById('r4c2').value;	let r4c3= document.getElementById('r4c3').value;	let r4c4= document.getElementById('r4c4').value;	let r4c5= document.getElementById('r4c5').value;
	let r5c1= document.getElementById('r5c1').value;	let r5c2= document.getElementById('r5c2').value;	let r5c3= document.getElementById('r5c3').value;	let r5c4= document.getElementById('r5c4').value;	let r5c5= document.getElementById('r5c5').value;
	if (r1c1 == ""){r1c1 = 0}else{r1c1=parseFloat(r1c1)};	if (r1c2 == ""){r1c2 = 0}else{r1c2=parseFloat(r1c2)};	if (r1c3 == ""||r1c3 == " "){r1c3 = 0}else{r1c3=parseFloat(r1c3)};	if (r1c4 == ""){r1c4 = 0}else{r1c4=parseFloat(r1c4)};	if (r1c5 == ""){r1c5 = 0}else{r1c5=parseFloat(r1c5)};
	if (r2c1 == ""){r2c1 = 0}else{r2c1=parseFloat(r2c1)};	if (r2c2 == ""){r2c2 = 0}else{r2c2=parseFloat(r2c2)};	if (r2c3 == ""||r2c3 == " "){r2c3 = 0}else{r2c3=parseFloat(r2c3)};	if (r2c4 == ""){r2c4 = 0}else{r2c4=parseFloat(r2c4)};	if (r2c5 == ""){r2c5 = 0}else{r2c5=parseFloat(r2c5)};
	if (r3c1 == ""||r3c1 == " "){r3c1 = 0}else{r3c1=parseFloat(r3c1)};	if (r3c2 == ""||r3c2 == " "){r3c2 = 0}else{r3c2=parseFloat(r3c2)};	if (r3c3 == ""||r3c3 == " "){r3c3 = 0}else{r3c3=parseFloat(r3c3)};	if (r3c4 == ""){r3c4 = 0}else{r3c4=parseFloat(r3c4)};	if (r3c5 == ""){r3c5 = 0}else{r3c5=parseFloat(r3c5)};
	if (r4c1 == ""){r4c1 = 0}else{r4c1=parseFloat(r4c1)};	if (r4c2 == ""){r4c2 = 0}else{r4c2=parseFloat(r4c2)};	if (r4c3 == ""){r4c3 = 0}else{r4c3=parseFloat(r4c3)};	if (r4c4 == ""){r4c4 = 0}else{r4c4=parseFloat(r4c4)};	if (r4c5 == ""){r4c5 = 0}else{r4c5=parseFloat(r4c5)};
	if (r5c1 == ""){r5c1 = 0}else{r5c1=parseFloat(r5c1)};	if (r5c2 == ""){r5c2 = 0}else{r5c2=parseFloat(r5c2)};	if (r5c3 == ""){r5c3 = 0}else{r5c3=parseFloat(r5c3)};	if (r5c4 == ""){r5c4 = 0}else{r5c4=parseFloat(r5c4)};	if (r5c5 == ""){r5c5 = 0}else{r5c5=parseFloat(r5c5)};
	let row1sum = r1c1+r1c2+r1c3+r1c4+r1c5;	let row2sum = r2c1+r2c2+r2c3+r2c4+r2c5;	let row3sum = r3c1+r3c2+r3c3+r3c4+r3c5;	let row4sum = r4c1+r4c2+r4c3+r4c4+r4c5;	let row5sum = r5c1+r5c2+r5c3+r5c4+r5c5;
	let col1sum = r1c1+r2c1+r3c1+r4c1+r5c1;	let col2sum = r1c2+r2c2+r3c2+r4c2+r5c2;	let col3sum = r1c3+r2c3+r3c3+r4c3+r5c3;	let col4sum = r1c4+r2c4+r3c4+r4c4+r5c4;	let col5sum = r1c5+r2c5+r3c5+r4c5+r5c5;
	let finalsum = row1sum+row2sum+row3sum+row4sum+row5sum;
	let r1c1e=(row1sum*col1sum)/finalsum; let r2c1e=(row2sum*col1sum)/finalsum; let r3c1e=(row3sum*col1sum)/finalsum; let r4c1e=(row4sum*col1sum)/finalsum; let r5c1e=(row5sum*col1sum)/finalsum;
	let r1c2e=(row1sum*col2sum)/finalsum; let r2c2e=(row2sum*col2sum)/finalsum; let r3c2e=(row3sum*col2sum)/finalsum; let r4c2e=(row4sum*col2sum)/finalsum; let r5c2e=(row5sum*col2sum)/finalsum;
	let r1c3e=(row1sum*col3sum)/finalsum; let r2c3e=(row2sum*col3sum)/finalsum; let r3c3e=(row3sum*col3sum)/finalsum; let r4c3e=(row4sum*col3sum)/finalsum; let r5c3e=(row5sum*col3sum)/finalsum;
	let r1c4e=(row1sum*col4sum)/finalsum; let r2c4e=(row2sum*col4sum)/finalsum; let r3c4e=(row3sum*col4sum)/finalsum; let r4c4e=(row4sum*col4sum)/finalsum; let r5c4e=(row5sum*col4sum)/finalsum;
	let r1c5e=(row1sum*col5sum)/finalsum; let r2c5e=(row2sum*col5sum)/finalsum; let r3c5e=(row3sum*col5sum)/finalsum; let r4c5e=(row4sum*col5sum)/finalsum; let r5c5e=(row5sum*col5sum)/finalsum;
	let actual = [r1c1,r1c2,r1c3,r1c4,r1c5,r2c1,r2c2,r2c3,r2c4,r2c5,r3c1,r3c2,r3c3,r3c4,r3c5,r4c1,r4c2,r4c3,r4c4,r4c5,r5c1,r5c2,r5c3,r5c4,r5c5];
	var expected= [r1c1e,r1c2e,r1c3e,r1c4e,r1c5e,r2c1e,r2c2e,r2c3e,r2c4e,r2c5e,r3c1e,r3c2e,r3c3e,r3c4e,r3c5e,r4c1e,r4c2e,r4c3e,r4c4e,r4c5e,r5c1e,r5c2e,r5c3e,r5c4e,r5c5e];
	finalsum=0
	for (var i=0; i<actual.length;i++){
		if (actual[i]!=0){
		finalsum+=((actual[i]-expected[i])**2)/expected[i];
	}
		if (expected[i]==0){expected[i]=""}else{expected[i]=expected[i].toFixed(2)}
	};
	var countr=0;
	var row=[r1c1,r2c1,r3c1,r4c1,r5c1];
	for (var i=0;i<row.length;i++ ){
		if (row[i]!=0){
			countr+=1;
		}
	}
	var countc=0;
	var col=[r1c2,r1c2,r1c3,r1c4,r1c4];
	for (var i=0;i<col.length;i++ ){
		if (col[i]!=0){
			countc+=1;
		}
	}
	var dfchisq = (countr-1)*(countc-1);
	let output="Chi-Square (x<sup>2</sup>) is " +finalsum.toFixed(4) +"</br>Degree of Freedom (df) is "+dfchisq+
	"</br></br><table><caption>Expected</caption><tr><th></th><th>Col1</th><th>Col2</th><th>Col3</th><th>Col4</th><th>Col5</th></tr>"+
	'<tr><th>Row1</th><td>'+expected[0]+'</td><td>'+expected[1]+'</td><td>'+expected[2]+'</td><td>'+expected[3]+'</td><td>'+expected[4]+'</td></tr>'+
	'<tr><th>Row2</th><td>'+expected[5]+'</td><td>'+expected[6]+'</td><td>'+expected[7]+'</td><td>'+expected[8]+'</td><td>'+expected[9]+'</td></tr>'+
	'<tr><th>Row3</th><td>'+expected[10]+'</td><td>'+expected[11]+'</td><td>'+expected[12]+'</td><td>'+expected[13]+'</td><td>'+expected[14]+'</td></tr>'+
	'<tr><th>Row4</th><td>'+expected[15]+'</td><td>'+expected[16]+'</td><td>'+expected[17]+'</td><td>'+expected[18]+'</td><td>'+expected[19]+'</td></tr>'+
	'<tr><th>Row5</th><td>'+expected[20]+'</td><td>'+expected[21]+'</td><td>'+expected[22]+'</td><td>'+expected[23]+'</td><td>'+expected[24]+'</td></tr>'+
	'</table>';
	document.getElementById('answer').innerHTML = output;
}

function reset(){
	document.getElementById('mean').value="";
	document.getElementById('curve_chart').innerHTML="";
	document.getElementById('answer').innerHTML="";
	document.getElementById('answer1').innerHTML="";
	document.getElementById('answer2').innerHTML="";
	document.getElementById('answer3').innerHTML="";
	document.getElementById('answer4').innerHTML="";
	document.getElementById('xval').value="";
	document.getElementById('stdev').value="";
	document.getElementById('observation').value="";
	document.getElementById('zscore1').value="";
	document.getElementById('zscore2').value="";
	document.getElementById('zscore3').value="";
	document.getElementById('Prob').value="";

}

function binom(){
	var one = parseFloat(document.getElementsByClassName('binom')[0].value);
	var two = parseFloat(document.getElementsByClassName('binom')[1].value);
	var three = parseFloat(document.getElementsByClassName('binom')[2].value);
	function binomcal(x){
		var a= 1;
		for (var i=x; i>0; i--){
			a *= i

		}
		return a;
	}
	var four = one - two;
	var onex = binomcal(one);
	var twox = binomcal(two);
	var fourx = binomcal(four);
	var binomP = (onex/(twox*fourx))*(three**two)*((1-three)**four);
	var mean = one * three;
	var varian = one *three*(1-three);
	var stdev = Math.sqrt(varian);
	if (document.getElementsByClassName('binom')[0].value == "" || document.getElementsByClassName('binom')[1].value == ""){
		var output="<b style='color:red'>Please provide the N,x and Probabilty above to Get the Values.</BR>";
	}else{
		var output = "Binomial probability: P(X = x) "+ binomP.toFixed(7)+"</br>Mean: &mu; = N&pi; = " + mean +
						"</br>Varaince: &sigma;<sup>2</sup> = N&pi;(1-	&pi;) = "+varian+
						"</br>Standard Deviation: &sigma; = "+stdev.toFixed(4);
	}
	document.getElementById('answer').innerHTML= output;
}