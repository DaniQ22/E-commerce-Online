import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationEnd, Route, Router } from '@angular/router';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { login } from 'src/app/models/model.login';
import { LoginService } from 'src/app/service/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-Login-Signup',
  templateUrl: './Login-Signup.component.html',
  styleUrls: ['./Login-Signup.component.css']
})
export class LoginSignupComponent implements OnInit {

  isLoginOrSignup: boolean = false;


  formLogin!: FormGroup;
  dataLogin!: login;

  faIconUsername = faUser;
  faIconPassword = faLock;

  constructor(private service: LoginService,
    private formBulider: FormBuilder, 
    private router: Router) { }

  login() {
    console.log(this.formLogin.value);
    if (this.formLogin.valid) {
      this.dataLogin = this.formLogin.value;
      this.service.login(this.dataLogin).subscribe(res => {
        Swal.fire({
          icon: 'success',
          title: '¡Inicio de sesión exitoso!',
          text: 'Bienvenido de vuelta',
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigate(['/admin-dash']);
      }, error => {
        Swal.fire({
          icon: 'error',
          title: 'Error al iniciar sesión',
          text: 'Por favor, verifica tus credenciales e inténtalo de nuevo',
          showConfirmButton: false,
          timer: 1500
        });
      });
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Datos invalidos',
        text: 'Por favor, verifica todos los campos esten llenos',
        showConfirmButton: false,
        timer: 1500
      });
    }
  }

  signup(){
    this.router.navigate(['/signup-admin']);
  }

  ngOnInit() {
    this.formLogin = this.formBulider.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.router.events.subscribe((event)=> {
      if(event instanceof NavigationEnd){
        if(this.router.url === 'login-admin'){
          this.isLoginOrSignup = !this.isLoginOrSignup;
        }else{
          if(this.router.url === 'signup-admin'){
            this.isLoginOrSignup = !this.isLoginOrSignup;
          }
        }
      }
    });
  }
}
