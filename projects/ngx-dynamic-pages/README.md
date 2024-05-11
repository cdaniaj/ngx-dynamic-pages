
<center>
    <h1>Dynamic Pages - Crie SPAs Dinâmicas e Reutilizáveis com JSON</h1>

  <br/>

  Construa Single Page Applications de forma totalmente dinâmica e reutilizável. Concentre-se na qualidade dos seus componentes e defina sua estrutura e conteúdo através de um arquivo JSON.
</center>

<p align="center">
  <a href="#primeiros-passos">Primeiros passos</a> • 
  <a href="#como-funciona">Como funciona</a> • 
  <a href="#autor">Autor</a>
</p>


<br/>
<br/>
<br/>


# Status

![Static Badge](https://img.shields.io/badge/npm-_v8.19.2-blue)
![Static Badge](https://img.shields.io/badge/license-_MIT-green)
![Static Badge](https://img.shields.io/badge/TypeScript-_4.9.4-blue)
![Static Badge](https://img.shields.io/badge/Angular-_15-red)

<br/>
<br/>

# Primeiros passos

**1. Instalação:**
<pre>npm install ngx-dynamic-pages</pre>


**2. Crie um arquivo para registrar seus componentes:**

Este arquivo retornará uma lista de componentes disponíveis para serem consumidos através do JSON Parametrizado.

<code>store-components.ts</code>

<pre>
import { ContentComponent } from "../components/content/content.component";
import { FooterComponent } from "../components/footer/footer.component";
import { HeaderComponent } from "../components/header/header.component";

export const components = [
    {
        key: 'header',
        component: HeaderComponent
    },
    {
        key: 'content',
        component: ContentComponent
    },
    {
        key: 'footer',
        component: FooterComponent
    }
];
</pre>

<br/>
<br/>


**3. Defina a estrutura da sua SPA com um arquivo JSON:**

<code>json-parametrizado.ts</code>
<pre>
import { IJsonParameterize } from "ngx-dynamic-pages";

export const json: IJsonParameterize[] = [
    {
        "route": "/home",
        "components": [
            {
                "componentName": "header",
                "inputs": {
                    "title": "Header component",
                    "titleColor": "white",
                    "bgColor": "black",
                    "padding": "10px"
                }
            },
            {
                "componentName": "content",
                "inputs": {
                    "height": "500px",
                    "bgColor": "purple"
                }
            },
            {
                "componentName": "footer",
                "inputs": {
                    "height": "100px",
                    "bgColor": "blue", 
                    "description": "I am footer component"
                }
            }
        ]
    }
]
</pre>


<br/>
<br/>

**4. Configure o módulo <code>NgxDynamicPagesModule</code> com os arquivos criados:**

<pre>
@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NgxDynamicPagesModule.forRoot(
      {
        jsonParameterize: json,
        storeComponents: components
      } as IDynamicPagesConfig
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
</pre>

<br/>
<br/>

**5. Configure o roteamento raiz com um path coringa:**


Configurar o arquivo de roteamento raiz com um path coringa (**), isto é, aceita qualquer url definida no JSON Parametrizado:

<pre>
import { NgxDynamicPagesComponent } from 'ngx-dynamic-pages';

const routes: Routes = [
  {
    path: "**",
    component: NgxDynamicPagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
</pre>

<br/>
<br/>

<br/>
<br/>

**6. Atualize o arquivo <code>app.component.html</code> com o wrapper dinâmico:**

```
<ngx-dynamic-Pages></ngx-dynamic-Pages>

```



<br/>
<br/>
Ao navegarmos para a rota <code>/home</code>, configurada no json, o resultado será:

<br/>

<img style="border-radius: 20px" src="https://i.ibb.co/vwNjj1P/image.png" width="400">


<br/>
<br/>
<br/>

# Como funciona
Dynamic Pages simplifica o desenvolvimento de SPAs. Ao invés de criar rotas individuais para cada página, você define a estrutura e o conteúdo da sua aplicação através de um arquivo JSON.

**1. Registro de Componentes:**

O arquivo <code>store-components.ts</code> armazena a lista de componentes disponíveis para uso na sua aplicação. Cada componente possui um identificador (<code>key</code>) que será utilizado no arquivo JSON para referenciá-lo.

<pre>
export const components = [
    {
        key: 'header',
        component: HeaderComponent
    },
    {
        key: 'content',
        component: ContentComponent
    },
    {
        key: 'footer',
        component: FooterComponent
    }
];
</pre>

| Propriedades  | Descrição                                                                                                               |
| -----------   | -----------                                                                                                             |
| key           | Identificador do componente. Usado posteriormente no <code>json-parametrizado.ts</code> para ser renderizado na página  |
| component     | Classe do componente                                                                                                    | 


<br/>
<br/>

**2. Definição da Estrutura:**  

O arquivo <code>json-parametrizado.ts</code> define a estrutura da sua SPA. Ele contém uma lista de rotas, onde cada rota define os componentes a serem exibidos e seus respectivos parâmetros.

<pre>
  [
    {
      "route": "/home",
      "components": [
        {
          "componentName": "header",
          "inputs": {
            "title": "Any title to my header"
          }
        }
      ]
    }
  ]
</pre>

| Propriedades          | Descrição                                                                                   |
| -----------           | -----------                                                                                 |
| route                 | Path que acessamos na url do navegador, ex: localhost:4200/home                         |
| components            | Lista de componentes que serão criados na página                                            | 
| componentName         | Identificador do componente, o mesmo valor registrado em <code>store-components.ts</code>   |
| inputs                | Dados de entrada do componente                                                              |

<br/>
<br/>

**3. Roteamento Dinâmico:**

O componente <code>NgxDynamicPagesComponent</code>, configurado com um path coringa (<code>**</code>) no arquivo <code>app-routing.module.ts</code>, intercepta todas as rotas definidas no arquivo JSON. Ele então utiliza as informações do JSON para criar os componentes correspondentes, com os parâmetros especificados.

<pre>
const routes: Routes = [
  {
    path: "**",
    component: NgxDynamicPagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
</pre>

<br/>
<br/>

**4. Wrapper fantasma**:

No arquivo <code>app.component.html</code> temos o seguinte código:

```
<ngx-dynamic-pages></ngx-dynamic-pages>
```
No qual consiste em um ponto de entrada para os componentes criados dinâmicamente. Muito parecido com o <code>router-outlet</code>

<br/>
<br/>
<br/>


# Autor

Carlos Daniel &nbsp;&nbsp;• &nbsp;&nbsp;Software Engineer  &nbsp;&nbsp;• &nbsp;&nbsp;AI enthusiast


<pre>
"Good logic helps us solve problems in our lives, but feelings, perceptions and love help solve what we cannot with logic."
</pre>