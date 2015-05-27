function myFun(){
	
	var n1=document.getElementById("num1").value;
	var n2=document.getElementById("num2").value;
	var n3=document.getElementById("num3").value;
	var n4=document.getElementById("num4").value;
	var n5=document.getElementById("num5").value;
	
<<<<<<< HEAD
	if(document.getElementById("num1").value=='DAMNS')
=======
	if(document.getElementById("num1").value=='')
>>>>>>> Child
	{
		n1=0;
	}
	if(document.getElementById("num2").value=='')
	{
		n2=0;
	}
	if(document.getElementById("num3").value=='')
	{
		n3=0;
	}
	if(document.getElementById("num4").value=='')
	{
		n4=0;
	}
	if(document.getElementById("num5").value=='')
	{
		n5=0;
	}
	var res=greatest(n1,n2,n3,n4,n5);
	alert(res);
	var popOut=window.open();
	popOut.document.write("<p>Number..."+res+"</p>");
}

function greatest(){
	
	result=0;
	for(var i=0; i<arguments.length; i++){ 
	
			if(arguments[i]>result){
				result=arguments[i];
			}

	}
	
	return result;
}

function clearIn(){

	document.getElementById("num1").value="";
	document.getElementById("num2").value="";
	document.getElementById("num3").value="";
	document.getElementById("num4").value="";
	document.getElementById("num5").value="";

}