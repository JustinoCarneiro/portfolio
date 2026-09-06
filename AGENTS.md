# Portfólio — Contrato canônico de trabalho

## Objetivo

Site de portfólio pessoal (SPA) do dev. Vite + React, sem backend. Metodologia
OndaDev — versão em `ONDA_VERSION`.

## Mapa do repositório

| Caminho | Finalidade |
| --- | --- |
| `CLAUDE.md` | Contexto rápido: stack, estrutura, como validar. |
| `index.html` | Entrada do Vite. |
| `src/` | `App.jsx`, `main.jsx`, `components/`, `index.css`. |
| `public/assets_portfolio/` | Imagens e mídia do portfólio. |
| `vite.config.js` | Configuração de build. |
| `.ondadev/` | Protocolo de failover de cota e template de handoff entre agentes. |
| `.agents/`, `.claude/` | Skills OndaDev dos agentes (nunca edite os destinos; a fonte é o `onda-starter`). |
| `.github/workflows/` | CI de secret scanning (gitleaks nos commits do PR). |

## Autoridade da informação

| Assunto | Fonte canônica | Papel das demais fontes |
| --- | --- | --- |
| Conteúdo e escopo do site | `src/` + `CLAUDE.md` | — (sem CMS; o conteúdo muda no código). |
| Código e histórico versionado | Git | GitHub registra PRs, revisão e CI. |

## Comandos verificados

```bash
npm ci
npm run lint       # eslint
npm run build      # vite build (pega erro que o lint não pega)
npm run dev        # servidor de desenvolvimento
npm run preview    # serve o build

# Checkpoint de handoff entre agentes (só metadados seguros)
bash scripts/ai-checkpoint.sh --stdout
```

## Fronteiras e convenções

- Sem backend, sem dado de terceiro. Mudança é conteúdo, estilo ou componente.
- Manter o build leve; não introduzir dependência pesada sem motivo.
- Responsivo; imagens otimizadas em `public/assets_portfolio/`.
- Documentação em português claro; nomes técnicos no idioma da tecnologia.

## Segurança e classes de risco

Site pessoal sem backend nem credenciais. Nunca versione tokens de deploy,
chaves de API ou `.env` real.

| Nível | Exemplos | Regra |
| --- | --- | --- |
| R0 | Conteúdo, estilo, componente, testes locais | Executar e validar normalmente. |
| R1 | Dependência, config de build, CI | Declarar impacto, `lint`/`build` e pedir revisão de diff. |
| R2 | Produção (deploy), credenciais, domínio | Exigir autorização explícita e alvo confirmado. |

A fronteira exata das classes de risco segue o `AGENTS.md` do `onda-starter`.

## Definition of Done

1. atende a um pedido de conteúdo/ajuste com resultado verificável na página;
2. `npm run lint` e `npm run build` passam, com o resultado reportado;
3. atualiza `CLAUDE.md` quando a estrutura mudou;
4. não introduz segredo ou credencial no repositório;
5. passa por revisão proporcional ao risco e deixa um diff compreensível;
6. registra handoff com mudanças, validações, decisões, riscos e pendências.

Não afirme que build, CI ou deploy passaram sem evidência.

## Revisão e handoff entre agentes

Claude e Codex seguem este arquivo como núcleo comum. Um autor por PR; o outro
revisa o diff quando o risco (R1/R2) exige. Quando a cota de um agente acaba, o
outro assume por handoff — protocolo na metodologia OndaDev 3.0 (`ONDA_VERSION`),
com `scripts/ai-checkpoint.sh` preenchendo `.ondadev/handoff/current.md`.

Síntese de handoff:

```text
Escopo: …
Mudanças: …
Validações executadas e resultado: …
Decisões/ADRs: …
Riscos, bloqueios e próximos passos: …
```
