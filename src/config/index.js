// host
export const host = process.env.NODE_ENV === 'production' ? 'https://relics.wegfan.cn' : ''

// prefix
export const prefix = '/api'
// const prefix = ''

// 请求前缀
export const requestPrefix = host + prefix
