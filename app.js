window.addEventListener('load', function() {
    console.log('the page has loaded');
    setInterval(getAFriend, 2000);
});

let friendsArr = [];
let actualFriends = [];

//Get a friend and insert them into the dom using random user API
function getAFriend() {
    let request = new XMLHttpRequest();
    console.log('got a friend');
    request.addEventListener('load', function() {
        //parse api data into json object
        let friend = JSON.parse(this.responseText);
        //friend is a result of the json data
        friend = friend.results[0];
        console.log('friend');
        if (friendsArr.length < 5) {
            console.log('adding new friend');


            let buttonName = 'Add Me'
            var friendOptions = document.createElement('div');
            friendOptions.innerHTML =
                `<div class="friends">
        <img src='${friend.picture.medium}'/>
        <h3>${friend.name.first} ${friend.name.last}</h3>
        <button>${buttonName}</button>
        </div>`

            var feed = document.getElementById('potentialFriends')
                //append friendOptionsto the feed
            feed.appendChild(friendOptions)
            friendsArr.push(friend);


            let button = friendOptions.querySelector('button');
            button.addEventListener('click', function() {
                console.log(`${friend.name.frist} was clicked`);
                //add the person clicked
                addFriend(friend);
                //remove person
                friendOptions.remove();
                friendsArr = friendsArr.filter(function(element) {
                    if (friend.name.first === = element.name.first) {
                        return false;
                    } else {
                        return true;
                    }
                })
                actualFriends.push(friend);
            });

        } else {
            console.log('you are skipping this person');
        }
    });


    //request + run API action
    request.open('GET', 'https://randomuser.me/api/')
    request.send();
}

//Creating Friend List with template literals
function addFriend(friend) {
    let theList = document.getElementById('personToAdd');
    let newFriend = document.createElement('div');
    newFriend.innerHTML =
        `<div id='friendList'>
      <img src='${friend.picture.medium}' />
      <div class='info'>
        <h2>${friend.name.first}</h2>
        <h1>Friends since June 25, 2016</h1>
      </div>
    </div>`;
    theList.appendChild(newFriend);
};
