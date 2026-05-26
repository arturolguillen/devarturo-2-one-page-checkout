import { v4 as uuidv4 } from "uuid";
import { StaticImageData } from "next/image";
import OverSizedGraphicTee from "./images/oversized-graphic-tee.png";
import CargoTechPants from "./images/cargo-tech-pants.png";

export type Product = {
    id: string;
    name: string;
    image: StaticImageData;
    description: string;
    color: string;
    size: string | number;
    quantity: number;
    price: number;
};

const products: Product[] = [
    {
        id: uuidv4(),
        name: 'Oversized Graphic Tee',
        image: OverSizedGraphicTee,
        description: 'Fotografía de alta costura de una camiseta lisa, extragrande y de algodón grueso en color negro intenso.',
        color: 'Lavado ácido negro',
        size: 'L',
        quantity: 1,
        price: 65
    },
    {
        id: uuidv4(),
        name: 'Cargo Tech Pants',
        image: CargoTechPants,
        description: 'Fotografía de estudio detallada de pantalones cargo técnicos en negro intenso.',
        color: 'Negro intenso',
        size: 32,
        quantity: 1,
        price: 140
    },
];

export default products;