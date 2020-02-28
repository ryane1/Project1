
const bioJSON =
{
    "bio": [
        "Ryan Edgar is a Digital Business Integration Associate within Accenture ",
        "Digital for Front-End Development North America.",
        " She recently transitioned from a career in marketing and advertising into the tech industry.",
        " Ryan joined Accenture’s Detroit Digital Delivery Center (DDDC) after completing the Front-End Development bootcamp at Grand Circus Detroit."
    ],
    "bio2": [
        "Ryan is focused on developing technical experiences through responsive applications.",
        "She is excited to bring forth the best practices in both web technologies and emerging trends in order to deliver creative innovations for clients within the digital space."
    ]
}


const bio = document.getElementById('bio');
bio.innerHTML = [
    bioJSON.bio[0] +
    bioJSON.bio[1] +
    bioJSON.bio[2] +
    bioJSON.bio[3]]
    + "<p/>" +
    bioJSON.bio2[0] +
    bioJSON.bio2[1];

