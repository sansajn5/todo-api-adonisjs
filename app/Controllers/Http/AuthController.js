'use strict'
const User = use('App/Models/User')

class AuthController {

    async register({ request, response }) {
        try {
            const { email, password} = request.all();
            const user = await User.create({
                email,
                password,
                username: email,
            })
            response.status(201).send({user})
        } catch (error) {
            response.status(400).send({error})
        }
    }

    async login({ request, response, auth }) {
        const { email, password } = request.all();
        try {
            const token = await auth.withRefreshToken().attempt(email, password)
            const user = await User.find({email: email})
            response.status(200).send({
                user,
                token
            })
        } catch(error) {
            response.status(400).send({
                error: error
            })
        }
    }
}

module.exports = AuthController
