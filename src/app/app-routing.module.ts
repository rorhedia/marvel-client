import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ComicsComponent} from "./routes/comics/comics.component";
import {CharactersComponent} from "./routes/characters/characters.component";
import {DetailComponent} from "./routes/detail/detail.component";

const routes: Routes = [
  {path: 'comics', component: ComicsComponent},
  {path: "comic/:id", component: DetailComponent},
  {path: 'personajes', component: CharactersComponent},
  {path: "personaje/:id", component: DetailComponent},
  {path: "**", redirectTo: "/"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
