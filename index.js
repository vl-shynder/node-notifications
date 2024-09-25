const notifier = require('node-notifier');

// Object
notifier.notify({
    title: 'My notification',
    message: 'Hello, there!',
    wait: true,
}, (err, response, metadata) => {
    console.log('err', err)
    console.log('response', response);
    console.log('metadata', metadata);
});

notifier.on('click', function (notifierObject, options, event) {
    // Triggers if `wait: true` and user clicks notification
    console.log('click event', notifierObject, options, event);
});

notifier.on('timeout', function (notifierObject, options) {
    // Triggers if `wait: true` and notification closes
    console.log('timeout event', notifierObject, options);
});