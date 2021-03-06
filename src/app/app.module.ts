import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
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
import { FooterParagraphHeaderComponent } from './components/footer/footer-paragraph-header/footer-paragraph-header.component';
import { FooterParagraphComponent } from './components/footer/footer-paragraph/footer-paragraph.component';
import { SocialMediaComponent } from './components/footer/social-media/social-media.component';
import { SubscriptionFormComponent } from './components/footer/subscription-form/subscription-form.component';
import { FooterSectionComponent } from './components/footer/footer-section/footer-section.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { ItemComponent } from './components/pages/item/item.component';

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
    FooterParagraphHeaderComponent,
    FooterParagraphComponent,
    SocialMediaComponent,
    SubscriptionFormComponent,
    FooterSectionComponent,
    CartComponent,
    ItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
