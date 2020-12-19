// Перепиши функцию toggleUserState() так, чтобы она не использовала callback-функцию callback, 
// а принимала всего два параметра allUsers и userName и возвращала промис.
const toggleUserState = (allUsers, userName) => {

    const promise = new Promise((resolve) => {
        
        const updatedUsers = allUsers.map(user =>
            user.name === userName ? { ...user, active: !user.active } : user,
            
        ); 
        resolve(updatedUsers);
    }
       
    )
    return promise;
};

const tsk2Logger = updatedUsers => console.table(updatedUsers);

export {
    toggleUserState,
    tsk2Logger
}