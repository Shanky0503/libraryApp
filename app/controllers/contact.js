import Ember from 'ember';

export default Ember.Controller.extend({

    // isContactDisabled : true,
    
    email: '',
    message:'',

    isValidEmail: Ember.computed.match('email', /^.+@.+\..+$/),
    isMessageEnoughLong: Ember.computed.gte('message.length', 5),
    isValid: Ember.computed.and('isValidEmail', 'isMessageEnoughLong'),
    isContactDisabled: Ember.computed.not('isValid'),

    
    actions: {        
        sendMessage() {            
            alert(`Saving the following email address is in progress: ${this.get('email')} and your message ${this.get('message')}`);
            this.set('responseMessage', `Thank you! ${this.get('email')} for your message ${this.get('message')}`);
            this.set('email', '');
            this.set('message', '');
      }
    }
    
});
