   
addContact(entityId, refreshContactList);


function addContact(id, refreshCallback) {
    refreshCallback();
    // You can also pass arguments if you need to
    // refreshCallback(id);
}

function refreshContactList() {
    alert('Hello World');
}

addContact(1, refreshContactList);