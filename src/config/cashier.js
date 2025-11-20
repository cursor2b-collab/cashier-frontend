// 统一收银台配置
// 根据实际部署地址修改此配置

export const CASHIER_CONFIG = {
  // 开发环境
  // baseUrl: 'http://localhost:5174',
  
  // 生产环境 - 统一收银台域名
  baseUrl: 'https://tpimtoken.com',
  
  // 或者如果部署在同一域名下的子路径
  // baseUrl: '/cashier'
}

/**
 * 获取收银台URL
 * @param {string} orderSN - 订单号
 * @returns {string} 收银台完整URL
 */
export function getCashierUrl(orderSN) {
  return `${CASHIER_CONFIG.baseUrl}/cashier/${orderSN}`
}

/**
 * 获取支付确认页面URL
 * @param {string} orderSN - 订单号
 * @param {string} idParam - ID参数（可选）
 * @param {string} amount - 金额（可选）
 * @returns {string} 支付确认页面完整URL
 */
export function getPaymentUrl(orderSN, idParam = '', amount = '') {
  const params = new URLSearchParams()
  if (idParam) params.append('id', idParam)
  if (amount) params.append('amount', amount)
  const queryString = params.toString() ? `?${params.toString()}` : ''
  return `${CASHIER_CONFIG.baseUrl}/payment/${orderSN}${queryString}`
}

/**
 * 保存订单数据到 sessionStorage
 * @param {string} orderSN - 订单号
 * @param {object} orderData - 订单数据
 * @param {string} websiteName - 网站名称
 */
export function saveOrderToSession(orderSN, orderData, websiteName = '好旺担保') {
  sessionStorage.setItem(`order_${orderSN}`, JSON.stringify(orderData))
  sessionStorage.setItem(`website_name_${orderSN}`, websiteName)
  console.log('订单数据已保存到 sessionStorage:', { orderSN, orderData, websiteName })
}

/**
 * 跳转到统一收银台
 * @param {string} orderSN - 订单号
 * @param {object} orderData - 订单数据
 * @param {string} websiteName - 网站名称
 */
export function navigateToCashier(orderSN, orderData, websiteName = '好旺担保') {
  saveOrderToSession(orderSN, orderData, websiteName)
  const url = getCashierUrl(orderSN)
  console.log('跳转到统一收银台:', url)
  window.location.href = url
}

