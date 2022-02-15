const devBaseURL = 'http://httpbin.org'
const proBaseURL = 'http://httpbin.org'

export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL
export const TIMEOUT = 5000
