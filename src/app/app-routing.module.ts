import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokelistComponent } from './pokelist/pokelist.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component'

const routes: Routes = [
    { path: 'Pokemons', component: PokelistComponent },
    { path: 'Pokemon/:id', component: PokemonDetailsComponent},
    { path: '', redirectTo: 'Pokemons', pathMatch: 'full' },    
    { path: '404', component: NotFoundComponentComponent },
    { path: '**', redirectTo: '/404', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
