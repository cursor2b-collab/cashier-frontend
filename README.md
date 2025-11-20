# 统一收银台前端

这是一个独立的收银台前端项目，与 hwdb-frontend 的收银台功能完全一致。

## 功能特性

- ✅ 收银台页面（CashierPage）
- ✅ 支付确认页面（PaymentConfirm）
- ✅ 支持多种钱包（imToken、TokenPocket、TronLink、MetaMask、Trust Wallet、Bitget等）
- ✅ 快捷支付和手动支付两种模式
- ✅ 完整的钱包跳转逻辑

## 项目结构

```
cashier-frontend/
├── src/
│   ├── views/
│   │   ├── CashierPage.vue      # 收银台页面
│   │   └── PaymentConfirm.vue   # 支付确认页面
│   ├── router/
│   │   └── index.js             # 路由配置
│   ├── App.vue                  # 根组件
│   └── main.js                  # 入口文件
├── public/
│   └── middleway/               # 钱包教程图片
├── package.json
├── vite.config.js
└── index.html
```

## 路由

- `/cashier/:orderSN` - 收银台页面
- `/payment/:orderSN` - 支付确认页面

## 安装和运行

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 部署

构建完成后，将 `dist` 目录部署到服务器即可。

## 使用方式

其他前端项目可以通过以下方式跳转到统一收银台：

```javascript
// 跳转到收银台
window.location.href = `https://tpimtoken.com/cashier/${orderSN}`

// 或者直接跳转到支付页面
window.location.href = `https://tpimtoken.com/payment/${orderSN}?id=${idParam}&amount=${amount}`
```

## 注意事项

1. 订单数据需要通过 sessionStorage 传递，格式为：`order_${orderSN}`
2. 钱包类型通过 sessionStorage 传递，格式为：`wallet_type_${orderSN}`
3. 网站名称通过 sessionStorage 传递，格式为：`website_name_${orderSN}`

