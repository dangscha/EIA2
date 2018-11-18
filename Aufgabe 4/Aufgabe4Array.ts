namespace Aufgabe4 {
    export interface product {
        name: string;
        price: number;
    }

    export let tree: product[] = [{ name: "", price: 0},{ name: "Nordmantanne (70 Euro)", price: 70 }, { name: "Fichte (60 Euro)", price: 60 }, { name: "Plastiktanne (30 Euro)", price: 30 }];
    export let christmasBall: product[] = [{ name: "", price: 0},{ name: "Rot 10 Stueck (5 Euro)", price: 5 },{ name: "Rot 15 Stueck (7.50 Euro)", price: 7.5 },{ name: "Rot 20 Stueck (10 Euro)", price:10 }, { name: "Gold 10 Stueck (10 Euro)", price: 10 },{ name: "Gold 15 Stueck (15 Euro)", price: 15 },{ name: "Gold 20 Stueck (20 Euro)", price: 20 },  { name: "gruen 10 Stueck (4 Euro)", price: 4 },{ name: "gruen 15 Stueck (6 Euro)", price: 6 },{ name: "gruen 20 Stueck (8 Euro)", price: 8 }];
    export let lametta: product[] = [{ name: "", price: 0},{ name: "Lametta Gold 50cm (3 Euro)", price: 3 }, { name: "Lametta Gold 100cm (6 Euro)", price: 6 }, { name: "Lametta Silber 50cm (2 Euro)", price: 2 },{ name: "Lametta Silber 100cm (4 Euro)", price: 4 }, { name: "Lametta Rot 50cm (3 Euro)", price: 3 },{ name: "Lametta Rot 100cm (6 Euro)", price: 6}];
    export let holder: product[] = [{ name: "", price: 0},{ name: "Halterung Rot (20 Euro)", price: 20 }, { name: "Halterung Gruen (22 Euro)", price: 22 }];
    export let shipment: product[] = [{ name: "", price: 0},{ name: "UPS (15 Euro)", price: 15 }, { name: "DHL (12 Euro)", price: 12 }, { name: "Hermes (14 Euro)", price: 14 }];
    export let candle: product[] = [{ name: "", price: 0},{ name: "Kerzen rot (10 Euro)", price: 10 }, { name: "Kerzen elektrisch (15 Euro)", price: 15 }, { name: "Kerzen gold (9 Euro)", price: 9 }];
}