function Upload1() {
 //Reference the FileUpload element.
        var fileUpload2 = document.getElementById("fileUpload2");
 
        //Validate whether File is valid Excel file.
        var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.xls|.xlsx)$/;
        if (regex.test(fileUpload2.value.toLowerCase())) {
            if (typeof (FileReader) != "undefined") {
                var reader = new FileReader();
 
                //For Browsers other than IE.
                if (reader.readAsBinaryString) {
                    reader.onload = function (e) {
                        Processxcel(e.target.result);
                    };
                    reader.readAsBinaryString(fileUpload2.files[0]);
                } else {
                    //For IE Browser.
                    reader.onload = function (e) {
                        var data = "";
                        var bytes = new Uint8Array(e.target.result);
                        for (var i = 0; i < bytes.byteLength; i++) {
                            data += String.fromCharCode(bytes[i]);
                        }
                        Processxcel(data);
                    };
                    reader.readAsArrayBuffer(fileUpload2.files[0]);
                }
            } else {
                alert("This browser does not support HTML5.");
            }
        } else {
            alert("Please upload a valid Excel file.");
        }
    };
  function Processxcel(data) {
        //Read the Excel File data.
        var workbook = XLSX.read(data, {
            type: 'binary'
        });
 
        //Fetch the name of First Sheet.
        var firstSheet = workbook.SheetNames[0];
 
        //Read all rows from First Sheet into an JSON array.
        var excelRows = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[firstSheet]);
 
       
        var yais=[];
        var xais = [];
        //Add the data rows from Excel file.
        for (var i = 0; i < excelRows.length; i++) {
            yais[i] =  excelRows[i].Range;
            xais[i] = excelRows[i].Frequency;
        }
     
    let one = yais;
    let two = xais;
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
    else{
        output="Mean: "+mean+
        "</br>Sample Standard Deviation: "+sstdev+
        "</br>Population Standard Deviation: "+pstdev+
        "</br>Sample Variance: "+svar+
        "</br>Population Variance: "+pvar+grofreq;
}
    document.getElementById('answer2').innerHTML=output;
};


function Upload2() {
        //Reference the FileUpload element.
        var fileUpload = document.getElementById("fileUpload");
 
        //Validate whether File is valid Excel file.
        var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.xls|.xlsx)$/;
        if (regex.test(fileUpload.value.toLowerCase())) {
            if (typeof (FileReader) != "undefined") {
                var reader = new FileReader();
 
                //For Browsers other than IE.
                if (reader.readAsBinaryString) {
                    reader.onload = function (e) {
                        ProcessExcel(e.target.result);
                    };
                    reader.readAsBinaryString(fileUpload.files[0]);
                } else {
                    //For IE Browser.
                    reader.onload = function (e) {
                        var data = "";
                        var bytes = new Uint8Array(e.target.result);
                        for (var i = 0; i < bytes.byteLength; i++) {
                            data += String.fromCharCode(bytes[i]);
                        }
                        ProcessExcel(data);
                    };
                    reader.readAsArrayBuffer(fileUpload.files[0]);
                }
            } else {
                alert("This browser does not support HTML5.");
            }
        } else {
            alert("Please upload a valid Excel file.");
        }
    };
  function ProcessExcel(data) {
        //Read the Excel File data.
        var workbook = XLSX.read(data, {
            type: 'binary'
        });
 
        //Fetch the name of First Sheet.
        var firstSheet = workbook.SheetNames[0];
 
        //Read all rows from First Sheet into an JSON array.
        var excelRows = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[firstSheet]);
 
        
        
        var yaxis=[];
        //Add the data rows from Excel file.
        for (var i = 0; i < excelRows.length; i++) {
            yaxis[i] =  excelRows[i].COT;
 
            
        }
        
    let two = yaxis;
    ReturnVal()
    function getMean(){
    var three=0;
    for (var i = 0; i < two.length; i++) {
        three=parseFloat(two[i])+three;
    }
    var four = three/two.length;
    return "The mean is the sum of all of the data values <b style='color:blue'>["+two.slice(0,4)+"...]</b> divided by the size of the data set <b style='color:blue'>["+two.length+"]</b> which would equal: <b style='color:blue'>"+four+"</b></br>"
}

