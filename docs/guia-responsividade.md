# Guia de Responsividade e Padrões de Interface — projeto_lims

> Anotações pessoais para consulta. Stack: Vue 3 + Tailwind CSS 4.
> Regra de ouro: **a interface deve REORGANIZAR, não só ENCOLHER.**

---

## 1. Princípio base: Mobile-first

No Tailwind, as classes **sem prefixo** valem para a MENOR tela. Os prefixos
(`sm:`, `md:`...) só **adicionam/sobrescrevem** para telas MAIORES.

```html
<!-- CERTO: base = mobile, vai crescendo -->
<div class="grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
  <!-- ERRADO: base = desktop (4 colunas no celular = estoura a tela) -->
  <div class="grid-cols-4 sm:grid-cols-2"></div>
</div>
```

Pergunta-teste: "como isso fica num celular de 375px?" → essa é a classe base.

---

## 2. Breakpoints do Tailwind

| Prefixo | A partir de | Dispositivo típico |
| ------- | ----------- | ------------------ |
| (base)  | 0px         | Celular            |
| `sm:`   | 640px       | Celular grande     |
| `md:`   | 768px       | Tablet             |
| `lg:`   | 1024px      | Notebook           |
| `xl:`   | 1280px      | Desktop            |
| `2xl:`  | 1536px      | Monitor grande     |

**Não repita o mesmo valor em vários breakpoints.** Se `base`, `sm` e `md` têm
o mesmo `grid-cols-2`, os dois últimos são lixo — apague.

---

## 3. Padrão de grid de cards (usar IGUAL em todas as páginas)

```html
<section
  class="grid grid-cols-1 gap-4
  sm:grid-cols-2
  lg:grid-cols-4"></section>
```

- 4 cards → no máximo `grid-cols-4` (nunca `grid-cols-5`, deixa coluna vazia).
- Progressão limpa: 1 → 2 → 4. Sem pulos esquisitos.
- `gap` no container (não margin nos filhos).

---

## 4. Tabelas responsivas (o ponto que mais pega)

`overflow-x-auto` é só um **paliativo** (rola de lado). Responsivo de verdade:

**Opção A — esconder colunas secundárias no mobile:**

```html
<th class="hidden md:table-cell">Contato</th>
<td class="hidden md:table-cell">{{ item.contato }}</td>
```

No celular mostra só ID + Nome + Status; o resto aparece a partir de `md`.

**Opção B — virar cards empilhados no mobile** (mais trabalhoso, melhor UX):
tabela normal a partir de `md`, e no mobile cada linha vira um bloco
"rótulo: valor". Use `hidden md:block` na tabela e `md:hidden` nos cards.

Regra: **nunca deixe o usuário arrastar a tabela de lado pra ver dado essencial.**

---

## 5. Tipografia e espaçamento: escala, não valores arbitrários

Evite `text-[2rem]`, `gap-12`, `text-[0.5rem]`, `p-2.25`. Use a escala:

| Em vez de       | Use                        |
| --------------- | -------------------------- |
| `text-[0.5rem]` | `text-xs` (mínimo legível) |
| `text-[0.9rem]` | `text-sm`                  |
| `text-[2rem]`   | `text-3xl`                 |
| `p-2.25`        | `p-2`                      |

Títulos podem ser **fluidos**: `text-2xl md:text-3xl lg:text-4xl`.
Valores arbitrários `[..]` só quando NÃO existe na escala e é proposital.

---

## 6. Padrões dos componentes do projeto

### Paleta (manter consistência)

- Primária: `rose` / `pink` / `fuchsia` (rosa).
- Fundo claro: `white`, `rose-50`, `violet-50`, `purple-50`.
- Texto: `rose-950`/`rose-800` (claro), cinza para descrições (`gray-600`).

### Card (status numérico)

- Mobile: empilhado (`flex flex-col`).
- Desktop: ícone ao lado do texto (`sm:flex-row sm:items-center`).
- O arranjo INTERNO também deve responder, não só a grid externa.

