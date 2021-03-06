import { Universe } from './interface';
import { INerdataOpts } from './interface';
import { Item } from './namespaces/Item';
import { Name } from './namespaces/Name';
import { Place } from './namespaces/Place';
import { Quote } from './namespaces/Quote';
import { Species } from './namespaces/Species';
export declare class Nerdata {
    static resetCache(): void;
    name: Name;
    item: Item;
    place: Place;
    species: Species;
    quote: Quote;
    _allUniverses: () => Universe[];
    private _data;
    constructor(opts?: INerdataOpts);
    _universes: () => Universe[];
    private _setup;
    private _getData;
    private _loadData;
    private _limitByExclusion;
    private _limitByInclusion;
}