function getPOPStdev(){
    var three=0;
    for (var i = 0; i < two.length; i++) {
        three=parseFloat(two[i])+three;
    }
    var four = three/two.length;
    var five=0;
    for (var i = 0; i < two.length; i++) {
        five=((parseFloat(two[i])-four)**2)+five;
    }
    var six = five/two.length;
    var seven = Math.sqrt(six);
    return "<b style='color:blue'>"+seven.toFixed(4)+"</b>";
}

function getSAMPStdev(){
    var three=0;
    for (var i = 0; i < two.length; i++) {
        three=parseFloat(two[i])+three;
    }
    var four = three/two.length;
    var five=0;
    for (var i = 0; i < two.length; i++) {
        five=((parseFloat(two[i])-four)**2)+five;
    }
    var six = five/(two.length-1);
    var seven = Math.sqrt(six);
    return "<b style='color:blue'>"+seven.toFixed(4)+"</b>";
}


function getPOPVar(){
    var three=0;
    for (var i = 0; i < two.length; i++) {
        three=parseFloat(two[i])+three;
    }
    var four = three/two.length;
    var five=0;
    for (var i = 0; i < two.length; i++) {
        five=((parseFloat(two[i])-four)**2)+five;
    }
    var six = five/two.length;
    return "<b style='color:blue'>"+six.toFixed(4)+"</b>";
}

function getSAMPVar(){
    var three=0;
    for (var i = 0; i < two.length; i++) {
        three=parseFloat(two[i])+three;
    }
    var four = three/two.length;
    var five=0;
    for (var i = 0; i < two.length; i++) {
        five=((parseFloat(two[i])-four)**2)+five;
    }
    var six = five/(two.length-1);
    return "<b style='color:blue'>"+six.toFixed(4)+"</b>";
}

function getRange(){
    var arr=[];
    for (var i = 0; i < two.length; i++) {
        var x=parseFloat(two[i]);
        arr.push(x);

    }
    arr.sort(function (a, b) {  return a - b;  });
    var four= arr[0];
    var five= arr[arr.length-1];
    var six=(five-four);
    var eight=arr.length;
    if (arr.length%2!=0) {
        var nine=arr[((arr.length-1)/2)];
    }
    else if(arr.length%2==0){
        var fou=(arr.length/2);
        var nine=((arr[fou])+(arr[(fou-1)]))/2;
    }
    var q1 = arr[parseInt(0.25*arr.length)];
    var q3 = arr[parseInt(0.75*arr.length)];
    var seven=(q3-q1);
    
    return "Median: This is the value separating the upper half of the ordered data from the lower half. In this question the median is: <b style='color:blue'>"+nine+"</b></br></br>" +"Count: <b style='color:blue'>"+eight+"</b></Br></br>5 Number Summary</br>Min: <b style='color:blue'>"+four+"</b></Br>Q1: <b style='color:blue'>"+q1+"</b></br>Q2: <b style='color:blue'>"+nine+"</b></br>Q3: <b style='color:blue'>"+q3+"</b></br>Max: <b style='color:blue'>"+five+"</b></br>Range: <b style='color:blue'>"+six+"</b></Br>IQR: <b style='color:blue'>"+seven+"</b></br>Upper Fence: <b style='color:blue'>"+(q3+1.5*seven)+"</b></br>Lower Fence <b style='color:blue'>"+(q1-1.5*seven)+"</b></br>"
}
function ReturnVal(){
    let three = false;
    for (var i =0; i < two.length; i++){
        if(two[i]==""){
            three= true;
        }
        if(two[i]>=":"){three=true}
    }
    
    var output="Mean: "+getMean() +"</br>"+getRange()+"</br>Standard Deviation </br>Standard deviation is a measure of dispersion of data values about the mean. The formula for standard deviation is the square root of the sum of squared differences from the mean divided by the size of the data set.</br>Sample Standard Deviation: "+getSAMPStdev()+"</br>"+"Population Standard Deviation: "+getPOPStdev()+"</br>"+"Sample Variance: "+getSAMPVar()+"</br>"+"Population Variance: "+getPOPVar()+"</br>";
    
    document.getElementById('answer3').innerHTML=output;
}
   
};