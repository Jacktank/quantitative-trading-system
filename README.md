# 量化交易系统搭建指南

一个完整的量化交易开源方案调研与实施指南，包含详细的框架对比、技术栈推荐和五阶段搭建计划。

## 📖 项目概述

本项目通过**并行调研方式**系统性地分析了当前主流的量化交易开源方案，涵盖Python框架、云原生平台、加密货币交易工具、机器学习量化平台以及数据存储方案等多个维度。为个人开发者提供了完整的技术选型参考和实施指南。

## 🌐 网站预览

访问网站查看完整的交互式指南：
- **主要功能**：框架对比、技术栈推荐、搭建计划、风险管理
- **设计特点**：深蓝色技术主题、响应式布局、深色模式支持
- **技术栈**：React 19 + Tailwind CSS 4 + shadcn/ui

## 📚 文档结构

项目包含以下详细的调研文档：

### 01. 综合调研报告 (`docs/01-research-summary.md`)
- 调研概述和方法论
- 主流开源方案分类与对比
- 技术方案对比矩阵
- 关键技术决策点
- 典型应用场景与推荐方案
- 技术风险与挑战
- 未来技术趋势

### 02. 系统搭建计划 (`docs/02-build-plan.md`)
- 技术栈选型
- 五阶段实施计划
  - 第一阶段：基础设施与数据准备（1-2周）
  - 第二阶段：策略开发与回测（2-4周）
  - 第三阶段：模拟交易与实盘准备（2-3周）
  - 第四阶段：实盘部署与运维（1-2周）
  - 第五阶段：迭代与扩展（长期）
- 风险与应对措施

### 03-07. 详细技术文档
- **03-python-frameworks.md**：Python量化框架详解
- **04-cloud-platforms.md**：云原生平台分析
- **05-crypto-frameworks.md**：加密货币交易工具
- **06-ml-quant.md**：机器学习量化平台（Qlib等）
- **07-data-storage.md**：数据存储和数据源方案

## 🎯 主要框架对比

| 框架 | 性能 | 易用性 | 实盘交易 | 适用场景 |
|------|------|--------|----------|----------|
| **VectorBT** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ❌ | 参数优化、量化研究 |
| **Backtrader** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ✅ | 策略开发、实盘交易 |
| **VeighNa** | ⭐⭐⭐ | ⭐⭐⭐ | ✅ | 国内市场实盘 |
| **QuantConnect Lean** | ⭐⭐⭐⭐ | ⭐⭐⭐ | ✅ | 专业量化基金 |
| **Freqtrade** | ⭐⭐⭐ | ⭐⭐⭐⭐ | ✅ | 加密货币自动交易 |
| **Qlib** | ⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐ | AI驱动的量化研究 |

## 💻 推荐技术栈

针对个人量化交易系统的最优组合：

| 组件 | 技术选型 | 理由 |
|---|---|---|
| 编程语言 | Python 3.11+ | 生态丰富，社区活跃 |
| 数据存储 | ArcticDB | 高性能时序数据存储 |
| 数据源 | Tushare / Yahoo Finance | 覆盖A股和全球市场 |
| 回测框架 | Backtrader / VectorBT | 易用性与性能平衡 |
| 实盘交易 | VeighNa / Freqtrade | 国内市场或加密货币 |
| 部署 | Docker | 容器化部署 |

## 🚀 快速开始

### 本地开发

```bash
# 克隆仓库
git clone https://github.com/Jacktank/quantitative-trading-system.git
cd quantitative-trading-system

# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 访问 http://localhost:3000
```

### 构建生产版本

```bash
pnpm build
pnpm preview
```

## 📋 五阶段搭建计划

### 第一阶段：基础设施与数据准备（1-2周）
- 安装Python、Git、Docker
- 配置虚拟环境和Jupyter Lab
- 安装MongoDB与ArcticDB
- 编写数据获取脚本
- 数据清洗和质量验证

### 第二阶段：策略开发与回测（2-4周）
- 学习回测框架
- 实现第一个交易策略
- 进行历史数据回测
- 分析回测报告
- 参数优化和敏感性分析

### 第三阶段：模拟交易与实盘准备（2-3周）
- 编写实时行情获取模块
- 注册券商模拟交易账户
- 实现交易接口封装
- 在模拟盘中运行策略
- 开发风控模块

### 第四阶段：实盘部署与运维（1-2周）
- 开设实盘交易账户
- 编写Dockerfile进行容器化
- 部署到云服务器
- 建立系统和交易监控
- 配置告警通知

### 第五阶段：迭代与扩展（长期）
- 研究和实现更复杂的策略
- 引入机器学习模型
- 开发Web管理界面
- 支持多账户和多策略
- 扩展到更多资产类别

## ⚠️ 风险与应对

| 风险类型 | 风险描述 | 应对措施 |
|---|---|---|
| 技术风险 | 框架选择不当、代码bug | 充分调研、代码审查、单元测试 |
| 数据风险 | 数据质量差、数据源不稳定 | 多数据源交叉验证 |
| 策略风险 | 策略过拟合、模型失效 | 严格回测、样本外测试 |
| 交易风险 | 交易接口延迟、滑点 | 模拟盘充分测试、小资金实盘 |

## 🔗 相关资源

### 主流框架官网
- [Backtrader](https://www.backtrader.com/)
- [VectorBT](https://vectorbt.pro/)
- [QuantConnect](https://www.quantconnect.com/)
- [Freqtrade](https://www.freqtrade.io/)
- [VeighNa](https://www.vnpy.com/)
- [Qlib](https://github.com/microsoft/qlib)

### 数据源
- [Yahoo Finance](https://finance.yahoo.com/)
- [Tushare](https://tushare.pro/)
- [CCXT](https://github.com/ccxt/ccxt)
- [AkShare](https://github.com/akfamily/akshare)

### 学习资源
- [Quantopian讲座](https://www.quantopian.com/)
- [QuantInsti](https://www.quantinsti.com/)
- [Investopedia](https://www.investopedia.com/)

## 📝 项目文件结构

```
quantitative-trading-system/
├── client/                          # 前端代码
│   ├── src/
│   │   ├── pages/
│   │   │   └── Home.tsx            # 主页面
│   │   ├── components/             # React组件
│   │   ├── App.tsx                 # 应用入口
│   │   └── index.css               # 全局样式
│   ├── public/                     # 静态资源
│   └── index.html                  # HTML模板
├── docs/                           # 详细文档
│   ├── 01-research-summary.md      # 综合调研报告
│   ├── 02-build-plan.md            # 搭建计划
│   ├── 03-python-frameworks.md     # Python框架
│   ├── 04-cloud-platforms.md       # 云平台
│   ├── 05-crypto-frameworks.md     # 加密货币工具
│   ├── 06-ml-quant.md              # ML量化平台
│   └── 07-data-storage.md          # 数据存储
├── server/                         # 服务器代码（占位符）
├── package.json                    # 项目配置
├── vite.config.ts                  # Vite配置
└── README.md                       # 本文件
```

## 🎨 设计特点

- **深蓝色技术主题**：专业、现代的量化金融风格
- **响应式设计**：完美支持桌面、平板和手机
- **深色模式**：内置深色模式切换
- **交互式组件**：可展开的框架对比、流畅的页面转换
- **清晰的信息架构**：分层次展示复杂信息

## 🤝 贡献

欢迎提交Issue和Pull Request来改进本项目！

## 📄 许可证

MIT License

## 👨‍💻 作者

由 **Manus AI** 创建

---

**最后更新**: 2025年1月16日

如有任何问题或建议，欢迎通过GitHub Issues联系我们！
