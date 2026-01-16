import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronDown, Github, ExternalLink, Zap, BarChart3, Layers, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [expandedFramework, setExpandedFramework] = useState<string | null>(null);

  const frameworks = [
    {
      id: "vectorbt",
      name: "VectorBT",
      stars: "⭐⭐⭐⭐⭐",
      performance: "极高",
      ease: "中等",
      realTrading: "❌",
      description: "全向量化架构，性能压倒性优势，1秒内模拟数百万笔交易",
      pros: ["性能极高", "参数优化快速", "Plotly可视化"],
      cons: ["学习曲线陡峭", "不支持实盘交易"],
      use: "参数优化、量化研究"
    },
    {
      id: "backtrader",
      name: "Backtrader",
      stars: "⭐⭐⭐⭐",
      performance: "中等",
      ease: "极高",
      realTrading: "✅",
      description: "最受欢迎的Python量化框架，易用性和完整性俱佳",
      pros: ["易用性最好", "社区活跃", "支持实盘交易"],
      cons: ["性能一般", "已停止积极开发"],
      use: "策略开发、实盘交易"
    },
    {
      id: "veighna",
      name: "VeighNa",
      stars: "⭐⭐⭐⭐",
      performance: "中等",
      ease: "中等",
      realTrading: "✅",
      description: "国内最成熟的量化交易系统，专为中国市场设计",
      pros: ["国内市场支持完善", "中文文档详尽", "支持实盘交易"],
      cons: ["学习曲线陡峭", "主要面向国内市场"],
      use: "国内市场实盘交易"
    },
    {
      id: "lean",
      name: "QuantConnect Lean",
      stars: "⭐⭐⭐⭐⭐",
      performance: "高",
      ease: "中等",
      realTrading: "✅",
      description: "企业级云原生量化平台，支持9种资产类别",
      pros: ["生产级稳定性", "模块化架构", "多资产支持"],
      cons: ["学习曲线陡峭", "功能复杂"],
      use: "专业量化基金"
    },
    {
      id: "freqtrade",
      name: "Freqtrade",
      stars: "⭐⭐⭐⭐⭐",
      performance: "高",
      ease: "高",
      realTrading: "✅",
      description: "完整的加密货币交易机器人框架，46k stars",
      pros: ["WebUI管理界面", "FreqAI机器学习", "社区活跃"],
      cons: ["仅支持加密货币", "GPL许可限制"],
      use: "加密货币自动交易"
    },
    {
      id: "qlib",
      name: "Qlib",
      stars: "⭐⭐⭐⭐⭐",
      performance: "高",
      ease: "低",
      realTrading: "⭐⭐",
      description: "微软AI量化投资平台，支持监督学习、市场动态建模和强化学习",
      pros: ["AI导向", "完整ML流水线", "微软背书"],
      cons: ["学习曲线陡峭", "主要面向A股"],
      use: "AI驱动的量化研究"
    }
  ];

  const phases = [
    {
      phase: 1,
      title: "基础设施与数据准备",
      duration: "1-2周",
      steps: [
        "安装Python 3.11+、Git、Docker",
        "配置虚拟环境和Jupyter Lab",
        "安装和配置MongoDB与ArcticDB",
        "编写数据获取脚本（Yahoo Finance、Tushare等）",
        "数据清洗和质量验证"
      ]
    },
    {
      phase: 2,
      title: "策略开发与回测",
      duration: "2-4周",
      steps: [
        "学习Backtrader或VectorBT框架",
        "实现第一个交易策略（如均线交叉）",
        "进行历史数据回测",
        "分析回测报告和关键指标",
        "参数优化和敏感性分析"
      ]
    },
    {
      phase: 3,
      title: "模拟交易与实盘准备",
      duration: "2-3周",
      steps: [
        "编写实时行情获取模块",
        "注册券商模拟交易账户",
        "实现交易接口封装",
        "在模拟盘中运行策略",
        "开发风控模块（止损、止盈、仓位管理）"
      ]
    },
    {
      phase: 4,
      title: "实盘部署与运维",
      duration: "1-2周",
      steps: [
        "开设实盘交易账户",
        "编写Dockerfile进行容器化",
        "部署到云服务器",
        "建立系统和交易监控",
        "配置告警通知（邮件、Telegram）"
      ]
    },
    {
      phase: 5,
      title: "迭代与扩展",
      duration: "长期",
      steps: [
        "研究和实现更复杂的策略",
        "引入机器学习模型（Qlib）",
        "开发Web管理界面",
        "支持多账户和多策略",
        "扩展到更多资产类别"
      ]
    }
  ];

  const dataStorageOptions = [
    { name: "Arctic", performance: "⭐⭐⭐⭐⭐", ease: "⭐⭐⭐", cost: "免费", use: "大规模时间序列" },
    { name: "Qlib存储", performance: "⭐⭐⭐⭐⭐", ease: "⭐⭐⭐⭐", cost: "免费", use: "AI量化研究" },
    { name: "PostgreSQL", performance: "⭐⭐⭐", ease: "⭐⭐⭐⭐⭐", cost: "免费", use: "中小规模数据" },
    { name: "ClickHouse", performance: "⭐⭐⭐⭐⭐", ease: "⭐⭐⭐", cost: "免费", use: "OLAP查询" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">量化交易系统搭建指南</h1>
              <p className="text-sm text-muted-foreground">开源方案调研与实施计划</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20 border-b border-border bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              个人量化交易系统完整指南
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              通过并行调研，我们系统性地分析了当前主流的量化交易开源方案，包括Python框架、云原生平台、加密货币工具和AI量化平台。本指南提供了详细的技术对比、应用场景推荐和五阶段实施计划。
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <a href="#frameworks">查看框架对比</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#plan">查看搭建计划</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container py-12 space-y-12">
        {/* Overview Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8">调研概览</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Layers className="w-5 h-5 text-primary" />
                  Python框架
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  VectorBT、Zipline、Backtrader、VeighNa等主流框架的性能、易用性和功能对比
                </p>
                <ul className="space-y-2 text-sm">
                  <li>✓ 性能对比分析</li>
                  <li>✓ 学习曲线评估</li>
                  <li>✓ 社区活跃度</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  云原生平台
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  QuantConnect Lean、Freqtrade等企业级平台的架构和功能分析
                </p>
                <ul className="space-y-2 text-sm">
                  <li>✓ 模块化设计</li>
                  <li>✓ 多资产支持</li>
                  <li>✓ 生产级稳定性</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  数据与AI
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Arctic数据存储、Qlib AI平台等基础设施方案
                </p>
                <ul className="space-y-2 text-sm">
                  <li>✓ 高性能存储</li>
                  <li>✓ 机器学习支持</li>
                  <li>✓ 数据源对比</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Frameworks Section */}
        <section id="frameworks">
          <h2 className="text-3xl font-bold mb-8">主流框架详解</h2>
          <div className="space-y-4">
            {frameworks.map((fw) => (
              <Card key={fw.id} className="overflow-hidden">
                <button
                  onClick={() => setExpandedFramework(expandedFramework === fw.id ? null : fw.id)}
                  className="w-full text-left"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{fw.name}</CardTitle>
                        <CardDescription>{fw.description}</CardDescription>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-muted-foreground transition-transform ${
                          expandedFramework === fw.id ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </CardHeader>
                </button>
                {expandedFramework === fw.id && (
                  <CardContent className="pt-0 space-y-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">性能</p>
                        <p className="font-semibold">{fw.performance}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">易用性</p>
                        <p className="font-semibold">{fw.ease}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">实盘交易</p>
                        <p className="font-semibold">{fw.realTrading}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">适用场景</p>
                        <p className="font-semibold">{fw.use}</p>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-semibold text-sm mb-2 text-green-600">优点</p>
                        <ul className="space-y-1 text-sm">
                          {fw.pros.map((pro, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600" />
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-sm mb-2 text-orange-600">缺点</p>
                        <ul className="space-y-1 text-sm">
                          {fw.cons.map((con, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <span className="w-4 h-4 text-orange-600">✕</span>
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </section>

        {/* Tech Stack Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8">推荐技术栈</h2>
          <Card>
            <CardHeader>
              <CardTitle>个人量化交易系统</CardTitle>
              <CardDescription>基于调研结果的最优技术组合</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-border rounded-lg p-4">
                    <p className="font-semibold text-sm text-muted-foreground mb-2">编程语言</p>
                    <p className="text-lg font-bold">Python 3.11+</p>
                  </div>
                  <div className="border border-border rounded-lg p-4">
                    <p className="font-semibold text-sm text-muted-foreground mb-2">数据存储</p>
                    <p className="text-lg font-bold">ArcticDB</p>
                  </div>
                  <div className="border border-border rounded-lg p-4">
                    <p className="font-semibold text-sm text-muted-foreground mb-2">回测框架</p>
                    <p className="text-lg font-bold">Backtrader / VectorBT</p>
                  </div>
                  <div className="border border-border rounded-lg p-4">
                    <p className="font-semibold text-sm text-muted-foreground mb-2">实盘交易</p>
                    <p className="text-lg font-bold">VeighNa / Freqtrade</p>
                  </div>
                  <div className="border border-border rounded-lg p-4">
                    <p className="font-semibold text-sm text-muted-foreground mb-2">数据源</p>
                    <p className="text-lg font-bold">Yahoo Finance + Tushare</p>
                  </div>
                  <div className="border border-border rounded-lg p-4">
                    <p className="font-semibold text-sm text-muted-foreground mb-2">部署</p>
                    <p className="text-lg font-bold">Docker容器化</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Data Storage Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8">数据存储方案对比</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th>方案</th>
                  <th>性能</th>
                  <th>易用性</th>
                  <th>成本</th>
                  <th>适用场景</th>
                </tr>
              </thead>
              <tbody>
                {dataStorageOptions.map((option) => (
                  <tr key={option.name}>
                    <td className="font-semibold">{option.name}</td>
                    <td>{option.performance}</td>
                    <td>{option.ease}</td>
                    <td>{option.cost}</td>
                    <td>{option.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Implementation Plan Section */}
        <section id="plan">
          <h2 className="text-3xl font-bold mb-8">五阶段搭建计划</h2>
          <div className="space-y-6">
            {phases.map((p) => (
              <Card key={p.phase}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl">
                        第{p.phase}阶段：{p.title}
                      </CardTitle>
                      <CardDescription>预计用时：{p.duration}</CardDescription>
                    </div>
                    <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                      {p.phase}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-2">
                    {p.steps.map((step, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="text-primary font-semibold min-w-6">{i + 1}.</span>
                        <span className="text-foreground">{step}</span>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Risk Management Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8">风险与应对</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">技术风险</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  框架选择不当、代码bug、系统崩溃
                </p>
                <p className="text-sm font-semibold text-primary">
                  应对：充分调研、代码审查、单元测试、灰度发布
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">数据风险</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  数据质量差、数据源不稳定
                </p>
                <p className="text-sm font-semibold text-primary">
                  应对：多数据源交叉验证、使用付费专业数据
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">策略风险</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  策略过拟合、模型失效
                </p>
                <p className="text-sm font-semibold text-primary">
                  应对：严格回测、样本外测试、持续监控
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">交易风险</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  交易接口延迟、滑点、订单错误
                </p>
                <p className="text-sm font-semibold text-primary">
                  应对：模拟盘充分测试、小资金实盘、监控执行
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-primary/5 rounded-lg border border-border">
          <div className="text-center space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">准备开始搭建？</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              本指南提供了完整的技术选型和实施计划。建议从第一阶段的基础设施搭建开始，逐步迭代，最终实现一个稳定、高效的个人量化交易系统。
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button size="lg" asChild>
                <a href="#plan">查看详细计划</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  查看项目
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/50 py-8 mt-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-3">关于本指南</h3>
              <p className="text-sm text-muted-foreground">
                通过并行调研方式系统性地分析量化交易开源方案，为个人开发者提供完整的技术选型和实施指南。
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">主要框架</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#frameworks" className="hover:text-primary">Backtrader</a></li>
                <li><a href="#frameworks" className="hover:text-primary">VectorBT</a></li>
                <li><a href="#frameworks" className="hover:text-primary">QuantConnect Lean</a></li>
                <li><a href="#frameworks" className="hover:text-primary">Freqtrade</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">资源链接</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">GitHub仓库</a></li>
                <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">开源社区</a></li>
                <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">技术文档</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-6 text-center text-sm text-muted-foreground">
            <p>© 2025 量化交易系统搭建指南 | 由 Manus AI 创建</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
