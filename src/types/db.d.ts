/*
 * @Author       : wwj 318348750@qq.com
 * @Date         : 2024-03-25 16:24:28
 * @LastEditors  : wwj 318348750@qq.com
 * @LastEditTime : 2024-03-28 16:42:14
 * @Description  :
 *
 * Copyright (c) 2024 by sjft email: 318348750@qq.com, All Rights Reserved.
 */
export interface SetPayload {
  dbName?: string
  path?: string
  value?: any
  user?: boolean
}

export interface PathInitPayload {
  dbName?: string
  path?: string
  user?: boolean
  validator?: (value: any) => boolean
  defaultValue?: any
}

export interface GetPayload {
  dbName?: string
  path?: string
  defaultValue?: any
  user?: boolean
}

export interface DatabasePayload {
  user?: boolean
  dbName?: string
  path?: string
  validator?: (val: any) => boolean
  defaultValue?: any
}

export type SetFunction = (payload: SetPayload) => void

export interface DatabaseStructure {
  [key: string]: any
}
