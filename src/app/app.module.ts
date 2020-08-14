import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/center-column/header/header.component';
import { ContentComponent } from './components/center-column/content/content.component';
import { FooterComponent } from './components/center-column/footer/footer.component';
import { CenterColumnComponent } from './components/center-column/center-column.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { HeaderTitleComponent } from './components/center-column/header/title/title.component';
import { HeaderMenuComponent } from './components/center-column/header/menu/menu.component';
import { HeaderCartComponent } from './components/center-column/header/cart/cart.component';
import { TilesComponent } from './components/center-column/content/tiles/tiles.component';
import { TileComponent } from './components/center-column/content/tiles/tile/tile.component';
import { TileImageComponent } from './components/center-column/content/tiles/tile/tile-image/tile-image.component';
import { TileDescriptionComponent } from './components/center-column/content/tiles/tile/tile-description/tile-description.component';
import { ProductTextComponent } from './components/center-column/content/tiles/tile/tile-description/product-text/product-text.component';
import { PriceTextComponent } from './components/center-column/content/tiles/tile/tile-description/price-text/price-text.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    CenterColumnComponent,
    HeaderTitleComponent,
    HeaderMenuComponent,
    HeaderCartComponent,
    TilesComponent,
    TileComponent,
    TileImageComponent,
    TileDescriptionComponent,
    ProductTextComponent,
    PriceTextComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
