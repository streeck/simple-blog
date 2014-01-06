var postsRef = new Firebase("https://blubber.firebaseio.com/");

// I think this is the easiest and simplest way to do the task, although not so readable for most people.
// I tried other ways, however they were getting very complex and full of bugs, since I already had this
// solution, I decided to stick with it.
postsRef.on('child_added', function(snapshot) {
	var post = snapshot.val();
	$(".post-list").append("<li><h4>" + post.title + "</h4><p class='the-post'>" + post.content + "</p><p class='current-date'>" + post.date + "</p></li>");
});