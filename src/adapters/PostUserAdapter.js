const PostUserAdapter = user => ({
  id: user.id,
  title: user.title,
  firstName: user.firstName,
  lastName: user.lastName,
  picture: user.picture,
  gender: user.gender,
  email: user.email,
  dateOfBirth: user.dateOfBirth,
  phone: user.phone,
  location: user.location,
  registerDate: user.registerDate,
  updatedDate: user.updatedDate,
});

export default PostUserAdapter;
