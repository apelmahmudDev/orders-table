export type Order = {
	_id: string;
	user: {
		firstName: string;
		lastName: string;
		email: string;
		phone: string;
	};
	products: {
		product: string;
		quantity: number;
		basePrice: number;
		totalPrice: number;
		discount: number;
	}[];
	totalAmount: {
		baseTotal: number;
		discount: number;
		shipping: number;
		tax: number;
		grandTotal: number;
	};
	status: string;
	shipping: {
		name: string;
		phone: string;
		address: string;
		city: string;
		postalCode: string;
		country: string;
	};
	payment: {
		paymentMethod: string;
		paymentResult: {
			id: string;
			status: string;
			update_time: string;
			email_address: string;
		};
		amount: number;
		status: string;
	};
	notes: {
		customer: string;
		admin: string;
		invoice: string;
		delivery: string;
	};
	delivery: {
		deliveryMethod: string;
		deliveryTime: string;
		deliveryCost: number;
		deliveryTrackingLink: string;
		deliveryTrackingId: string;
	};
	createdAt: string;
	updatedAt: string;
};
