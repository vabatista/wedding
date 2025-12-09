# Deployment no Vercel

## Variáveis de Ambiente

As variáveis de ambiente sensíveis **NÃO** devem ser commitadas no repositório.

Configure as seguintes variáveis diretamente no painel do Vercel:

### Variáveis Obrigatórias

- **MONGODB_URI**: Connection string do MongoDB
  - Exemplo: `mongodb+srv://user:password@cluster.mongodb.net/database`

### Como Configurar

1. Acesse o dashboard do Vercel
2. Selecione o projeto
3. Vá para **Settings** → **Environment Variables**
4. Adicione as variáveis acima

## Deploy

```bash
vercel --prod
```

## Nota

O arquivo `vercel.json` contém apenas configurações públicas. As variáveis de ambiente são gerenciadas exclusivamente através da interface do Vercel.
