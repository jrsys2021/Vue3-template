import { defineStore } from 'pinia'

export interface UserState {
  token: string | null
  username: string
  avatar: string
}

const useUserStore = defineStore('User', {
  // 小仓库存储数据的地方
  state: (): UserState => {
    return {
      token: null,
      username: '',
      avatar: '',
    }
  },
  // 异步|逻辑的地方
  actions: {},
  getters: {},
})

export default useUserStore
