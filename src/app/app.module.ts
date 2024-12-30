import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorChangeComponent } from './color-change/color-change.component';
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';
import { ColorchangedivComponent } from './colorchangediv/colorchangediv.component';
import { ColorChangeButtonComponent } from './color-change-button/color-change-button.component';
import { LightOnOffComponent } from './light-on-off/light-on-off.component';
import { AddImageComponent } from './add-image/add-image.component';
import { FormsModule } from '@angular/forms';
import { ImageRotationComponent } from './image-rotation/image-rotation.component';
import { LikeDislikeComponent } from './like-dislike/like-dislike.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AddCardComponent } from './add-card/add-card.component';
import { AddStudentWiComponent } from './add-student-wi/add-student-wi.component';
import { AddStudentWithDeleteComponent } from './add-student-with-delete/add-student-with-delete.component';
import { CrudComponent } from './crud/crud.component';
import { FruitCardComponent } from './fruit-card/fruit-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorChangeComponent,
    ToggleButtonComponent,
    ColorchangedivComponent,
    ColorChangeButtonComponent,
    LightOnOffComponent,
    AddImageComponent,
    ImageRotationComponent,
    LikeDislikeComponent,
    AddStudentComponent,
    AddCardComponent,
    AddStudentWiComponent,
    AddStudentWithDeleteComponent,
    CrudComponent,
    FruitCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
