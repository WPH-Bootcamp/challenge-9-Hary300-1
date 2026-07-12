export const modeConfig = {
  all: {
    endpoint: '/api/resto',
    allowedParams: [
      'location',
      'range',
      'priceMin',
      'priceMax',
      'rating',
      'category',
      'page',
      'limit',
    ],
  },
  nearby: {
    endpoint: '/api/resto/nearby',
    allowedParams: ['range', 'page', 'limit'],
  },
  'best-seller': {
    endpoint: '/api/resto/best-seller',
    allowedParams: ['page', 'limit'],
  },
} as const;
