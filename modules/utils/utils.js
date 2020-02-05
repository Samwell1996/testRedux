import { format } from 'date-fns';

export function createDate(createdAt) {
  return format(new Date(createdAt), 'd/LL/yyy');
}

export function getInitials(owner) {
  let i = '';
  const fullName = owner.fullName.split(' ');
  if (fullName.length === 1) {
    i = fullName[0][0];
  } else if (fullName.length > 1) {
    i = `${fullName[0][0]} ${fullName[1][0]}`;
  }
  return i;
}

// export function getFirstName(owner) {
//     console.log(owner.fullName, 'ownerF');
//   let firstName = {};
//   if (typeof owner === 'object') {
//     const [firstName] = owner.fullName.split(' ');
//   }
//   return `${firstName}`;
// }

// export function getFirstName(owner) {
//   const [firstName] = owner.fullName.split(' ');
//   return `${firstName}`;
// }
