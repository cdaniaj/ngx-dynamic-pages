// Caminho do arquivo a ser gerado
const caminhoArquivo = './src/jsonParameterize.json';

// Caminho do arquivo do projeto que está instalando a biblioteca
const caminhoArquivoProjeto = path.resolve(process.cwd(), 'src/app/app.module.ts');
const importacaoBiblioteca = `import { NgxDynamicPagesModule } from 'ngx-dynamic-pages';`;

// Lê o código do projeto
const codigoProjeto = fs.readFileSync(caminhoArquivoProjeto, 'utf-8');

// Adiciona a importação ao código do projeto
const novoCodigoProjeto = codigoProjeto.replace('// Imports de bibliotecas', `${importacaoBiblioteca}\n\n// Imports de bibliotecas`);

// Escreve o novo código no arquivo do projeto
fs.writeFileSync(caminhoArquivoProjeto, novoCodigoProjeto, 'utf-8');
fs.writeFileSync(caminhoArquivo, preJson, 'utf-8');

console.log(`Arquivo ${caminhoArquivo} gerado com sucesso!`);
