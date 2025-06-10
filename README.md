# CodeOfLove 💻❤️

## Descrição

Olá! Se você está aqui, provavelmente se deparou com o título intrigante deste post e está se perguntando sobre o que se trata essa loucura, certo? 😄 Não se preocupe, se estivesse no seu lugar, também faria a mesma pergunta. Mas, aqui vai uma pergunta para você: já pensou em sair da frente da tela do computador para pedir a pessoa amada em namoro? 😏

Bem, claro que para isso você não precisa sair da frente do seu PC. E é por isso que estamos aqui!

O software abaixo é simples, mas o que realmente importa é a intenção, hehe 😊. Você pode personalizá-lo ainda mais, deixando-o do jeito que preferir, então a imaginação é o limite!

**Repositório para baixar os arquivos:** [Clique aqui ](https://github.com/devpit/CodeOfLove)

**Resultado:** [CodeOfLove 💻❤️](https://codeoflove.netlify.app)

![Resultado](https://codeoflove.netlify.app/assets/img/carousel/img-2.png)

## Personalização

Se desejar personalizar a experiência, você pode modificar o código-fonte facilmente. Os principais pontos de interesse estão na manipulação do botão e na animação.

```javascript
// Trecho de código para animar o botão (JavaScript)
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".no");
  let position = 0;
  let isAnimating = false;

  function moveButton() {
    if (!isAnimating) {
      isAnimating = true;
      position = position === 0 ? -120 : 0; 
      btn.style.transform = `translateY(${position}px)`;
      btn.style.transition = "all 0.2s ease";

      setTimeout(() => {
        isAnimating = false;
      }, 200);
    }
  }

  btn.addEventListener("click", moveButton);
  btn.addEventListener("mouseover", moveButton);
});
```

### Tem mais uma coisinha que não contei antes, com este código JS vai ser um pouco difícil ela recusar, pois ele não permite que o mouse fique em cima do botão nem que seja clicado, caso o usuário seja mobile hehe 🤠.

# alert('Abraço!');

**Repositório para baixar os arquivos:** [Clique aqui ](https://github.com/devpit/CodeOfLove)

**Resultado:** [CodeOfLove 💻❤️](https://codeoflove.netlify.app)
