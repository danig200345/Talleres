import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomValidators {
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
  
  static passwordMatch(control: AbstractControl): ValidationErrors | null {
    const password = control.value;
    const confirmPasswordControl = control.get('confirmPassword');
    if (!confirmPasswordControl) {
      return { passwordMatch: 'El campo de confirmación de contraseña no se encuentra.' };
    }
    const confirmPassword = confirmPasswordControl.value;
    if (password !== confirmPassword) {
      return { passwordMatch: 'Las contraseñas no coinciden.' };
    }
    return null;
  }
}
