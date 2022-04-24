import { Injectable, OnInit } from "@angular/core";

declare let toastr: any;

@Injectable()
export class ToastService implements OnInit {

  ngOnInit(): void {
    toastr.options = {
      "closeButton": false,
      "debug": false,
      "newestOnTop": true,
      "progressBar": true,
      "positionClass": "toast-top-right",
      "preventDuplicates": false,
      "onclick": null,
      "showDuration": "300",
      "hideDuration": "1000",
      "timeOut": "5000",
      "extendedTimeOut": "1000",
      "showEasing": "swing",
      "hideEasing": "linear",
      "showMethod": "fadeIn",
      "hideMethod": "fadeOut"
    };
  }

  success(message: string , title?: string) {
    toastr.success();
  }

  info(message: string, title?: string) {
    toastr.info();
  }

  warning(message: string, title?: string) {
    toastr.warning();
  }

  error(message: string, title?: string) {
    toastr.error();
  }
}
