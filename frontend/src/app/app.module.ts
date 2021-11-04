import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EntrarComponent } from './pags/entrar/entrar.component';

import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AreaKidsComponent } from './pags/area-kids/area-kids.component';
import { SobreComponent } from './pags/sobre/sobre.component';
import { DoacaoComponent } from './pags/doacao/doacao.component';
import { HomeComponent } from './pags/home/home.component';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routing';
import { AreaVideoComponent } from './pags/area-video/area-video.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EntrarComponent,
    AreaKidsComponent,
    SobreComponent,
    DoacaoComponent,
    HomeComponent,
    AreaVideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    RouterModule.forRoot(AppRoutes),
    MatToolbarModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
