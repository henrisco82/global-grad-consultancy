function sendMail(event){
    event.preventDefault();
    var params = {
        name: document.getElementById('cfname').value + ' ' + document.getElementById('clname').value,
        phone: document.getElementById('cphone').value,
        email: document.getElementById('cemail').value,
        message: document.getElementById('cmessage').value
    }
    const serviceID = 'service_om67vf9';
    const templateID = 'template_35gi95s';

    emailjs.send(serviceID, templateID, params)
    .then(res => {
        document.getElementById('cfname').value = '';
        document.getElementById('clname').value = '';
        document.getElementById('cphone').value = '';
        document.getElementById('cemail').value = '';
        document.getElementById('cmessage').value = '';
        bootbox.alert('Thank you for your message!');
    }).catch(err => {
        bootbox.alert(JSON.stringify(err));
    });
}
