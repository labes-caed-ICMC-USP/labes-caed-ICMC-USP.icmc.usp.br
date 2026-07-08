# LabES Website

## O que e

Site institucional do LabES, com paginas de apresentacao do laboratorio, oportunidades, eventos, noticias, orientadores, manual do aluno e conteudo relacionado ao CAEd.

## Tecnologias

- HTML5
- CSS3
- JavaScript
- Bootstrap 5
- PHP simples para entrada alternativa e formulario
- Bibliotecas front-end em `assets/vendor`

## Arquivos principais

- `index.html`: pagina principal.
- `index.php`: entrada alternativa servindo o conteudo HTML.
- `students-life.html`: pagina do Manual do Aluno.
- `news.html`: pagina relacionada ao CAEd.
- `orientador.html` e `orientadores.html`: paginas de orientacao/orientadores.
- `assets/`: imagens, estilos, scripts e bibliotecas.
- `forms/contact.php`: endpoint do formulario.

## Como executar

Servidor PHP embutido:

```powershell
php -S localhost:8000
```

Servidor estatico para revisar HTML/CSS:

```powershell
python -m http.server 8000
```

## Observacoes

- O formulario depende de biblioteca PHP de envio de e-mail e configuracao real de destinatario.
- Revisar textos herdados do template antes de publicar.
- Manter documentacao de alteracoes em `docs/` para facilitar continuidade.

