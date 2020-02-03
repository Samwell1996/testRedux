import { NavigationActions } from 'react-navigation';

class NavigationServices {
  constructor() {
    this._navigation = null;
  }

  init(navigation) {
    if (this._navigation) {
      return;
    }
    this._navigation = navigation;
  }

  navigate(routeName, params) {
    this._navigation.dispatch(
      NavigationActions.navigate({
        routeName,
        params,
      }),
    );
  }

  navigateToAuth() {
    this.navigate('Auth');
  }
  navigateToLogin() {
    this.navigate('Login');
  }
  navigateToApp() {
    this.navigate('MainApp');
  }

  navigateToBrowseScreen() {
    this.navigate('BrowseTab');
  }
  navigateToSavedScreen() {
    this.navigate('SavedTab');
  }
  navigateToInboxScreen() {
    this.navigate('InboxTab');
  }
  navigateToProfileScreen() {
    this.navigate('ProfileTab');
  }
  navigateToCreatePost() {
    this.navigate('CreatePostModal');
  }
  navigateToChat() {
    this.navigate('Chat');
  }

  onGoBack() {
    this._navigation.dispatch(NavigationActions.back());
  }
}

export default new NavigationServices();
