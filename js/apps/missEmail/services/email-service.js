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
            createEmail('Gal Zohar', 'Lambada Show', 'Hey Limon, I am a Senior Developer and I love Lambada!'),
            createEmail('AliExpress', 'Seller has extended Purchase Protection for you', 'Seller has extended Purchase Protection for you. Dear IL shopper, This is an e-mail notification to inform you that the seller has extended Purchase Protection for you for Order 105116622626930 . Currently the Purchase Protection of Order 105116622626930 will end on 2019.12.12 21:00. 1. If you are satisfied with the items you have received, then you can click \'Confirm Order Received\'. 2. If you have not received your items, or you are not satisfied with your items, you can click ’Open Dispute’ before Purchase Protection deadline or Purchase will be automatically finalized. 3. If you would like to extend your Purchase Protection you can contact the seller directly or click \'Request to extend Purchase Protection\' to ask for the seller\'s approval. Please note if there is no action taken within Purchase Protection, your order will be automatically finalized with payment released. Sincerely, AliExpress.com 2019.11.03 01:21 This is an automated system email. Please do not reply to this email.'),
            createEmail('Zuzana-Avocode', 'Your free trial is over', 'Hello limor, Thank you for giving us a shot. I noticed your trial is over and you haven’t purchased a subscription yet. If you wish to continue using Avocode, you’ll need to subscribe now. All your deisgn data will be deleted after 14 days. If you feel like you didn’t have enough time to find the value in Avocode, please let me know. Do you need help choosing the right plan? We have multiple solutions for companies and individuals alike. If you’re interested in our Enterprise solution, just tell me and I’ll connect you with my colleague Sam who will make you a custom offer. Avocode powers some of the top teams at companies like Google, Panasonic, an PWC. SUBSCRIBE NOW Cheers, Zuzana Customer Success Manager at Avocode'),
            createEmail('Rosewe‏', 'Congrats! You win 30% off Coupon from Rosewe!', '© 2019 The Rosewe Group Ltd. ® A registered trademark of The Rosewe Group Ltd. Please note that this email inbox is not monitored. If you have any questions, please contact us at Support Center This Email was sent by Rosewe.com,if you don\'t wish to get this kind of email,please click here'),
            createEmail('Codewars‏', 'Weekly Coding Challenges', 'All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal\'s name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake. Write a function feast that takes the animal\'s name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.'),
            createEmail('Eventbrite‏', 'Don\'t miss this new event by she codes on Nov 17!‏', 'she codes; just announced a new event and we wanted to make sure you were the first to know! she codes; Big Data, AWS, Server-Less Sunday, November 17, 2019 at 6:30 PM 10 Ha-Gavish Street - Netanya - Israel View Event Don’t forget to follow your favorite organizers on Eventbrite to hear about their upcoming events before anyone else. Enjoy!'),
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
    gEmails.unshift(email);
    updateStorage()
}

function deleteEmail(emailId) {
    var emailIdx = gEmails.findIndex(email => email.id === emailId)
    gEmails.splice(emailIdx, 1)
    updateStorage()
}

function getEmailById(emailId) {
    var emailToExpand = gEmails.find(email => email.id === emailId)
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