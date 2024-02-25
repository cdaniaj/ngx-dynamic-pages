const fs = require('fs');

// Seu código para gerar informações
const preJson = `[
    {
        "route": /home,
        "components": [
            {
                "componentName": "my-custom-button",
                "inputs": {
                    "label": "Primary action",
                    "labelColor": "white",
                    "backgroundButton": "black"
                }
            }
        ]
    }
]`;

// Caminho do arquivo a ser gerado
const caminhoArquivo = './jsonParameterize.json';

// Escrever no arquivo
fs.writeFileSync(caminhoArquivo, preJson, 'utf-8');

console.log(`Arquivo ${caminhoArquivo} gerado com sucesso!`);