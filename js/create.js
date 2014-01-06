var posts = new Firebase("https://blubber.firebaseio.com/");

(function () {
	$('button').on('click', function () {
		// I tried a couple different ways, however, the only way I actually managed to get
		// it working was to give it an ID at the .html and use getElementById, I tried with
		// classes and jQuery and it simply wouldn't work, I don't know why, but it wouldn't.
		var title = document.getElementById('title');
		var content = document.getElementById('content');
		
		var date = new Date();
		var month = date.getMonth()+1;
		var day = date.getDate();
		var minutes = date.getMinutes();
		var hours = date.getHours();
		
		// Here i just use a bunch of ternary operations to determine if I should put a '0' before single 
		// digit numbers. I am aware that usually using ternary operations is not as readable as doing all 
		// the 'ifs', however, I'm used to it from all the C and C++ programming I've done I hope it's okay.
		var current = ((''+hours).length<2 ? '0' : '') + hours + ':' +
			  ((''+minutes).length<2 ? '0' : '') + minutes + ' ' +
			  ((''+day).length<2 ? '0' : '') + day + '/' +
			  ((''+month).length<2 ? '0' : '') + month + '/' +
			  date.getFullYear();
		// Here I'm simply pushing all the data into a list in FireBase.
		posts.push({title: title.value, content: content.value, date: current});
	});
})();