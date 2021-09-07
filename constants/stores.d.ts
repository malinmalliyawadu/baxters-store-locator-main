export declare type Region = 'Northland' | 'Waikato' | 'Auckland North' | 'Auckland West' | 'Auckland Central' | 'Auckland East' | 'Auckland South' | 'Bay of Plenty' | 'Taranaki' | 'Whanganui' | 'Manawatu' | 'Marlborough' | 'Wellington' | 'Nelson' | 'Tasman' | 'Canterbury' | 'Otago';
export interface IStoreDetails {
    name: string;
    lngLat: [number, number];
    address: string;
    locality: string;
    postcode: string;
    region: Region;
    phone?: string;
}
export declare const stores: IStoreDetails[];
export interface IMapRange {
    label: string;
    meters: number;
}
export declare const RANGES: IMapRange[];
