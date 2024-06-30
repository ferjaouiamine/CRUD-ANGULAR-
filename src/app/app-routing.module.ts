import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyFirstCampComponent } from './my-first-camp/my-first-camp.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { NewproductComponent } from './newproduct/newproduct.component';

const routes: Routes = [
  {
    path:'home',
    component:MyFirstCampComponent
  },
  {
    path:'about',
    component:AboutComponent

  }, {
    path:'about/:username',
    component:AboutComponent

  },
  {
    path:'products',
    component:ProductsComponent

  },{
    path:'newproduct',
    component:NewproductComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
