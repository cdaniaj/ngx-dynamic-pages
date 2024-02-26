const fs = require('fs');
const path = require('path');

// Seu código para gerar informações
const preJson = `[
    {
        "route": "/home",
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

// Caminho do arquivo do projeto que está instalando a biblioteca
const caminhoArquivoProjeto = path.resolve(process.cwd(), 'src/app/app.module.ts');
const importacaoBiblioteca = `import { NgxDynamicPagesModule } from 'ngx-dynamic-pages';`;

// Lê o código do projeto
const codigoProjeto = fs.readFileSync(caminhoArquivoProjeto, 'utf-8');

// Procura por uma linha que começa com "import"
const importMatch = codigoProjeto.match(/import.*;/);

// Adiciona a importação logo após a última importação encontrada
const novoCodigoProjeto = importMatch
  ? codigoProjeto.replace(importMatch[0], `${importMatch[0]}\n${importacaoBiblioteca}`)
  : codigoProjeto + `\n${importacaoBiblioteca}`;

// Escreve o novo código no arquivo do projeto
fs.writeFileSync(caminhoArquivoProjeto, novoCodigoProjeto, 'utf-8');

// Caminho do arquivo a ser gerado
const caminhoArquivo = path.resolve(process.cwd(), 'src/jsonParameterize.json');

// Escreve as informações no arquivo jsonParameterize.json
fs.writeFileSync(caminhoArquivo, preJson, 'utf-8');

console.log(`Arquivo ${caminhoArquivo} gerado com sucesso!`);
