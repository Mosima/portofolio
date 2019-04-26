import React from 'react'
import * as emailjs from 'emailjs-com'
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        name: '',
        email: '',
        subject:'',
        message: '',
        errors: {
            name: '',
            email: '',
            subject:'',
            message: '',
        }
    }
    this.addNotification = this.addNotification.bind(this);
    this.notificationDOMRef = React.createRef();
    this.sentMessage = this.sentMessage.bind(this);
  }
  addNotification() {
    this.notificationDOMRef.current.addNotification({
      title: "Success",
      message: "Message has been sent",
      type: "success",
      insert: "top",
      container: "top-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: { duration: 2000 },
      dismissable: { click: true }
    });
  }

    handleInputChange(event){
        event.preventDefault()
        const target = event.target
        const name = target.name
        const value = target.value
        console.log(this.state.name)
        this.setState({[name]: value})
    }

    validateMail(){
        let errors = {}
        let formIsValid = true

        if(!this.state.name || this.state.name < 3){
            errors.name = 'Minimum 3 symbols'
            formIsValid = false
        }
        if(!this.state.subject || this.state.subject < 3){
            errors.subject = 'Minimum 3 symbols'
            formIsValid = false
        }
        if(!this.state.message || this.state.name < 10){
            errors.message = 'Minimum 10 symbols'
            formIsValid = false
        }
        if(!this.state.email || this.state.email < 3){
            errors.email = 'Minimum 3 symbols'
            formIsValid = false
        }

        this.setState({
            errors: errors
        })

        return formIsValid
    }

    sentMessage(event){
        event.preventDefault()
        
        if(!this.validateMail()){
            return
        }
        var templateParams = {
            from_name: this.state.name+ '('+ this.state.email +')',
            to_name: 'mosimawork@gmail.com',
            subject: this.state.subject,
            message_html: this.state.message
        }

        emailjs.send('gmail', 'template_9CieIH9U', templateParams, 'user_hPlgsRgSxQb7GMcMUWCBd')
            .then((response) => {
                this.addNotification()
                console.log('SUCCESS!', response.status, response.text);
            }, (err) => {
                console.log('FAILED...', err);
            });
            this.setState({
                name: '',
                email: '',
                subject:'',
                message: '',
            })
    }
 
  render() {
    return (
     
        <div>

            <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                name="name" 
                id="name" 
                onChange={this.handleInputChange.bind(this)}
                value={this.state.name}
                required='required'
                error={this.state.errors.name}
                />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input
               type="text" 
               name="email" 
               id="email" 
               onChange={this.handleInputChange.bind(this)}
               value={this.state.email}
                required='required'
                error={this.state.errors.email}
               />
            </div>
            <div className="field">
              <label htmlFor="email">Subject</label>
              <input
               type="text" 
               name="subject" 
               id="subject" 
               onChange={this.handleInputChange.bind(this)}
               value={this.state.subject}
                required='required'
                error={this.state.errors.subject}
               />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
               name="message" 
               id="message" 
               rows="4" 
               onChange={this.handleInputChange.bind(this)}
               value={this.state.message}
                required='required'
                error={this.state.errors.message}
               ></textarea>
            </div>
            <ul className="actions">
              <li><input 
              type="submit" 
              value="Send Message"
              name='submit'
              className="special" 
              onClick={this.sentMessage.bind(this)}
              required='required'
              /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="https://www.linkedin.com/in/godfrey-thabulwa-1713a8b1" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
            <li><a href="https://github.com/Mosima" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          <ReactNotification ref={this.notificationDOMRef} />
        </div>
      
    )
  }
}

export default Contact
