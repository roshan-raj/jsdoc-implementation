let crypto = require('crypto');

/**
 * @namespace File1Js
 */

//===============================================================================
/**
 * @memberof File1Js
 * 
 * @description Accepts the user details and console logs it back.
 * 
 * @author Roshan Raj
 * @since 19-05-2021
 * 
 * @param {string} email 
 * @param {string} firstname 
 * @param {string} lastname 
 * @param {string} password 
 * 
 * @async
 * 
 * @returns {object} Details about the users with their hashed password.
 */
let register = async (email, firstname, lastname, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            password = crypto.createHash("sha256").update(password).digest("hex");
            let registeredUser = {
                'firstname': firstname,
                'lastname': lastname,
                'email': email,
                'password': password
            }
            console.log(registeredUser)
        } catch (error) {
            console.log(error)
        }
    })
}

//===============================================================================
/**
 * @memberof File1Js
 * 
 * @description Add a user directly to the db.
 * 
 * @author Roshan Raj <roshan139154@gmail.com>
 * @since 19-05-2021
 * @version 0.0.1
 * 
 * @param {object} userDetails - userdetails to be added directly to db.
 * @param {string} userDetails.email - email address of the user.
 * @param {string} userDetails.name - full name of the user 
 * @param {boolean} [userDetails.isAdmin=False] - Specify if the user is an admin. 
 * 
 * @requires crypto
 * 
 * @listens POST /addUser
 * @fires file2.js#deleteUser
 * 
 * @returns {object} Returns the user details that was added.
 */
let addUserToDb = async (userDetails) => {
    return new Promise(async (resolve, reject) => {
        try {
            resolve(console.log(userDetails))
        } catch (error) {
            reject(console.log(error))
        }
    })
}

//===============================================================================

module.exports = {
    register,
    addUserToDb
}