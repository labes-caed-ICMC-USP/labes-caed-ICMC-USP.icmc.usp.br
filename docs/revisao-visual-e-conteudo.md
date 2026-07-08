# Revisão Visual e de Conteúdo — LabES Website

**Data:** 16/06/2026
**Branch:** entrega-16-06
**Status:** Backlog — itens priorizados para futuras sprints

---

## 1. Inconsistências de dados

### 1.1 Números divergentes entre `historia.json` e `stats.json`

Os totais de alunos formados aparecem em dois lugares com valores diferentes:

| Métrica | `historia.json` (texto do timeline) | `stats.json` (contadores animados) |
|---|---|---|
| Mestrados concluídos | 232 | 214 |
| Doutorados concluídos | 129 | 121 |
| Pós-doutorados concluídos | 29 | 24 |

**Ação recomendada:** Definir `stats.json` como única fonte de verdade. Substituir os números hardcoded do texto do timeline por uma descrição genérica (ex: "centenas de dissertações e teses ao longo de décadas").

---

## 2. Conteúdo herdado de template

### 2.1 Missão e Visão do LabES usam texto do ICMC

Os campos `historia.missao` e `historia.visao` em `historia.json` contêm a declaração institucional do **ICMC**, não do LabES. O mesmo texto já aparece na seção `icmc` da mesma página, gerando duplicidade e imprecisão institucional.

Texto atual (missão):
> *"Produzir, evoluir e disseminar conhecimento e inovação nas áreas de Matemática, Ciência da Computação e Estatística, formando recursos humanos em nível de graduação e pós-graduação..."*

**Ação recomendada:** Redigir missão e visão próprias do LabES com a coordenação. Caso não haja texto definido, remover os blocos até que sejam elaborados.

---

### 2.2 Endereço do rodapé em inglês

Em `site.json`, os campos de endereço estão em inglês (herança do template):

```json
"ICMC / USP - Office 6-204"
"Trabalhador São-Carlense Avenue, 400 - Centro"
"São Carlos - SP - Brazil"
```

**Ação recomendada:** Substituir por:
```
Sala 6-204 — Bloco 6, ICMC/USP
Av. Trabalhador São-Carlense, 400 — Centro
São Carlos — SP — Brasil
```

---

### 2.3 Alt texts de imagens em inglês

Vários campos `alt` em `historia.json` e `manual-aluno.json` estão em inglês:

| Arquivo             | Campo                       | Valor atual      |
| ------------------- | --------------------------- | ---------------- |
| `historia.json`     | `hero.galeria[0].alt`       | `"Campus Life"`  |
| `historia.json`     | `hero.galeria[1].alt`       | `"Students"`     |
| `historia.json`     | `hero.galeria[2].alt`       | `"Faculty"`      |
| `historia.json`     | `vidaEstudantil.imagem.alt` | `"Student Life"` |
| `historia.json`     | `icmc.imagem.alt`           | `"Education"`    |
| `manual-aluno.json` | `comoIngressar.imagem.alt`  | `"Campus Life"`  |

**Ação recomendada:** Substituir por descrições em português que reflitam o conteúdo real da imagem.

---

### 2.4 Imagem da seção ICMC é `icone-noticia.jpg`

O campo `icmc.imagem.src` aponta para `assets/img/education/icone-noticia.jpg` — um ícone genérico de notícias reaproveitado do template, sem relação com o ICMC.

**Ação recomendada:** Substituir por foto institucional do campus, do ICMC ou do laboratório.

---

### 2.5 CTA do hero aponta para o ICMC genérico

~~O botão "Mais Informações" na seção hero (`historia.hero.cta.href`) leva para `https://www.icmc.usp.br/` — a página inicial do ICMC, sem relação direta com o LabES.~~

**Resolvido:** CTA atualizado para a página de ingresso do PPGCCMC (`https://www.icmc.usp.br/pos-graduacao/ppgccmc/ingresso`).

---

## 3. Nomenclatura inconsistente

