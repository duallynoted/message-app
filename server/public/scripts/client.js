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
}//end handleSubmit
function handleLogout() {
    console.log('logout working');
}//end handleLogout
function updateMessages() {
    $.ajax({
        method: 'GET',
        url: '/messages'
    }).then(function (response) {
        console.log('back from GET with: ', response);
    }).catch(function (error) {
        alert('Error updating messages')
        console.log('Error:', error);
    })
}//end updateMessages