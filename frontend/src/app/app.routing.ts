import { Routes } from "@angular/router";
import { AreaKidsComponent } from "./pags/area-kids/area-kids.component";
import { AreaVideoComponent } from "./pags/area-video/area-video.component";
import { DoacaoComponent } from "./pags/doacao/doacao.component";
import { EntrarComponent } from "./pags/entrar/entrar.component";
import { HomeComponent } from "./pags/home/home.component";
import { SobreComponent } from "./pags/sobre/sobre.component";

export const AppRoutes: Routes = [
  {
    path:'',
    redirectTo: 'entrar',
    pathMatch: 'full'
  },
  {
    path: 'entrar',
    component: EntrarComponent
  },
  {
    path: 'area-kids',
    component: AreaKidsComponent
  },
  {
    path: 'doacao',
    component: DoacaoComponent
  },
  {
    path: 'sobre',
    component: SobreComponent
  },
  {
    path: 'area-video',
    component: AreaVideoComponent
  }
  ]