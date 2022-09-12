const OwnerAdapter = owner => ({
  ownerId: owner.id,
  ownerTitle: owner.title,
  ownerFullName: `${owner.firstName} ${owner.lastName}`,
  ownerFirstName: owner.firstName,
  ownerLastName: owner.lastName,
  ownerPic: owner.picture,
});

export default OwnerAdapter;
