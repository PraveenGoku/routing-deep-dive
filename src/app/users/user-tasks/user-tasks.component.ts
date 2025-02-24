import { Component, computed, DestroyRef, inject, Input, input } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, ActivatedRouteSnapshot, ResolveFn, RouterLink, RouterOutlet, RouterStateSnapshot } from '@angular/router';

@Component({
	selector: 'app-user-tasks',
	standalone: true,
	imports: [RouterOutlet,RouterLink],
	templateUrl: './user-tasks.component.html',
	styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent {
	//Extracting Dynamic Route Parameters via Inputs
	@Input({required: true}) userId!: string;
	@Input({required: true}) userName!: string;
	// private usersService = inject(UsersService);
	// userName = 
	// 	() => this.usersService.users.find((u) => u.id === this.userId)?.name
	// ;

	//Extracting Dynamic Route Parameters via Observables
	// userName = '';
	// private activatedRoute = inject(ActivatedRoute);
	// private destroyRef = inject(DestroyRef);
	// ngOnInit(){
	// 	console.log(this.activatedRoute);
	// 	console.log(this.activatedRoute.snapshot);
	// 	const subscription = this.activatedRoute.paramMap.subscribe({
	// 		next: (paramMap) => {
	// 			this.userName = this.usersService.users.find((u) => u.id === paramMap.get('userId'))?.name || '';
	// 		},
	// 	});

	// 	this.destroyRef.onDestroy(()=> subscription.unsubscribe());
	// }
}

export const resolveUserName: ResolveFn<string> = (
	activatedRoute: ActivatedRouteSnapshot,
	routerState: RouterStateSnapshot
) => {
	const usersService = inject(UsersService);
	const userName = 
		usersService.users.find(
			(u) => u.id === activatedRoute.paramMap.get('userId')
		)?.name || '';
	return userName;
};

export const resolveTitle: ResolveFn<string> = (
	activatedRoute,
	routerState
) => {
	return resolveUserName(activatedRoute,routerState) + "'s Tasks"
};
