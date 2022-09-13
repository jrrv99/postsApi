const UserModel = {
  'google.com': user => ({
    uid: user?.uid,
    email: user?.email,
    emailVerified: user?.emailVerified,
    nickname: user?.displayName,
    photoUrl: user?.photoURL,
    lastLogin: user?.lastLoginAt,
  }),
};

const UserAdapter = user => {
  const {
    providerData: [{ providerId }],
  } = user;
  return UserModel[providerId](user);
};

export { UserAdapter as default, UserModel };
