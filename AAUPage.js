//AAU JavaScript Page//
$(document).ready(function() {
    $("#date_att").datepicker();
    
     $("#date_leave").datepicker();

	// regex pattern for email
	var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
	
	// regex pattern for phone
	var phonePattern = /^[2-9]\d{2}-\d{3}-\d{4}/;
	
	//move focus to the first text box
	
	$("#team_name").focus();
	//When the submit button is clicked
	//the following code is executed
	$("#reservation_form").submit(
		function (event)
	{
	//Create a boolean value
	var isValid = true;
	// validate the team name
	var teamName = $("#team_name").val().trim();
	//if the field is empty
	if (teamName == "")
	{
		//Then display the message
		$("#team_name").next().text("This field is required.");
		//set flag to false
		isValid = false;
    }
	// validate the coach name
	var name = $("#cname").val().trim();
	if (name == "") {
		$("#cname").next().text("This field is required.");
		isValid = false;
	}  else {
		$("#cname").next().text("");
	}
	
    	// validate the phone number
	var phone1 = $("#phone1").val().trim();
	//If the field is empty
	if (phone1 == "")
	{
		$("#phone1").next().text("This field is required.");
		isValid = false;
	} else if (isNaN($("#phone1").val())) {
		$("#phone1").next().text("This field must be numeric.");
		isValid = false;
	}
	  
	else
	{   
		$("#phone1").next().text("");
	}
		//get the value of phone
		$("#phone1").val(phone1);
		//If any of fields are invalid entries
		//then set the form to default
		if (isValid == false)
	{
	event.preventDefault();
	}
    
	// validate the email entry
	//with the given regular expression
	var email = $("#email").val();
	//If the fiels is empty
	//then prompt the message
	if (email == "") {
		$("#email").next().text("This field is required.");
		isValid = false;
	}
	else if (!emailPattern.test(email))
	{
		$("#email").next().text("Must be a valid email address.");
		isValid = false;
	}
	else {
		$("#email").next().text("");
	}
		$("#email").val(email);
	// validate the phone number
	var phone = $("#phone").val().trim();
	//If the field is empty
	if (phone == "")
	{
		$("#phone").next().text("This field is required.");
		isValid = false;
	} else if (!phonePattern.test(phone)){
			$("#phone").next().text("Please enter a valid phone number.");
			isValid = false;
		} 
	else
	{   
		$("#phone").next().text("");
	}
		//get the value of phone
		$("#phone").val(phone);
		//If any of fields are invalid entries
		//then set the form to default
		if (isValid == false)
	{
	event.preventDefault();
	}
		
    //Create a boolean value
	isValid = true;
	// validate the team name
	var name1 = $("#name").val().trim();
	//if the field is empty
	if (name1 == "")
	{
		//Then display the message
		$("#name").next().text("This field is required.");
		//set flag to false
		isValid = false;
    }
	// validate the coach name
	var name2 = $("#name1").val().trim();
	if (name2 == "") {
		$("#name1").next().text("This field is required.");
		isValid = false;
	}  else {
		$("#name1").next().text("");
	}
	
    
	} // end function
	); // end submit function

}); // end ready