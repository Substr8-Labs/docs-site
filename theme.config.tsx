import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span style={{ fontWeight: 700 }}>Substr8</span>,
  project: {
    link: 'https://github.com/Substr8-Labs/substr8-cli',
  },
  docsRepositoryBase: 'https://github.com/Substr8-Labs/docs-site',
  footer: {
    text: '© 2026 Substr8 Labs — Governance infrastructure for AI agents',
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Substr8 - Governance infrastructure for AI agents" />
    </>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Substr8 Docs'
    }
  },
  primaryHue: 160,
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
}

export default config
