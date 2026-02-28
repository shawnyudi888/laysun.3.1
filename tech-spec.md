# LAYSUN 网站技术规范

## 1. 技术栈

- **框架**: React 18 + TypeScript
- **构建工具**: Vite
- **样式**: Tailwind CSS
- **UI组件**: shadcn/ui
- **路由**: React Router DOM
- **动画**: Framer Motion + 自定义Hook
- **图标**: Lucide React

## 2. 项目结构

```
/mnt/okcomputer/output/app/
├── public/
│   └── images/           # 静态图片资源
├── src/
│   ├── components/       # 可复用组件
│   │   ├── ui/          # shadcn/ui 组件
│   │   ├── Header.tsx   # 导航头部
│   │   ├── Footer.tsx   # 页脚
│   │   ├── HeroSection.tsx
│   │   ├── KPICounter.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ProductCard.tsx
│   │   ├── SectionTitle.tsx
│   │   ├── TwoColumnBlock.tsx
│   │   ├── EngineeringDiagram.tsx
│   │   ├── CardGrid.tsx
│   │   ├── FinalCTA.tsx
│   │   └── ContactForm.tsx
│   ├── sections/         # 页面区块组件
│   │   ├── home/
│   │   ├── systems/
│   │   ├── manufacturing/
│   │   ├── projects/
│   │   ├── about/
│   │   ├── contact/
│   │   ├── products/
│   │   ├── procurement/
│   │   └── case-studies/
│   ├── hooks/            # 自定义Hooks
│   │   ├── useScrollAnimation.ts
│   │   ├── useCountUp.ts
│   │   └── useInView.ts
│   ├── lib/              # 工具函数
│   │   └── utils.ts
│   ├── pages/            # 页面组件
│   │   ├── Home.tsx
│   │   ├── Systems.tsx
│   │   ├── Manufacturing.tsx
│   │   ├── Projects.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Products.tsx
│   │   ├── Procurement.tsx
│   │   └── CaseStudies.tsx
│   ├── types/            # TypeScript类型
│   │   └── index.ts
│   ├── data/             # 静态数据
│   │   └── content.ts
│   ├── App.tsx           # 主应用
│   ├── main.tsx          # 入口
│   └── index.css         # 全局样式
├── index.html
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

## 3. 组件清单

### shadcn/ui 组件
- Button
- Card
- Input
- Textarea
- Select
- Checkbox
- Dialog
- Sheet (移动端菜单)
- Accordion (FAQ)
- Tabs
- Badge
- Separator

### 自定义组件

| 组件名 | 用途 | 复杂度 |
|--------|------|--------|
| Header | 导航头部，含Mega Menu | 高 |
| Footer | 页脚，含社交链接 | 中 |
| HeroSection | 首屏Hero区块 | 中 |
| KPICounter | 数字滚动动画 | 高 |
| ProjectCard | 项目卡片 | 中 |
| ProductCard | 产品卡片 | 中 |
| SectionTitle | 区块标题 | 低 |
| TwoColumnBlock | 双列布局 | 中 |
| EngineeringDiagram | 工程图示 | 中 |
| CardGrid | 卡片网格 | 中 |
| FinalCTA | 最终CTA区块 | 低 |
| ContactForm | 联系表单 | 高 |
| IndustryFilter | 行业筛选 | 中 |
| OfficeInfo | 办事处信息 | 中 |

## 4. 动画实现方案

### 动画库选择
- **Framer Motion**: 主要动画库，用于组件动画、页面过渡
- **自定义Hook**: useCountUp 用于数字滚动

### 动画实现表

| 动画效果 | 实现方式 | 复杂度 |
|----------|----------|--------|
| 页面淡入 | Framer Motion + motion.div | 低 |
| 滚动触发淡入 | useInView + whileInView | 中 |
| 数字滚动 | useCountUp Hook | 高 |
| 卡片Hover上浮 | Tailwind + transition | 低 |
| 按钮Hover | Tailwind + hover: | 低 |
| Staggered动画 | Framer Motion stagger | 中 |
| 导航滚动阴影 | useScroll Hook | 低 |

### useCountUp Hook 实现

```typescript
// hooks/useCountUp.ts
import { useState, useEffect, useRef } from 'react';

export function useCountUp(
  end: number,
  duration: number = 2000,
  startOnView: boolean = true
) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startOnView) {
      setHasStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasStarted, startOnView]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // easeOutQuart
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeProgress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [hasStarted, end, duration]);

  return { count, ref };
}
```

## 5. 路由结构

```typescript
// App.tsx 路由配置
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/systems" element={<Systems />} />
  <Route path="/manufacturing" element={<Manufacturing />} />
  <Route path="/projects" element={<Projects />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/products" element={<Products />} />
  <Route path="/procurement" element={<Procurement />} />
  <Route path="/case-studies" element={<CaseStudies />} />
</Routes>
```

## 6. 样式规范

### Tailwind 配置扩展

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#0F3D2E',
        secondary: '#6B7280',
        accent: '#C6A75E',
        'bg-secondary': '#F5F5F5',
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'kpi': ['56px', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'h1': ['48px', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'h2': ['36px', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'h3': ['28px', { lineHeight: '1.3' }],
        'h4': ['22px', { lineHeight: '1.4' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      borderRadius: {
        'card': '16px',
        'button': '8px',
      },
      boxShadow: {
        'card': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 12px 40px rgba(0, 0, 0, 0.12)',
      },
    },
  },
};
```

## 7. 性能优化

### 图片优化
- 使用 WebP 格式
- 实现懒加载 (loading="lazy")
- 使用 srcset 响应式图片
- 单张图片 ≤ 500KB

### 代码优化
- 组件懒加载 (React.lazy)
- 路由级别代码分割
- Tree shaking
- CSS 压缩

### 动画优化
- 使用 transform 和 opacity
- 添加 will-change
- 支持 prefers-reduced-motion

## 8. 可访问性

- 语义化 HTML 标签
- 图片 alt 属性
- 键盘导航支持
- 颜色对比度 WCAG AA
- ARIA 标签

## 9. 响应式断点

```css
/* Tailwind 默认断点 */
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

## 10. 开发规范

### 命名规范
- 组件: PascalCase (HeroSection)
- 文件: PascalCase (HeroSection.tsx)
- 函数: camelCase (handleSubmit)
- 常量: UPPER_SNAKE_CASE
- CSS类: kebab-case (hero-section)

### 代码风格
- TypeScript 严格模式
- ESLint + Prettier
- 组件props类型定义
- 函数返回类型显式声明
