import { LoginComponent } from "./login.component";
import { LoginService } from '../../services/login.service';
import { empty, of, throwError } from "rxjs";
import { Usuario } from '../../interfaces/interfaces';

describe('LoginComponet', () => {
  let componente: LoginComponent;
  let router = jasmine.createSpyObj("Router", ["navigate"]);
  const loginService = new LoginService(null);

  beforeEach(() => {
    componente = new LoginComponent(loginService, router);
  });

  it('prueba que se llama el servicio de login', () => {
    const espia = spyOn(loginService, 'login').and.callFake((resp) => {
      return empty();
    });
    componente.submitLogin();
    expect(espia).toHaveBeenCalled;
  });


  it('prueba que se haga el login', () => {
    const usuario: Usuario = {
      auth_token: 'ssdsgerter45345',
      username: 'denys',
      photo: 'direccion'
    };
    spyOn(loginService, 'login').and.returnValue(of({ usuario }));
    componente.submitLogin();
    expect(componente.error).toBeFalsy();
  });

  it('prueba que ocurrar un error al hacer login', () => {
    spyOn(loginService, 'login').and.returnValue(throwError({ error: 'error' }));
    componente.submitLogin();
    expect(componente.error).toBeTruthy();
  });

  it('prueba la redireccion', () => {
    router.navigate.and.callFake(() => of());
  });
});