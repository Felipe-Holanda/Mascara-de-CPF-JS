# Mascara de CPF

Como inserir uma mascara de CPF no meu input? Como faço para quando eu escrever um CPF ele adicionar um ponto no meu arquivo?

> R: Você pode  apenas pegar o arquivo `script.js` e adicioná-lo ao seu arquivo `HTML` utilizando a tag: `<script src="./script.js">`.
> No `<input>` atribua um: `id="inputCpf"` e o atributo `onkeypress="mascarar()"`
> ficando mais ou menos assim: `<input  id="inputCpf"  type="text"  maxlength="14"  placeholder="Insira o seu CPF"  onkeypress="mascarar()">`


**Feita por mim:** Felipe Holanda
<div style="">
<a title="OBS: Não é referente a trabalho!" href='http://instagram.com/felipe.nether'><img src="https://img.shields.io/badge/Instagram-purple?style=for-the-badge&logo=instagram&logoColor=white"></img></a>
<a title="OBS: Não é referente a trabalho!" href='http://twitter.com/felipe_nether'><img src="https://img.shields.io/badge/Twitter-darkblue?style=for-the-badge&logo=Twitter&logoColor=white"></img></a>
<a href='https://api.whatsapp.com/send/?phone=5599982638444&text=Ol%C3%A1%2C+gostaria+de+efetuar+um+or%C3%A7amento&app_absent=0' title="ATENÇÃO: WhatsApp para trabalho apenas."><img src="https://img.shields.io/badge/WhatsApp-darkgreen?style=for-the-badge&logo=WhatsApp&logoColor=white"></img></a>
<a href='mailto:felipe_nether@icloud.com' title="ATENÇÃO: Email para trabalho apenas."><img src="https://img.shields.io/badge/EMail-deepskyblue?style=for-the-badge&logo=gmail&logoColor=white"></img></a>
</div>

## Como eu implementei isto no código?

No HTML eu inseri uma função de 'callback', que observa o 'Document Object Module' (DOM) e atualiza o `Input` que recebe o **CPF** e adiciona os pontos e a hífen automaticamente.

Apenas ***Aninhei**** alguns `IFs` e fiz com que eles recebessem o tamanho da `string` e acrescenta os pontos e traço automaticamente!

## Exemplo em Código:

> Desta forma eu implementei os pontos e a hifen:
![Esta imagem representa o código utilizado para mascarar o CPF.](https://i.imgur.com/wbLh7c6.png)
### Se você gostou ou se interessou, sinta-se a vontade para baixar o código para editar ou estudar!

Siga-me no instagram!

FELIPE HOLANDA: <a title="OBS: Não é referente a trabalho!" href='http://instagram.com/felipe.nether'><img src="https://img.shields.io/badge/Instagram-purple?style=for-the-badge&logo=instagram&logoColor=white"></img></a>
