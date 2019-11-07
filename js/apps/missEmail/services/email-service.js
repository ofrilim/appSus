import utilsService from "../../../services/utils-service.js";


export default {
    getEmails,
}


const STORAGE_KEY = 'missEmailApp'


var gEmails;
//  = createEmails();

function createEmail(from, subject, body) {
    return {
        from,
        subject,
        body,
        isRead: false, 
        sentAt : getCurrTime()
    } 
}

function createEmails() {
    return [createEmail('Jessica', 'Sprint', 'Great aplication to develop!'),
                  createEmail('Laura', 'Dinner on Friday', 'long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has'),
                  createEmail('Braz', 'Dancing in Brazil', 'long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has'),
                  createEmail('Romina', 'Class', 'long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has')];
}

function getEmails() {
    var emails = utilsService.loadFromStorage(STORAGE_KEY)
    if(!emails || emails.length === 0) {
        emails = createEmails();
        utilsService.saveToStorage(STORAGE_KEY, emails)
    }
    gEmails = emails
    window.emails = gEmails;
    return Promise.resolve(gEmails)
}

function getCurrTime() {
    // var time = new Date().toJSON().slice(14,19);
    // if (time[0] + time[1] < 12) time = time + ' AM'
    // else time = time + ' PM'
    // return time;

    var date = new Date()
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var formattedTime = hours + ':' + minutes.substr(-2);
    if (formattedTime[0] + formattedTime[1] < 12) formattedTime = formattedTime += ' AM'
    else formattedTime = formattedTime += ' PM'
    return formattedTime;
}