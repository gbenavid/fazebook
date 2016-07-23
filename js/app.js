console.log("Hello, World");
window.onload = function () {
	var newFriends = ["Reema", "Louie","Nikita","Aneesa", "Audrey", "Kira", "Sam"];	
	for (var i = 0; i < newFriends.length; i++){
		console.log(newFriends[i]);
	var addNewFriend = document.createElement("li");
	addNewFriend.className = "newFriends";
	addNewFriend.innerHTML = newFriends[i];
	list.appendChild(addNewFriend);
}
};
