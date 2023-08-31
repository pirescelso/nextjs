export type BetterProps = {
    name: string;
}

export class Better {
    name: string;
    constructor(props: BetterProps) {
        this.name = props.name;
    }
}