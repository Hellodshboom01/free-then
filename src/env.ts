import type { SimpleModel } from "./types"

/**
 * 用于创建 .env.example 文件，不要直接填写敏感信息。
 * 以 CLIENT_ 开头的变量会暴露给前端
 */
export const defaultEnv = {
  CLIENT_GLOBAL_SETTINGS: {
    APIKey: "",
    password: "",
    enterToSend: true
  },
  CLIENT_SESSION_SETTINGS: {
    title: "",
    saveSession: true,
    // 0-2
    APITemperature: 0.7,
    continuousDialogue: true,
    model: "gpt-3.5" as SimpleModel
  },
  CLIENT_DEFAULT_MESSAGE: `Powered by OpenAI Vercel
- dshboom的AI助手 [请我喝杯咖啡](https://image.cdn.dshboom.top/post/202306232035402.png)。
- 默认提供最新的gpt-3.5-turbo-16k模型，给大家免费使用，[点击进群获取密码](https://image.cdn.dshboom.top/post/202306232037165.png)
- 为保障正常请求，本网站关闭了自填key的通道。如果你有相关需要，可以邮箱联系dshboom@outlook.com
- [[Shift]] + [[Enter]] 换行。开头输入 [[/]] 搜索 Prompt 预设。[[↑]] 可编辑最近一次提问。
- [点此处获取更多使用技巧](https://github.com/dshboom/free-gpt-dshboom#%E4%BD%BF%E7%94%A8%E6%8A%80%E5%B7%A7)
`,
  CLIENT_MAX_INPUT_TOKENS: {
    "gpt-3.5": 16 * 1000,
    "gpt-4": 32 * 1000
  } as Record<SimpleModel, number>,
  OPENAI_API_BASE_URL: "api.openai.com",
  OPENAI_API_KEY: "",
  TIMEOUT: 30000,
  PASSWORD: "",
  SEND_KEY: "",
  SEND_CHANNEL: 9,
  NO_GFW: false
}

export type SessionSettings = typeof defaultEnv.CLIENT_SESSION_SETTINGS
