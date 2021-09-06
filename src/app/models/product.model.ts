import { Deserializable } from "./deserializable.model";

export class Product implements Deserializable{
    public id!: number;
    public type!: 'Apples & pears' | 'Citrus' | 'Stone fruit' | 'Mercedes';
    public name!: string;
    public price!: number;
    public discount!: boolean;
    public amount!: number;
    public sum?: number;

    deserialize(input: any): this {
        return Object.assign(this, input);
    }

}