### 3.1 URLs das páginas em inglês (nomes de template)

| Arquivo atual | Conteúdo | URL sugerida |
|---|---|---|
| `students-life.html` | Manual do Aluno | `manual-aluno.html` |
| `news.html` | CAEd | `caed.html` |

A home exibe a seção como "Vida Estudantil", mas o nav e a página usam "Manual do Aluno" — nomes diferentes para o mesmo destino.

**Ação recomendada:** Renomear os arquivos e atualizar todas as referências em JSONs, nav e links internos. Avaliar adicionar redirecionamentos das URLs antigas para não quebrar links externos.

---

### 3.2 Item de nav "CAEd" pode ser pouco descritivo

Quem não conhece o CAEd não sabe do que se trata ao ver o item no menu.

**Ação recomendada:** Avaliar usar "CAEd / Educação" ou adicionar um subtítulo/tooltip.

---

## 4. Site legado no servidor

A URL `https://www.labes.icmc.usp.br/~selectt/home` é um portal antigo do LabES ainda ativo no servidor, hospedado de forma independente (diretório `~selectt`, via Apache `UserDir`). **Não faz parte deste repositório.**

**Ação recomendada:** Solicitar à equipe de TI do ICMC a desativação do diretório legado ou a configuração de um redirecionamento 301 para `https://www.labes.icmc.usp.br/`.

---

## 5. Licença do template BootstrapMade

O template base (College, BootstrapMade) na versão **gratuita** exige a manutenção do crédito "Template by BootstrapMade" no rodapé como condição de uso. Na versão **paga/licenciada** o crédito pode ser removido.

O crédito foi removido do rodapé nesta branch (`nav.js`).

**Ação recomendada:** Confirmar com a coordenação se o projeto possui licença comercial do template. Caso não possua, reintroduzir o crédito ou adquirir a licença antes do deploy.

---

## 6. Itens já resolvidos nesta branch

| Item | Ação tomada |
|---|---|
| 13 páginas de template não utilizadas | Removidas (`about.html`, `academics.html`, `admissions.html`, `alumni.html`, `campus-facilities.html`, `contact.html`, `event-details.html`, `events.html`, `faculty-staff.html`, `news-details.html`, `privacy.html`, `starter-page.html`, `terms-of-service.html`) |
| `Readme.txt` do template | Removido |
| 80 imagens e mídias de template | Removidas (pastas `blog/`, `person/` e arquivos avulsos de `education/`) |
| Favicon e apple-touch-icon | Substituídos pelo logo do LabES |
| Meta description da home | Adicionada em português |
| Discord no rodapé | Removido a pedido da coordenação |
| Link do Instagram | Atualizado para `instagram.com/labes.caed.icmc/` |
| Crédito "Template by BootstrapMade" | Removido do rodapé (ver seção 5 sobre licença) |
| CTA do hero (`historia.hero.cta.href`) | Atualizado para página de ingresso do PPGCCMC |

---

## 7. Propostas de melhoria (backlog)

### 7.1 Seção "Grupo Coordenador do LabES"

Atualmente não existe no site. Poderia aparecer na home ou em página dedicada, listando os professores ativos com seus papéis (coordenação, vice-coordenação, comissões).

**Dado necessário:** definir quais professores compõem o grupo coordenador e seus cargos.

---

### 7.2 Unificar fonte dos números de alunos

Atualmente os totais existem em `historia.json` (texto estático) e `stats.json` (contadores animados). Manter apenas em `stats.json` reduz a chance de desatualização.

---

### 7.3 Completar dados dos orientadores ativos

Todos os orientadores ativos, exceto a Prof. Lina, têm os campos `email`, `lattes`, `linkedin` e `orcid` vazios em `orientadores.json`.

---

### 7.4 Completar dados dos docentes históricos

Os 6 docentes históricos em `orientadores-inativos.json` estão com apenas o primeiro nome/apelido. Preencher nomes completos e demais dados disponíveis.
