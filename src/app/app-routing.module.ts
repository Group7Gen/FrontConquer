import { CategoriaDeleteComponent } from './delete/categoria-delete/categoria-delete.component';
import { CategoriaEditComponent } from './edit/categoria-edit/categoria-edit.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { EntrarComponent } from './entrar/entrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProdutoComponent } from './produto/produto.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

// Alterar a rota de "entrar" para "inicio/ pagina principal"
{path:'', redirectTo: 'entrar', pathMatch:'full'},

{path: 'home', component: HomeComponent},

{path: 'entrar', component: EntrarComponent},

{path:'cadastrar', component: CadastrarComponent},

{path:'inicio', component: InicioComponent},

{path:'sobre-nos', component: SobreNosComponent},

{path:'categoria', component: CategoriaComponent},

{path:'produto', component: ProdutoComponent},

{path: 'categoria-edit/:id', component: CategoriaEditComponent},

{path:'categoria-delete/:id', component: CategoriaDeleteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
