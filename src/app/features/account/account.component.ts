  import { Component, inject, OnInit } from '@angular/core';
  import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
  import { AccountService } from '../../core/account.service';
import { Router } from '@angular/router';

  @Component({
    selector: 'app-account',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.css']
  })
  export class AccountComponent implements OnInit{
 
    private fb = inject(FormBuilder);
    private router = inject(Router);
    private accountService = inject(AccountService);
    userData: any = null;
    isAuth: any;

    loginForm = this.fb.group({
      userName: [''],
      password: ['']
    });

    ngOnInit(): void {
      this.checkAuthState();
    }
    
    onSubmit() {
      this.accountService.login(this.loginForm.value).subscribe({
        next: () => {
         this.isAuth =  this.accountService.getAuthState().subscribe();
         this.router.navigateByUrl('/login');
        }
      });
    } 

    fetchUserInfo() {
      this.accountService.getUserInfo().subscribe({
        next: (data) => {
          this.userData = data;
        },
        error: (err) => {
          console.error('Failed to fetch user info', err);
        }
      });
    }

    logout(){
      this.accountService.logout().subscribe({
        next: () => {
         this.isAuth = false;
         this.userData = null
         this.router.navigateByUrl('/login');
         console.log(this.isAuth + " " + this.userData)
        }
      })
    }
    private checkAuthState() {
      this.accountService.getAuthState().subscribe({
        next: (response) => {
          this.isAuth = response.isAuthenticated;       
        },
      });
    }
  }
