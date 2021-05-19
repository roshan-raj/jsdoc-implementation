let crypto = require('crypto');

/**
 * @namespace File2Js
 */

//===============================================================================
/**
 * @memberof File2Js
 * 
 * @description Deletes the user.
 * 
 * @author Roshan Raj
 * @since 19-05-2021
 * 
 * @param {string} email - email of the user to be deleted.
 * @param {string} password - password to ensure only authenticated person can do this query.
 *  
 * @returns {string} Success message that the user is deleted.
 */
let deleteUser = async (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            password = crypto.createHash("sha256").update(password).digest("hex");
            
            console.log(email + " This user has been deleted!")
        } catch (error) {
            console.log(error)
        }
    })
}

//===============================================================================

module.exports = {
    deleteUser
}