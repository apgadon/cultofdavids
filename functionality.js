

function loadFunction(){
	let responses = [
		"thank you so much for the absolute banger of a course, for making learning gui fun! i learned a lot of things that i'll be keeping with me. i hope you enjoy your time in the mountains and safe skiing!!",
		"april",
		"Hi Dr. Steichen! I really learned a lot from you this entire semester and I feel like Programming GUIs is one of the few CS classes that I really felt like I learned something. Thank you so much for being such a great professor and having such an interesting and fun class! :)", 
		"Marlon Aquino",
		"Hi Professor! Thank you so much for being such a patient and caring educator. You may not realize it, but it really helps a lot of us out, especially people like me with a lot on their plates. I realize we have not been working together for very long, but even so, you've done a lot to help me, and I hope to be able to do the same!",
		"Shannon Trinh",
		"Hi Professor! Thank you so much for being such an awesome teacher this past semester! I learned a lot from your lectures and appreciate the enthusiasm and energy you have put into each and every class! I hope that you have a fantastic summer! If our paths do not cross again after graduation, I wish you the very best in life because you deserve it (hopefully they cross again lol)",
		"Ronald Tran",
		"Hi Dr. Steichen!! Thank you for all your help and support these past two years :) it’s been super encouraging and I’m excited to see how sheCodes will be next year with your help & support!",
		"Patriz",
		"Hi Dr. Steichen, it's been a blast being in this class. Thank you for taking the time to explain everything so clearly and for really caring about your students! We appreciate you!",
		"Tera E.",
		"Thank you for being such a knowledgeable, pure, and kind soul. Never change Ben Steichen! (PS: shout out to the country Luxembourg) ",
		"Mora Labisi",
		"Hello Dr. Steichen, thank you so much for everything you taught me in GUI Design. I will treasure the many lessons I've learned as I see user interfaces with a new critical eye. I hope you and your family stay safe during these times. Thank you again!",
		"Diana Choi",
		"Thank you Dr. Steichen! You've contributed so much to this school and to my own personal academic goals. I don't know a single student that hasn't enjoyed being in your classes or doing research with you. Stay toasty up there in the mountains, and hope to see you soon :)",
		"Angela Gadon",
		"Thank you for a great semester, have a great summer!",
		""
	]

	for(i = 0; i < responses.length; i++){
		var nodeCard = document.createElement("A");
		var nodeLip = document.createElement("DIV");
		var nodeSeal = document.createElement("DIV");
		var nodeP = document.createElement("P");
		var nodeName = document.createElement("H4");

		nodeCard.classList.add("card");
		nodeLip.classList.add("lip");
		nodeSeal.classList.add("seal");
		nodeP.classList.add("small");

		nodeP.innerHTML = responses[i];
		i = i + 1;
		nodeName.innerHTML = responses[i];
		nodeCard.appendChild(nodeLip);
		nodeCard.appendChild(nodeSeal);
		nodeCard.appendChild(nodeP);
		nodeCard.appendChild(nodeName);
		document.getElementsByClassName("container")[0].appendChild(nodeCard);
		/*
		var textnode = document.createTextNode(chatText);
		node.appendChild(textnode);
		*/
		
		/*
		<a class="card">
	      <div class="lip"></div>
	      <div class="seal"></div>
	      <p class="small">
	        
	      </p>
	      <h4>
	        
	      </h4>
	    </a>
	    */
	}
};