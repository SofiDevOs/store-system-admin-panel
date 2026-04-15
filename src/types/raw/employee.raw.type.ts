
export interface Employee {
  id: string
  name: string
  lastname: string
  nss: string
  rfc: string
  address: string
  salary: number
  vacationDays: number
  birthdate: string
  isRehired: boolean
  profileImage?: string
  position: string
  department?: string
  createdAt: string
  phone: string
  userId: string
  user: User
}

export interface User {
  email: string
  role: string
  isActive: boolean
  isVerified: boolean
}
