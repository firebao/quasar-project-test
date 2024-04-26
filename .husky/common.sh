###
 # @Author       : wwj 318348750@qq.com
 # @Date         : 2024-04-26 15:48:50
 # @LastEditors  : wwj 318348750@qq.com
 # @LastEditTime : 2024-04-26 15:49:03
 # @Description  :
 #
 # Copyright (c) 2024 by sjft email: 318348750@qq.com, All Rights Reserved.
###
command_exists () {
  command -v "$1" >/dev/null 2>&1
}

# Workaround for Windows 10, Git Bash and Yarn
if command_exists winpty && test -t 1; then
  exec < /dev/tty
fi
