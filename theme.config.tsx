/*
 * @Author: Orion
 * @Date: 2024-06-10 15:36:47
 * @LastEditors: Orion
 * @LastEditTime: 2024-06-10 17:48:36
 * @Description: 
 * 
 */
import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>MONAD</span>,
  project: {
    link: 'https://github.com/shuding/nextra-docs-template',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'monad.wiki © 2024',
  },
  i18n: [
    { locale: 'en-US', text: 'English' },
    { locale: 'zh-CN', text: '中文' },
    { locale: 'de-DE', text: 'Deutsch' }
  ],
}

export default config
