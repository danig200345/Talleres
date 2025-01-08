import { AbstractControl } from "@angular/forms";
import { AuthService } from "../services/auth.service";
import { catchError, map, of } from "rxjs";

export class AsyncValidators {
  static userExists(auth: AuthService) {
    return (control: AbstractControl) => {
      return auth.Valid(control.value).pipe(
        map(() => true),
        catchError(exists => {
          return of(exists ? { userExists: 'El usuario ya existe' } : null);
        })
      );

    }
  }
}
