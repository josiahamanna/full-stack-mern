// contact information for dct

const contact = {
    Name : 'Josiah',
    Email_ID : 'jnamanna@gmail.com',
    Subject : 'Request for an admission',
    Phone : 9876543210,
    Message : 'I am very much interested in learning JavaScript. I have come to know that your accademy provides with quality education of this perticular programming language. Please consider this as a request for enrolling myself for this course', 
    send: function(){
        return `You have recieved a mail.\nFrom: ${this.Name}\nSubject: ${this.Subject}\nMessage: ${this.Message}`
    }
}

console.log(contact.send())
