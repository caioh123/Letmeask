import {useContext} from 'react'
import {AuthContext} from '../contexts/AuthContex'

export function useAuth() {
    const value = useContext(AuthContext)

    return value
} 