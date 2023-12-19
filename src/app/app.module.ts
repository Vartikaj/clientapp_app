import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminlayoutComponent } from './component/layout/adminlayout/adminlayout.component';
import { OuterlayoutComponent } from './component/layout/outerlayout/outerlayout.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/layout/adminlayout/header/header.component';
import { OuterHeaderComponent } from './component/layout/outerlayout/header/header.component';
import { FooterComponent } from './component/layout/adminlayout/footer/footer.component';
import { OuterFooterComponent } from './component/layout/outerlayout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminlayoutComponent,
    OuterlayoutComponent,
    HeaderComponent,
    FooterComponent,
    OuterHeaderComponent,
    OuterFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
