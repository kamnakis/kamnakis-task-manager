const profile_reducer = (profile, action) => {
  switch (action.type) {
    case 'INITIALIZE': 
      return action.profile;
    default: 
      return profile
  }
};

export { profile_reducer as default }