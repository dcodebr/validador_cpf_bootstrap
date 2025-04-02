# Validador de CPF com Bootstrap

Aplicativo validador de CPF construído com as tecnologias HTML, CSS, Javascript e o framework Bootstrap para os alunos dos cursos de Análise e Desenvolvimento de Sistemas e Engenharia de software da Faculdade VINCIT.

## Aula ao vivo

Você pode assistir a aula ao vivo da [Faculdade VINCIT](https://www.faculdadevincit.edu.br/) ministrada pelo Professor Esp. Alex Rocha no dia 01/04/2025.

<iframe width="560" height="315" src="https://www.youtube.com/embed/g1CyjuUxG8E?si=M_CkuBgwLZPcREFN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Dependências

Para o desenvolvimento da aplicação, foi utilizado as seguintes tecnologias com auxílio de CDN

**Bootstrap/v5.3.3**

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossorigin="anonymous"></script>
```

**jQuery/v3.7.1**

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```

**jQuery.mask/v1.14.16**

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.16/jquery.mask.min.js" integrity="sha512-pHVGpX7F/27yZ0ISY+VVjyULApbDlD0/X0rgGbTqCE7WFW5MezNTWG/dnhtbBuICzsd0WQPgpE4REBLv+UqChw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```

## Trechos principais

Destaco os trechos principais da programação do app.

**index.html**
```html
<form id="form-cpf">
    <div class="form-row has-validation">
        <label for="input-cpf">CPF</label>
        <input id="input-cpf" type="text" class="form-control" placeholder="000.000.000-00">
        <div class="invalid-feedback text-center">CPF inválido!</div>
        <div class="valid-feedback text-center">CPF válido!</div>
    </div>
    <div class="form-row mt-1">
        <input type="submit" value="validar" class="btn btn-primary w-100" id="button-addon2" />
    </div>
</form>
```

**styles.css**

```css
.container {
    margin: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
```

**scripts.js**
```javascript
function validarCpf(cpfText) {
    let cpf = cpfText.replaceAll(".", "").replaceAll("-", "");

    if (cpf.length != 11) {
        return false;
    }

    let soma = 0, resto;

    //Valida primeiro dígito
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    resto = (soma * 10) % 11;

    if (resto === 10 || resto === 11) {
        resto = 0;
    }

    if (resto !== parseInt(cpf.charAt(9))) {
        return false;
    }

    //Valida segundo dígito
    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = (soma * 10) % 11;

    if (resto === 10 || resto === 11) {
        resto = 0;
    }

    if (resto !== parseInt(cpf.charAt(10))) {
        return false;
    }

    //Valida CPFs com caracteres iguais. Ex.: 999.999.999-99
    for (let algarismo = 0; algarismo < 10; algarismo++) {
        let igual = true;
        
        for (let index = 0; index < 9; index++) {
            if (algarismo != parseInt(cpf.charAt(index))) {
                igual = false;
                break;
            }
        }

        //Encontrou um CPF com todos os algarismos iguais
        if (igual) {
            return false;
        }
    }

    return true;
}
```
---
Desenvolvido por Alex Rocha.

