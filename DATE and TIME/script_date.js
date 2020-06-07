
			function date (event) {
				var name = document.getElementById("A").value;
				var message = "<h2>Hello " + name + "!</h2>"; 
				document.getElementById('name').innerHTML = 
					message;
					document.getElementById('demo').innerHTML = 
					"<b>The date and time is </b>" + "" + Date();
			}
			document.querySelector("button")
			.addEventListener("click", date);
	
	