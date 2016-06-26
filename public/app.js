'use strict';

window.addEventListener('load', function () {
  console.log('the page has loaded');
  setInterval(getAFriend, 2000);
});

var friendsArr = [];

//Get a friend and insert them into the dom using random user API
function getAFriend() {
  var request = new XMLHttpRequest();
  console.log('got a friend');
  request.addEventListener('load', function () {
    //parse api data into json object
    var friend = JSON.parse(this.responseText);
    //friend is a result of the json data
    friend = friend.results[0];
    console.log('friend');
    if (friendsArr.length < 5) {
      console.log('adding new friend');
    }

    var buttonName = 'Add Me';
    var friendOptions = document.createElement('div');
    friendOptions.innerHTML = '<div class="friends">\n        <img src=\'' + friend.picture.medium + '\'/>\n        <h3>' + friend.name.first + ' ' + friend.name.last + '</h3>\n        <button>' + buttonName + '</button>\n        </div>';

    var feed = document.getElementById('potentialFriends');
    //append friendOptionsto the feed
    feed.appendChild(friendOptions);
    friendsArr.push(friend);

    var button = friendOptions.querySelector('button');
    button.addEventListener('click', function () {
      console.log(friend.name.frist + ' was clicked');
      //add the person clicked
      addFriend(friend);
      //remove person
      friendOptions.remove();

      if (friendsArr.length < 5) {
        console.log('adding new friend');
      } else {
        console.log('you are skipping this person');
      }
    });
  });

  //request + run API action
  request.open('GET', 'https://randomuser.me/api/');
  request.send();
}

//Creating Friend List with template literals
function addFriend(friend) {
  var theList = document.getElementById('personToAdd');
  var newFriend = document.createElement('div');
  newFriend.innerHTML = '<div id=\'friendList\'>\n      <img src=\'' + friend.picture.medium + '\' />\n      <div class=\'info\'>\n        <h2>' + friend.name.first + '</h2>\n        <h1>Friends since June 25, 2016</h1>\n      </div>\n    </div>';
  theList.appendChild(newFriend);
};