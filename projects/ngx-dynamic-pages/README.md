<center>
    <h1>**Dynamic Pages – Create Dynamic and Reusable SPAs with JSON**</h1>

  <br/>

  Build Single Page Applications in a fully dynamic and reusable way. Focus on the quality of your components and define their structure and content through a JSON file.
</center>

<p align="center">
  <a href="#getting-started">Getting Started</a> • 
  <a href="#how-it-works">How it works</a> • 
  <a href="#author">Author</a>
</p>

<br/>
<br/>

<p align="center">
  <a href="https://github.com/carlosDaniel128/example-dynamic-pages">Implementation Example</a>
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

# Getting Started

**1. Installation:**
<pre>npm install ngx-dynamic-pages</pre>


**2. Create a file to register your components:**

This file will return a list of components available to be consumed through the Parameterized JSON.

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


**3. Define your SPA structure with a JSON file:**

<code>json-parameterized.ts</code>
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

**4. Configure the <code>NgxDynamicPagesModule</code> with the files created:**

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

**5. Configure the root routing file with a wildcard path:**


Configure the root routing file with a wildcard path (**), that is, it accepts any URL defined in the Parameterized JSON:

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

**6. Update the <code>app.component.html</code> file with the dynamic wrapper:**

```
<ngx-dynamic-pages></ngx-dynamic-pages>
```

<br/>
<br/>
When navigating to the <code>/home</code> route configured in the JSON, the result will be:

<br/>

<img style="border-radius: 20px" src="https://i.ibb.co/vwNjj1P/image.png" width="400">


<br/>
<br/>
<br/>

# How it works
Dynamic Pages simplifies SPA development. Instead of creating individual routes for each page, you define the structure and content of your application through a JSON file.

**1. Component Registration:**

The <code>store-components.ts</code> file stores the list of components available for use in your application. Each component has an identifier (<code>key</code>) that will be used in the JSON file to reference it.

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

| Properties    | Description                                                                                                               |
| -----------   | -----------                                                                                                               |
| key           | Component identifier. Later used in <code>json-parameterized.ts</code> to be rendered on the page                         |
| component     | Component class                                                                                                           | 


<br/>
<br/>

**2. Structure Definition:**  

The <code>json-parameterized.ts</code> file defines the structure of your SPA. It contains a list of routes, where each route defines the components to be displayed and their respective parameters.

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

| Properties            | Description                                                                                   |
| -----------           | -----------                                                                                   |
| route                 | Path accessed in the browser URL, e.g., localhost:4200/home                                  |
| components            | List of components to be created on the page                                                  | 
| componentName         | Component identifier, same value registered in <code>store-components.ts</code>               |
| inputs                | Component input data                                                                          |

<br/>
<br/>

**3. Dynamic Routing:**

The <code>NgxDynamicPagesComponent</code>, configured with a wildcard path (<code>**</code>) in the <code>app-routing.module.ts</code> file, intercepts all routes defined in the JSON file. It then uses the JSON information to create the corresponding components with the specified parameters.

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

**4. Ghost Wrapper**:

In the <code>app.component.html</code> file we have the following code:

```
<ngx-dynamic-pages></ngx-dynamic-pages>
```
Which serves as an entry point for the dynamically created components. Very similar to <code>router-outlet</code>

<br/>
<br/>
<br/>


# Author

Carlos Daniel &nbsp;&nbsp;• &nbsp;&nbsp;Software Engineer  &nbsp;&nbsp;• &nbsp;&nbsp;AI enthusiast


<pre>
"Good logic helps us solve problems in our lives, but feelings, perceptions and love help solve what we cannot