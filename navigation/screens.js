import mirror from 'mirror-to-object-pairs';

export default mirror([
  'App',
  'Empty',
  'Setting',
  'ProductView',
  'UserProducts',
  'Location',
  'Chat',
  'ChatNavigator',
  'SearchItem',

  // Authentication
  'Auth',
  'Login',
  'Register',
  'RestorePassword',

  // Main App (Tab Navigation)
  'MainApp',
  'Loading',
  'Browse',
  'BrowseTab',

  'SavedTab',
  'Saved',

  'InboxTab',
  'Inbox',

  'ProfileTab',
  'Profile',

  'CreatePostModal',
  'CreatePost',
]);
