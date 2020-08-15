import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { ShopComponent } from './components/pages/shop/shop.component';
import { HomeComponent } from './components/pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderTitleComponent } from './components/header/title/title.component';
import { HeaderMenuComponent } from './components/header/menu/menu.component';
import { HeaderCartComponent } from './components/header/cart/cart.component';
import { ContentComponent } from './components/content/content.component';
import { CenterColumnComponent } from './components/content/center-column/center-column.component';
import { TilesComponent } from './components/content/center-column/tiles/tiles.component';
import { TileComponent } from './components/content/center-column/tiles/tile/tile.component';
import { TileImageComponent } from './components/content/center-column/tiles/tile/tile-image/tile-image.component';
import { TileDescriptionComponent } from './components/content/center-column/tiles/tile/tile-description/tile-description.component';
import { ProductTextComponent } from './components/content/center-column/tiles/tile/tile-description/product-text/product-text.component';
import { PriceTextComponent } from './components/content/center-column/tiles/tile/tile-description/price-text/price-text.component';
import { ImageMatrixComponent } from './components/content/image-matrix/image-matrix.component';
import { BillboardComponent } from './components/content/billboard/billboard.component';

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
    ShopComponent,
    HomeComponent,
    ImageMatrixComponent,
    BillboardComponent,
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
