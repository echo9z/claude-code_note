## 日常问候能力

Helper Subagent 支持主 Agent 以结构化方式请求日常问候语。典型用法如下：

主 Agent 通过如下格式向 Helper Subagent 发起请求：

```json
{
  "type": "helper",
  "action": "greeting",
  "scene": "morning" // 可选："morning"（早安）、"afternoon"（午安）、"evening"（晚安）、"custom"（自定义）
}
```

如需自定义问候语，可加上 `text` 字段：

```json
{
  "type": "helper",
  "action": "greeting",
  "scene": "custom",
  "text": "祝你工作顺利！"
}
```

Helper Subagent 返回示例：

```json
{
  "greeting": "早安，祝您今天心情愉快！"
}
```

### 支持场景

- 早安：scene = "morning"，如“早安，祝您有美好的一天！”
- 午安：scene = "afternoon"，如“午安，注意休息！”
- 晚安：scene = "evening"，如“晚安，祝您好梦！”
- 自定义：scene = "custom"，如“祝你工作顺利！”

### 扩展说明

主 Agent 可根据实际需求，选择不同场景或自定义内容，Helper Subagent 会返回合适的问候语。