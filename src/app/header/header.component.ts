import { Component } from '@angular/core';

@Component({
	selector: 'app-header',
	standalone: true,
	templateUrl: './header.component.html',
	styleUrl: './header.component.css',
})
export class HeaderComponent {
	header = 'Accenture Employee Data';
	desc = 'Enterprise level task management without friction';
}
