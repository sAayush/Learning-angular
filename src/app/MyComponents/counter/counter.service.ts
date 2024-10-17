import { Injectable } from '@angular/core'; 

@Injectable({ 

  providedIn: 'root'   // This makes the service available application-wide 

}) 
export class ProvideList{
    data(){
        return ['Angular', 'React', 'Vue'];
    }
}

export function multiply(value: number): number {
    return value * 2000;
}
