import notIcon from '../assets/images/not.png';
import blackIcon from '../assets/images/blackIcon.jpg';

global.country = 'Egypt';
export default function customTitle(title = '', backButtonDisabled = false, notificationVisible = false) { 
  
    console.log(notificationVisible);
    return {
        topBar: {
            background: {
                color: 'black',
            },

            title: {
                color:'white',
                text: title,
                alignment: 'center',
                fontSize: 22,
            },

            backButton: {
                visible: !backButtonDisabled,
                color: 'white',
            },

            rightButtons: {
                id: 'Notifications',
                icon: notificationVisible ? notIcon : blackIcon,
            },
        },
    };
}
