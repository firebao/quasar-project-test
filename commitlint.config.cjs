/*
 * @Author       : wwj 318348750@qq.com
 * @Date         : 2023-08-14 18:25:20
 * @LastEditors  : wwj 318348750@qq.com
 * @LastEditTime : 2024-04-28 08:48:32
 * @Description  : commitlint配置文件
 *
 * Copyright (c) 2023 by sjft, All Rights Reserved.
 */
const fs = require('fs')
const path = require('path')

// git commit -m"特性11(some): some "

module.exports = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: {
    parserOpts: { headerPattern: /^([^\(\):]*)(?:\((.*)\))?!?: (.*)$/ },
  },
  rules: {
    'body-leading-blank': [1, 'always'],
    'footer-leading-blank': [1, 'always'],
    'header-max-length': [2, 'always', 72],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-case': [
      1,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
    ],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        '构建', // 构建，编译相关的修改，例如发布版本、对项目构建或者依赖的改动
        '集成', // ci，持续集成修改
        '架构', // 改变构建流程、或者增加依赖库、工具等
        '文档', // 仅仅修改了文档，比如README, CHANGELOG, CONTRIBUTE等等
        '特性', // 新增feature
        '修复', // 修复bug
        '性能', // 优化相关，比如提升性能、体验
        '重构', // 代码重构，没有加新功能或者修复bug
        '回滚', // 回滚到上一个版本
        '风格', // 仅仅修改了空格、格式缩进、逗号等等，不改变代码逻辑
        '测试', // 测试用例，包括单元测试、集成测试等
      ],
    ],
  },
  prompt: {
    questions: {
      type: {
        description: '选择一种你的提交类型',
        enum: {
          特性: {
            description: '一个新的特性',
            title: 'Features',
            emoji: '✨',
          },
          修复: {
            description: '修复一个Bug',
            title: 'Bug Fixes',
            emoji: '🐛',
          },
          文档: {
            description: '仅更改了文档',
            title: 'Documentation',
            emoji: '📚',
          },
          风格: {
            description: '不改变代码逻辑的更改（空格、格式、缺少分号等）',
            title: 'Styles',
            emoji: '💎',
          },
          重构: {
            description: '代码重构，没有加新功能或者修复Bug',
            title: 'Code Refactoring',
            emoji: '📦',
          },
          性能: {
            description: '优化性能的更改',
            title: 'Performance Improvements',
            emoji: '🚀',
          },
          测试: {
            description: '添加缺失的测试或者纠正现有的测试',
            title: 'Tests',
            emoji: '🚨',
          },
          构建: {
            description:
              '影响构建系统或外部依赖项的更改（示例范围：gulp、broccoli、npm）',
            title: 'Builds',
            emoji: '🛠',
          },
          集成: {
            description:
              '对 CI 配置文件和脚本的更改（示例范围：Travis、Circle、BrowserStack、SauceLabs)',
            title: 'Continuous Integrations',
            emoji: '⚙️',
          },
          架构: {
            description: '不修改 src 或测试文件的其他更改',
            title: 'Chores',
            emoji: '♻️',
          },
          回滚: {
            description: '回滚到上一个版本',
            title: 'Reverts',
            emoji: '🗑',
          },
        },
      },
      scope: {
        description: '此更改的范围是什么（例如组件或文件名）',
      },
      subject: {
        description: '写一个简短的、命令式的变化描述',
      },
      body: {
        description: '提供更详细的更改描述',
      },
      isBreaking: {
        description: '包含破坏性更改吗？',
      },
      breakingBody: {
        description:
          '一个破坏性更改需要提交一个正文。请输入一个更长更详细的描述',
      },
      breaking: {
        description: '描述破坏性更改',
      },
      isIssueAffected: {
        description: '本次更改是否影响某个打开的 issues ？',
      },
      issuesBody: {
        description:
          '如果需要关闭了一些 issues，则需要提交一个正文。请输入一个更长更详细的描述',
      },
      issues: {
        description: '添加问题参考（例如“修复 #123”、“重开 #123”。）',
      },
    },
  },
}
