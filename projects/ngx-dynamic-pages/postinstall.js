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

// Caminho do arquivo a ser gerado
//const caminhoArquivo = './src/jsonParameterize.json';

const caminhoArquivoProjeto = path.resolve(process.cwd(), 'src/app/app.module.ts');
const importacaoBiblioteca = `import { NgxDynamicPagesModule } from 'ngx-dynamic-pages';`;

const codigoProjeto = fs.readFileSync(caminhoArquivoProjeto, 'utf-8');
const novoCodigoProjeto = codigoProjeto.replace('// Imports de bibliotecas', `${importacaoBiblioteca}\n\n// Imports de bibliotecas`);

fs.writeFileSync(caminhoArquivoProjeto, novoCodigoProjeto, 'utf-8');
//fs.writeFileSync(caminhoArquivo, preJson, 'utf-8');

//console.log(`Arquivo ${caminhoArquivo} gerado com sucesso!`);