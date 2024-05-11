/*
 * @Author       : wwj 318348750@qq.com
 * @Date         : 2024-05-11 15:45:04
 * @LastEditors  : wwj 318348750@qq.com
 * @LastEditTime : 2024-05-11 16:31:48
 * @Description  : mars3d模板渲染相关
 *
 * Copyright (c) 2024 by sjft email: 318348750@qq.com, All Rights Reserved.
 */

export const sitePanelContent = (e: any) => {
  console.log('xxxxxx', e)
  const content = `
    <div class="site-panel" animation-spaceInDown style="width: 400px;">
      <div class="marsBlackPanel-text">
        <div class="row flex">
          <div class="col-4">调度等级<div>
          <div class="col-8">${e.dispatch_level}</div>
        </div>
        <div class="row">
          <div class="col-4">站点名称<div>
          <div class="col-8">${e.site}</div>
        </div>
        <div class="row">
          <div class="col-4">站点等级<div>
          <div class="col-8">${e.site_grade}</div>
        </div>
        <div class="row">
          <div class="col-4">站点类型<div>
          <div class="col-8">${e.site_type}</div>
        </div>
        <div class="row">
          <div class="col-4">电压等级<div>
          <div class="col-8">${e.voltage_level}</div>
        </div>
      </div>
    </div>
  `
  return content
}

export const sitePanelTemplate = `
`
