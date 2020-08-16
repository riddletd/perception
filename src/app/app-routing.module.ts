import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ShopComponent } from './components/pages/shop/shop.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { ItemComponent } from './components/pages/item/item.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'shop',
    component: ShopComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'item/:id',
    component: ItemComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
