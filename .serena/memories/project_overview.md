# 项目概述

## 项目类型
Claude Code 配置和智能代理管理系统

## 主要功能
- MCP服务器配置和管理
- 智能子代理控制系统
- 记忆管理和知识图谱构建
- 代码分析和检索优化

## 技术栈
- **配置管理**: JSON配置文件
- **代理系统**: Claude Code 自定义代理
- **记忆系统**: Serena 记忆管理
- **开发工具**: 多种MCP服务器集成

## 项目结构
```
.claude/
  agents/          # 智能子代理定义文件
  config/          # Claude配置
.serena/           # Serena项目配置和记忆存储
asstes/            # 静态资源文件
.mcp.json          # MCP服务器配置文件
CLAUDE.md          # 项目指导文档
```

## 核心配置文件
- `.mcp.json`: MCP服务器配置
- `CLAUDE.md`: 项目开发指导
- `.claude/agents/*.md`: 子代理定义文件