/*
 * @Author       : wwj 318348750@qq.com
 * @Date         : 2024-04-07 14:52:13
 * @LastEditors  : wwj 318348750@qq.com
 * @LastEditTime : 2024-05-14 18:45:34
 * @Description  :
 *
 * Copyright (c) 2024 by sjft email: 318348750@qq.com, All Rights Reserved.
 */
import { stores } from 'src/stores/index.js'
import { storeToRefs } from 'pinia'

export const usePanel = () => {
  const store = stores.viewer.usePanelStore()
  const { nonUniquenessPanel, uniquenessPanel } = storeToRefs(store)
  const setFilterStatus = (status: boolean) => store.setFilterPanel(status)
  const setDetailStatus = (status: boolean) => store.setDetailInfoPanel(status)
  const setEquListStatus = (status: boolean) => store.setEquListPanel(status)
  return {
    nonUniquenessPanel,
    uniquenessPanel,
    setFilterStatus,
    setDetailStatus,
    setEquListStatus,
  }
}
