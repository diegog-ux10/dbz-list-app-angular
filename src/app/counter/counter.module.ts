import { NgModule } from "@angular/core";
import { CounterComponent } from './components/counter/counter.component';
import { ListComponent } from "../heroes/components/list/list.component";

@NgModule({
    declarations: [
        CounterComponent
    ],
    exports: [
        CounterComponent
    ]
}) 
export class CounterModule {}