console.log('js');

$(document).ready(readyNow);

function readyNow() {
    console.log('JQ');
    $('#loginButton').on('click', handleLogin);
    $('#submitButton').on('click', handleSubmit);
    $('#logoutButton').on('click', handleLogout);
    updateMessages();
}//end readys

function handleLogin() {
    console.log('login working');
}//end handleLogin
function handleSubmit() {
    console.log('submit working');
    let objectToSend = {
        text: $('#messagesIn').val(),
        from: $('#usernameIn').val()
    }
    console.log('object to send: ', objectToSend);
    $.ajax({
        method: 'POST',
        url: '/messages',
        data: objectToSend
    }).then(function (response) {
        console.log('back from POST with:', response);
        updateMessages();
    }).catch(function (error) {
        alert('Error updating messages')
        console.log('Error:', error);
    })//end handleSubmit
}

function handleLogout() {
    console.log('logout working');
}//end handleLogout

function updateMessages() {
    $.ajax({
        method: 'GET',
        url: '/messages'
    }).then(function (response) {
        console.log('back from GET with: ', response);
        let el = $('#messagesOut');
        el.empty();
        for (let message of response) {
            el.append(`<li>${message.text}:<i>${message.from}</i></li>`)
        }//end for
    }).catch(function (error) {
        alert('Error updating messages')
        console.log('Error:', error);
    })//end ajax
}//end updateMessages    