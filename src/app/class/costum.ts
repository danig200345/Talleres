import { AbstractControl, ValidationErrors } from '@angular/forms';
import { HttpClient } from '@angular/common/http'
import { catchError, map } from 'rxjs';
export class CustomValidators {
  constructor(private http: HttpClient) { }
  // Validador para el nombre de usuario
  static userName(control: AbstractControl): ValidationErrors | null {
    const user = control.value;

    if (!user || user.length < 3) {
      return { userName: 'El nombre de usuario debe tener al menos 3 caracteres.' };
    }

    return null;
  }

  // Validador para la contraseña
  static password(control: AbstractControl): ValidationErrors | null {
    const password = control.value;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~]).*$/;

    if (!password || password.length < 8 || !passwordRegex.test(password)) {
      return {
        password: 'La contraseña debe tener al menos 8 caracteres, una letra mayúscula y un símbolo especial.'
      };
    }

    return null;
  }
  static userMatch(control: AbstractControl): ValidationErrors | null {
    const user = control.value
    return null
  }


  static passwordMatch(control: AbstractControl): ValidationErrors | null {
    const password = control.value;

    catchError(() => {
      // En caso de error en la API
      return [{ passwordMatch: 'Error al verificar la contraseña.' }];
    })
    return null
  }
}
