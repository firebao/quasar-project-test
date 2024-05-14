/*
 * @Author       : wwj 318348750@qq.com
 * @Date         : 2024-05-11 15:45:04
 * @LastEditors  : wwj 318348750@qq.com
 * @LastEditTime : 2024-05-13 10:12:10
 * @Description  : mars3d模板渲染相关
 *
 * Copyright (c) 2024 by sjft email: 318348750@qq.com, All Rights Reserved.
 */
export const sitePanelContent = (e: any) => {
  const content = `
    <div class="row q-my-sm">
      <div class="col-4">站点名称:</div>
      <div class="col-8">${e.attr.site}</div>
    </div>
    <div class="row q-my-sm">
      <div class="col-4">调度等级:</div>
      <div class="col-8">${e.attr.dispatch_level || ''}</div>
    </div>
    <div class="row q-my-sm">
      <div class="col-4">站点等级:</div>
      <div class="col-8">${e.attr.site_grade}</div>
    </div>
    <div class="row q-my-sm">
      <div class="col-4">站点类型:</div>
      <div class="col-8">${e.attr.site_type}</div>
    </div>
    <div class="row q-my-sm">
      <div class="col-4">电压等级:</div>
      <div class="col-8">${e.attr.voltage_level}</div>
    </div>
    <div class="row float-right">
      <button id="btnDetails" class="bg-yellow-9">查看详情</button>
    </div>
  `
  return content
}

export const sitePanelTemplate = `
`
