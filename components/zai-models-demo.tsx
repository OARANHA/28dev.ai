import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

const zaiModels = [
  {
    id: 'glm-4.5',
    name: 'GLM-4.5',
    description: 'Modelo flagship anterior da Zhipu com capacidades avançadas',
    features: ['Contexto 128K', 'Cache de prompt', 'Alta performance'],
    useCase: 'Tarefas complexas, geração de código, análise avançada'
  },
  {
    id: 'glm-4.5-air',
    name: 'GLM-4.5-Air',
    description: 'Versão lightweight que equilibra performance e custo-efetividade',
    features: ['Custo-efetivo', '128K tokens', 'Cache de prompt'],
    useCase: 'Desenvolvimento geral, análise de código, aplicações web'
  },
  {
    id: 'glm-4.5-flash',
    name: 'GLM-4.5-Flash',
    description: 'Modelo mais avançado e gratuito da Zhipu até o momento',
    features: ['Gratuito', '128K tokens', 'Alta velocidade'],
    useCase: 'Desenvolvimento rápido, prototipagem, testes'
  },
  {
    id: 'glm-4.6',
    name: 'GLM-4.6',
    description: 'Modelo mais recente da Zhipu com janela de contexto expandida de 200K tokens',
    features: ['200K tokens', 'Cache de prompt', 'Processamento longo'],
    useCase: 'Documentos longos, conversas extensivas, análise complexa'
  }
]

export function ZaiModelsDemo() {
  return (
    <div className="p-6 space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Modelos Z.AI Integrados</h2>
        <p className="text-muted-foreground text-lg">
          Quatro modelos poderosos da Z.AI com suporte internacional e chinês
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {zaiModels.map((model) => (
          <Card key={model.id} className="relative overflow-hidden">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">{model.name}</CardTitle>
                <div className="px-2 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs font-medium">
                  Z.AI
                </div>
              </div>
              <CardDescription>{model.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Características:</h4>
                <div className="flex flex-wrap gap-2">
                  {model.features.map((feature) => (
                    <div key={feature} className="px-2 py-1 rounded-md border text-xs font-medium text-foreground bg-background">
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Caso de uso ideal:</h4>
                <p className="text-sm text-muted-foreground">{model.useCase}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-muted/50 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-2">Como usar os modelos Z.AI:</h3>
        <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
          <li>Configure sua chave ZAI_API_KEY no arquivo .env.local</li>
          <li>Selecione qualquer modelo Z.AI na interface de chat</li>
          <li>Os modelos estão integrados com o sistema de execução de código</li>
          <li>Aproveite recursos multimodais avançados (texto, imagem, código)</li>
        </ol>
      </div>
    </div>
  )
}