### Botões (componente `botoes.vue`)

- Tamanhos via prop `tipo`: pequeno / medio / grande.
- **Nunca** padding gigante fixo (`px-25`, `px-90`, `px-100`) — estoura no mobile.
- Alvo de toque mínimo no mobile: ~44px de altura (`py-2` + texto).

### Fileira de filtros

```html
<section class="flex flex-wrap gap-2"><!-- flex E flex-wrap E gap --></section>
```

### Tabela (`tabelas.vue`)

- `w-full` + esconder colunas no mobile (ver seção 4).

---

## 7. Sidebar / navegação mobile (checklist)

- [ ] Esconde no mobile, aparece no desktop: `hidden md:flex`.
- [ ] Backdrop escuro atrás quando aberta (`bg-black/40` clicável que fecha).
- [ ] Fecha sozinha ao clicar num link.
- [ ] Botão hambúrguer não cobre o cabeçalho.
- [ ] Em `:class` use **array** `[]`, nunca vírgula solta
      (`a, b, c` em JS só retorna `c` → quebra o toggle).

---

## 8. Container e largura máxima (telas grandes)

Sem limite, o conteúdo estica de ponta a ponta em monitores grandes.
Envolva o conteúdo:

```html
<main class="max-w-7xl mx-auto px-4"></main>
```

---

## 9. Áreas de toque (mobile)

Botões e links clicáveis: mínimo ~44x44px. `px-2 py-1` é pequeno demais
para dedo. Use pelo menos `px-4 py-2`.

---

## 10. Dark mode — convenções

- Ativa com a classe `.dark` no `<html>` (ver `main.css`).
- `dark:` vai em **todo elemento que pinta cor** (bg, text, border).
- Pares recomendados:

| Claro           | Escuro                  |
| --------------- | ----------------------- |
| `bg-white`      | `dark:bg-slate-900`     |
| `bg-violet-50`  | `dark:bg-slate-800`     |
| `text-rose-950` | `dark:text-slate-100`   |
| `text-gray-600` | `dark:text-gray-400`    |
| `border-black`  | `dark:border-slate-700` |

- Prefira cores **sólidas** a translúcidas (`/50`, `/36`) — translúcido "lava" o contraste.
- Persistir a escolha no `localStorage` (senão reseta ao recarregar).

---

## 11. Erros comuns (já cometidos neste projeto — conferir antes de commitar)

| Erro                              | Por quê                      | Certo                              |
| --------------------------------- | ---------------------------- | ---------------------------------- |
| `flex-wrap` sozinho               | não cria flex container      | `flex flex-wrap`                   |
| `grid-cols-4` em container `flex` | grid não funciona em flex    | use `grid` ou `flex`               |
| `xl: text-xl` (com espaço)        | o espaço quebra a classe     | `xl:text-xl` (colado)              |
| `text-md`                         | não existe no Tailwind       | `text-base`                        |
| `justify-content`                 | não é classe Tailwind        | `justify-between`/`justify-center` |
| `:class="a, b, c"`                | vírgula JS retorna só `c`    | `:class="[a, b, c]"`               |
| `grid-cols-4` base                | 4 colunas no celular estoura | base menor (`grid-cols-1/2`)       |
| `text-[0.5rem]`                   | 8px ilegível                 | `text-xs`                          |

---

## 12. Checklist final de QA responsivo

Antes de dar por pronto, abra o DevTools (F12 → modo dispositivo) e teste em:
375px (celular), 768px (tablet), 1280px (desktop), 1536px+ (monitor).

- [ ] Nada estoura horizontalmente (sem barra de rolagem lateral).
- [ ] Tabelas não exigem arrastar pra ver dado essencial.
- [ ] Textos legíveis (nada abaixo de `text-xs`).
- [ ] Cards reorganizam (não só encolhem).
- [ ] Botões cabem e são clicáveis no dedo.
- [ ] Sidebar abre/fecha bem no mobile.
- [ ] Conteúdo não estica demais no monitor grande.
- [ ] Dark mode legível em todas as telas.
