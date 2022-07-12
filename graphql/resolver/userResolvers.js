const Todo = require("../../mongooseSechemas/todoSchema")

const root = {
    findUser: async (arg) => {
        console.log(arg.email)
        const user = await Todo.findOne({ email: arg.email })
        return user;
    },

    findAllUsers: async () => {
        const users = await Todo.find({})
        return users;
    },

    updateUser: (arg) => {
        console.log(arg.user);
        return arg.user;
    },

    addUser: async (arg) => {
        try {
            const newTodo = new Todo(arg.user);
            await newTodo.save(err => {
                if (!err) {
                    console.log('User has been added successfully!')
                } else {
                    console.log("There was a server side error!", err)
                }
            });
            return arg.user;
        } catch (err) {
            console.log(err)
        }
    },

    deleteUser: async (arg) => {
        console.log(arg.email)
        await Todo.deleteOne({ email: arg.email }, err => {
            if (!err) {
                console.log("User deleted successfully!!")
            }
        })
    }
}
module.exports = root;