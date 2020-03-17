import { Navigation } from 'react-native-navigation';
export const goToAuth = () => Navigation.setRoot({
  root: {
    stack: {
      children: [
        {
          component: {
            name: 'Login',
          },
        },
      ],
    },
  },
});

