import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {EmailverificationService} from "../../service/user/emailverification.service";
import {OtpverificationService} from "../../service/user/otpverification.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-verifyotp',
  templateUrl: './verifyotp.component.html',
  styleUrls: ['./verifyotp.component.css']
})
export class VerifyotpComponent implements OnInit {

  email: string ='';
  otp!: number ;

  constructor(private snackBar: MatSnackBar,private otpVerificationService : OtpverificationService, private mail : EmailverificationService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.email = params['email'];
    });
    this.mail.verifyEmail(this.email).subscribe()
  }

  verifyOtp(): void {
    this.otpVerificationService.verifyOtp(this.otp, this.email).subscribe(
      response => {
        this.showNotification("response"); // Display response message as notification
      },
      error => {
        this.showNotification('Error verifying OTP. Please try again.');
      }
    );
  }
  private showNotification(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000
    });
  }


}
