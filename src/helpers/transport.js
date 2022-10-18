const nodemailer = require("nodemailer")
const dotenv = require("dotenv")
dotenv.config()

const mailer = async (info, action) =>{

    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:process.env.SEND_MAIL,
            pass:process.env.PASS_MAIL
        },
        tls: {
            rejectUnauthorized: false
          }

    });

   
    let subject;
    let emailto;
    let composition;

    switch(action){

        case "createrequest" :
            subject = "Request Received";
            emailto = info.email;
            composition = `<p>
                your Request sent successfully!!!
            </p>`;

            break;
            case "CreateUser":
                 subject="";
                 emailto = info.email;
                 composition = `<p>
                 you are  now  Our partner !! soon get it you will get Your credentials !
             </p>`;
             break;
             
            default:
                subject ="";
                break;
    }

    const mailOptions = {
        from : `UMWEZI ${process.env.SEND_MAIL}`,
        to : emailto,
        subject,
        html:composition,
    };
    try{
        const sendEmail = transporter.sendMail(mailOptions, (err,info)=>{
            
            console.log(err)
            console.log(info)
            return sendEmail
        });
        
    }catch(error){
        console.log(error)
        return error
    }


}

module.exports = mailer
