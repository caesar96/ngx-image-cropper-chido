import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ImageCropperModule } from './image-cropper/image-cropper.module';

import { AppComponent } from './app.component';
import { NgxHelloComponent } from './hello/hello.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ImageCropperModule ],
  declarations: [ AppComponent, NgxHelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
