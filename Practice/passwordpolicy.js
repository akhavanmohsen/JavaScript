let PasswordPolicy = function (UserPassword) {
    if (UserPassword.length > 8 && !UserPassword.includes('12345')) {
        return true
    } else {
        return false
    }
}

console.log(PasswordPolicy('mohsen12345'))
console.log(PasswordPolicy('alis'))
console.log(PasswordPolicy('moh1245874'))