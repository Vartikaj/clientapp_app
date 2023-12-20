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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// import { MatCardModule } from '@angular/material/card';
// import { MatButtonModule} from '@angular/material/button';
// import { MatMenuModule } from '@angular/material/menu';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatIconModule } from '@angular/material/icon';
// import { MatInputModule } from '@angular/material/input';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatSelectModule } from '@angular/material/select';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

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
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    // MatFormFieldModule,
    // MatInputModule,
    // MatSelectModule,
    // MatIconModule,
    // MatToolbarModule,
    // MatMenuModule,
    // MatButtonModule,
    // MatCardModule,
    RouterModule.forRoot([])
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
