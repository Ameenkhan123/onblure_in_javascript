//onblur function
function requiredfname(input) 
{
	if (input.value.length < 1) 
	{
			//red border
			input.style.borderColor = "#e74c3c";
			document.getElementById('errorfname').innerHTML="Must be blank";
		}
		else 
		{
			//green border
			input.style.borderColor = "#2ecc71";
			document.getElementById("errorfname").innerHTML=("");
		}
	}

	function requiredlname(input) 
	{
		if (input.value.length < 1) 
		{
			//red border
			input.style.borderColor = "#e74c3c";
			document.getElementById('errorlname').innerHTML="Must be blank";
			
		}
		else 
		{
			//green border
			input.style.borderColor = "#2ecc71";
			document.getElementById('errorlname').innerHTML="";
		}
	}


	function requiredemail(input) 
	{
		if (input.value.length < 1) 
		{
			//red border
			input.style.borderColor = "#e74c3c";
			document.getElementById('erroremail').innerHTML="Must be blank";
			
		}
		else if (input.type == "email") 
		{
			console.log("this is an email type");
			
			if (input.value.indexOf("@") != -1 && input.value.indexOf(".") != -1) 
			{
					//green border
					input.style.borderColor = "#2ecc71";
					document.getElementById('erroremail').innerHTML="";
				} else 
				{
					//red border
					input.style.borderColor = "#e74c3c";
				}

			} else 
			{
			//green border
			input.style.borderColor = "#2ecc71";
			document.getElementById('erroremail').innerHTML="";
		}
	}

	 // Valdiation of form
	 function validateForm() 
	 {
	 	var x = document.forms["myForm"]["fname"].value;
	 	if (x == "") 
	 	{
	 		document.getElementById('errorfname').innerHTML="Must be blank";
	 		document.getElementById('errorlname').innerHTML="Must be blank";
	 		document.getElementById('erroremail').innerHTML="Must be blank";
	 		return false;
	 	}
	 }



// real demo example 

// function requiredField(input) {
//     if (input.value.length < 1) {
//       //red border
//       input.style.borderColor = "#e74c3c";

//   }
//    else if (input.type == "email") {
//       console.log("this is an email type");

//       if (input.value.indexOf("@") != -1 && input.value.indexOf(".") != -1) {
//           //green border
//           input.style.borderColor = "#2ecc71";
//       } else {
//           //red border
//           input.style.borderColor = "#e74c3c";
//       }

//   } else {
//       //green border
//       input.style.borderColor = "#2ecc71";
//   }
// }
