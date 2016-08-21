import { Component } from 'angular2/core';

@Component({
    selector: 'portfolio-app',
    template:`
    <div>
        <h1>{{pageTitle}}</h1>
        <div>Basic Component</div>
    </div>
    `
})

export class AppComponent {
    pageTitle: string = 'Cassie Lier Portfolio';
}
