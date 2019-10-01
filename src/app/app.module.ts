import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardData } from './card/shared/card.service';
import { CardComponent } from './card/cardcomp/card.component';
import { CardDetailComponent } from './card/cardDetail/carddetail.component';
import { CardItemComponent } from './card/cardItem/carditem.component';
import { RecipeListComponent } from './card/cardList/cardlist.component';


@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    CardItemComponent,
    CardDetailComponent,
    CardComponent

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CardData],
  bootstrap: [AppComponent]
})
export class AppModule { }
