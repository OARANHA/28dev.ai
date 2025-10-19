// Z.AI Configuration with International and China Support
// Based on the user's reference application structure

export type ZaiApiLine = 'international_coding' | 'international' | 'china_coding' | 'china'

export interface ZaiApiConfig {
  name: string
  baseUrl: string
  isChina: boolean
}

export const zaiApiConfigs: Record<ZaiApiLine, ZaiApiConfig> = {
  international_coding: {
    name: 'International Coding Plan',
    baseUrl: 'https://api.z.ai/api/coding/paas/v4',
    isChina: false
  },
  international: {
    name: 'International Standard',
    baseUrl: 'https://api.z.ai/api/paas/v4',
    isChina: false
  },
  china_coding: {
    name: 'China Coding Plan',
    baseUrl: 'https://open.bigmodel.cn/api/coding/paas/v4',
    isChina: true
  },
  china: {
    name: 'China Standard',
    baseUrl: 'https://open.bigmodel.cn/api/paas/v4',
    isChina: true
  }
}

export type InternationalZAiModelId = keyof typeof internationalZAiModels
export const internationalZAiDefaultModelId: InternationalZAiModelId = 'glm-4.6'

export const internationalZAiModels = {
  'glm-4.5': {
    maxTokens: 98_304,
    contextWindow: 131_072,
    supportsImages: false,
    supportsPromptCache: true,
    inputPrice: 0.6,
    outputPrice: 2.2,
    cacheWritesPrice: 0,
    cacheReadsPrice: 0.11,
    description: "Zhipu's previous flagship model."
  },
  'glm-4.5-air': {
    maxTokens: 98_304,
    contextWindow: 131_072,
    supportsImages: false,
    supportsPromptCache: true,
    inputPrice: 0.2,
    outputPrice: 1.1,
    cacheWritesPrice: 0,
    cacheReadsPrice: 0.03,
    description: "GLM-4.5-Air is the lightweight version of GLM-4.5. It balances performance and cost-effectiveness, and can flexibly switch to hybrid thinking models."
  },
  'glm-4.5-flash': {
    maxTokens: 98304,
    contextWindow: 131072,
    supportsImages: false,
    supportsPromptCache: false,
    inputPrice: 0,
    outputPrice: 0,
    cacheWritesPrice: 0,
    cacheReadsPrice: 0,
    description: "Zhipu's most advanced free model to date."
  },
  'glm-4.6': {
    maxTokens: 98_304,
    contextWindow: 204_800,
    supportsImages: false,
    supportsPromptCache: true,
    inputPrice: 0.6,
    outputPrice: 2.2,
    cacheWritesPrice: 0,
    cacheReadsPrice: 0.11,
    description: "GLM-4.6 is Zhipu's newest model with an extended context window of up to 200k tokens, providing enhanced capabilities for processing longer documents and conversations."
  }
} as const

export type MainlandZAiModelId = keyof typeof mainlandZAiModels
export const mainlandZAiDefaultModelId: MainlandZAiModelId = 'glm-4.6'

export const mainlandZAiModels = {
  'glm-4.5': {
    maxTokens: 98_304,
    contextWindow: 131_072,
    supportsImages: false,
    supportsPromptCache: true,
    inputPrice: 0.29,
    outputPrice: 1.14,
    cacheWritesPrice: 0,
    cacheReadsPrice: 0.057,
    description: "Zhipu's previous flagship model.",
    tiers: [
      {
        contextWindow: 32_000,
        inputPrice: 0.21,
        outputPrice: 1.0,
        cacheReadsPrice: 0.043,
      },
      {
        contextWindow: 128_000,
        inputPrice: 0.29,
        outputPrice: 1.14,
        cacheReadsPrice: 0.057,
      },
      {
        contextWindow: Infinity,
        inputPrice: 0.29,
        outputPrice: 1.14,
        cacheReadsPrice: 0.057,
      }
    ]
  },
  'glm-4.5-air': {
    maxTokens: 98_304,
    contextWindow: 131_072,
    supportsImages: false,
    supportsPromptCache: true,
    inputPrice: 0.1,
    outputPrice: 0.6,
    cacheWritesPrice: 0,
    cacheReadsPrice: 0.02,
    description: "GLM-4.5-Air is the lightweight version of GLM-4.5. It balances performance and cost-effectiveness, and can flexibly switch to hybrid thinking models.",
    tiers: [
      {
        contextWindow: 32_000,
        inputPrice: 0.07,
        outputPrice: 0.4,
        cacheReadsPrice: 0.014,
      },
      {
        contextWindow: 128_000,
        inputPrice: 0.1,
        outputPrice: 0.6,
        cacheReadsPrice: 0.02,
      },
      {
        contextWindow: Infinity,
        inputPrice: 0.1,
        outputPrice: 0.6,
        cacheReadsPrice: 0.02,
      }
    ]
  },
  'glm-4.5-flash': {
    maxTokens: 98304,
    contextWindow: 131072,
    supportsImages: false,
    supportsPromptCache: false,
    inputPrice: 0,
    outputPrice: 0,
    cacheWritesPrice: 0,
    cacheReadsPrice: 0,
    description: "Zhipu's most advanced free model to date."
  },
  'glm-4.6': {
    maxTokens: 98_304,
    contextWindow: 204_800,
    supportsImages: false,
    supportsPromptCache: true,
    inputPrice: 0.29,
    outputPrice: 1.14,
    cacheWritesPrice: 0,
    cacheReadsPrice: 0.057,
    description: "GLM-4.6 is Zhipu's newest model with an extended context window of up to 200k tokens, providing enhanced capabilities for processing longer documents and conversations.",
    tiers: [
      {
        contextWindow: 32_000,
        inputPrice: 0.21,
        outputPrice: 1.0,
        cacheReadsPrice: 0.043,
      },
      {
        contextWindow: 128_000,
        inputPrice: 0.29,
        outputPrice: 1.14,
        cacheReadsPrice: 0.057,
      },
      {
        contextWindow: 200_000,
        inputPrice: 0.29,
        outputPrice: 1.14,
        cacheReadsPrice: 0.057,
      },
      {
        contextWindow: Infinity,
        inputPrice: 0.29,
        outputPrice: 1.14,
        cacheReadsPrice: 0.057,
      }
    ]
  }
} as const

export const ZAI_DEFAULT_TEMPERATURE = 0

// Helper function to get the appropriate config based on environment
export function getZaiConfig(apiLine?: ZaiApiLine): ZaiApiConfig {
  return zaiApiConfigs[apiLine || 'international']
}

// Helper function to determine if we should use China or International models
export function getZaiModels(isChina: boolean = false) {
  return isChina ? mainlandZAiModels : internationalZAiModels
}
