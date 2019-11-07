// import utilsService from ''


export default {
    getEmails,
    createEmail
}

var gEmails;

createEmails();

function getEmails() {
    return gEmails;
}

function createEmails() {
    var emails = [createEmail('Sprint', 'Great aplication to develop!'),
                  createEmail('Dinner', 'long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has'),
                  createEmail('Work', 'long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has'),
                  createEmail('Hot', 'long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has')]
    gEmails = emails;
}

function createEmail(subject, body) {
    return {
        subject,
        body,
        isRead: false, 
        sentAt : getCurrTime()
    } 
}

function getCurrTime() {
    var time = new Date().toJSON().slice(14,19);
    if (time[0] + time[1] < 12) time = time + ' AM'
    else time = time + ' PM'
    return time;
}