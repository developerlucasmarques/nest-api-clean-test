import Clerk from '@clerk/clerk-sdk-node/esm/instance'

const clerkClient = Clerk({ secretKey: 'any_secret' })

export class AuthClerk {
  async auth (): Promise<void> {
    const clientList = await clerkClient.clients.getClientList()
    const userList = await clerkClient.users.getUserList()

    console.log('ClientList:', clientList)
    console.log('UserList:', userList[0])
  }

  async verifyToken (token: string) {
    console.log('verifyToken', token)
    const payload = await clerkClient.verifyToken(token)
    console.log('payload', payload)
  }
}
