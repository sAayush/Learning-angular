import { Component, Input} from "@angular/core";
import { multiply, ProvideList } from "./counter.service";

@Component({
    standalone: true,
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.css'],
})export default class CounterComponent {
    title = 'Counter Component';
    @Input({required: false, transform: multiply}) count: number = 0;

    anotherlist: string[] = [];
    constructor(private providedlist: ProvideList){
        this.anotherlist = providedlist.data();
    }
}