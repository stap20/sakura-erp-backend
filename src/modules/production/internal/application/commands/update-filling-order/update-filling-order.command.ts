export class UpdateFillingOrderCommand {
    constructor(
        public readonly orderId: string,
        public readonly notes?: string | null,
    ) {}
}
