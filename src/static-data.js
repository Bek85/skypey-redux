const shortid = require('shortid'); // shortid.generate() returns a unique "short" id
const txtgen = require('txtgen'); // txtgen.sentence() returns random "readable" sentences
const faker = require('faker'); // faker is used for generating random fake data.
const _ = require('lodash'); // lodash is a utility lib for Javascript

const users = generateUsers(10);
export const contacts = _.mapKeys(users, 'user_id');
export const getMessages = (messagesPerUser) => {
  let messages = {};
  _.forEach(users, (user) => {
    messages[user.user_id] = {
      ..._.mapKeys(generateMsgs(messagesPerUser), 'number'),
    };
  });
  return messages;
};

// just an example of how the state object is structured
export const state = {
  user: generateUser(),
  messages: getMessages(10),
  typing: '',
  contacts,
  activeUserId: null,
};

/**
 * @returns {Object} - a new user object
 */
export function generateUser() {
  return {
    name: faker.name.findName(),
    email: faker.internet.email(),
    profile_pic: faker.internet.avatar(),
    status: txtgen.sentence(),
    user_id: shortid.generate(),
  };
}
/**
 * @returns {Object} - a new message object
 */
function generateMsg(number) {
  return {
    number,
    text: txtgen.sentence(),
    is_user_msg: faker.datatype.boolean(),
  };
}
/**
 *
 * @param {Number} numberOfUsers - the number of users to be generated
 * @param {Function} generateUser - function that generates a single user
 * @returns {Array} - an array of user objects with length n = numberOfUsers
 */
function generateUsers(numberOfUsers) {
  return Array.from({ length: numberOfUsers }, () => generateUser());
}

function generateMsgs(numberOfMsgs) {
  return Array.from({ length: numberOfMsgs }, (v, i) => generateMsg(i));
}

// {
//   "contacts": {
//     "eKacKqUuo": {
//       "name": "Delores Anderson",
//       "email": "Consuelo.Hickle@hotmail.com",
//       "profile_pic": "https://cdn.fakercloud.com/avatars/paulfarino_128.jpg",
//       "status": "Grapes are understanding sheeps!",
//       "user_id": "eKacKqUuo"
//     },
//     "gY_RVOtzXn": {
//       "name": "Priscilla Schroeder",
//       "email": "Arnaldo43@hotmail.com",
//       "profile_pic": "https://cdn.fakercloud.com/avatars/operatino_128.jpg",
//       "status": "The first impartial pomegranate is, in its own way, a monkey.",
//       "user_id": "gY_RVOtzXn"
//     },
//     "RGXRbpc1C0": {
//       "name": "Jacqueline Skiles",
//       "email": "Arnoldo63@hotmail.com",
//       "profile_pic": "https://cdn.fakercloud.com/avatars/allthingssmitty_128.jpg",
//       "status": "What we don't know for sure is whether or not alligators are comfortable seals.",
//       "user_id": "RGXRbpc1C0"
//     },
//     "_QK5kOuBLQ": {
//       "name": "Robyn Cruickshank",
//       "email": "Christine19@yahoo.com",
//       "profile_pic": "https://cdn.fakercloud.com/avatars/themadray_128.jpg",
//       "status": "Though we assume the latter, the loving kiwi reveals itself as an eminent puppy to those who look?",
//       "user_id": "_QK5kOuBLQ"
//     },
//     "cxVnwAeNIv": {
//       "name": "Heidi Rippin",
//       "email": "Lynn.Bayer19@gmail.com",
//       "profile_pic": "https://cdn.fakercloud.com/avatars/syropian_128.jpg",
//       "status": "However, a fabulous puppy without kumquats is truly a ant of cheerful frogs?",
//       "user_id": "cxVnwAeNIv"
//     },
//     "yVplCmQs04": {
//       "name": "Van Rempel",
//       "email": "Rosalyn59@hotmail.com",
//       "profile_pic": "https://cdn.fakercloud.com/avatars/gabrielizalo_128.jpg",
//       "status": "They were lost without the perfect currant that composed their horse.",
//       "user_id": "yVplCmQs04"
//     },
//     "JY4ktGYP6v": {
//       "name": "Michael Hane",
//       "email": "Austyn24@yahoo.com",
//       "profile_pic": "https://cdn.fakercloud.com/avatars/lisovsky_128.jpg",
//       "status": "Framed in a different way, some posit the diligent fly to be less than intelligent.",
//       "user_id": "JY4ktGYP6v"
//     },
//     "p_z_fcbEv-": {
//       "name": "Natalie Kihn",
//       "email": "Winfield_Baumbach@yahoo.com",
//       "profile_pic": "https://cdn.fakercloud.com/avatars/oscarowusu_128.jpg",
//       "status": "By the waythey were lost without the cooperative horse that composed their tangerine!",
//       "user_id": "p_z_fcbEv-"
//     },
//     "-ob1nLepet": {
//       "name": "Ellen Schimmel",
//       "email": "Sarai.Mann54@hotmail.com",
//       "profile_pic": "https://cdn.fakercloud.com/avatars/evandrix_128.jpg",
//       "status": "Fair spiders show us how snails can be grapefruits.",
//       "user_id": "-ob1nLepet"
//     },
//     "mpcBqNPkKA": {
//       "name": "Luke Frami",
//       "email": "Devin_Medhurst@gmail.com",
//       "profile_pic": "https://cdn.fakercloud.com/avatars/Silveredge9_128.jpg",
//       "status": "A tangerine is the cat of a lobster.",
//       "user_id": "mpcBqNPkKA"
//     }
//   }
// }
