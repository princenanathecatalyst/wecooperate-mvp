export const formatCurrency = (amount, currency = 'NGN') => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency,
  }).format(amount)
}

export const formatDate = (date, format = 'long') => {
  const d = new Date(date)
  
  if (format === 'long') {
    return d.toLocaleDateString('en-NG', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }
  
  if (format === 'short') {
    return d.toLocaleDateString('en-NG', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }
  
  return d.toISOString().split('T')[0]
}

export const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength) + '...'
}

export const slugify = (text) => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .trim()
}

export const calculateSubscriptionExpiry = (months = 1) => {
  const expiry = new Date()
  expiry.setMonth(expiry.getMonth() + months)
  return expiry
}

export const isSubscriptionActive = (expiryDate) => {
  if (!expiryDate) return false
  return new Date(expiryDate) > new Date()
}

export const getRoleDisplayName = (role) => {
  const roleNames = {
    MEMBER: 'General Member',
    SILVER: 'Silver Leader',
    GOLD: 'Gold Leader',
    PLATINUM: 'Platinum Director',
  }
  return roleNames[role] || role
}

export const getRoleColor = (role) => {
  const roleColors = {
    MEMBER: 'bg-gray-100 text-gray-800',
    SILVER: 'bg-gray-300 text-gray-900',
    GOLD: 'bg-accent-500 text-white',
    PLATINUM: 'bg-purple-600 text-white',
  }
  return roleColors[role] || 'bg-gray-100 text-gray-800'
}
