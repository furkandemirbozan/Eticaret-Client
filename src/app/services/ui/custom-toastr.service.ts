import { Injectable } from '@angular/core';
import exp from 'constants';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CustomToastrService {
  constructor(private toastr: ToastrService) { }
  message(message: string, title: string,toastrOptions:Partial<ToastrOptions> ) {
    this.toastr[toastrOptions.messageType](message, title,{
      positionClass:toastrOptions.position,
      timeOut: toastrOptions.timeOut || 3000,
    });
  }
}
export class ToastrOptions{
  messageType:ToastrMessageType;
  position: ToastrPosition
  timeOut?: number;
}
export enum ToastrMessageType {
  Success = "success",
  Info = "info",
  Warning = "warning",
  Error = "error"
}
export enum ToastrPosition {
  TopRight = "toast-top-right",
  BottomRight = "toast-bottom-right",
  BottomLeft = "toast-bottom-left",
  TopLeft = "toast-top-left",
  TopFullWidth = "toast-top-full-width",
  BottomFullWidth = "toast-bottom-full-width",
  TopCenter = "toast-top-center",
  BottomCenter = "toast-bottom-center"
}
