import utilsService from "../../../services/utils-service.js";


export default {
    getEmails,
    createEmail,
    addNewEmail,
    updateStorage,
    deleteEmail,
    getEmailById
}

const STORAGE_KEY = 'missEmailApp'
var gEmails;
var gNextId = Date.now();

function createEmail(from, subject, body) {
    return {
        id: gNextId++,
        from,
        subject,
        body,
        isRead: false, 
        isStar: false,
        sentAt : getCurrTime()
    } 
}

function createEmails() {
    return [createEmail('Jessica Landman', 'Sprint', 'Great aplication to develop!'),
            createEmail('LinkedIn', 'Limor, see what your network has been up to!', 'See your updates 1 Notification from your network 1 new update Check out what you missed from Anton Lubenko and 0 others © 2019 LinkedIn Ireland Unlimited Company. LinkedIn, the LinkedIn logo, and InMail are registered trademarks of LinkedIn Corporation in the United States and/or other countries. All rights reserved. You are receiving Activity You Missed emails. Unsubscribe This email was intended for limor ofri (--). Learn why we included this. If you need assistance or have questions, please contact LinkedIn Customer Service. LinkedIn is a registered business name of LinkedIn Ireland Unlimited Company. Registered in Ireland as a private unlimited company, Company Number 477441 Registered Office: Wilton Plaza, Wilton Place, Dublin 2, Ireland'),
            createEmail('Laura Espaniol', 'Dinner on Friday', 'Hey my Friend! It was great to see you! I wanted to invite you & Ishay for dinner in our place! Let me know if you will be available next Friday. Bessos!'),
            createEmail('Braz Dos Santos', 'Dancing in Brazil', 'Lorem ipsum long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has'),
            createEmail('Romina Hidalgo', 'Class', 'Mi nombre es Romina Hidalgo y soy Profesora de Zouk, bailarina y organizadora de eventos. Boenos Aires ZoukCongress 2015 del 9 al 12 de otubre bsasdancecongress@gmail.com Eventos: shows para fiestas de 15, casamientos, empresariales, promotoras, discos, etc Contacto: romina2106@gmail.com')]
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

function addNewEmail(email) {
    gEmails.push(email);
    updateStorage()
}

function deleteEmail(emailId) {
    var emailIdx = gEmails.findIndex(email => email.id === emailId)
    gEmails.splice(emailIdx, 1)
    updateStorage()
}

function getEmailById(emailId) {
    // console.log(emailId)
    var emailToExpand = gEmails.find(email => email.id === emailId)
    // console.log('inside the service, the email you wish is:', emailToExpand)
    return Promise.resolve(emailToExpand);
}

function updateStorage() {
    utilsService.saveToStorage(STORAGE_KEY, gEmails)
}
function getCurrTime() {
    var date = new Date()
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var AMorPM = hours < 12 ? "AM" : "PM"; 
    return hours + ':' + minutes.substr(-2) + AMorPM;
}