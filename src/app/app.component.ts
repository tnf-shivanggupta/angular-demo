import { Component, ElementRef, OnInit  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	constructor(private el: ElementRef) { 
	}
	textFieldValidator = {
		pattern: "abc",
		errorMessage: "Please enter abc",
		successMessage: "Success"
	}
	navItems = [
		{id:"home", label: "Home", icon: "home", selected: true},
		{id:"person", label: "Account", icon: "person"},
		{id:"settings", label: "Settings", icon: "settings"}
	];
	title = 'angular-demo';
	user = {
		name: "Shivang",
		avatar: "/assets/images/photo.jpeg"
	}
	actions = [
		{
			icon: "notifications",
			alt: "View Notifications",
			event: "view_notifications",
		},
		{
			icon: "shopping_cart_checkout",
			alt: "View Basket",
			event: "view_basket",
		}
	]
	ngOnInit(){
		// const btn: Element = this.el.nativeElement.querySelector("#tnf-btn-primary")
		// btn.addEventListener("tnfBtnClicked", () => {alert("Primary btn clicked")})
		this.actions.forEach(action => {
			this.el.nativeElement.querySelector("#tnf-header").addEventListener(action.event, (e: Event & {detail: any})=>{
				alert(JSON.stringify(e.detail))
			})
		})

	}

	handleClick = () => {
		alert("Hello from tnf-button")
	}

	textFieldChanged = (e: any) => {
		console.log(e)
	}
}
